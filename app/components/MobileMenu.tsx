"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-900 hover:text-white"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-800 bg-slate-950 px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-2">
            <a
              href="#services"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Services
            </a>

            <a
              href="#work"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              My Work
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-blue-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
