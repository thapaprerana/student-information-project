"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Every link here points to an id="..." section that lives on the home
// page (see src/app/page.tsx). Using "/#id" (instead of just "#id") means
// the links still work correctly even if you click them while sitting on
// a different page, like /students.
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Faculty", href: "/#faculty" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo only - no text label next to it */}
        <Link href="/#home" className="flex items-center">
          <Image
            src="/images/logo-full.png"
            alt="Aadikavi Bhanubhakta Campus logo"
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-blue-900 sm:text-base">
              Aadikavi Bhanubhakta
            </span>
            <span className="block text-xs text-gray-500">Campus</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Student List button (goes to a real separate page: /students) */}
        <div className="hidden md:block">
          <Link
            href="/students"
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
          >
            Student List
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/students"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Student List
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
