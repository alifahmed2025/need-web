"use client"

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
      {/* Top Grid Section */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ---- About ---- */}
          <div>
            <h3 className="text-2xl font-bold mb-5 tracking-wide">Need.com</h3>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              Your trusted online destination for premium products — fashion,
              electronics, lifestyle & more. Shop smarter, live better.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ---- Quick Links ---- */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-primary-foreground/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                ["About Us", "/about"],
                ["Contact Us", "/contact"],
                ["Track Order", "/track-order"],
                ["Returns & Exchange", "/returns"],
                ["Privacy Policy", "/privacy"],
                ["Terms & Conditions", "/terms"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-primary-foreground transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Customer Service ---- */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-primary-foreground/30 pb-2">
              Customer Service
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                ["Help Center", "/help"],
                ["Payment Methods", "/payment-methods"],
                ["Shipping Info", "/shipping"],
                ["Size Guide", "/size-guide"],
                ["FAQs", "/faqs"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-primary-foreground transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Contact & Newsletter ---- */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-primary-foreground/30 pb-2">
              Contact & Newsletter
            </h4>

            <ul className="space-y-3 text-sm text-primary-foreground/80 mb-6">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>support@need.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            <div>
              <p className="text-sm mb-2 font-medium">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button
                  size="sm"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/80">
          <p className="text-center md:text-left">
            © 2025 <span className="font-semibold">Need.com</span>. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-primary-foreground transition"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-primary-foreground transition"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-xl bg-primary text-white hover:bg-primary/90 transition-all z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  )
}
