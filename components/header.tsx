"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./container";

const NAV_ITEMS = [
  { name: "ABOUT", href: "/about" },
  { name: "WORKS", href: "/works" },
  { name: "DIRECTORS", href: "/directors" },
  { name: "CONTACTS", href: "/contacts" },
];

const AVATARS = [
  { src: "/assets/ceo1.jpeg", alt: "AOE CEO Alaba" },
  { src: "/assets/ceo2.jpeg", alt: "Lena" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add this function to your Header component
  const handleWorksClick = (e: React.MouseEvent) => {
    const isOnHomePage = window.location.pathname === "/";
    if (isOnHomePage) {
      e.preventDefault();
      document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
    // Otherwise, the default link behavior will trigger the redirect
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <Container>
        <nav className="relative flex items-center justify-between h-20">
          {/* Logo with avatars */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <span className="text-xl font-bold text-gray-900">
                AOE Studios
              </span>
              <div className="flex gap-2">
                {AVATARS.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={48}
                      height={48}
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                scroll={item.name === "WORKS" ? false : true}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Mobile menu */}
          <div
            className={`fixed inset-0 z-40 ${mobileMenuOpen ? "block" : "hidden"}`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel - now properly constrained */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-lg">
              <div className="flex justify-between items-center p-6 border-b">
                <span className="text-xl font-bold">AOE Studios</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="p-4 space-y-2 bg-white">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block p-3 text-gray-900 font-medium hover:bg-gray-200 rounded-none"
                    onClick={
                      item.name === "WORKS"
                        ? handleWorksClick
                        : () => setMobileMenuOpen(false)
                    }
                    scroll={item.name === "WORKS" ? false : true}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
