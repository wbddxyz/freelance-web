"use client";

import { FormEvent, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

if (!turnstileToken) {
  setError("Please complete the security check.");
  setIsSubmitting(false);
  return;
}	
    const data = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
	turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        "Sorry, something went wrong. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="form-label">
          Name *
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          className="input"
          placeholder="Your name"
        />
      </div>

      {/* Business */}
      <div>
        <label htmlFor="business" className="form-label">
          Business
        </label>

        <input
          id="business"
          name="business"
          type="text"
          className="input"
          placeholder="Your business name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          Email *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="input"
          placeholder="you@example.com"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="form-label">
          What do you need?
        </label>

        <select id="service" name="service" className="select">
          <option value="">Select a service</option>
          <option value="Business Website">Business Website</option>
          <option value="Web Application">Web Application</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Ongoing Support">Ongoing Support</option>
          <option value="Something Else">Something Else</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="form-label">
          Budget
        </label>

        <select id="budget" name="budget" className="select">
          <option value="">Select a budget</option>
          <option value="Under £500">Under £500</option>
          <option value="£500 - £1,000">£500 - £1,000</option>
          <option value="£1,000 - £2,500">£1,000 - £2,500</option>
          <option value="£2,500+">£2,500+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Tell me about your project *
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="input resize-none"
          placeholder="Tell me what you're looking to build..."
        />
      </div>

      {/* Status messages */}
      {submitted && (
        <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
          Thanks! Your enquiry has been sent. I'll get back to you as soon as
          possible.
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}


<Turnstile
  siteKey="0x4AAAAAAFPnQDSUUDIRstPJ"
  onSuccess={(token) => setTurnstileToken(token)}
  onExpire={() => setTurnstileToken("")}
  onError={() => setTurnstileToken("")}
/>


      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
