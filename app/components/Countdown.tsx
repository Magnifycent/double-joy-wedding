"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-12T08:00:00+01:00").getTime();

function getTimeLeft() {
  const difference = weddingDate - Date.now();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <p className="font-serif text-3xl text-[#176044] sm:text-4xl md:text-5xl">{String(item.value).padStart(2, "0")}</p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#806a3a]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
