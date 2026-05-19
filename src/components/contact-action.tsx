"use client";

import { useRef, useState, type ReactNode } from "react";

type ContactActionProps = {
  children: ReactNode;
  className?: string;
  email: string;
};

export function ContactAction({
  children,
  className,
  email,
}: ContactActionProps) {
  const [message, setMessage] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleClick() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied");
    } catch {
      setMessage(`Email: ${email}`);
    }

    timeoutRef.current = setTimeout(() => {
      setMessage("");
    }, 2200);
  }

  return (
    <>
      <button
        className={`${className ?? ""} cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700`}
        onClick={handleClick}
        type="button"
      >
        {children}
      </button>
      <div
        aria-live="polite"
        className={`fixed bottom-5 left-5 right-5 z-50 mx-auto flex w-fit max-w-[calc(100vw-2.5rem)] items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white shadow-[0_18px_48px_rgb(28_25_23_/_0.22)] transition duration-200 sm:left-auto sm:right-6 ${
          message
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        {message}
      </div>
    </>
  );
}
