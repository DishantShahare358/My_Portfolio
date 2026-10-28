"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export function StackShot({ images, alt }: Props) {
  const [front, setFront] = useState(0);
  const [busy, setBusy] = useState(false);
  const [sending, setSending] = useState<number | null>(null);
  const [mode, setMode] = useState<"back" | "fwd" | null>(null);

  if (!images.length) return null;

  function sendToBack() {
    if (busy || images.length < 2) return;
    setBusy(true);
    setMode("back");
    setSending(front);
    window.setTimeout(() => {
      setFront((f) => (f + 1) % images.length);
      setSending(null);
      setMode(null);
      setBusy(false);
    }, 560);
  }

  function pullFromBack() {
    if (busy || images.length < 2) return;
    const prev = (front - 1 + images.length) % images.length;
    setBusy(true);
    setMode("fwd");
    setSending(prev);
    window.setTimeout(() => {
      setFront(prev);
      setSending(null);
      setMode(null);
      setBusy(false);
    }, 560);
  }

  return (
    <div className="stack-wrap">
      <div className="stack-glow" />
      <div className="stack-stage">
        {images.map((src, i) => {
          const depth = (i - front + images.length) % images.length;
          if (depth > 4 && sending !== i) return null;
          const isSending = sending === i;
          const peek = 18 + depth * 22;
          const lift = depth * 10;
          const tilt = depth * -10;
          const z = depth * -42;
          const scale = 1 - depth * 0.045;
          const animClass =
            isSending && mode === "back" ? "is-sending" : isSending && mode === "fwd" ? "is-returning" : "";
          return (
            <button
              key={src}
              type="button"
              className={`stack-card ${animClass} ${depth === 0 && !isSending ? "is-front" : ""}`}
              style={{
                zIndex: isSending ? 50 : 40 - depth,
                transform: `translate3d(${peek}px, ${lift}px, ${z}px) rotateY(${tilt}deg) scale(${scale})`,
              }}
              onClick={sendToBack}
              aria-label={`${alt} screenshot ${i + 1}`}
            >
              <img src={src} alt={`${alt} ${i + 1}`} />
            </button>
          );
        })}
      </div>
      <div className="stack-controls">
        <button type="button" className="stack-nav" onClick={pullFromBack} disabled={busy}>
          Prev
        </button>
        <div className="stack-dots">
          {images.map((src, i) => (
            <span key={src} className={i === front ? "on" : ""} />
          ))}
        </div>
        <button type="button" className="stack-nav" onClick={sendToBack} disabled={busy}>
          Next
        </button>
      </div>
    </div>
  );
}
