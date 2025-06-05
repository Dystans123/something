export interface IntegrationGuideOption {
  text: string;
  integration: string;
  value: number; // 1-5 scale for integration level
}

export interface IntegrationGuideQuestion {
  text: string;
  category: string;
  options: IntegrationGuideOption[];
}

export const integrationGuideQuestions: IntegrationGuideQuestion[] = [
  // Self-Awareness
  {
    text: "When I notice negative emotions arising, I:",
    category: "Self-Awareness",
    options: [
      { text: "Immediately try to suppress or ignore them", integration: "resistance", value: 5 },
      { text: "Feel overwhelmed and react impulsively", integration: "reactive", value: 4 },
      { text: "Notice them but struggle to understand their source", integration: "emerging-awareness", value: 3 },
      { text: "Acknowledge them and try to understand what triggered them", integration: "developing-awareness", value: 2 },
      { text: "Welcome them as information about my inner state", integration: "integrated-awareness", value: 1 }
    ]
  },
  {
    text: "When I recognize patterns I don't like about myself, I:",
    category: "Self-Acceptance",
    options: [
      { text: "Harshly criticize myself for having these patterns", integration: "self-rejection", value: 5 },
      { text: "Feel ashamed and try to hide these aspects", integration: "shame-based", value: 4 },
      { text: "Acknowledge them but feel frustrated", integration: "struggling-acceptance", value: 3 },
      { text: "Accept them as part of my current growth process", integration: "compassionate-awareness", value: 2 },
      { text: "Embrace them as valuable information for my development", integration: "integrated-acceptance", value: 1 }
    ]
  },
  {
    text: "My relationship with my 'darker' impulses (anger, jealousy, selfishness) is:",
    category: "Shadow Integration",
    options: [
      { text: "I deny having these feelings entirely", integration: "complete-denial", value: 5 },
      { text: "I judge myself harshly when they appear", integration: "judgmental", value: 4 },
      { text: "I notice them but feel guilty about having them", integration: "guilt-based", value: 3 },
      { text: "I recognize them as normal human experiences", integration: "normalizing", value: 2 },
      { text: "I see them as messengers with valuable information", integration: "integrated-wisdom", value: 1 }
    ]
  },
  {
    text: "When someone points out a blind spot or flaw in me, I:",
    category: "Feedback Integration",
    options: [
      { text: "Become defensive and reject their observation", integration: "defensive-rejection", value: 5 },
      { text: "Feel hurt and withdraw from the interaction", integration: "wounded-withdrawal", value: 4 },
      { text: "Consider it but struggle with feeling criticized", integration: "conflicted-consideration", value: 3 },
      { text: "Thank them and reflect on the validity of their point", integration: "open-reflection", value: 2 },
      { text: "Appreciate the gift of external perspective", integration: "grateful-integration", value: 1 }
    ]
  },
  {
    text: "When I feel envious of others' success or happiness, I:",
    category: "Shadow Emotions",
    options: [
      { text: "Pretend I'm not envious and feel guilty about it", integration: "suppression-guilt", value: 5 },
      { text: "Try to diminish their achievement in my mind", integration: "defensive-devaluation", value: 4 },
      { text: "Feel bad about myself for having these feelings", integration: "self-condemnation", value: 3 },
      { text: "Recognize envy as information about my own desires", integration: "information-gathering", value: 2 },
      { text: "Use it as motivation to pursue my own goals", integration: "transformative-energy", value: 1 }
    ]
  },
  {
    text: "My approach to personal growth is:",
    category: "Growth Mindset",
    options: [
      { text: "I believe I should already be perfect", integration: "perfectionist-resistance", value: 5 },
      { text: "I get frustrated when progress is slow", integration: "impatient-growth", value: 4 },
      { text: "I want to grow but struggle with self-criticism", integration: "conflicted-growth", value: 3 },
      { text: "I see growth as a lifelong journey with ups and downs", integration: "process-oriented", value: 2 },
      { text: "I embrace all experiences as opportunities for learning", integration: "holistic-learning", value: 1 }
    ]
  },
  {
    text: "When I make mistakes or fail at something important, I:",
    category: "Failure Integration",
    options: [
      { text: "Berate myself and feel like a complete failure", integration: "catastrophic-thinking", value: 5 },
      { text: "Avoid thinking about it and distract myself", integration: "avoidant-coping", value: 4 },
      { text: "Analyze what went wrong but still feel bad", integration: "analytical-guilt", value: 3 },
      { text: "Learn from the experience and adjust my approach", integration: "adaptive-learning", value: 2 },
      { text: "See it as valuable data for my development", integration: "wisdom-integration", value: 1 }
    ]
  },
  {
    text: "My relationship with vulnerability is:",
    category: "Emotional Integration",
    options: [
      { text: "I see vulnerability as weakness to be avoided", integration: "vulnerability-avoidance", value: 5 },
      { text: "I struggle with being vulnerable even when I want to", integration: "conflicted-vulnerability", value: 4 },
      { text: "I can be vulnerable but it feels scary", integration: "cautious-vulnerability", value: 3 },
      { text: "I see vulnerability as necessary for authentic connection", integration: "valued-vulnerability", value: 2 },
      { text: "I embrace vulnerability as a source of strength", integration: "empowered-vulnerability", value: 1 }
    ]
  },
  {
    text: "When I notice myself judging others harshly, I:",
    category: "Projection Awareness",
    options: [
      { text: "Justify my judgments and continue criticizing", integration: "projection-denial", value: 5 },
      { text: "Feel guilty but continue the mental criticism", integration: "guilty-judging", value: 4 },
      { text: "Try to stop but the judgments keep coming", integration: "struggling-awareness", value: 3 },
      { text: "Wonder what this judgment reveals about me", integration: "self-inquiry", value: 2 },
      { text: "Use it as an opportunity to explore my own shadows", integration: "shadow-exploration", value: 1 }
    ]
  },
  {
    text: "My relationship with my past traumas or difficult experiences is:",
    category: "Trauma Integration",
    options: [
      { text: "I try not to think about them at all", integration: "trauma-avoidance", value: 5 },
      { text: "I feel like a victim of my past", integration: "victim-identity", value: 4 },
      { text: "I'm working on healing but it's very difficult", integration: "healing-struggle", value: 3 },
      { text: "I see them as experiences that shaped but don't define me", integration: "narrative-integration", value: 2 },
      { text: "I've transformed them into sources of wisdom and compassion", integration: "transformative-integration", value: 1 }
    ]
  },
  {
    text: "When I feel angry, I:",
    category: "Anger Integration",
    options: [
      { text: "Suppress it because anger is bad", integration: "anger-suppression", value: 5 },
      { text: "Express it destructively and regret it later", integration: "destructive-expression", value: 4 },
      { text: "Feel conflicted about having angry feelings", integration: "anger-ambivalence", value: 3 },
      { text: "Try to understand what boundary was crossed", integration: "anger-information", value: 2 },
      { text: "Use it as energy for positive change", integration: "anger-transformation", value: 1 }
    ]
  },
  {
    text: "My approach to setting boundaries is:",
    category: "Boundary Integration",
    options: [
      { text: "I rarely set boundaries to avoid conflict", integration: "boundary-avoidance", value: 5 },
      { text: "I set boundaries but feel guilty about it", integration: "guilty-boundaries", value: 4 },
      { text: "I'm learning to set boundaries but it's challenging", integration: "developing-boundaries", value: 3 },
      { text: "I set clear boundaries while remaining compassionate", integration: "balanced-boundaries", value: 2 },
      { text: "I see boundaries as acts of self-love and respect", integration: "loving-boundaries", value: 1 }
    ]
  },
  {
    text: "When I experience intense emotions, I:",
    category: "Emotional Regulation",
    options: [
      { text: "Try to control or stop them immediately", integration: "emotional-control", value: 5 },
      { text: "Feel overwhelmed and act impulsively", integration: "emotional-chaos", value: 4 },
      { text: "Struggle to stay present with them", integration: "emotional-struggle", value: 3 },
      { text: "Allow them to flow while staying grounded", integration: "emotional-flow", value: 2 },
      { text: "Welcome them as messengers from my inner wisdom", integration: "emotional-wisdom", value: 1 }
    ]
  },
  {
    text: "My relationship with my body and physical sensations is:",
    category: "Embodied Integration",
    options: [
      { text: "I'm disconnected from my body most of the time", integration: "body-disconnection", value: 5 },
      { text: "I notice my body mainly when something hurts", integration: "pain-focused", value: 4 },
      { text: "I'm learning to pay attention to bodily signals", integration: "developing-awareness", value: 3 },
      { text: "I regularly check in with my body's wisdom", integration: "body-dialogue", value: 2 },
      { text: "I trust my body as a source of intelligence", integration: "embodied-wisdom", value: 1 }
    ]
  },
  {
    text: "When I encounter parts of myself I don't like, I:",
    category: "Self-Compassion",
    options: [
      { text: "Fight against them and try to eliminate them", integration: "self-warfare", value: 5 },
      { text: "Feel disappointed in myself", integration: "self-disappointment", value: 4 },
      { text: "Try to be understanding but still judge myself", integration: "conflicted-compassion", value: 3 },
      { text: "Approach them with curiosity and kindness", integration: "compassionate-inquiry", value: 2 },
      { text: "Embrace them as parts of my whole human experience", integration: "radical-acceptance", value: 1 }
    ]
  },
  {
    text: "My approach to spiritual or transcendent experiences is:",
    category: "Spiritual Integration",
    options: [
      { text: "I dismiss them as not real or important", integration: "spiritual-denial", value: 5 },
      { text: "I want them but they feel out of reach", integration: "spiritual-yearning", value: 4 },
      { text: "I have them occasionally but struggle to integrate them", integration: "fragmented-spirituality", value: 3 },
      { text: "I see them as natural parts of human experience", integration: "natural-spirituality", value: 2 },
      { text: "I integrate them into my daily life and relationships", integration: "embodied-spirituality", value: 1 }
    ]
  },
  {
    text: "When facing uncertainty or the unknown, I:",
    category: "Mystery Integration",
    options: [
      { text: "Feel anxious and try to control everything", integration: "control-seeking", value: 5 },
      { text: "Avoid situations with too much uncertainty", integration: "uncertainty-avoidance", value: 4 },
      { text: "Tolerate uncertainty but don't like it", integration: "uncertainty-tolerance", value: 3 },
      { text: "See uncertainty as part of life's adventure", integration: "uncertainty-acceptance", value: 2 },
      { text: "Embrace the unknown as where growth happens", integration: "mystery-embrace", value: 1 }
    ]
  },
  {
    text: "My relationship with my inner critic is:",
    category: "Inner Critic Integration",
    options: [
      { text: "I believe everything my inner critic says", integration: "critic-identification", value: 5 },
      { text: "I fight against my inner critic constantly", integration: "critic-warfare", value: 4 },
      { text: "I try to ignore my inner critic but it persists", integration: "critic-avoidance", value: 3 },
      { text: "I dialogue with my inner critic to understand its concerns", integration: "critic-dialogue", value: 2 },
      { text: "I've transformed my inner critic into a wise advisor", integration: "critic-transformation", value: 1 }
    ]
  },
  {
    text: "When I think about my life purpose or meaning, I:",
    category: "Purpose Integration",
    options: [
      { text: "Feel lost and don't know what my purpose is", integration: "purpose-confusion", value: 5 },
      { text: "Think my purpose should be something grand or special", integration: "purpose-inflation", value: 4 },
      { text: "Am searching for my purpose but haven't found it", integration: "purpose-seeking", value: 3 },
      { text: "Find meaning in being authentically myself", integration: "authentic-purpose", value: 2 },
      { text: "See my purpose as serving the wholeness of life", integration: "unified-purpose", value: 1 }
    ]
  },
  {
    text: "My overall approach to personal integration is:",
    category: "Integration Approach",
    options: [
      { text: "I want to fix what's wrong with me", integration: "fix-it-mentality", value: 5 },
      { text: "I'm trying to become a better version of myself", integration: "improvement-focus", value: 4 },
      { text: "I'm working on accepting all parts of myself", integration: "acceptance-work", value: 3 },
      { text: "I see integration as honoring my wholeness", integration: "wholeness-honoring", value: 2 },
      { text: "I trust that I am perfect as I am and always growing", integration: "paradoxical-integration", value: 1 }
    ]
  }
];

export const integrationLevels = {
  "resistance": {
    name: "Resistance Stage",
    description: "You're in active resistance to parts of yourself, which is a natural starting point.",
    characteristics: [
      "Strong desire to eliminate unwanted aspects",
      "Tendency to judge yourself harshly",
      "Difficulty accepting negative emotions",
      "Focus on fixing rather than understanding"
    ],
    guidance: [
      "Practice noticing resistance without judging it",
      "Begin with small acts of self-compassion",
      "Explore what you're trying to protect yourself from",
      "Consider that resistance itself serves a purpose"
    ]
  },
  "emerging-awareness": {
    name: "Emerging Awareness Stage",
    description: "You're beginning to notice patterns and unconscious behaviors with growing curiosity.",
    characteristics: [
      "Increased self-observation",
      "Recognition of patterns without full understanding",
      "Beginning to question automatic responses",
      "Growing interest in self-exploration"
    ],
    guidance: [
      "Keep a journal of patterns you notice",
      "Practice mindfulness to strengthen awareness",
      "Ask 'What is this trying to tell me?' about difficult emotions",
      "Celebrate moments of clear seeing"
    ]
  },
  "developing-awareness": {
    name: "Developing Integration",
    description: "You're actively working with your patterns and making conscious choices about your responses.",
    characteristics: [
      "Ability to pause before reacting",
      "Growing understanding of triggers and patterns",
      "Increased emotional regulation skills",
      "Beginning to see wisdom in all experiences"
    ],
    guidance: [
      "Practice the pause between stimulus and response",
      "Work with a therapist or coach if possible",
      "Engage in regular self-reflection practices",
      "Build a support network for your growth"
    ]
  },
  "compassionate-awareness": {
    name: "Compassionate Integration",
    description: "You approach yourself with kindness and see all parts of your experience as valuable.",
    characteristics: [
      "Self-compassion in difficult moments",
      "Ability to hold paradox and complexity",
      "Seeing challenges as growth opportunities",
      "Balanced relationship with strengths and shadows"
    ],
    guidance: [
      "Deepen your compassion practices",
      "Explore how your struggles have created wisdom",
      "Share your journey to help others",
      "Continue integrating body, mind, and spirit"
    ]
  },
  "integrated-awareness": {
    name: "Integrated Wholeness",
    description: "You experience yourself as a whole being where all parts serve the larger self.",
    characteristics: [
      "Deep self-acceptance and inner peace",
      "Ability to transform challenges into wisdom",
      "Natural compassion for self and others",
      "Living from authentic wholeness"
    ],
    guidance: [
      "Continue deepening your practice",
      "Mentor others on their integration journey",
      "Trust your inner wisdom completely",
      "Serve the world from your wholeness"
    ]
  }
};