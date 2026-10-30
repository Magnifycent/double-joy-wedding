"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormState = "idle" | "sending" | "success" | "error";

const calendarDetails =
  "Church Wedding: 9:00 AM at Deeper Life Bible Church Regional Headquarters, Obehira Road, Okene, Kogi State. Reception: 12:00 Noon at Zigi's Event Center, Opp. Afims Hotels, Obehira Road, Okene.";
const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Joy & Ayoola's Wedding Celebration")}&dates=20261212/20261213&details=${encodeURIComponent(calendarDetails)}&location=${encodeURIComponent("Okene, Kogi State, Nigeria")}`;

const inputClass =
  "mt-2 w-full border-b border-[#176044]/35 bg-transparent px-0 py-3 text-sm text-[#263b31] outline-none transition placeholder:text-[#7b857f] focus:border-[#b28a3e] focus:ring-0";

export default function RsvpForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [submittedAttendance, setSubmittedAttendance] = useState<"yes" | "no">("yes");
  const [emailStatus, setEmailStatus] = useState<"sent" | "failed" | "not-provided">("not-provided");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      attendance: String(formData.get("attendance") ?? "yes"),
      partySize: String(formData.get("partySize") ?? "1"),
      note: String(formData.get("note") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string; emailConfirmationSent?: boolean };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "We couldn’t save your reply. Please try again.");
      }

      setState("success");
      setSubmittedAttendance(payload.attendance === "no" ? "no" : "yes");
      setEmailStatus(payload.email ? (result.emailConfirmationSent ? "sent" : "failed") : "not-provided");
      form.reset();
      setAttendance("yes");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We couldn’t save your reply. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <label className="block text-[9px] uppercase tracking-[0.18em] text-[#176044] sm:col-span-2">
          Full name <span aria-hidden="true" className="text-[#70263a]">*</span>
          <input
            className={inputClass}
            type="text"
            name="name"
            autoComplete="name"
            maxLength={120}
            required
            placeholder="Your name"
          />
        </label>
        <label className="block text-[9px] uppercase tracking-[0.18em] text-[#176044]">
          Email address <span className="normal-case tracking-normal text-[#68756c]">(optional, for confirmation)</span>
          <input
            className={inputClass}
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
        <label className="block text-[9px] uppercase tracking-[0.18em] text-[#176044]">
          Phone number
          <input
            className={inputClass}
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength={40}
            placeholder="Your phone number"
          />
        </label>
      </div>
      <p className="-mt-5 text-xs leading-5 text-[#68756c]">Please provide an email address or phone number. If you include an email, we’ll send a confirmation.</p>

      <label className="block text-[9px] uppercase tracking-[0.18em] text-[#176044]">
        Where are you travelling from? <span className="normal-case tracking-normal text-[#68756c]">(optional)</span>
        <input
          className={inputClass}
          type="text"
          name="location"
          autoComplete="address-level2"
          maxLength={160}
          placeholder="City, state or country"
        />
      </label>

      <fieldset>
        <legend className="text-[9px] uppercase tracking-[0.18em] text-[#176044]">Will you be attending?</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <AttendanceOption
            value="yes"
            checked={attendance === "yes"}
            onChange={() => setAttendance("yes")}
            title="Joyfully accept"
            description="We look forward to celebrating with you."
          />
          <AttendanceOption
            value="no"
            checked={attendance === "no"}
            onChange={() => setAttendance("no")}
            title="Regretfully decline"
            description="We’ll be celebrating with you in spirit."
          />
        </div>
        <input type="hidden" name="attendance" value={attendance} />
      </fieldset>

      {attendance === "yes" && (
        <label className="block max-w-xs text-[9px] uppercase tracking-[0.18em] text-[#176044]">
          Number attending, including you
          <select className={inputClass} name="partySize" defaultValue="1">
            {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>{count}</option>
            ))}
          </select>
        </label>
      )}

      <label className="block text-[9px] uppercase tracking-[0.18em] text-[#176044]">
        A note for the couple <span className="normal-case tracking-normal text-[#68756c]">(optional)</span>
        <textarea
          className={`${inputClass} min-h-24 resize-y`}
          name="note"
          rows={3}
          maxLength={1000}
          placeholder="Add a note or the names of guests in your party"
        />
      </label>

      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label>
          Leave this field empty
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "sending"}
          className="min-w-44 border border-[#70263a] bg-[#70263a] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition hover:border-[#176044] hover:bg-[#176044] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e] disabled:cursor-wait disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send our reply"}
        </button>
        {state === "error" && <p aria-live="assertive" role="alert" className="text-sm leading-6 text-[#70263a]">{message}</p>}
      </div>
      <p className="text-[10px] leading-5 text-[#68756c]">Your details will be used only to organize the wedding and follow up about your reply.</p>

      {state === "success" && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#17241d]/55 px-5 py-8" role="presentation">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="rsvp-success-title"
            className="relative w-full max-w-lg border border-[#b28a3e]/70 bg-white px-7 py-10 text-center shadow-2xl sm:px-12 sm:py-14"
          >
            <button
              type="button"
              aria-label="Close confirmation"
              onClick={() => setState("idle")}
              className="absolute right-4 top-4 grid size-10 place-items-center text-2xl leading-none text-[#176044] transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b28a3e]"
            >
              ×
            </button>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#b28a3e]">With gratitude</p>
            <h2 id="rsvp-success-title" tabIndex={-1} autoFocus className="mt-4 font-display text-4xl text-[#70263a] sm:text-5xl">
              Thank you for replying
            </h2>
            <span aria-hidden="true" className="mx-auto my-6 block h-px w-12 bg-[#b28a3e]" />
            <p className="text-sm leading-7 text-[#49564e]">
              {submittedAttendance === "yes"
                ? "Your joyful acceptance has been received. We look forward to celebrating with you."
                : "Your reply has been received. Thank you for letting us know."}
            </p>
            {emailStatus === "sent" && <p className="mt-4 text-sm leading-6 text-[#176044]">A confirmation email is on its way, with a calendar file attached.</p>}
            {emailStatus === "failed" && <p className="mt-4 text-sm leading-6 text-[#70263a]">Your reply is saved, but we couldn’t send the confirmation email. Please check your address or contact us for help.</p>}
            {emailStatus === "not-provided" && <p className="mt-4 text-sm leading-6 text-[#68756c]">Add an email address next time if you’d like a confirmation email.</p>}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {submittedAttendance === "yes" && (
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#176044] px-6 py-3.5 text-[9px] uppercase tracking-[0.16em] text-[#176044] transition hover:bg-[#176044] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
                >
                  Add to Google Calendar
                </a>
              )}
              <Link
                href="/"
                className="border border-[#70263a] bg-[#70263a] px-6 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white transition hover:border-[#176044] hover:bg-[#176044] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
              >
                Return to Home
              </Link>
            </div>
          </section>
        </div>
      )}
    </form>
  );
}

function AttendanceOption({
  value,
  checked,
  onChange,
  title,
  description,
}: {
  value: "yes" | "no";
  checked: boolean;
  onChange: () => void;
  title: string;
  description: string;
}) {
  return (
    <label className={`flex cursor-pointer gap-3 border px-4 py-4 transition ${checked ? "border-[#b28a3e] bg-[#fffdf8]" : "border-[#176044]/20 hover:border-[#b28a3e]/70"}`}>
      <input
        className="mt-1 size-4 accent-[#70263a]"
        type="radio"
        name="attendanceChoice"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>
        <span className="block font-serif text-xl text-[#70263a]">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-[#68756c]">{description}</span>
      </span>
    </label>
  );
}
