"use client";

import { TEXT, FONT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

const prose = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
};

const emphasis = {
  color: TEXT.primary,
  fontWeight: 600,
};

const standaloneLine = {
  fontSize: 15,
  fontWeight: 600,
  color: TEXT.primary,
  lineHeight: 1.6,
  margin: "20px 0",
};

// ─── WHAT IT IS ─────────────────────────────────────────────

export const whatItIs = (
  <>
    <p style={prose}>
      The compass is designed to move — and to come back. Everything described in
      the previous concepts — the evaluation, the signalling, the mode
      activation, the capacity shift — was designed to be temporary. The
      mechanism by which the body moves from threat response back to connection —
      or to a more neutral state where the body is no longer running on emergency
      fuel — is <strong style={emphasis}>regulation</strong>. Regulation is the
      return journey.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        The word "regulation" has been captured by the idea of controlling
        emotions
      </strong>{" "}
      — keeping them in check, managing them, ensuring they do not get "too
      much." Self-regulation, in common use, often means: do not let what you
      feel show. This is not what regulation is.
    </p>
    <p style={standaloneLine}>Regulation is the mechanism of coming back.</p>
    <p style={prose}>
      Recovery is walking the nervous system back toward safety. The body needs
      to discharge the activation that was mobilised. When the threat is real,
      time-limited, and the body can complete the response — run, fight, shake,
      cry, be held — the system returns on its own. Heart rate comes down.
      Breathing deepens. Muscles release. The hormonal cascade completes.
      Attention broadens. Resonance widens. The compass needle moves back.
    </p>
    <p style={prose}>
      This happens through multiple pathways:{" "}
      <strong style={emphasis}>Breathing</strong> — slow exhalation activates the
      vagal brake, signalling safety to the autonomic system.{" "}
      <strong style={emphasis}>Grounding</strong> — sensory contact with the
      present environment helps the system recalibrate from the threat that was
      to the reality that is.{" "}
      <strong style={emphasis}>Co-regulation</strong> — another person's
      regulated nervous system sending safety signals through tone, touch,
      rhythm, presence. <strong style={emphasis}>Time</strong> — the body
      completing the activation cycle when given space to do so without
      interruption.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        This is not a cognitive event. It is a physiological completion.
      </strong>{" "}
      The body does not reason its way back to safety. It returns through the
      same somatic channels it departed through. The breath that accelerated must
      slow. The muscles that braced must release. The hormones that flooded must
      clear. Regulation is the body's own return mechanism — not a skill imposed
      from outside, but a process the system was designed to run.
    </p>
    <p style={prose}>
      The complete cycle: signal &rarr; neuroception &rarr; autonomic response
      &rarr; mode activation &rarr; threat response &rarr;{" "}
      <strong style={emphasis}>
        resolution &rarr; regulation &rarr; return
      </strong>
      .{" "}
      <strong style={emphasis}>
        Health is not staying in Connection permanently. Health is the full cycle
        — the ability to move into threat response when needed and come back when
        the threat has passed.
      </strong>
    </p>
    <p style={prose}>
      When the return works, threat responses are temporary. When the return is
      missing — when it was never learned, when the environment cannot support
      it, when the activation never completes — the compass gets stuck. What
      should have been minutes of Protection becomes a lifetime of vigilance.
      What should have been a deliberate use of Control becomes an identity built
      around management. The question is never "how do I stop reacting?" The
      question is:{" "}
      <strong style={emphasis}>"can I come back?"</strong>
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Porges (2011) — the vagal brake and autonomic return; co-regulation as the
      developmental pathway for self-regulation. Levine (1997) — Somatic
      Experiencing; the body completing the threat cycle. Van der Kolk (2014) —
      incomplete threat responses stored in the body; understanding alone does
      not change somatic patterns. Sapolsky (2004) — stress response designed for
      acute activation; chronic activation produces allostatic load. McEwen
      (2000) — allostatic load, chronic stress changes baseline. Siegel (2012) —
      integration as mechanism of health.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      The explicit naming of the return pathways — breathing, grounding,
      co-regulation, time — as the body's own completion mechanisms rather than
      therapeutic techniques. These are not tools invented by clinicians. They
      are the pathways the nervous system uses to resolve activation. Therapy
      that works through the body works because it supports what the body was
      already designed to do.
    </p>
    <p style={prose}>
      The extension of the return across all four modes. Most regulation models
      focus on the return from sympathetic/dorsal states (Protection). TEG-Blue
      describes the return from each mode position — including the specific cost
      of returning from Control (cognitive stand-down) and Domination
      (re-engaging resonance, processing the weight). The deeper the compass
      moves along the gradient, the more the return costs — and the more the
      system needs to complete.
    </p>
    <p style={prose}>
      The formulation "Regulation is the mechanism of coming back" connects
      directly to the developmental question: what happens when the return path
      is never learned? This sets up the entire developmental and clinical arc
      that the framework system addresses — and it is the thread that runs
      through every framework. F1 establishes regulation as the biological
      return. F2 explains what happens when it is never learned. F3 reveals what
      cognition does in its place. F4&ndash;F7 describe the substitutes at
      progressively larger scales. Every framework is, at root, about the return
      — and what gets built in its absence.
    </p>
  </>
);
