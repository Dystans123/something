export interface RelationshipPatternOption {
  text: string;
  pattern: string;
  value: number; // 1-5 scale for intensity
}

export interface RelationshipPatternQuestion {
  text: string;
  category: string;
  options: RelationshipPatternOption[];
}

export const relationshipPatternQuestions: RelationshipPatternQuestion[] = [
  // Attachment & Bonding (5 questions)
  {
    text: "When facing relationship conflicts, I tend to...",
    category: "Attachment & Bonding",
    options: [
      { text: "Withdraw and avoid discussing the issue", pattern: "avoidant", value: 5 },
      { text: "Become anxious and need immediate resolution", pattern: "anxious", value: 5 },
      { text: "Stay calm and work through it systematically", pattern: "secure", value: 5 },
      { text: "Become controlling or demanding", pattern: "dismissive", value: 5 }
    ]
  },
  {
    text: "In intimate relationships, I feel most comfortable when...",
    category: "Attachment & Bonding",
    options: [
      { text: "I maintain my independence and space", pattern: "avoidant", value: 4 },
      { text: "My partner and I are very close and connected", pattern: "anxious", value: 4 },
      { text: "There's a balance of closeness and autonomy", pattern: "secure", value: 4 },
      { text: "I can maintain control over the relationship dynamics", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "When my partner seems distant, I usually...",
    category: "Attachment & Bonding",
    options: [
      { text: "Give them space and wait for them to come around", pattern: "avoidant", value: 3 },
      { text: "Feel anxious and try to reconnect immediately", pattern: "anxious", value: 5 },
      { text: "Gently check in while respecting their needs", pattern: "secure", value: 4 },
      { text: "Feel frustrated and withdraw my attention", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "My approach to vulnerability in relationships is...",
    category: "Attachment & Bonding",
    options: [
      { text: "I prefer to keep my deeper feelings private", pattern: "avoidant", value: 4 },
      { text: "I share everything and expect the same in return", pattern: "anxious", value: 4 },
      { text: "I share gradually as trust builds", pattern: "secure", value: 5 },
      { text: "I see vulnerability as weakness", pattern: "dismissive", value: 5 }
    ]
  },
  {
    text: "When it comes to commitment, I...",
    category: "Attachment & Bonding",
    options: [
      { text: "Often feel trapped by serious commitments", pattern: "avoidant", value: 5 },
      { text: "Crave deep commitment but fear abandonment", pattern: "anxious", value: 5 },
      { text: "Welcome commitment when it feels right", pattern: "secure", value: 5 },
      { text: "Prefer to keep my options open", pattern: "dismissive", value: 4 }
    ]
  },

  // Communication Styles (5 questions)
  {
    text: "During disagreements, I typically...",
    category: "Communication Styles",
    options: [
      { text: "Shut down or leave the conversation", pattern: "avoidant", value: 4 },
      { text: "Become emotional and need to talk it through", pattern: "anxious", value: 4 },
      { text: "Stay present and work toward understanding", pattern: "secure", value: 5 },
      { text: "Focus on being right and winning", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "When expressing my needs, I...",
    category: "Communication Styles",
    options: [
      { text: "Struggle to articulate what I really need", pattern: "avoidant", value: 4 },
      { text: "Sometimes express them indirectly or emotionally", pattern: "anxious", value: 3 },
      { text: "Communicate them clearly and directly", pattern: "secure", value: 5 },
      { text: "Expect my partner to figure them out", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "My listening style in relationships is...",
    category: "Communication Styles",
    options: [
      { text: "I listen but often stay emotionally detached", pattern: "avoidant", value: 3 },
      { text: "I listen intently and get emotionally involved", pattern: "anxious", value: 3 },
      { text: "I listen with presence and empathy", pattern: "secure", value: 5 },
      { text: "I listen to respond and correct", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "When my partner is upset, I...",
    category: "Communication Styles",
    options: [
      { text: "Feel uncomfortable and want to fix it quickly", pattern: "avoidant", value: 4 },
      { text: "Take it personally and get emotional too", pattern: "anxious", value: 4 },
      { text: "Stay calm and offer support", pattern: "secure", value: 5 },
      { text: "Think they're being overly dramatic", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "My approach to difficult conversations is...",
    category: "Communication Styles",
    options: [
      { text: "I avoid them or postpone them indefinitely", pattern: "avoidant", value: 5 },
      { text: "I approach them with anxiety but push through", pattern: "anxious", value: 3 },
      { text: "I initiate them when necessary with care", pattern: "secure", value: 5 },
      { text: "I approach them as battles to be won", pattern: "dismissive", value: 4 }
    ]
  },

  // Emotional Patterns (5 questions)
  {
    text: "When I feel hurt in relationships, I...",
    category: "Emotional Patterns",
    options: [
      { text: "Withdraw and process my feelings alone", pattern: "avoidant", value: 4 },
      { text: "Seek immediate comfort and reassurance", pattern: "anxious", value: 4 },
      { text: "Express my hurt and work through it together", pattern: "secure", value: 5 },
      { text: "Build resentment and emotional walls", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "My emotional regulation in relationships is...",
    category: "Emotional Patterns",
    options: [
      { text: "I suppress emotions to maintain control", pattern: "avoidant", value: 4 },
      { text: "My emotions can be intense and overwhelming", pattern: "anxious", value: 4 },
      { text: "I feel and express emotions in healthy ways", pattern: "secure", value: 5 },
      { text: "I see strong emotions as inconvenient", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "When my partner expresses strong emotions, I...",
    category: "Emotional Patterns",
    options: [
      { text: "Feel overwhelmed and want to escape", pattern: "avoidant", value: 4 },
      { text: "Mirror their intensity and get caught up", pattern: "anxious", value: 3 },
      { text: "Stay grounded and offer emotional support", pattern: "secure", value: 5 },
      { text: "Become critical or dismissive", pattern: "dismissive", value: 5 }
    ]
  },
  {
    text: "My relationship with jealousy is...",
    category: "Emotional Patterns",
    options: [
      { text: "I rarely feel jealous but may become distant", pattern: "avoidant", value: 3 },
      { text: "I struggle with jealousy and need reassurance", pattern: "anxious", value: 5 },
      { text: "I feel secure and trust my partner", pattern: "secure", value: 5 },
      { text: "I don't get jealous because I don't get too attached", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "When it comes to emotional intimacy, I...",
    category: "Emotional Patterns",
    options: [
      { text: "Find it challenging and prefer surface-level connection", pattern: "avoidant", value: 5 },
      { text: "Crave it intensely but fear being too much", pattern: "anxious", value: 4 },
      { text: "Enjoy deep emotional connection naturally", pattern: "secure", value: 5 },
      { text: "See it as unnecessary drama", pattern: "dismissive", value: 5 }
    ]
  },

  // Relationship Dynamics (5 questions)
  {
    text: "In relationships, I tend to...",
    category: "Relationship Dynamics",
    options: [
      { text: "Maintain my independence at all costs", pattern: "avoidant", value: 5 },
      { text: "Lose myself in the relationship", pattern: "anxious", value: 4 },
      { text: "Balance my needs with my partner's", pattern: "secure", value: 5 },
      { text: "Expect my partner to adapt to me", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "My pattern with relationship boundaries is...",
    category: "Relationship Dynamics",
    options: [
      { text: "I have rigid boundaries that keep people at distance", pattern: "avoidant", value: 4 },
      { text: "My boundaries are fluid and change based on emotions", pattern: "anxious", value: 3 },
      { text: "I maintain healthy, flexible boundaries", pattern: "secure", value: 5 },
      { text: "I expect others to respect my boundaries without reciprocating", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "When relationships end, I typically...",
    category: "Relationship Dynamics",
    options: [
      { text: "Move on quickly without processing the loss", pattern: "avoidant", value: 4 },
      { text: "Struggle to let go and may pursue reconciliation", pattern: "anxious", value: 4 },
      { text: "Grieve healthily and learn from the experience", pattern: "secure", value: 5 },
      { text: "Focus on what was wrong with my partner", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "My approach to relationship growth is...",
    category: "Relationship Dynamics",
    options: [
      { text: "I prefer relationships to stay comfortable and predictable", pattern: "avoidant", value: 3 },
      { text: "I want growth but fear it might threaten the relationship", pattern: "anxious", value: 3 },
      { text: "I embrace growth and change as natural", pattern: "secure", value: 5 },
      { text: "I expect my partner to do most of the changing", pattern: "dismissive", value: 4 }
    ]
  },
  {
    text: "In terms of relationship support, I...",
    category: "Relationship Dynamics",
    options: [
      { text: "Prefer to handle my problems independently", pattern: "avoidant", value: 4 },
      { text: "Rely heavily on my partner for emotional support", pattern: "anxious", value: 4 },
      { text: "Give and receive support in balanced ways", pattern: "secure", value: 5 },
      { text: "Expect support but struggle to provide it", pattern: "dismissive", value: 4 }
    ]
  }
];

export const relationshipPatterns = {
  secure: {
    name: "Secure Attachment",
    description: "You have a healthy, balanced approach to relationships with good emotional regulation and communication skills.",
    traits: [
      "Comfortable with intimacy and independence",
      "Effective communication skills",
      "Healthy emotional regulation",
      "Trusting and trustworthy",
      "Resilient in face of relationship challenges"
    ],
    strengths: [
      "Natural ability to maintain healthy relationships",
      "Good balance between closeness and autonomy",
      "Effective conflict resolution skills",
      "Emotional stability and maturity",
      "Ability to support partner's growth"
    ],
    growthAreas: [
      "Continue modeling healthy relationship behaviors",
      "Help partners develop secure attachment",
      "Maintain awareness of your own needs",
      "Stay patient with less secure partners"
    ]
  },
  anxious: {
    name: "Anxious Attachment",
    description: "You crave deep connection but often experience relationship anxiety and fear of abandonment.",
    traits: [
      "High emotional sensitivity",
      "Strong desire for closeness",
      "Fear of abandonment",
      "Tendency to seek reassurance",
      "Emotional intensity in relationships"
    ],
    strengths: [
      "Deep capacity for love and connection",
      "High emotional intelligence",
      "Commitment to working through problems",
      "Ability to create intimate bonds",
      "Sensitivity to partner's needs"
    ],
    growthAreas: [
      "Develop self-soothing techniques",
      "Build secure sense of self-worth",
      "Practice tolerating uncertainty",
      "Learn to communicate needs clearly",
      "Cultivate independence within relationships"
    ]
  },
  avoidant: {
    name: "Avoidant Attachment",
    description: "You value independence and may struggle with emotional intimacy and vulnerability.",
    traits: [
      "High value on independence",
      "Discomfort with emotional intensity",
      "Tendency to withdraw when stressed",
      "Self-reliant approach to problems",
      "Difficulty expressing vulnerability"
    ],
    strengths: [
      "Strong sense of autonomy",
      "Calm under pressure",
      "Rational problem-solving approach",
      "Respect for personal boundaries",
      "Ability to maintain perspective"
    ],
    growthAreas: [
      "Practice emotional expression",
      "Develop comfort with vulnerability",
      "Learn to stay present during conflict",
      "Build tolerance for partner's emotions",
      "Cultivate emotional intimacy skills"
    ]
  },
  dismissive: {
    name: "Dismissive Pattern",
    description: "You tend to minimize the importance of relationships and may struggle with empathy and emotional connection.",
    traits: [
      "Minimizes relationship importance",
      "Difficulty with empathy",
      "Tendency to be critical",
      "Emotional detachment",
      "Focus on self over partnership"
    ],
    strengths: [
      "Strong individual identity",
      "Ability to maintain objectivity",
      "Self-sufficiency",
      "Direct communication style",
      "Resilience to emotional turmoil"
    ],
    growthAreas: [
      "Develop empathy and emotional awareness",
      "Practice valuing relationships",
      "Learn to consider partner's perspective",
      "Build emotional connection skills",
      "Cultivate appreciation for interdependence"
    ]
  }
};