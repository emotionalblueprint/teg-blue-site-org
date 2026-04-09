"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, TRANSITION, SPECTRUM, hexToRgba } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";
import { SpectrumBar } from "./SharedComponents";

const px = SPACING.pagePadding;

/**
 * SiteHeader — Main navigation header for teg-blue.org
 * Two-part layout:
 *   1. Non-sticky branding block (spectrum bar, title, subtitle)
 *   2. Sticky nav bar (logo + nav items + theme toggle)
 * Mobile: hamburger with slide-down panel
 */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Start Here", href: "/research-entry" },
  {
    label: "Theory",
    href: "/foundations",
    children: [
      { label: "Overview", href: "/foundations" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Scientific Foundations", href: "/scientific-foundations" },
    ],
  },
  { label: "Emotional Somatic System", href: "/emotional-somatic-system" },
  {
    label: "Emotional Somatic Cycle",
    href: "/models",
    children: [
      { label: "The Cycle (ESC)", href: "/models" },
      { label: "M1 — Emotions as Signals", href: "/model/m1-emotions-as-signals" },
      { label: "M2 — Nervous System States", href: "/model/m2-nervous-system-states" },
      { label: "M3 — Regulation Capacities", href: "/model/m3-regulation-capacities" },
      { label: "M4 — Awareness Capacities", href: "/model/m4-awareness-capacities" },
    ],
  },
  {
    label: "Frameworks",
    href: "/frameworks-map",
    children: [
      { label: "F1 — The Emotional Gradient", href: "/framework/f1-emotional-gradient" },
      { label: "F2 — Awareness Teaches Awareness", href: "/framework/f2-awareness-calibration" },
      { label: "F3 — Adult Cognition & False Coherence", href: "/framework/f3-false-coherence" },
      { label: "F4 — Rules Regulate", href: "/framework/f4-rules-regulate" },
      { label: "F5 — Worth Hierarchies Regulate", href: "/framework/f5-worth-hierarchies" },
      { label: "F6 — Bias Regulates", href: "/framework/f6-bias-regulates" },
      { label: "F7 — Domination Regulates", href: "/framework/f7-domination-regulates" },
      { label: "F8 — Repairing Awareness", href: "/framework/f8-repairing-awareness" },
      { label: "F9 — Neurodivergence as Variation", href: "/framework/f9-neurodivergence-variation" },
      { label: "F10 — Rebuilding Generational Bridges", href: "/framework/f10-generational-bridges" },
      { label: "F11 — The Emotional Paradoxes", href: "/framework/f11-emotional-paradoxes" },
      { label: "F12 — The Two Information Systems", href: "/framework/f12-two-information-systems" },
    ],
  },
  {
    label: "Library",
    href: "/publications",
    children: [
      { label: "Publications", href: "/publications" },
      { label: "Glossary", href: "/glossary" },
      { label: "Reframes", href: "/reframes" },
      { label: "Phenomena", href: "/mechanics-of-phenomena" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Ethics", href: "/ethics" },
  { label: "AI Safety", href: "/ai-safety" },
];

// ─── RESPONSIVE STYLES (injected once) ────────────────────
const RESPONSIVE_CSS = `
  .teg-desktop-nav { display: flex; }
  .teg-mobile-toggle { display: none; }
  .teg-mobile-panel { display: none; }
  .teg-branding-full { display: block; }
  .teg-branding-compact { display: none; }

  @media (max-width: 900px) {
    .teg-desktop-nav { display: none !important; }
    .teg-mobile-toggle { display: flex !important; }
    .teg-mobile-panel { display: block !important; }
    .teg-branding-full { display: none !important; }
    .teg-branding-compact { display: block !important; }
  }
`;

// ─── DESKTOP NAV ITEM ─────────────────────────────────────
function NavItem({ item, currentPath }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const isActive =
    currentPath === item.href ||
    (item.href !== "/" && currentPath.startsWith(item.href));

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        style={{
          padding: "10px 8px",
          fontFamily: FONT.display,
          fontSize: 13,
          fontWeight: 500,
          color: isActive ? TEXT.primary : TEXT.hint,
          textDecoration: "none",
          borderBottom: isActive
            ? `2px solid ${SPECTRUM.blue}`
            : "2px solid transparent",
          transition: `all ${TRANSITION.normal}`,
          whiteSpace: "nowrap",
        }}
      >
        {item.label}
      </Link>
    );
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      ref.current?.querySelector("a")?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        const links = ref.current?.querySelectorAll("[data-dropdown-item]");
        if (links?.length) links[0].focus();
      }
    }
  };

  const handleDropdownKeyDown = (e, index) => {
    const links = ref.current?.querySelectorAll("[data-dropdown-item]");
    if (!links) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (index < links.length - 1) links[index + 1].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index > 0) links[index - 1].focus();
      else ref.current?.querySelector("a")?.focus();
    } else if (e.key === "Escape") {
      setOpen(false);
      ref.current?.querySelector("a")?.focus();
    }
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onMouseEnter={() => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
      }}
      onKeyDown={handleKeyDown}
    >
      <Link
        href={item.href}
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "10px 8px",
          fontFamily: FONT.display,
          fontSize: 13,
          fontWeight: 500,
          color: isActive ? TEXT.primary : TEXT.hint,
          textDecoration: "none",
          borderBottom: isActive
            ? `2px solid ${SPECTRUM.blue}`
            : "2px solid transparent",
          transition: `all ${TRANSITION.normal}`,
          whiteSpace: "nowrap",
        }}
        onFocus={() => setOpen(true)}
      >
        {item.label}
        <span style={{ fontSize: 8, marginLeft: 2, opacity: 0.5 }} aria-hidden="true">▼</span>
      </Link>

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            minWidth: 320,
            background: BG.primary,
            border: `1px solid ${BORDER.default}`,
            borderRadius: 8,
            padding: "6px 0",
            zIndex: 100,
            boxShadow: `0 8px 24px ${hexToRgba('#000000', 0.25)}`,
          }}
        >
          {item.children.map((child, index) => {
            const childActive = currentPath === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                data-dropdown-item
                onClick={() => setOpen(false)}
                onKeyDown={(e) => handleDropdownKeyDown(e, index)}
                style={{
                  display: "block",
                  padding: "8px 16px",
                  fontSize: 13,
                  color: childActive ? TEXT.primary : TEXT.secondary,
                  textDecoration: "none",
                  fontWeight: childActive ? 600 : 400,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = hexToRgba(SPECTRUM.blue, 0.08);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── MOBILE NAV ITEM ──────────────────────────────────────
function MobileNavItem({ item, currentPath, onClose }) {
  const [expanded, setExpanded] = useState(false);

  const isActive =
    currentPath === item.href ||
    (item.href !== "/" && currentPath.startsWith(item.href));

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        style={{
          display: "block",
          padding: "12px 20px",
          fontSize: 15,
          fontWeight: isActive ? 600 : 400,
          color: isActive ? TEXT.primary : TEXT.secondary,
          textDecoration: "none",
          borderLeft: isActive ? `3px solid ${SPECTRUM.blue}` : "3px solid transparent",
          transition: `all ${TRANSITION.fast}`,
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href={item.href}
          onClick={onClose}
          style={{
            flex: 1,
            display: "block",
            padding: "12px 20px",
            fontSize: 15,
            fontWeight: isActive ? 600 : 400,
            color: isActive ? TEXT.primary : TEXT.secondary,
            textDecoration: "none",
            borderLeft: isActive ? `3px solid ${SPECTRUM.blue}` : "3px solid transparent",
          }}
        >
          {item.label}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
          style={{
            background: "none",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            color: TEXT.muted,
            fontSize: 12,
          }}
        >
          {expanded ? "▲" : "▼"}
        </button>
      </div>

      {expanded && (
        <div style={{ paddingLeft: 16 }}>
          {item.children.map((child) => {
            const childActive = currentPath === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                style={{
                  display: "block",
                  padding: "10px 20px",
                  fontSize: 13,
                  color: childActive ? TEXT.primary : TEXT.muted,
                  textDecoration: "none",
                  fontWeight: childActive ? 600 : 400,
                  borderLeft: childActive ? `2px solid ${SPECTRUM.azure}` : "2px solid transparent",
                }}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── HAMBURGER ICON ───────────────────────────────────────
function HamburgerIcon({ isOpen }) {
  const bar = {
    display: "block",
    width: 18,
    height: 2,
    background: TEXT.secondary,
    borderRadius: 1,
    transition: `all ${TRANSITION.normal}`,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 18, height: 18, justifyContent: "center" }}>
      <span style={{
        ...bar,
        transform: isOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
      }} />
      <span style={{
        ...bar,
        opacity: isOpen ? 0 : 1,
      }} />
      <span style={{
        ...bar,
        transform: isOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
      }} />
    </div>
  );
}

// ─── MAIN HEADER ──────────────────────────────────────────
export default function SiteHeader({ currentPath = "/", hideBranding = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />

      {/* ── TOP BRANDING BLOCK (scrolls away) ── */}
      {!hideBranding && (
        <header
          style={{
            background: BG.primary,
            borderBottom: `1px solid ${BORDER.default}`,
          }}
        >
          <div
            style={{
              maxWidth: SPACING.containerMax,
              margin: "0 auto",
              padding: `20px ${px} 0`,
            }}
          >
            <SpectrumBar variant="pattern" />

            {/* Full branding — desktop only */}
            <div className="teg-branding-full" style={{ marginTop: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                <Link
                  href="/"
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: TEXT.hint,
                    textDecoration: "none",
                  }}
                >
                  TEG-Blue
                </Link>
                <span style={{ color: TEXT.micro }}>·</span>
                <a
                  href="https://teg-blue.com"
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 9,
                    color: SPECTRUM.azure,
                    textDecoration: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interactive tools on .com →
                </a>
              </div>
              <h1
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: TEXT.primary,
                  margin: "4px 0 0",
                  letterSpacing: "-0.02em",
                }}
              >
                Open Research
              </h1>
              <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 4 }}>
                Transparent methods, credited sources, testable claims
              </p>
            </div>

            {/* Compact branding — mobile only */}
            <div className="teg-branding-compact" style={{ marginTop: 12, marginBottom: 12 }}>
              <h1
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: TEXT.primary,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Open Research
              </h1>
              <p style={{ fontSize: 12, color: TEXT.muted, marginTop: 2 }}>
                Transparent methods, credited sources, testable claims
              </p>
            </div>
          </div>
        </header>
      )}

      {/* ── STICKY NAV BAR ── */}
      <nav
        aria-label="Main navigation"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: BG.primary,
          borderBottom: `1px solid ${BORDER.default}`,
        }}
      >
        <div
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: `0 ${px}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Center: Desktop nav items */}
          <div
            className="teg-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              flex: 1,
              justifyContent: "flex-start",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} item={item} currentPath={currentPath} />
            ))}
          </div>

          {/* Right: Theme toggle (always visible) + hamburger (mobile only) */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <button
              className="teg-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                background: "none",
                border: `1px solid ${BORDER.default}`,
                borderRadius: 8,
                cursor: "pointer",
                padding: 0,
              }}
            >
              <HamburgerIcon isOpen={mobileOpen} />
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN PANEL ── */}
        {mobileOpen && (
          <div
            className="teg-mobile-panel"
            style={{
              display: "none",
              background: BG.primary,
              borderTop: `1px solid ${BORDER.default}`,
              maxHeight: "calc(100vh - 60px)",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div style={{ padding: "8px 0 16px" }}>
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  currentPath={currentPath}
                  onClose={() => setMobileOpen(false)}
                />
              ))}

              {/* .com link in mobile menu */}
              <div style={{
                padding: "16px 20px 8px",
                borderTop: `1px solid ${BORDER.default}`,
                marginTop: 8,
              }}>
                <a
                  href="https://teg-blue.com"
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 11,
                    color: SPECTRUM.azure,
                    textDecoration: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interactive tools on .com →
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
