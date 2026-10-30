import { NextResponse } from "next/server";

export const runtime = "nodejs";

type RsvpPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  location?: unknown;
  arrivalDate?: unknown;
  attendance?: unknown;
  partySize?: unknown;
  note?: unknown;
  company?: unknown;
};

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function errorResponse(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  let payload: unknown;

  let emailConfirmationSent = false;

  try {
    payload = await request.json();
  } catch {
    return errorResponse("Please check your reply and try again.", 400);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return errorResponse("Please check your reply and try again.", 400);
  }
  const body = payload as RsvpPayload;

  // A quiet success keeps simple bots from learning whether the form was stored.
  if (asText(body.company)) {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const name = asText(body.name);
  const email = asText(body.email).toLowerCase();
  const phone = asText(body.phone);
  const location = asText(body.location);
  const arrivalDate = asText(body.arrivalDate);
  const attendance = asText(body.attendance);
  const note = asText(body.note);
  const partySizeValue = asText(body.partySize);

  if (name.length < 2 || name.length > 120) {
    return errorResponse("Please enter your name.", 400);
  }
  if (email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return errorResponse("Please enter a valid email address.", 400);
  }
  if (phone.length > 40 || (!email && !phone)) {
    return errorResponse("Please provide an email address or phone number.", 400);
  }
  if (location.length > 160) {
    return errorResponse("Please shorten your location to 160 characters or fewer.", 400);
  }
  if (attendance !== "yes" && attendance !== "no") {
    return errorResponse("Please choose an attendance response.", 400);
  }
  if (attendance === "yes" && !isValidDate(arrivalDate)) {
    return errorResponse("Please enter your expected arrival date.", 400);
  }
  if (note.length > 1000) {
    return errorResponse("Please shorten your note to 1,000 characters or fewer.", 400);
  }

  const partySize = attendance === "yes" ? Number(partySizeValue) : 0;
  if (attendance === "yes" && (!Number.isInteger(partySize) || partySize < 1 || partySize > 10)) {
    return errorResponse("Please choose a guest count from 1 to 10.", 400);
  }

  const endpoint = process.env.GOOGLE_SHEETS_RSVP_URL;
  const secret = process.env.GOOGLE_SHEETS_RSVP_SECRET;
  if (!endpoint || !secret) {
    return errorResponse("The RSVP form is not connected yet. Please contact the couple directly for now.", 503);
  }

  try {
    const destination = new URL(endpoint);
    if (destination.protocol !== "https:") {
      return errorResponse("The RSVP form connection is not configured securely.", 503);
    }

    const response = await fetch(destination, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        name,
        email,
        phone,
        location,
        arrivalDate,
        attendance: attendance === "yes" ? "Accepts" : "Declines",
        partySize,
        note,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
    const result = (await response.json()) as { ok?: boolean; emailConfirmationSent?: boolean };

    if (!response.ok || !result.ok) {
      return errorResponse("We couldn’t save your reply just now. Please try again in a moment.", 502);
    }
    emailConfirmationSent = result.emailConfirmationSent === true;
  } catch {
    return errorResponse("We couldn’t connect to the RSVP sheet just now. Please try again in a moment.", 502);
  }

  return NextResponse.json({ ok: true, emailConfirmationSent }, { headers: { "Cache-Control": "no-store" } });
}

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
