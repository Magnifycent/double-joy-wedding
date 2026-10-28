function doGet() {
  return json_({ ok: true, message: "The Double Joy RSVP endpoint is ready." });
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
    const attendance = submitted.attendance === "Accepts" ? "Accepts" :
      submitted.attendance === "Declines" ? "Declines" : "";
    const note = cleanText_(submitted.note, 1000);
    const partySize = Number(submitted.partySize);

    if (name.length < 2 || !attendance || (!email && !phone) ||
        !Number.isInteger(partySize) || partySize < 0 || partySize > 10 ||
        (attendance === "Accepts" && partySize < 1) ||
        (attendance === "Declines" && partySize !== 0)) {
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
        sheet.appendRow(["Submitted at", "Name", "Email", "Phone", "Response", "Party size", "Note"]);
        sheet.setFrozenRows(1);
      }

      sheet.appendRow([
        new Date(),
        safeCell_(name),
        safeCell_(email),
        safeCell_(phone),
        attendance,
        partySize,
        safeCell_(note),
      ]);
    } finally {
      lock.releaseLock();
    }

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "Could not save this RSVP." });
  }
}

function cleanText_(value, maximumLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maximumLength);
}

function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
