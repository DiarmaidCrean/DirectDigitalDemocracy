"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ddd-form-api-dc0c7b285f94.herokuapp.com";

type FormState = "idle" | "submitting" | "success" | "error";

export default function InfluenceForm() {
  const [influence, setInfluence] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch(`${API_URL}/api/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ influence, email }),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-5xl text-[#00703C] mb-4">✓</div>
        <h3 className="text-[#00703C] text-xl font-semibold mb-3">
          Thank You!
        </h3>
        <p className="text-[#505A5A] mb-4">
          We&apos;ve received your submission about what you&apos;d like direct influence
          over.
        </p>
        <p className="text-[#505A5A] mb-6">
          Your input helps us shape a better democratic future.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setInfluence("");
            setEmail("");
          }}
          className="bg-[#FF7F50] text-white font-semibold px-6 py-3 hover:bg-[#E66B3D] transition-colors cursor-pointer border-0"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <textarea
          id="influence"
          name="influence"
          rows={4}
          value={influence}
          onChange={(e) => setInfluence(e.target.value)}
          required
          autoComplete="off"
          placeholder="Tell us what issue matters most to you..."
          className="w-full px-3 py-3 border-2 border-[#B1B4B6] font-sans text-base focus:outline-none focus:border-[#FF7F50] resize-y"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block font-semibold mb-2 text-[#FF7F50]"
        >
          Can we stay in contact so you can help make our app a success?
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email address"
          autoComplete="email"
          className="w-full px-3 py-3 border-2 border-[#B1B4B6] font-sans text-base focus:outline-none focus:border-[#FF7F50]"
        />
      </div>

      {state === "error" && (
        <div className="bg-[#FEF7F7] border-l-4 border-[#D4351C] text-[#D4351C] px-4 py-3 mb-4">
          Sorry, there was an error submitting your response. Please try again
          later.
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="bg-[#FF7F50] text-white font-semibold px-6 py-3 hover:bg-[#E66B3D] transition-colors cursor-pointer border-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
