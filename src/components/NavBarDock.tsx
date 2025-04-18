// NavBarDock.tsx
// MagicUI Dock for navigation bar
import { Dock } from "./Dock";
import { TextAnimate } from "./TextAnimate";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
];

export function NavBarDock() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <Dock>
        {/* Logo and App Name */}
        <a href="#hero" className="flex items-center gap-2 px-4 py-2 mr-4 select-none">
          <img src="/file.svg" alt="VisuaLit Logo" className="w-7 h-7" />
          <span className="font-bold text-lg text-neutral-800 dark:text-neutral-100 tracking-tight">VisuaLit</span>
        </a>
        {/* Navigation Links */}
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-2 text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors"
          >
            <TextAnimate type="blur-in-by-char">{link.label}</TextAnimate>
          </a>
        ))}
      </Dock>
    </nav>
  );
}
