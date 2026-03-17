"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, SearchInput, ResearcherHero, AuthorBlock } from "@/src/components";
import { generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

// ─── FRAMEWORK URL MAPPING ──────────────────────────────────────
const FRAMEWORK_URLS = {
  F1: "/framework/f1-emotional-gradient",
  F2: "/framework/f2-awareness-calibration",
  F3: "/framework/f3-false-coherence",
  F4: "/framework/f4-rules-regulate",
  F5: "/framework/f5-worth-hierarchies",
  F6: "/framework/f6-bias-regulates",
  F7: "/framework/f7-domination-regulates",
  F8: "/framework/f8-repairing-awareness",
  F9: "/framework/f9-neurodivergence-variation",
  F10: "/framework/f10-generational-bridges",
  F11: "/framework/f11-emotional-paradoxes",
  F12: "/framework/f12-two-information-systems",
  M1: "/model/m1-inner-compass",
  M2: "/model/m2-three-awareness-capacities",
};

function getFrameworkUrl(tag) {
  return FRAMEWORK_URLS[tag] || "/frameworks-map";
}

// ─── DOMAIN COLORS ──────────────────────────────────────────────
const domainColors = {
  "Affective Neuroscience": SPECTRUM.azure,
  "Attachment Theory": SPECTRUM.cobalt,
  "Behavioral Science": SPECTRUM.slate,
  "Clinical Psychology": SPECTRUM.indigo,
  "Cognitive Science": SPECTRUM.blue,
  "Developmental Psychology": SPECTRUM.cobalt,
  "Emotion Science": SPECTRUM.azure,
  "Epigenetics": SPECTRUM.indigo,
  "Evolutionary Psychology": SPECTRUM.slate,
  "Family Systems": SPECTRUM.cobalt,
  "Humanistic Psychology": SPECTRUM.blue,
  "Interpersonal Neurobiology": SPECTRUM.azure,
  "Moral Psychology": SPECTRUM.slate,
  "Motivational Science": SPECTRUM.blue,
  "Narrative Psychology": SPECTRUM.cobalt,
  "Neurodiversity Research": SPECTRUM.indigo,
  "Object Relations": SPECTRUM.blue,
  "Polyvagal Theory": SPECTRUM.azure,
  "Psychoanalysis": SPECTRUM.indigo,
  "Self Psychology": SPECTRUM.blue,
  "Social Psychology": SPECTRUM.cobalt,
  "Sociology": SPECTRUM.slate,
  "Stress Physiology": SPECTRUM.indigo,
  "Trauma Research": SPECTRUM.azure,
};

function getDomainColor(domain) {
  return domainColors[domain] || SPECTRUM.blue;
}

// ─── COMPREHENSIVE THEORY DATABASE ─────────────────────────────
// 42 tradition-level entries consolidating 145+ individual theories
// Each entry represents a research tradition with key researchers and framework cross-references
const THEORIES = [
  // ─── Existing entries (migrated from content/theories/*.json) ───
  {
    slug: "affective-neuroscience", title: "Affective Neuroscience", domain: "Affective Neuroscience",
    originAuthor: "Jaak Panksepp, Antonio Damasio, Lisa Feldman Barrett, Joseph LeDoux",
    summary: "Emotions are not disruptions to rational thought but fundamental biological systems that evolved to guide behavior. They arise from subcortical circuits that evaluate survival relevance and prepare the body for action before conscious awareness begins.",
    tags: ["neuroscience", "emotion", "subcortical", "somatic markers", "constructed emotion"],
    frameworks: ["F1", "F12", "M3"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Affective neuroscience studies the neural basis of emotion. Panksepp identified primary emotional systems (SEEKING, RAGE, FEAR, LUST, CARE, PANIC/GRIEF, PLAY) operating from subcortical structures. Damasio showed that bodily states (somatic markers) guide decision-making. Barrett demonstrated that emotions are constructed from interoceptive signals and learned concepts. LeDoux mapped threat detection circuits that operate before conscious awareness." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue synthesizes these perspectives: emotions as data (not disruption), body-first processing (neuroception before cognition), and state-dependent capacity (what the brain can do depends on its current regulatory state). The Four-Mode Gradient maps how these neural systems organize into coherent patterns." },
      { id: "key-sources", title: "Key Sources", content: "Panksepp, J. (1998). Affective Neuroscience. Oxford University Press. \u00b7 Damasio, A. (1994). Descartes' Error. Putnam. \u00b7 Barrett, L. F. (2017). How Emotions Are Made. Houghton Mifflin. \u00b7 LeDoux, J. (1996). The Emotional Brain. Simon & Schuster." },
    ],
  },
  {
    slug: "analytical-psychology", title: "Analytical Psychology", domain: "Psychoanalysis",
    originAuthor: "Carl Jung",
    summary: "The psyche contains both conscious and unconscious elements organized around archetypes. The Persona is the social mask we present; the Shadow contains what we reject. Individuation is the lifelong process of integrating these parts into a more complete self.",
    tags: ["Jung", "Persona", "Shadow", "individuation", "archetypes"],
    frameworks: ["F2", "F3", "F5", "F11"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Jung's Analytical Psychology describes the Persona as the social mask we wear — the face we present to the world. The Shadow contains everything the ego rejects: traits, desires, and capacities deemed unacceptable. Individuation is the process of integrating Persona and Shadow into a more authentic whole." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue translates Jung into developmental and regulatory terms. The Persona is the Role Mask — built early, through necessity. The Shadow contains suppressed aspects of the Real Self: emotions, needs, and capacities that weren't safe to express. Integration requires nervous system safety first." },
      { id: "key-sources", title: "Key Sources", content: "Jung, C. G. (1928). Two Essays on Analytical Psychology. Routledge. \u00b7 Jung, C. G. (1959). The Archetypes and the Collective Unconscious. Princeton University Press." },
    ],
  },
  {
    slug: "attachment", title: "Attachment Theory", domain: "Attachment Theory",
    originAuthor: "John Bowlby, Mary Ainsworth, Mary Main",
    summary: "Early relational experiences create internal working models that shape emotional regulation, relational patterns, and threat responses across the lifespan.",
    tags: ["attachment", "internal working models", "relational patterns", "developmental psychology"],
    frameworks: ["F1", "F2", "F4", "F5", "F8", "F10", "F12"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Attachment Theory proposes that the quality of early caregiving relationships creates internal working models — mental templates for how relationships function. These models influence emotional regulation strategies, interpersonal behavior, and stress responses throughout life." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue maps attachment patterns as default regulatory positions within the Four-Mode Gradient. Secure attachment produces a default Connection state with flexible movement. Insecure patterns create gravitational pulls toward specific modes — anxious toward Protection, avoidant toward Control." },
      { id: "key-sources", title: "Key Sources", content: "Bowlby, J. (1969/1982). Attachment and Loss, Vol. 1. Basic Books. \u00b7 Ainsworth, M. D. S. et al. (1978). Patterns of Attachment. Erlbaum. \u00b7 Main, M. & Hesse, E. (1990). Parents' unresolved traumatic experiences are related to infant disorganized attachment status." },
    ],
  },
  {
    slug: "cognitive-dissonance", title: "Cognitive Dissonance Theory", domain: "Social Psychology",
    originAuthor: "Leon Festinger",
    summary: "The discomfort experienced when holding contradictory beliefs, values, or attitudes simultaneously — and the motivated reasoning that follows to reduce that discomfort.",
    tags: ["cognitive dissonance", "motivated reasoning", "belief change", "rationalization"],
    frameworks: ["F3", "F6", "F7", "F11"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Cognitive dissonance theory proposes that humans experience psychological discomfort when they hold contradictory cognitions. This discomfort motivates them to reduce the inconsistency — often by changing beliefs, adding new cognitions, or minimizing the importance of the contradiction." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue reframes cognitive dissonance as a regulatory mechanism. F3 (False Coherence) proposes that dissonance reduction is not a cognitive error but a nervous system strategy. F11 (The Emotional Paradoxes) extends this by showing that the capacity to hold contradictions without collapsing is itself a marker of regulatory capacity." },
      { id: "key-sources", title: "Key Sources", content: "Festinger, L. (1957). A Theory of Cognitive Dissonance. Stanford University Press." },
    ],
  },
  {
    slug: "cognitive-science", title: "Cognitive Science", domain: "Cognitive Science",
    originAuthor: "Gordon Bower, Daniel Kahneman, Lisa Feldman Barrett",
    summary: "Cognitive capacity is not fixed — it varies with emotional state, arousal level, and regulatory demands. State-dependent learning, cognitive load, and predictive processing show that what a person can think depends on how their nervous system is currently organized.",
    tags: ["state-dependent learning", "cognitive load", "predictive processing", "attention"],
    frameworks: ["F1", "F3", "F6", "F12"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Bower's state-dependent learning — information encoded in one emotional state is more accessible in the same state. Kahneman's cognitive load — emotional arousal and threat consume cognitive resources. Barrett's predictive processing — the brain constructs perception based on prior experience and current bodily state." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue synthesizes these findings into the 'state determines capacity' principle: what a person can perceive, think, feel, and do depends on their current regulatory state. This is why 'just think about it differently' fails when the nervous system is in a threat state." },
      { id: "key-sources", title: "Key Sources", content: "Bower, G. H. (1981). Mood and memory. American Psychologist. \u00b7 Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux. \u00b7 Barrett, L. F. (2017). How Emotions Are Made. Houghton Mifflin." },
    ],
  },
  {
    slug: "developmental-psychology", title: "Developmental Psychology", domain: "Developmental Psychology",
    originAuthor: "Stella Chess, Alexander Thomas, Jerome Kagan, Daniel Stern",
    summary: "Infants are born with distinct temperamental patterns — innate behavioral and emotional styles that shape how they engage with the world. These patterns interact with caregiving environments to produce developmental outcomes.",
    tags: ["temperament", "infancy", "implicit knowing", "Stern", "Kagan"],
    frameworks: ["F1", "F2"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Developmental psychology research established that infants arrive with distinct temperamental patterns. Chess and Thomas identified dimensions like activity level and adaptability. Kagan documented behavioral inhibition as a stable trait. Stern mapped how infants develop self-experience through 'vitality affects' and 'implicit relational knowing.'" },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue uses temperament research to ground the Real Self in biology: there are innate differences in how nervous systems are organized. These aren't pathology — they're variation. Stern's implicit relational knowing explains calibration: the nervous system learns what to expect from relationships before conscious memory begins." },
      { id: "key-sources", title: "Key Sources", content: "Chess, S. & Thomas, A. (1996). Temperament: Theory and Practice. Brunner/Mazel. \u00b7 Kagan, J. (1994). Galen's Prophecy. Basic Books. \u00b7 Stern, D. N. (1985). The Interpersonal World of the Infant. Basic Books." },
    ],
  },
  {
    slug: "emotion-science", title: "Emotion Science", domain: "Emotion Science",
    originAuthor: "James Gross, Daniel Siegel, Barbara Fredrickson, Paul Ekman",
    summary: "Emotion regulation is a process, not an outcome. How we respond to emotional signals — through attention, appraisal, and response modulation — shapes both immediate experience and long-term patterns. Positive emotions broaden capacity; threat narrows it.",
    tags: ["emotion regulation", "window of tolerance", "broaden-and-build", "positive psychology"],
    frameworks: ["F1", "F8", "F12", "M3"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Gross developed the process model showing five points where regulation can occur. Siegel introduced the window of tolerance — the zone where emotions can be processed without overwhelm. Fredrickson's broaden-and-build theory shows that positive emotions expand cognitive and behavioral repertoires." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue maps the window of tolerance onto the gradient: Connection is within the window (broad capacity), Protection is at the edge (narrowing), Control and Domination are chronic states outside the window. The broaden-and-build model explains why Connection enables learning and repair." },
      { id: "key-sources", title: "Key Sources", content: "Gross, J. J. (2014). Handbook of Emotion Regulation. Guilford Press. \u00b7 Siegel, D. J. (1999). The Developing Mind. Guilford Press. \u00b7 Fredrickson, B. L. (2001). The broaden-and-build theory. American Psychologist." },
    ],
  },
  {
    slug: "evolutionary-psychology", title: "Evolutionary Psychology", domain: "Evolutionary Psychology",
    originAuthor: "Cosmides & Tooby, David Buss, Robin Dunbar",
    summary: "Human cognition evolved to solve survival problems that body-level responses alone could not. Emotional and cognitive systems are not opposed — they are sequential adaptations, each solving different classes of threat at different timescales.",
    tags: ["evolution", "cognition", "survival", "adaptation", "social brain"],
    frameworks: ["F1", "F12"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Emotions evolved as rapid survival signals before cognition existed. Cognition evolved as an additional layer for problems too complex for body-level responses. Social cognition — the capacity to model other minds — evolved to navigate increasingly complex group dynamics." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue uses evolutionary framing to explain the four-mode architecture: Connection and Protection are body-first modes that ran for millions of years before cognition. Control and Domination are cognition-first modes — what cognition does when recruited into the threat response." },
      { id: "key-sources", title: "Key Sources", content: "Cosmides, L. & Tooby, J. (1992). Cognitive adaptations for social exchange. In The Adapted Mind. \u00b7 Dunbar, R. I. M. (1998). The social brain hypothesis. Evolutionary Anthropology." },
    ],
  },
  {
    slug: "humanistic-psychology", title: "Humanistic Psychology", domain: "Humanistic Psychology",
    originAuthor: "Carl Rogers, Abraham Maslow",
    summary: "Humans possess an inherent actualizing tendency — a drive toward growth, authenticity, and self-realization. When conditions of worth are imposed, this tendency is constrained.",
    tags: ["self-actualization", "Rogers", "Maslow", "organismic self", "conditions of worth"],
    frameworks: ["F1", "F8", "F11"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Humanistic Psychology proposes that humans have an inherent drive toward growth and self-actualization. Rogers' organismic self describes an inner knowing that accurately perceives what the organism needs. Problems arise when conditions of worth override this inner compass." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue grounds Rogers' insights in nervous system biology. The organismic self is the Real Self — the emotional-somatic system that processes safety, threat, and need before cognition. The actualizing tendency is what emerges when Connection is restored." },
      { id: "key-sources", title: "Key Sources", content: "Rogers, C. R. (1961). On Becoming a Person. Houghton Mifflin. \u00b7 Maslow, A. H. (1968). Toward a Psychology of Being. Van Nostrand." },
    ],
  },
  {
    slug: "internal-family-systems", title: "Internal Family Systems (IFS)", domain: "Clinical Psychology",
    originAuthor: "Richard Schwartz",
    summary: "A therapeutic model proposing that the psyche contains multiple sub-personalities or 'parts' — each with its own perspective, memories, and protective function — organized around a core Self that can lead when accessed.",
    tags: ["IFS", "parts work", "self-leadership", "protective parts", "clinical psychology"],
    frameworks: ["F3", "F4", "F5", "F8", "F11"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "IFS proposes that the mind naturally contains multiple parts (Managers, Firefighters, Exiles) organized around a core Self. Parts take on protective roles in response to overwhelming experience. Healing involves accessing Self-energy and building relationships with parts rather than eliminating them." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "F3 maps how protective parts maintain false coherence as a regulatory strategy. F4 maps IFS's protective parts as internal rule-enforcers. F8 uses the parts model to explain how repair involves building relationship with adaptive patterns. F11 integrates the insight that contradictory internal states are not dysfunction." },
      { id: "key-sources", title: "Key Sources", content: "Schwartz, R. C. (1995). Internal Family Systems Therapy. Guilford Press. \u00b7 Schwartz, R. C. & Sweezy, M. (2020). Internal Family Systems Therapy (2nd ed.). Guilford Press." },
    ],
  },
  {
    slug: "interoception", title: "Interoception", domain: "Affective Neuroscience",
    originAuthor: "A. D. Craig",
    summary: "The body's internal signalling system — the sense of the physiological condition of the entire body. Interoception provides the raw data from which the nervous system constructs feelings, drives, and the sense of self.",
    tags: ["interoception", "body signals", "insula", "homeostasis", "self-awareness"],
    frameworks: ["F1", "M1", "M3"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Interoception is the sense of the physiological condition of the body — heart rate, breath, gut, temperature, pain, and other internal signals. Craig demonstrated that interoception is not just visceral sensation — it is the foundation of subjective feeling, emotional awareness, and the embodied sense of self." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue positions interoception as the input channel for neuroception — the raw data the nervous system evaluates when determining safety or threat. Interoceptive accuracy correlates with emotional awareness — the better the system reads its own signals, the more accurately it can orient." },
      { id: "key-sources", title: "Key Sources", content: "Craig, A. D. (2009). How Do You Feel — Now? Nature Reviews Neuroscience. \u00b7 Craig, A. D. (2015). How Do You Feel? Princeton University Press." },
    ],
  },
  {
    slug: "interpersonal-neurobiology", title: "Interpersonal Neurobiology", domain: "Interpersonal Neurobiology",
    originAuthor: "Daniel Siegel, Allan Schore",
    summary: "An interdisciplinary framework showing how relationships shape brain development and neural integration — the mind emerges from the interaction between neurophysiology and interpersonal experience.",
    tags: ["neural integration", "brain development", "relational neuroscience", "co-regulation"],
    frameworks: ["F2", "F8", "F10", "F12"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Interpersonal Neurobiology proposes that the mind is an emergent process arising from the flow of energy and information within the body and between people. Healthy development requires neural integration — the linking of differentiated parts of the brain — which happens through attuned relationships." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue draws on IPNB to explain how the three awareness capacities develop through relational attunement (F2). The core claim — that awareness teaches awareness through co-regulation — is grounded in Siegel's work on how interpersonal experience shapes neural architecture." },
      { id: "key-sources", title: "Key Sources", content: "Siegel, D. J. (2012). The Developing Mind (2nd ed.). Guilford Press. \u00b7 Schore, A. N. (2003). Affect Regulation and the Repair of the Self. Norton." },
    ],
  },
  {
    slug: "motivational-science", title: "Motivational Science", domain: "Motivational Science",
    originAuthor: "Jeffrey Gray, Charles Carver, Michael Scheier",
    summary: "Behavior is organized around two fundamental motivational systems: approach (moving toward rewards, goals, positive outcomes) and avoidance (moving away from threats, punishments, negative outcomes).",
    tags: ["motivation", "approach-avoidance", "BIS/BAS", "self-regulation"],
    frameworks: ["F1"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Gray's Reinforcement Sensitivity Theory proposes two systems: the Behavioral Activation System (BAS) driving approach toward rewards, and the Behavioral Inhibition System (BIS) driving avoidance of threats. These are neurobiological orientations that can become trait-like through repeated activation." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue treats approach/avoidance as the motivational substrate of the Four-Mode Gradient. Connection represents balanced, flexible motivation with approach available. Control and Domination represent chronic avoidance orientation — where the system has learned that approach is dangerous." },
      { id: "key-sources", title: "Key Sources", content: "Gray, J. A. (1982). The Neuropsychology of Anxiety. Oxford University Press. \u00b7 Carver, C. S. & Scheier, M. F. (1998). On the Self-Regulation of Behavior. Cambridge University Press." },
    ],
  },
  {
    slug: "object-relations", title: "Object Relations Theory", domain: "Object Relations",
    originAuthor: "Donald Winnicott, Melanie Klein, Ronald Fairbairn",
    summary: "The self develops through early relational experience. When caregiving is 'good enough,' the True Self emerges; when it fails, a False Self forms as protective adaptation.",
    tags: ["True Self", "False Self", "Winnicott", "relational", "development"],
    frameworks: ["F2", "F3", "F5", "F8"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Object Relations Theory proposes that the self is formed through early relationships with caregivers ('objects'). Winnicott distinguished between the True Self — spontaneous, authentic, alive — and the False Self — compliant, adaptive, protective. The False Self develops when caregiving fails to meet the infant's spontaneous gestures." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue translates Winnicott into nervous system terms. The Real Self is the baseline emotional-somatic configuration present at birth. The Role Mask is the cognitive-behavioral structure built when the Real Self couldn't be safely expressed." },
      { id: "key-sources", title: "Key Sources", content: "Winnicott, D. W. (1960). Ego distortion in terms of true and false self. In The Maturational Processes. Hogarth Press. \u00b7 Winnicott, D. W. (1971). Playing and Reality. Tavistock." },
    ],
  },
  {
    slug: "polyvagal", title: "Polyvagal Theory", domain: "Polyvagal Theory",
    originAuthor: "Stephen Porges",
    summary: "The autonomic nervous system operates through three hierarchical circuits — ventral vagal, sympathetic, and dorsal vagal — that shape our capacity for social engagement, mobilization, and immobilization.",
    tags: ["autonomic nervous system", "vagal tone", "neuroception", "social engagement"],
    frameworks: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "M3"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Polyvagal Theory proposes that the autonomic nervous system has three distinct branches organized hierarchically. The most evolved (ventral vagal) supports social engagement. The sympathetic branch activates fight-or-flight. The oldest (dorsal vagal) produces shutdown. The nervous system moves through these states based on neuroception — an unconscious assessment of safety or threat." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue's Four-Mode Gradient extends polyvagal theory by mapping how chronic threat responses can become entrenched patterns of Control and Domination. The gradient tracks the progression from adaptive Protection to maladaptive Control — and the capacity to return to Connection, which is the key variable predicting relational outcomes." },
      { id: "key-sources", title: "Key Sources", content: "Porges, S. W. (2011). The Polyvagal Theory. Norton. \u00b7 Porges, S. W. (2017). The Pocket Guide to the Polyvagal Theory. Norton. \u00b7 Dana, D. (2018). The Polyvagal Theory in Therapy. Norton." },
    ],
  },
  {
    slug: "psychoanalysis", title: "Psychoanalysis & Defense Mechanisms", domain: "Psychoanalysis",
    originAuthor: "Sigmund Freud, Anna Freud",
    summary: "The mind employs defense mechanisms to manage anxiety arising from internal conflicts and external threats. These defenses operate unconsciously, protecting the ego from overwhelming affect.",
    tags: ["Freud", "defense mechanisms", "unconscious", "ego", "anxiety"],
    frameworks: ["F3", "F7"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Psychoanalysis identified defense mechanisms as unconscious strategies for managing anxiety. Common defenses include repression, projection, denial, rationalization, and splitting. Defenses protect the ego from affect that would be overwhelming and operate automatically, outside conscious awareness." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue translates defenses into regulatory terms. Each defense is a cognitive strategy for managing nervous system activation that exceeds the window of tolerance. These are not failures of character but intelligent adaptations. F7 traces the complete pathway from defense through strategy through domination." },
      { id: "key-sources", title: "Key Sources", content: "Freud, S. (1923). The Ego and the Id. Hogarth Press. \u00b7 Freud, A. (1936). The Ego and the Mechanisms of Defense. International Universities Press." },
    ],
  },
  {
    slug: "schema-theory", title: "Schema Theory", domain: "Clinical Psychology",
    originAuthor: "Jeffrey Young",
    summary: "Early maladaptive schemas — stable, enduring patterns developed in childhood — shape perception, emotion, and behavior across the lifespan. They function as self-perpetuating lenses through which experience is filtered.",
    tags: ["schema therapy", "early maladaptive schemas", "cognitive patterns", "clinical psychology"],
    frameworks: ["F2", "F3", "F6"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Schema Therapy identifies 18 early maladaptive schemas organized into five domains corresponding to unmet core emotional needs. Schemas become self-perpetuating through schema maintenance, avoidance, and compensation." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue integrates schema theory into F2's account of how capacity configurations become stable patterns. What schema therapy calls early maladaptive schemas, TEG-Blue maps as the cognitive structures that form around whichever awareness capacities had conditions to develop." },
      { id: "key-sources", title: "Key Sources", content: "Young, J. E., Klosko, J. S. & Weishaar, M. E. (2003). Schema Therapy: A Practitioner's Guide. Guilford Press." },
    ],
  },
  {
    slug: "self-psychology", title: "Self Psychology", domain: "Self Psychology",
    originAuthor: "Heinz Kohut",
    summary: "The self develops through empathic responsiveness from self-objects — others who provide mirroring, idealization, and twinship functions. Narcissistic injury is not vanity but developmental deficit.",
    tags: ["Kohut", "self-object", "mirroring", "narcissism", "empathy"],
    frameworks: ["F2", "F3", "F5"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Kohut's Self Psychology proposes that the self develops through relationships with self-objects — others who provide essential developmental functions: mirroring (reflecting value), idealizing (providing strength), and twinship (offering belonging). When these needs go chronically unmet, compensatory structures develop." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue translates self-object needs into nervous system terms. Mirroring is co-regulation: the caregiver's attunement teaches the child's system that its states matter. Compensatory structures are Role Mask architecture — built to secure connection when authenticity couldn't." },
      { id: "key-sources", title: "Key Sources", content: "Kohut, H. (1971). The Analysis of the Self. International Universities Press. \u00b7 Kohut, H. (1977). The Restoration of the Self. International Universities Press." },
    ],
  },
  {
    slug: "social-psychology", title: "Social Psychology", domain: "Social Psychology",
    originAuthor: "Milgram, Asch, Cialdini",
    summary: "The study of how individuals think, feel, and behave in social contexts — including conformity, obedience, group dynamics, and how situational pressures shape behavior.",
    tags: ["conformity", "obedience", "group dynamics", "situational behavior"],
    frameworks: ["F4", "F5", "F6"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Social psychology examines how social situations shape individual behavior. Key traditions include Milgram's obedience studies, Asch's conformity experiments, and Cialdini's influence principles. A consistent finding: situational pressures are far more powerful predictors of behavior than personality traits." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "F4 maps how conformity and obedience function as nervous system regulation strategies. F5 uses social dynamics to explain how worth hierarchies produce in-group/out-group sorting. F6 draws on cognitive bias research to show how perception serves regulation rather than accuracy." },
      { id: "key-sources", title: "Key Sources", content: "Milgram, S. (1974). Obedience to Authority. Harper & Row. \u00b7 Asch, S. (1951). Effects of group pressure on judgment. \u00b7 Cialdini, R. (2006). Influence: The Psychology of Persuasion." },
    ],
  },
  {
    slug: "sociology", title: "Sociology & Capital Theory", domain: "Sociology",
    originAuthor: "Bourdieu, Bernstein, Goffman",
    summary: "The study of how social structures, institutions, and cultural norms shape human behavior — including how power, class, and symbolic capital organize collective life.",
    tags: ["social structure", "capital theory", "habitus", "collective behavior"],
    frameworks: ["F4", "F5"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Bourdieu's capital theory (economic, social, cultural, and symbolic capital as sources of power), Bernstein's linguistic codes (how language patterns reflect and reproduce social class), and Goffman's dramaturgy (how people perform social roles to manage impressions)." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue draws on sociology to explain how individual nervous system regulation patterns scale into collective structures. F4 maps how rule systems emerge from collective threat regulation. F5 uses capital theory to explain how rules become sorting systems." },
      { id: "key-sources", title: "Key Sources", content: "Bourdieu, P. (1984). Distinction. Harvard University Press. \u00b7 Bernstein, B. (1971). Class, Codes and Control. Routledge. \u00b7 Goffman, E. (1959). The Presentation of Self in Everyday Life. Anchor Books." },
    ],
  },
  {
    slug: "stress-physiology", title: "Stress Physiology", domain: "Stress Physiology",
    originAuthor: "Robert Sapolsky, Bruce McEwen",
    summary: "The stress response is designed for acute activation — short bursts of mobilization that resolve and restore. When activation becomes chronic, the cumulative physiological cost (allostatic load) damages the systems it was designed to protect.",
    tags: ["stress", "allostatic load", "cortisol", "HPA axis", "chronic stress"],
    frameworks: ["F1", "F5", "M3"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "The stress response (HPA axis activation, cortisol release, sympathetic arousal) is designed for acute, time-limited threats. When activation becomes chronic — through sustained threat, poverty, or traumatic environments — the cumulative cost (allostatic load) damages cardiovascular, immune, metabolic, and neural systems." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue maps the designed stress response onto the Protection mode — acute, time-limited, and restorable. Chronic stress maps onto stuck compass positions. Control and Domination are costly — they recruit the stress response chronically, burning fuel designed to last hours, not years." },
      { id: "key-sources", title: "Key Sources", content: "Sapolsky, R. M. (2004). Why Zebras Don't Get Ulcers (3rd ed.). Holt. \u00b7 McEwen, B. S. (2000). Allostasis and allostatic load. Neuropsychopharmacology." },
    ],
  },
  {
    slug: "trauma-research", title: "Trauma Research", domain: "Trauma Research",
    originAuthor: "Bessel van der Kolk, Judith Herman",
    summary: "Trauma is stored in the body, not just the mind. Defensive responses that were interrupted or overwhelmed during threat continue to seek completion, shaping physiology, perception, and behavior long after danger has passed.",
    tags: ["trauma", "PTSD", "developmental trauma", "body-based therapy", "defensive responses"],
    frameworks: ["F1", "F2", "F3", "F7", "F8", "F12", "M3"],
    content: [
      { id: "core-concept", title: "Core Concept", content: "Traumatic experiences are encoded in the body's implicit memory systems. When threat overwhelms the nervous system's capacity to respond, defensive actions (fight, flight, freeze, fawn) remain incomplete. These unfinished responses continue to organize physiology and behavior." },
      { id: "teg-blue-integration", title: "How TEG-Blue Integrates This", content: "TEG-Blue maps trauma responses onto the Four-Mode Gradient: fight and flight as active Protection, freeze and fawn as collapsed Protection or early Control patterns. Chronic trauma calibrates the system toward Control or Domination. The framework explains why cognitive insight alone rarely resolves trauma." },
      { id: "key-sources", title: "Key Sources", content: "van der Kolk, B. (2014). The Body Keeps the Score. Viking. \u00b7 Herman, J. (1992). Trauma and Recovery. Basic Books. \u00b7 Walker, P. (2013). Complex PTSD: From Surviving to Thriving. Azure Coyote." },
    ],
  },

  // ─── New entries (traditions referenced across F1-F12 framework pages) ───
  {
    slug: "family-systems", title: "Family Systems Theory", domain: "Family Systems",
    originAuthor: "Murray Bowen, Virginia Satir, Salvador Minuchin",
    summary: "Families function as emotional systems where patterns of interaction, alliance, and conflict transmit across generations. Individual symptoms often serve a function within the larger family system.",
    tags: ["family therapy", "multigenerational transmission", "systemic regulation", "triangulation"],
    frameworks: ["F3", "F4", "F10", "F11", "M2"],
  },
  {
    slug: "mentalization", title: "Mentalization Theory", domain: "Clinical Psychology",
    originAuthor: "Peter Fonagy, Mary Target, Jon Allen",
    summary: "The capacity to understand behavior — in oneself and others — in terms of underlying mental states (thoughts, feelings, desires, intentions). Develops through safe relational experiences and breaks down under threat.",
    tags: ["mentalization", "reflective functioning", "theory of mind", "developmental psychology"],
    frameworks: ["F8", "F9", "M2"],
  },
  {
    slug: "social-dominance", title: "Social Dominance Theory", domain: "Social Psychology",
    originAuthor: "Jim Sidanius & Felicia Pratto, John Jost & Mahzarin Banaji",
    summary: "Societies organize into group-based hierarchies maintained through institutional discrimination, behavioral asymmetry, and legitimizing myths. System justification theory explains why even disadvantaged groups endorse the status quo.",
    tags: ["social dominance", "system justification", "hierarchy", "institutional discrimination"],
    frameworks: ["F5", "F6"],
  },
  {
    slug: "terror-management", title: "Terror Management Theory", domain: "Social Psychology",
    originAuthor: "Jeff Greenberg, Tom Pyszczynski, Sheldon Solomon",
    summary: "Awareness of mortality creates existential anxiety that humans manage through cultural worldviews and self-esteem. Mortality salience increases conformity, in-group bias, and aggression toward worldview-threatening others.",
    tags: ["mortality salience", "existential anxiety", "worldview defense", "self-esteem"],
    frameworks: ["F4", "F6"],
  },
  {
    slug: "moral-psychology", title: "Moral Psychology", domain: "Moral Psychology",
    originAuthor: "Jonathan Haidt, Lawrence Kohlberg",
    summary: "Moral judgments are driven primarily by intuition rather than reasoning. Haidt's social intuitionist model shows that moral reasoning is largely post-hoc justification for gut reactions shaped by culture, emotion, and group identity.",
    tags: ["moral reasoning", "moral intuition", "post-hoc justification", "moral foundations"],
    frameworks: ["F3", "F6"],
  },
  {
    slug: "behavioral-reinforcement", title: "Behavioral Reinforcement", domain: "Behavioral Science",
    originAuthor: "B. F. Skinner, Chris Argyris & Donald Sch\u00f6n",
    summary: "Behavior that reduces distress is reinforced and repeated — even when it causes long-term harm. Organizational learning theory extends this to show how defensive routines become self-sealing systems that resist change.",
    tags: ["reinforcement", "operant conditioning", "defensive routines", "organizational learning"],
    frameworks: ["F4", "F7"],
  },
  {
    slug: "neurodiversity-paradigm", title: "Neurodiversity Paradigm", domain: "Neurodiversity Research",
    originAuthor: "Judy Singer, Nick Walker, Steve Silberman",
    summary: "Neurodivergence (autism, ADHD, dyslexia, etc.) represents natural human variation in neurological processing, not pathology. Disability arises from environmental mismatch, not individual deficit.",
    tags: ["neurodiversity", "autism", "ADHD", "environmental mismatch", "natural variation"],
    frameworks: ["F9"],
  },
  {
    slug: "epigenetics", title: "Epigenetics & Intergenerational Transmission", domain: "Epigenetics",
    originAuthor: "Rachel Yehuda, Michael Meaney, Frances Champagne",
    summary: "Stress modifies gene expression across generations through epigenetic mechanisms — reversible changes that don't alter DNA sequence but alter which genes are active. These modifications transmit regulatory patterns from parent to offspring.",
    tags: ["epigenetics", "gene expression", "intergenerational trauma", "stress transmission"],
    frameworks: ["F10", "M2", "M3"],
  },
  {
    slug: "narrative-psychology", title: "Narrative Psychology & Therapy", domain: "Narrative Psychology",
    originAuthor: "Michael White & David Epston, Dan McAdams, Mary Main & Ruth Goldwyn",
    summary: "Identity is constructed through the stories we tell about ourselves. Coherent narrative is a marker of earned security (Main). Narrative therapy externalizes problems and re-authors identity stories.",
    tags: ["narrative therapy", "narrative identity", "earned security", "externalization"],
    frameworks: ["F2", "F10", "F11"],
  },
  {
    slug: "network-science", title: "Network Science & Cumulative Advantage", domain: "Sociology",
    originAuthor: "Robert Merton, Albert-L\u00e1szl\u00f3 Barab\u00e1si, Thomas DiPrete",
    summary: "Small initial advantages compound through preferential attachment and positive feedback loops into large structural inequalities. The Matthew effect ('to those who have, more will be given') is a measurable mechanism in science, economics, and social systems.",
    tags: ["Matthew effect", "preferential attachment", "scale-free networks", "cumulative advantage"],
    frameworks: ["F5"],
  },
  {
    slug: "power-social-rank", title: "Power & Social Rank Theory", domain: "Social Psychology",
    originAuthor: "Dacher Keltner, Paul Gilbert, John Price",
    summary: "Power activates approach motivation and reduces inhibition, while subordination activates inhibition and threat monitoring. Social rank functions as a regulatory signal — position in hierarchy directly shapes nervous system state.",
    tags: ["power", "social rank", "approach-inhibition", "compassion-focused therapy"],
    frameworks: ["F5", "F7"],
  },
  {
    slug: "abuse-coercive-control", title: "Abuse & Coercive Control Research", domain: "Trauma Research",
    originAuthor: "Lundy Bancroft, Evan Stark, Judith Herman",
    summary: "Coercive control operates through ongoing patterns of monitoring, isolation, degradation, and enforcement — not isolated incidents. Patterns of intentionality in controlling behavior are recognizable and predictable.",
    tags: ["coercive control", "domestic abuse", "power dynamics", "intentionality"],
    frameworks: ["F7"],
  },
  {
    slug: "dual-process", title: "Dual-Process Theory", domain: "Cognitive Science",
    originAuthor: "Daniel Kahneman, Keith Stanovich, Jonathan Evans",
    summary: "Cognition operates through two systems: fast, automatic, intuitive processing (System 1) and slow, deliberate, analytical processing (System 2). TEG-Blue reframes these not as error-prone vs. corrective but as sequential partners.",
    tags: ["System 1", "System 2", "heuristics", "biases", "reasoning"],
    frameworks: ["F3", "F6", "F12", "M1", "M3"],
  },
  {
    slug: "somatic-experiencing", title: "Somatic Experiencing", domain: "Trauma Research",
    originAuthor: "Peter Levine, Pat Ogden",
    summary: "Trauma resolution requires completing interrupted defensive responses at the body level. Change requires bodily experience — the body must complete the threat cycle for the nervous system to update its threat assessment.",
    tags: ["somatic experiencing", "sensorimotor", "body-based therapy", "threat completion"],
    frameworks: ["F1", "F2", "F7", "F8", "M1", "M3"],
  },
  {
    slug: "social-identity", title: "Social Identity Theory", domain: "Social Psychology",
    originAuthor: "Henri Tajfel & John Turner, Marilynn Brewer",
    summary: "People derive self-esteem from group memberships and are motivated to maintain positive distinctiveness for their in-groups. Even minimal group assignment triggers in-group favoritism and out-group derogation.",
    tags: ["social identity", "in-group bias", "minimal group paradigm", "intergroup conflict"],
    frameworks: ["F4", "F5", "F6"],
  },
  {
    slug: "intersectionality", title: "Intersectionality & Structural Analysis", domain: "Sociology",
    originAuthor: "Kimberl\u00e9 Crenshaw, Patricia Hill Collins, Amartya Sen",
    summary: "Systems of oppression (race, gender, class, disability) interact and compound rather than operating independently. The capability approach measures real freedom to achieve valued functionings, not just formal rights.",
    tags: ["intersectionality", "structural inequality", "matrix of domination", "capability approach"],
    frameworks: ["F5"],
  },
  {
    slug: "contact-hypothesis", title: "Contact Hypothesis & Intergroup Relations", domain: "Social Psychology",
    originAuthor: "Gordon Allport, Thomas Pettigrew",
    summary: "Intergroup contact reduces prejudice under specific conditions: equal status, common goals, cooperation, and institutional support. Without these conditions, contact can reinforce existing biases.",
    tags: ["contact hypothesis", "prejudice reduction", "intergroup contact", "equal status"],
    frameworks: ["F6"],
  },
  {
    slug: "dialectical-behavior-therapy", title: "Dialectical Behavior Therapy", domain: "Clinical Psychology",
    originAuthor: "Marsha Linehan",
    summary: "Builds tolerance for opposing truths through the dialectical balance of acceptance and change. Originally developed for borderline personality disorder, DBT teaches distress tolerance, emotion regulation, and interpersonal effectiveness.",
    tags: ["DBT", "dialectics", "distress tolerance", "emotion regulation"],
    frameworks: ["F11"],
  },
  {
    slug: "ecological-systems", title: "Ecological Systems Theory", domain: "Developmental Psychology",
    originAuthor: "Urie Bronfenbrenner",
    summary: "Individual behavior occurs within nested environmental contexts — microsystem, mesosystem, exosystem, macrosystem, chronosystem. Each level shapes and constrains the others, making context inseparable from development.",
    tags: ["ecological systems", "nested contexts", "environmental influence", "developmental context"],
    frameworks: ["F4", "F11"],
  },
];

// ─── RESEARCH DOMAINS (derived from THEORIES) ──────────────────
const RESEARCH_DOMAINS = [...new Set(THEORIES.map((t) => t.domain))].sort();

// ─── CORE FOUNDATIONS ───────────────────────────────────────────
const coreFoundations = [
  {
    concept: "Nervous system states",
    explanation: "Safety and threat shift what we can feel, think, and do (Polyvagal Theory, Porges)",
  },
  {
    concept: "Emotion as information",
    explanation: "Emotions carry structured data about needs, boundaries, and danger (Affective Neuroscience, Panksepp; Appraisal Theory, Lazarus)",
  },
  {
    concept: "Regulation",
    explanation: "The capacity to shift between states is more predictive than any single state (self-regulation research, Gross)",
  },
  {
    concept: "Attachment",
    explanation: "Early relational patterns shape how we seek safety across the lifespan (Bowlby, Ainsworth, Main)",
  },
  {
    concept: "Identity under threat",
    explanation: "The self adapts, masks, and fragments under chronic stress (Winnicott, IFS, ego development)",
  },
  {
    concept: "Learning and development",
    explanation: "Emotional patterns are learned, reinforced, and can be changed (developmental psychology, neuroplasticity)",
  },
  {
    concept: "Culture and feedback loops",
    explanation: "Individual patterns scale into families, institutions, and social structures (Bronfenbrenner, systems theory)",
  },
  {
    concept: "Repair",
    explanation: "The path back to connection is measurable and specific, not abstract (repair research, complexity markers)",
  },
];

// ─── GLOBAL MODELS DATA ────────────────────────────────────────
const globalModels = [
  {
    id: 1,
    name: "Plutchik's Wheel of Emotions",
    author: "Robert Plutchik",
    coreContribution: "Maps 8 primary emotions and shows how they combine into complex feelings — one of the most widely used tools for teaching emotional vocabulary.",
    tegBlueAdds: [
      "Places each emotion inside a systemic context (Connection, Protection, Control, Domination) so the same emotion reads differently depending on the nervous system state it emerges from",
      "Adds trauma-informed gradients within each emotion — distinguishing hurt, neglect, abuse, and malicious intent",
      "Connects emotional identification to relational repair, not just classification",
    ],
    frameworks: ["F1", "F2"],
  },
  {
    id: 2,
    name: "Nonviolent Communication (NVC)",
    author: "Marshall Rosenberg",
    coreContribution: "Provides a clear language structure — observation, feeling, need, request — that promotes empathy and reduces blame in conflict.",
    tegBlueAdds: [
      "Maps the conditions under which NVC works well (Connection/Protection) and where it breaks down (Control/Domination dynamics)",
      "Adds emotional gradients that help distinguish discomfort from genuine harm",
      "Provides visual tools that make feelings and patterns visible — helpful for neurodivergent users and people in survival states",
    ],
    frameworks: ["F1", "F8"],
  },
  {
    id: 3,
    name: "Cognitive Behavioral Therapy (CBT)",
    author: "Aaron Beck, Albert Ellis",
    coreContribution: "Practical, evidence-based approach connecting thoughts, feelings, and behaviors — highly effective for anxiety, depression, and phobias.",
    tegBlueAdds: [
      "Integrates body and nervous system patterns alongside cognitive reframing",
      "Places individual thought patterns in relational and systemic context",
      "Adds trauma-informed gradients showing the difference between cognitive distortion and adaptive survival responses",
    ],
    frameworks: ["F1", "F8", "F9"],
  },
  {
    id: 4,
    name: "Polyvagal Theory",
    author: "Stephen Porges",
    coreContribution: "Explains how the autonomic nervous system shifts between safety (ventral vagal), fight/flight (sympathetic), and shutdown (dorsal vagal) — foundational for trauma-informed practice.",
    tegBlueAdds: [
      "Translates nervous system states into emotional logic and relational meaning",
      "Extends physiological states into observable patterns of connection, defense, manipulation, and oppression",
      "Bridges somatic awareness with relational repair through visual, accessible tools",
      "F4 applies neuroception to collective rule formation — group nervous system synchronization under threat produces rule systems",
      "F5 uses neuroception to explain how worth signals function as safety signals — and how chronic social threat from structural filtering holds the compass in Protection",
      "F6 uses state-dependent perception to explain how regulatory state determines what is perceived — bias as neuroception operating at the cognitive level",
      "F7 uses threat physiology to explain empathy gating — how chronic defensive states redirect Reading Emotions toward management while collapsing Emotional Resonance, producing the capacity configuration that most reliably mimics Connection",
      "F8 maps how ventral vagal safety enables capacity development — felt safety as the first of five conditions for repair, and why cognitive insight without nervous system regulation cannot produce lasting change",
      "F9 uses neuroception to explain System Mismatch — how the compass responds to environmental match or mismatch, why neurodivergent nervous systems are pushed toward Protection by structural design rather than individual pathology",
      "F10 maps co-regulation as a generational transmission pathway — the adult's nervous system functions as the child's external regulator, transmitting regulatory capacity through nervous system synchronization",
      "F11 uses state-dependent processing to explain paradox holding capacity — compass position determines whether contradictions can be held (Connection), simplified (Protection), managed by narrative (Control), or erased (Domination)",
    ],
    frameworks: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  },
  {
    id: 5,
    name: "Zones of Regulation",
    author: "Leah Kuypers",
    coreContribution: "Simple, widely adopted color-coded system that gives children and educators a shared language for recognizing emotional states.",
    tegBlueAdds: [
      "Adds gradients within each zone — showing that 'red' contains everything from righteous anger to terror to rage, each needing different responses",
      "Reframes emotional states as information rather than behavior problems to manage",
      "Designed to be neurodivergent-friendly, avoiding shaming for being in any particular state",
    ],
    frameworks: ["F1", "F2"],
  },
  {
    id: 6,
    name: "Freud's Ego Model",
    author: "Sigmund Freud (1923)",
    coreContribution: "Groundbreaking attempt to describe inner psychological conflict through id, ego, and superego — recognized that much of the self works unconsciously.",
    tegBlueAdds: [
      "Reframes ego as shaped by survival strategies rather than inherent structure",
      "Expands beyond three parts into a continuous gradient of modes: Connection, Protection, Control, Domination",
      "Connects intrapsychic patterns to relational dynamics and systemic harm",
    ],
    frameworks: ["F3", "F5"],
  },
  {
    id: 7,
    name: "Winnicott's True/False Self",
    author: "Donald Winnicott",
    coreContribution: "Explains how children develop a True Self when caregivers attune, and a False Self when they must comply for survival — validates the pain of losing authenticity.",
    tegBlueAdds: [
      "Reframes True/False Self as awareness configuration: which capacities had conditions to develop and which didn't",
      "Maps how adaptive identities form around incomplete awareness sets and escalate across the gradient",
      "Provides tools to develop capacities that never had conditions to form, rather than 'finding' a hidden self",
    ],
    frameworks: ["F2", "F3", "F5", "F8"],
  },
  {
    id: 8,
    name: "Rogers' Organismic Valuing",
    author: "Carl Rogers",
    coreContribution: "Posits an innate drive toward growth, healing, and authenticity when conditions of empathy, acceptance, and congruence are present — the basis of person-centered therapy.",
    tegBlueAdds: [
      "Maps how survival modes override or distort the organismic compass",
      "Shows how repair reopens the path to belonging and growth",
      "Places authenticity inside a visual gradient, making distortions visible and addressable",
    ],
    frameworks: ["F1", "F8", "F11"],
  },
  {
    id: 9,
    name: "Jung's Persona",
    author: "Carl Jung",
    coreContribution: "Recognizes the adaptive function of the social mask — the tension between public identity and inner reality that shapes how we navigate belonging.",
    tegBlueAdds: [
      "Reframes the Persona as awareness configuration — identity built from whichever capacities were available",
      "Distinguishes adaptive identities rooted in belonging from those rooted in defense, control, or domination",
      "Provides concrete pathways for developing capacities and reclaiming authenticity",
    ],
    frameworks: ["F2", "F3", "F5", "F11"],
  },
  {
    id: 10,
    name: "Internal Family Systems (IFS)",
    author: "Richard Schwartz",
    coreContribution: "Compassionate, trauma-informed model that views the mind as made of parts (protectors, managers, exiles, Self) — normalizes protective strategies instead of pathologizing them.",
    tegBlueAdds: [
      "Integrates inner parts into a relational and systemic gradient",
      "Shows how inner protectors mirror relational patterns across Connection, Protection, Control, and Domination",
      "F4 maps IFS's protective parts as internal rule-enforcers — the self-policing mechanism (Steps 6–7 of rule internalization)",
      "Adds harm-measurement scales that connect personal healing to collective repair",
    ],
    frameworks: ["F3", "F4", "F5", "F8", "F11"],
  },
  {
    id: 11,
    name: "Ego Development Theory",
    author: "Jane Loevinger & others",
    coreContribution: "Maps stages of identity development — from pre-conventional to post-autonomous — showing how self-concept and meaning-making evolve over time.",
    tegBlueAdds: [
      "Shows how trauma can stall, distort, or reverse developmental progression",
      "Integrates identity growth with survival/belonging gradients",
      "Frames development as dynamic and relational, not only cognitive or linear",
    ],
    frameworks: ["F3", "F5", "F11"],
  },
  {
    id: 12,
    name: "Goffman's Dramaturgical Self",
    author: "Erving Goffman",
    coreContribution: "Reveals how social life operates like a stage — people play roles depending on audience, context, and setting — foundational for role theory and social psychology.",
    tegBlueAdds: [
      "Expands role-play into awareness configuration: roles formed around available capacities",
      "Distinguishes authentic roles from survival-driven ones across the four modes",
      "F4 maps Goffman's dramaturgical performance to performance rules — social maintenance through unspoken rules",
      "Shows pathways for healing from role entrapment and reclaiming genuine connection",
    ],
    frameworks: ["F2", "F3", "F4", "F5", "F6"],
  },
  {
    id: 13,
    name: "Defense Mechanisms",
    author: "Sigmund Freud & Anna Freud",
    coreContribution: "Early recognition that the mind develops protective strategies (denial, projection, rationalization) to manage pain — still widely referenced in clinical psychology.",
    tegBlueAdds: [
      "Reframes defenses as adaptive survival responses rather than pathology",
      "Places defenses on a gradient: protection, manipulation, tyranny — each requiring different responses",
      "Connects individual defense patterns to systemic harm and relational repair",
      "F7 traces the complete pathway from defense through strategy through domination as a single reinforcement-driven trajectory — the five-stage escalation pathway with the Crossroads as the named transition from state-based defense to strategy-based control",
    ],
    frameworks: ["F3", "F7"],
  },
  {
    id: 14,
    name: "Cognitive Dissonance Theory",
    author: "Leon Festinger",
    coreContribution: "Explains the discomfort when beliefs, emotions, or actions conflict — and how people resolve it through changing beliefs, justifying actions, or denial.",
    tegBlueAdds: [
      "Shows how dissonance is experienced somatically and emotionally, not just cognitively",
      "Maps how unresolved dissonance can push people toward denial, defense, or manipulation",
      "F6 maps dissonance as the mechanism driving the six-step bias formation loop — uncertainty triggers fast interpretation that fuses with identity and resists revision",
      "Provides repair tools to face contradictions without causing further harm",
    ],
    frameworks: ["F3", "F6", "F7", "F11"],
  },
  {
    id: 15,
    name: "Disorganized Attachment & Complex PTSD",
    author: "Mary Main, Judith Herman, Bessel van der Kolk",
    coreContribution: "Explains paradoxical push-pull dynamics where closeness itself feels dangerous — connects childhood relational trauma to lifelong patterns of dysregulation and identity disturbance.",
    tegBlueAdds: [
      "Integrates attachment disruption and CPTSD into the Emotional Gradient Framework",
      "Maps how disorganized attachment produces specific awareness configurations and chronic modes",
      "F4 maps intergenerational trauma transmission as rule replication across generations — traumatic rules passed through families and institutions",
      "F5 traces how conditional safety produces worth-seeking as regulation — and how chronic invisibility from structural filtering produces allostatic load and weathering",
      "Provides gradients and tools for relational repair and nervous system healing",
    ],
    frameworks: ["F1", "F2", "F3", "F4", "F5", "F8", "F10", "F12"],
  },
];

const SIDEBAR_SECTIONS = [
  { label: "145+ Theories", href: "#research-traditions", description: "Every established theory TEG-Blue draws from, credited and documented with full research lineage." },
  { label: "24 Research Domains", href: "#research-domains", description: "From affective neuroscience to trauma studies — filterable by domain and framework cross-reference." },
  { label: "Framework Tags", href: "#framework-tags", description: "Each theory tagged to its connected frameworks (F1–F12, M1–M2) showing where it integrates." },
  { label: "CSV Download", href: "#csv-download", description: "Full dataset available for download. Open data, open access." },
];

// ─── PAGE COMPONENT ─────────────────────────────────────────────

export default function ScientificFoundationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState(null);

  // Filtered theories for Evidence Map
  const filteredTheories = useMemo(() => {
    let result = THEORIES;
    if (activeDomain) {
      result = result.filter((t) => t.domain === activeDomain);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title?.toLowerCase().includes(q) ||
          t.summary?.toLowerCase().includes(q) ||
          t.originAuthor?.toLowerCase().includes(q) ||
          t.frameworks?.some((f) => f.toLowerCase().includes(q)) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [searchQuery, activeDomain]);

  // Group filtered theories by domain
  const groupedByDomain = useMemo(() => {
    const groups = filteredTheories.reduce((acc, theory) => {
      const domain = theory.domain || "Other";
      if (!acc[domain]) acc[domain] = [];
      acc[domain].push(theory);
      return acc;
    }, {});
    return groups;
  }, [filteredTheories]);

  const sortedDomains = Object.keys(groupedByDomain).sort();

  // CSV download
  const downloadCSV = useCallback(() => {
    const headers = ["Title", "Domain", "Author", "Summary", "Frameworks", "Tags"];
    const rows = THEORIES.map((t) => [
      t.title || "",
      t.domain || "",
      t.originAuthor || "",
      (t.summary || "").replace(/"/g, '""'),
      (t.frameworks || []).join("; "),
      (t.tags || []).join("; "),
    ]);
    const csv = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "teg-blue-theory-database.csv";
    link.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/scientific-foundations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="SCIENTIFIC FOUNDATIONS"
            title="Scientific Foundations"
            description={`The established research that TEG-Blue builds on — ${THEORIES.length} research traditions across ${RESEARCH_DOMAINS.length} domains, integrating 145+ individual theories.`}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* ─── Regulation Thread framing ──────────────────────────── */}
        <div
          style={{
            padding: "12px 16px",
            background: hexToRgba(SPECTRUM.cobalt, 0.06),
            borderRadius: 8,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: SPECTRUM.cobalt,
              marginBottom: 6,
            }}
          >
            Why These Theories Connect
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 8px" }}>
            These research traditions developed independently, across separate disciplines. TEG-Blue proposes that they describe the same underlying mechanism at different scales: when the body&apos;s natural return path is missing, something else regulates instead — cognition, rules, hierarchies, bias, domination. Each substitute works. Each comes at a cost.
          </p>
          <Link
            href="/frameworks-map#the-regulation-thread"
            style={{
              fontSize: 13,
              color: SPECTRUM.cobalt,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            See the Regulation Thread →
          </Link>
        </div>

        {/* ─── 2. CORE FOUNDATIONS ────────────────────────────────── */}
        <CoreFoundations />

        {/* ─── 3. HOW TEG-BLUE BUILDS ON EXISTING MODELS ─────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: TEXT.primary,
              margin: "0 0 12px 0",
            }}
          >
            How TEG-Blue Builds on Existing Models
          </h2>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            TEG-Blue does not replace these models. It works like a translation layer that
            helps them speak to each other inside one shared map. Each card shows what the
            model contributes and what TEG-Blue translates or adds.
          </p>

          {globalModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </section>

        {/* ─── 4. EVIDENCE MAP ───────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${BORDER.default}`,
            margin: "48px 0",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              background: BG.page,
              padding: "0 16px",
              fontSize: 12,
              color: TEXT.muted,
              fontFamily: FONT.mono,
            }}
          >
            EVIDENCE MAP
          </span>
        </div>

        <section id="research-traditions" style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: TEXT.primary,
              margin: "0 0 12px 0",
            }}
          >
            {THEORIES.length} Research Traditions
          </h2>

          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            TEG-Blue integrates 145+ established theories organized into {RESEARCH_DOMAINS.length} research
            domain groupings and {THEORIES.length} tradition-level entries. Each entry represents a research
            tradition with its key researchers and cross-references to the frameworks that draw on it.
            This section exists for inspection — to show what the grounding is,
            how it was selected, and how to audit it.
          </p>

          {/* Method note */}
          <div
            style={{
              padding: 16,
              background: hexToRgba(SPECTRUM.slate, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.12)}`,
              marginBottom: 24,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: TEXT.secondary }}>How we selected these:</strong>{" "}
              The architecture was developed first — through independent research, observation, and
              cross-disciplinary reading. AI research tools were then used to systematically identify
              which established theories align with each framework. Each tradition entry lists its key
              researchers and which frameworks reference it. This is a working hypothesis, not a finished
              bibliography. We invite corrections.
            </p>
          </div>

          {/* Search + filters */}
          <div style={{ marginBottom: 20 }}>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search theories by name, author, or keyword..."
            />
          </div>

          {/* Domain filter chips */}
          <div id="research-domains" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            <button
              onClick={() => setActiveDomain(null)}
              style={{
                padding: "6px 12px",
                fontSize: 12,
                fontFamily: FONT.mono,
                fontWeight: 500,
                borderRadius: 6,
                border: `1px solid ${!activeDomain ? hexToRgba(SPECTRUM.blue, 0.4) : BORDER.default}`,
                background: !activeDomain ? hexToRgba(SPECTRUM.blue, 0.12) : "transparent",
                color: !activeDomain ? SPECTRUM.blue : TEXT.muted,
                cursor: "pointer",
              }}
            >
              All domains
            </button>
            {RESEARCH_DOMAINS.map((domain) => {
              const isActive = activeDomain === domain;
              const chipColor = getDomainColor(domain);
              return (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(isActive ? null : domain)}
                  style={{
                    padding: "6px 12px",
                    fontSize: 12,
                    fontFamily: FONT.mono,
                    fontWeight: 500,
                    borderRadius: 6,
                    border: `1px solid ${isActive ? hexToRgba(chipColor, 0.4) : BORDER.default}`,
                    background: isActive ? hexToRgba(chipColor, 0.12) : "transparent",
                    color: isActive ? chipColor : TEXT.muted,
                    cursor: "pointer",
                  }}
                >
                  {domain}
                </button>
              );
            })}
          </div>

          {/* Results count + CSV download */}
          <div
            id="framework-tags"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 13, color: TEXT.muted }}>
              {`${filteredTheories.length} research traditions`}
              {(searchQuery || activeDomain)
                ? ` (filtered from ${THEORIES.length})`
                : ""}
            </span>
            <button
              id="csv-download"
              onClick={downloadCSV}
              style={{
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 500,
                borderRadius: 6,
                border: `1px solid ${BORDER.default}`,
                background: "transparent",
                color: TEXT.muted,
                cursor: "pointer",
                fontFamily: FONT.mono,
              }}
            >
              Download CSV
            </button>
          </div>

          {/* Theory cards by domain */}
          {sortedDomains.map((domain) => (
              <section key={domain} style={{ marginBottom: 32 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: TEXT.primary,
                      margin: 0,
                      textTransform: "capitalize",
                    }}
                  >
                    {domain}
                  </h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      color: getDomainColor(domain),
                      padding: "3px 8px",
                      background: hexToRgba(getDomainColor(domain), 0.1),
                      borderRadius: 4,
                    }}
                  >
                    {groupedByDomain[domain].length}
                  </span>
                </div>

                {groupedByDomain[domain].map((theory) => (
                  <ExpandableTheoryCard key={theory.slug} theory={theory} />
                ))}
              </section>
            ))}

          {/* Empty state */}
          {filteredTheories.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: 48,
                background: BG.card,
                borderRadius: 12,
                border: `1px solid ${BORDER.default}`,
              }}
            >
              <p style={{ fontSize: 15, color: TEXT.secondary, marginBottom: 8 }}>
                No research traditions match your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveDomain(null);
                }}
                style={{
                  padding: "6px 14px",
                  fontSize: 13,
                  color: SPECTRUM.blue,
                  background: "transparent",
                  border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.3)}`,
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Clear filters
                </button>
            </div>
          )}
        </section>

        {/* ─── 5. HOW WE VALIDATE ────────────────────────────────── */}
        <ValidationMethod />

        {/* ─── 6. FOOTER ──────────────────────────────────────────── */}
        {/* Author */}
        <section style={{ marginTop: 48, marginBottom: 32 }}>
          <AuthorBlock />
        </section>

        <footer
          style={{
            paddingTop: 24,
            borderTop: `1px solid ${BORDER.default}`,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <Link
              href="/methodology"
              style={{ fontSize: 13, color: TEXT.muted, textDecoration: "none" }}
            >
              Methodology
            </Link>
            <Link
              href="/collaborate"
              style={{ fontSize: 13, color: TEXT.muted, textDecoration: "none" }}
            >
              Collaborate
            </Link>
          </div>
        </footer>
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Scientific Foundations", url: "/scientific-foundations" },
            ])
          ),
        }}
      />
    </div>
  );
}

// ─── CORE FOUNDATIONS COMPONENT ──────────────────────────────────

function CoreFoundations() {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 16px 0",
        }}
      >
        Core Foundations
      </h2>

      <div
        style={{
          padding: 24,
          background: BG.card,
          borderRadius: 12,
          border: `1px solid ${BORDER.default}`,
          borderLeft: `3px solid ${SPECTRUM.indigo}`,
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            lineHeight: 1.8,
            marginTop: 0,
            marginBottom: 20,
          }}
        >
          The essential science TEG-Blue builds on, drawn from multiple disciplines:
        </p>

        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {coreFoundations.map((item, i) => (
            <li
              key={i}
              style={{
                padding: "10px 0",
                borderTop: i > 0 ? `1px solid ${hexToRgba(SPECTRUM.indigo, 0.08)}` : "none",
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: TEXT.primary }}>{item.concept}</strong>
              {" — "}
              {item.explanation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── MODEL CARD COMPONENT ───────────────────────────────────────

function ModelCard({ model }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        marginBottom: 10,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(SPECTRUM.indigo, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "14px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        {/* Name + author + framework tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary }}>
            {model.name}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>— {model.author}</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
            {model.frameworks.map((f) => (
              <Link
                key={f}
                href={getFrameworkUrl(f)}
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  padding: "2px 6px",
                  borderRadius: 3,
                  background: hexToRgba(SPECTRUM.cobalt, 0.12),
                  color: SPECTRUM.cobalt,
                  textDecoration: "none",
                }}
              >
                {f}
              </Link>
            ))}
          </div>
        </div>

        {/* Core contribution as subtitle */}
        <p
          style={{
            fontSize: 13,
            color: TEXT.muted,
            lineHeight: 1.6,
            margin: "8px 0 0 0",
          }}
        >
          {model.coreContribution}
        </p>

        {/* Expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide details" : "Show what TEG-Blue adds"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: SPECTRUM.indigo,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expanded content: 2-column */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginTop: 16,
            }}
          >
            {/* Core contribution */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.azure, 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.12)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  marginBottom: 10,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                Core contribution
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {model.coreContribution}
              </p>
            </div>

            {/* What TEG-Blue translates / adds */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.indigo, 0.05),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.12)}`,
              }}
            >
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.indigo,
                  marginBottom: 10,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                What TEG-Blue translates / adds
              </h4>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {model.tegBlueAdds.map((t, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13,
                      color: TEXT.secondary,
                      lineHeight: 1.7,
                      marginBottom: 6,
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Framework references */}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12, color: TEXT.muted }}>Appears in:</span>
            {model.frameworks.map((f) => (
              <Link
                key={f}
                href="/frameworks-map"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  padding: "3px 8px",
                  borderRadius: 4,
                  background: hexToRgba(SPECTRUM.cobalt, 0.1),
                  color: SPECTRUM.cobalt,
                  textDecoration: "none",
                }}
              >
                {f}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── EXPANDABLE THEORY CARD ─────────────────────────────────────

function ExpandableTheoryCard({ theory }) {
  const [isOpen, setIsOpen] = useState(false);
  const domainColor = getDomainColor(theory.domain);

  const coreConceptSection = theory.content?.find(
    (s) => s.id === "core-concept" || s.title?.toLowerCase().includes("core")
  );
  const integrationSection = theory.content?.find(
    (s) => s.id === "teg-blue-integration" || s.title?.toLowerCase().includes("teg-blue")
  );
  const sourcesSection = theory.content?.find(
    (s) => s.id === "key-sources" || s.title?.toLowerCase().includes("source")
  );

  return (
    <div
      style={{
        marginBottom: 10,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(domainColor, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${domainColor}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary }}>
            {theory.title}
          </span>
          {theory.originAuthor && (
            <span style={{ fontSize: 13, color: TEXT.muted }}>
              — {theory.originAuthor}
            </span>
          )}
          {theory.frameworks && theory.frameworks.length > 0 && (
            <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
              {theory.frameworks.map((f) => (
                <Link
                  key={f}
                  href={getFrameworkUrl(f)}
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: FONT.mono,
                    padding: "2px 6px",
                    borderRadius: 3,
                    background: hexToRgba(SPECTRUM.cobalt, 0.12),
                    color: SPECTRUM.cobalt,
                    textDecoration: "none",
                  }}
                >
                  {f}
                </Link>
              ))}
            </div>
          )}
        </div>

        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {theory.summary}
        </p>

        {theory.tags && theory.tags.length > 0 && (
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {theory.tags.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  padding: "2px 6px",
                  background: hexToRgba(domainColor, 0.08),
                  color: TEXT.muted,
                  borderRadius: 3,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide details" : "Show details"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: domainColor,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          {coreConceptSection && (
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {coreConceptSection.title}
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                {coreConceptSection.content}
              </p>
            </div>
          )}

          {integrationSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {integrationSection.title}
              </h4>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                {integrationSection.content}
              </p>
            </div>
          )}

          {sourcesSection && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 6,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                {sourcesSection.title}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.muted,
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {sourcesSection.content}
              </p>
            </div>
          )}

          {theory.connections && theory.connections.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: domainColor,
                  marginBottom: 8,
                  marginTop: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: FONT.mono,
                }}
              >
                Connections
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {theory.connections.map((conn, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 12,
                      padding: "4px 10px",
                      background: hexToRgba(domainColor, 0.08),
                      color: TEXT.secondary,
                      borderRadius: 4,
                      border: `1px solid ${hexToRgba(domainColor, 0.15)}`,
                    }}
                  >
                    {conn.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {theory.frameworks && theory.frameworks.length > 0 && (
            <div
              style={{
                marginTop: 16,
                paddingTop: 16,
                borderTop: `1px solid ${BORDER.default}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, color: TEXT.muted }}>Referenced in:</span>
                {theory.frameworks.map((f) => (
                  <Link
                    key={f}
                    href={getFrameworkUrl(f)}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      padding: "3px 8px",
                      borderRadius: 4,
                      background: hexToRgba(SPECTRUM.cobalt, 0.1),
                      color: SPECTRUM.cobalt,
                      textDecoration: "none",
                    }}
                  >
                    {f}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── VALIDATION METHOD COMPONENT ────────────────────────────────

function ValidationMethod() {
  return (
    <section
      style={{
        marginBottom: 48,
        padding: 24,
        background: BG.card,
        borderRadius: 12,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 20px 0",
        }}
      >
        How We Validate
      </h2>

      {/* How the mapping was built */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 8px 0",
          }}
        >
          How the mapping was built
        </h3>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
          The architecture was developed first — through independent research, observation, and
          cross-disciplinary reading. Once the structure was established, AI research tools
          (Claude, Perplexity, Microsoft Copilot) were used to systematically identify which
          established theories align with each framework.{" "}
          <Link href="/methodology" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
            Full methodology →
          </Link>
        </p>
      </div>

      {/* What the 12 indexes are */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 8px 0",
          }}
        >
          The {RESEARCH_DOMAINS.length} research domains
        </h3>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 10px 0" }}>
          The 145+ individual theories are organized into {RESEARCH_DOMAINS.length} research domain
          groupings with {THEORIES.length} tradition-level entries. Each entry can be audited,
          corrected, or extended:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {RESEARCH_DOMAINS.map((domain) => (
            <span
              key={domain}
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                padding: "4px 10px",
                background: hexToRgba(SPECTRUM.azure, 0.08),
                color: TEXT.muted,
                borderRadius: 4,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.1)}`,
              }}
            >
              {domain}
            </span>
          ))}
        </div>
      </div>

      {/* What's testable now vs later */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 10px 0",
          }}
        >
          What&rsquo;s testable now vs. later
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <div
            style={{
              padding: 14,
              background: hexToRgba(SPECTRUM.azure, 0.05),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.12)}`,
            }}
          >
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: "0 0 8px 0",
              }}
            >
              Testable now
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: 16,
                fontSize: 13,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              <li>Four-mode detection in natural language</li>
              <li>Complexity markers as regulatory capacity signals</li>
              <li>Escalation / de-escalation patterns</li>
            </ul>
          </div>
          <div
            style={{
              padding: 14,
              background: hexToRgba(SPECTRUM.slate, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.12)}`,
            }}
          >
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.slate,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: "0 0 8px 0",
              }}
            >
              Needs further work
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: 16,
                fontSize: 13,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              <li>Psychometric validation of emotional tools</li>
              <li>Cross-cultural replication</li>
              <li>Longitudinal studies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Plan for review */}
      <div>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
            margin: "0 0 8px 0",
          }}
        >
          Plan for review
        </h3>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 12px 0" }}>
          We are preparing for pre-registration of the core testable claims, with open data
          and open methodology. We explicitly invite independent replication, correction, and
          critique.{" "}
          <Link href="/collaborate" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
            Collaborate with us →
          </Link>
        </p>
      </div>
    </section>
  );
}
