import { BookOpen } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  platform: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/vocabulary", label: "Vocabulary" },
    { href: "/reading", label: "Reading" },
    { href: "/favorites", label: "Favorites" },
  ],
  resources: [
    { href: "/about", label: "About Us" },
    { href: "/help", label: "Help Center" },
    { href: "/contact", label: "Contact" },
    { href: "/feedback", label: "Feedback" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">EnglishMemo</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              An intelligent English learning platform powered by AI memory techniques.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>2026 EnglishMemo. All rights reserved.</p>
          <p className="mt-1">
            Built with React and Node.js - Jiangxi Agricultural University
          </p>
        </div>
      </div>
    </footer>
  );
}
