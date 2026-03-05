"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, TRANSITION, SPECTRUM, hexToRgba } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";

const px = SPACING.pagePadding;
import { SpectrumBar } from "./SharedComponents";

/**
 * SiteHeader — Main navigation header for teg-blue.org
 * Flat navigation with dropdowns on Models and Frameworks
 */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Start Here", href: "/research-entry" },
  {
    label: "Models",
    href: "/models",
    children: [
      { label: "M1 — Inner Compass & Four-Mode Gradient", href: "/model/m1-inner-compass" },
      { label: "M2 — Three Awareness Capacities", href: "/model/m2-three-awareness-capacities" },
    ],
  },
  {
    label: "Frameworks",
    href: "/frameworks-map",
    children: [
      { label: "F1 — Emotions as Biological Information", href: "/framework/f1-emotional-gradient" },
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
  { label: "Publications", href: "/publications" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "About", href: "/about" },
];

function NavItem({ item, currentPath }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const isActive =
    currentPath === item.href ||
    (item.href !== "/" && currentPath.startsWith(item.href));

  // Close on outside click
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
          padding: "12px 20px",
          fontFamily: FONT.display,
          fontSize: 13,
          fontWeight: 600,
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
    >
      <Link
        href={item.href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "12px 20px",
          fontFamily: FONT.display,
          fontSize: 13,
          fontWeight: 600,
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
        <span style={{ fontSize: 8, marginLeft: 2, opacity: 0.5 }}>▼</span>
      </Link>

      {open && (
        <div
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
            boxShadow: `0 8px 24px ${hexToRgba("#000", 0.25)}`,
          }}
        >
          {item.children.map((child) => {
            const childActive = currentPath === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
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

export default function SiteHeader({ currentPath = "/" }) {
  return (
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

        {/* Logo + Title */}
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
            <ThemeToggle />
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
            Research Platform
          </h1>
          <p
            style={{
              fontSize: 13,
              color: TEXT.muted,
              marginTop: 4,
            }}
          >
            Open science for emotional technology research
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        style={{
          background: BG.primary,
          borderTop: `1px solid ${BORDER.default}`,
        }}
      >
        <div
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: `0 ${px}`,
            display: "flex",
            gap: 0,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.href} item={item} currentPath={currentPath} />
          ))}
        </div>
      </nav>
    </header>
  );
}
