"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FF7F50] fixed top-0 w-full z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="bg-white p-1.5 rounded">
            <Image src="/logo.svg" alt="D³ Logo" width={36} height={36} />
          </div>
          <span className="text-white font-semibold text-lg">
            Direct Digital Democracy
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          <li>
            <Link
              href="/#about"
              className="text-white font-medium no-underline hover:text-[#FFF5F2] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white font-medium no-underline hover:text-[#FFF5F2] transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#donate"
              className="text-white font-medium no-underline hover:text-[#FFF5F2] transition-colors"
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white font-medium no-underline hover:text-[#FFF5F2] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E66B3D] px-6 pb-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {[
              { href: "/#about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/#donate", label: "Donate" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white font-medium no-underline block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
