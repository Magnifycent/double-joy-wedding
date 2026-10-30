function doGet() {
  return json_({ ok: true, message: "The Double Joy RSVP endpoint is ready." });
}

// Run this once from the Apps Script editor to authorize confirmation emails.
// It checks the available quota but does not send an email.
function authorizeEmailSending() {
  return MailApp.getRemainingDailyQuota();
}

function doPost(event) {
  try {
    const submitted = JSON.parse(event.postData.contents || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("RSVP_SHARED_SECRET");

    if (!expectedSecret || submitted.secret !== expectedSecret) {
      return json_({ ok: false, error: "Unauthorized" });
    }

    const name = cleanText_(submitted.name, 120);
    const email = cleanText_(submitted.email, 254);
    const phone = cleanText_(submitted.phone, 40);
    const location = cleanText_(submitted.location, 160);
    const arrivalDate = cleanText_(submitted.arrivalDate, 10);
    const attendance = submitted.attendance === "Accepts" ? "Accepts" :
      submitted.attendance === "Declines" ? "Declines" : "";
    const note = cleanText_(submitted.note, 1000);
    const partySize = Number(submitted.partySize);

    if (name.length < 2 || !attendance || (!email && !phone) ||
        (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
        !Number.isInteger(partySize) || partySize < 0 || partySize > 10 ||
        (attendance === "Accepts" && partySize < 1) ||
        (attendance === "Accepts" && !isValidDate_(arrivalDate)) ||
        (attendance === "Declines" && (partySize !== 0 || arrivalDate))) {
      return json_({ ok: false, error: "Invalid RSVP" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      if (!spreadsheet) throw new Error("The RSVP script is not bound to its spreadsheet.");

      let sheet = spreadsheet.getSheetByName("RSVP");
      if (!sheet) sheet = spreadsheet.insertSheet("RSVP");
      if (sheet.getLastRow() === 0) {
        sheet.getRange(1, 1, 1, 9).setValues([[
          "Submitted at", "Name", "Email", "Phone", "Response", "Party size", "Note", "Location", "Arrival date",
        ]]);
        sheet.setFrozenRows(1);
      } else {
        const headerWidth = Math.max(sheet.getLastColumn(), 1);
        let headers = sheet.getRange(1, 1, 1, headerWidth).getValues()[0];
        if (!headers.includes("Location")) {
          sheet.getRange(1, sheet.getLastColumn() + 1).setValue("Location");
          headers = headers.concat(["Location"]);
        }
        if (!headers.includes("Arrival date")) {
          sheet.getRange(1, sheet.getLastColumn() + 1).setValue("Arrival date");
          headers = headers.concat(["Arrival date"]);
        }
      }

      const rowByHeader = {
        "Submitted at": new Date(),
        Name: safeCell_(name),
        Email: safeCell_(email),
        Phone: safeCell_(phone),
        Response: attendance,
        "Party size": partySize,
        Note: safeCell_(note),
        Location: safeCell_(location),
        "Arrival date": arrivalDate,
      };
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      sheet.appendRow(headers.map(function (header) {
        return Object.prototype.hasOwnProperty.call(rowByHeader, header) ? rowByHeader[header] : "";
      }));
    } finally {
      lock.releaseLock();
    }

    let emailConfirmationSent = false;
    if (email) {
      try {
        sendConfirmationEmail_(name, email, attendance);
        emailConfirmationSent = true;
      } catch (emailError) {
        console.error("RSVP email confirmation could not be sent.", emailError);
      }
    }

    return json_({ ok: true, emailConfirmationSent });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "Could not save this RSVP." });
  }
}

function cleanText_(value, maximumLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maximumLength);
}

function isValidDate_(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T00:00:00.000Z");
  return !isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function sendConfirmationEmail_(name, email, attendance) {
  const accepted = attendance === "Accepts";
  const calendarUrl = calendarUrl_();
  const safeName = escapeHtml_(name);
  const subject = "Your Double Joy wedding RSVP is received";
  const safeCalendarUrl = escapeHtml_(calendarUrl);
  const body = accepted
    ? "Dear " + name + ",\n\nThank you for joyfully accepting our invitation. Your RSVP has been received. We look forward to celebrating with you on Saturday, 12 December 2026.\n\nThe wedding day schedule and venue details are included in the attached calendar file. You can also add the day to Google Calendar here: " + calendarUrl + "\n\nWith love,\nJoy & Ayoola"
    : "Dear " + name + ",\n\nThank you for letting us know. Your RSVP has been recorded, and we are grateful you took the time to reply.\n\nWith love,\nJoy & Ayoola";
  const htmlBody = accepted
    ? "<div style=\"font-family:Georgia,serif;color:#263b31;line-height:1.8\"><p>Dear " + safeName + ",</p><p>Thank you for joyfully accepting our invitation. Your RSVP has been received. We look forward to celebrating with you on <strong>Saturday, 12 December 2026</strong>.</p><p>The wedding day schedule and venue details are in the attached calendar file. You can also add the day to Google Calendar:</p><p><a href=\"" + safeCalendarUrl + "\" style=\"color:#176044\">Add to Google Calendar</a></p><p>With love,<br>Joy &amp; Ayoola</p></div>"
    : "<div style=\"font-family:Georgia,serif;color:#263b31;line-height:1.8\"><p>Dear " + safeName + ",</p><p>Thank you for letting us know. Your RSVP has been recorded, and we are grateful you took the time to reply.</p><p>With love,<br>Joy &amp; Ayoola</p></div>";
  const mail = { to: email, subject: subject, body: body, htmlBody: htmlBody, name: "Double Joy Wedding" };

  if (accepted) {
    mail.attachments = [Utilities.newBlob(calendarInvite_(), "text/calendar", "Double-Joy-Wedding.ics")];
  }

  MailApp.sendEmail(mail);
}

function calendarUrl_() {
  const details = "Church Wedding: 9:00 AM at Deeper Life Bible Church Regional Headquarters, Obehira Road, Okene, Kogi State. Reception: 12:00 Noon at Zigi's Event Center, Opp. Afims Hotels, Obehira Road, Okene.";
  return "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent("Joy & Ayoola's Wedding Celebration") +
    "&dates=20261212/20261213" +
    "&details=" + encodeURIComponent(details) +
    "&location=" + encodeURIComponent("Okene, Kogi State, Nigeria");
}

function calendarInvite_() {
  const stamp = Utilities.formatDate(new Date(), "UTC", "yyyyMMdd'T'HHmmss'Z'");
  const description = "Church Wedding: 9:00 AM at Deeper Life Bible Church Regional Headquarters, Obehira Road, Okene, Kogi State.\nReception: 12:00 Noon at Zigi's Event Center, Opp. Afims Hotels, Obehira Road, Okene.";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Double Joy//Wedding Celebration//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:" + Utilities.getUuid() + "@double-joy-wedding",
    "DTSTAMP:" + stamp,
    "DTSTART;VALUE=DATE:20261212",
    "DTEND;VALUE=DATE:20261213",
    "SUMMARY:" + escapeIcs_("Joy & Ayoola's Wedding Celebration"),
    "DESCRIPTION:" + escapeIcs_(description),
    "LOCATION:" + escapeIcs_("Okene, Kogi State, Nigeria"),
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function escapeHtml_(value) {
  return value.replace(/[&<>\"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character];
  });
}

function escapeIcs_(value) {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
