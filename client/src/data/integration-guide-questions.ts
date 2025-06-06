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
  // Self-Awareness (5 questions)
  {
    text: "How well do you understand your emotional patterns in relationships?",
    category: "Self-Awareness",
    options: [
      { text: "I rarely notice or understand my emotional reactions", integration: "emerging", value: 1 },
      { text: "I sometimes recognize my patterns after they happen", integration: "developing", value: 2 },
      { text: "I'm usually aware of my emotions as they arise", integration: "integrated", value: 4 },
      { text: "I deeply understand my emotional triggers and responses", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "When you receive feedback about your behavior, you typically...",
    category: "Self-Awareness",
    options: [
      { text: "Feel defensive and resist the feedback", integration: "emerging", value: 1 },
      { text: "Accept it intellectually but struggle to change", integration: "developing", value: 2 },
      { text: "Consider it carefully and work on improvement", integration: "integrated", value: 4 },
      { text: "Welcome it as valuable insight for growth", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "How clearly can you identify your core values and needs?",
    category: "Self-Awareness",
    options: [
      { text: "I'm often unclear about what I really want or need", integration: "emerging", value: 1 },
      { text: "I have some sense but it changes frequently", integration: "developing", value: 2 },
      { text: "I know my values and needs fairly well", integration: "integrated", value: 4 },
      { text: "I have deep clarity on my authentic self", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "When reflecting on past relationship challenges, you...",
    category: "Self-Awareness",
    options: [
      { text: "Focus mainly on what others did wrong", integration: "emerging", value: 1 },
      { text: "See some of your own contribution but blame others more", integration: "developing", value: 2 },
      { text: "Recognize your role while still seeing the full picture", integration: "integrated", value: 4 },
      { text: "Take full responsibility for your part and learn from it", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "How well do you understand your attachment style and its impact?",
    category: "Self-Awareness",
    options: [
      { text: "I haven't really thought about attachment patterns", integration: "emerging", value: 1 },
      { text: "I know some theory but don't see it in my relationships", integration: "developing", value: 2 },
      { text: "I recognize my patterns and how they affect relationships", integration: "integrated", value: 4 },
      { text: "I actively work with my attachment style for healthier connections", integration: "mastery", value: 5 }
    ]
  },

  // Communication Skills (5 questions)
  {
    text: "When expressing difficult emotions, you...",
    category: "Communication Skills",
    options: [
      { text: "Often explode, shut down, or communicate reactively", integration: "emerging", value: 1 },
      { text: "Try to communicate but it often comes out wrong", integration: "developing", value: 2 },
      { text: "Usually express yourself clearly and calmly", integration: "integrated", value: 4 },
      { text: "Communicate with skill even in highly charged situations", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "Your listening skills in intimate conversations are...",
    category: "Communication Skills",
    options: [
      { text: "I often interrupt or think about my response while others talk", integration: "emerging", value: 1 },
      { text: "I try to listen but get distracted or defensive", integration: "developing", value: 2 },
      { text: "I listen well most of the time and ask clarifying questions", integration: "integrated", value: 4 },
      { text: "I listen with full presence and deep empathy", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "When setting boundaries, you...",
    category: "Communication Skills",
    options: [
      { text: "Struggle to set boundaries or set them aggressively", integration: "emerging", value: 1 },
      { text: "Set boundaries inconsistently or with guilt", integration: "developing", value: 2 },
      { text: "Set clear boundaries with kindness most of the time", integration: "integrated", value: 4 },
      { text: "Set boundaries skillfully while maintaining connection", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "During conflicts, your communication style is...",
    category: "Communication Skills",
    options: [
      { text: "I blame, attack, defend, or withdraw", integration: "emerging", value: 1 },
      { text: "I try to stay calm but often fall into old patterns", integration: "developing", value: 2 },
      { text: "I focus on understanding and finding solutions", integration: "integrated", value: 4 },
      { text: "I navigate conflicts with wisdom and create deeper connection", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "How well do you express appreciation and positive feelings?",
    category: "Communication Skills",
    options: [
      { text: "I rarely express positive feelings or do so awkwardly", integration: "emerging", value: 1 },
      { text: "I express appreciation but it feels forced or infrequent", integration: "developing", value: 2 },
      { text: "I regularly express genuine appreciation and positive feelings", integration: "integrated", value: 4 },
      { text: "I express love and appreciation in deeply meaningful ways", integration: "mastery", value: 5 }
    ]
  },

  // Emotional Regulation (5 questions)
  {
    text: "When you feel triggered in relationships, you...",
    category: "Emotional Regulation",
    options: [
      { text: "React immediately from the triggered state", integration: "emerging", value: 1 },
      { text: "Notice the trigger but struggle to regulate", integration: "developing", value: 2 },
      { text: "Usually pause and choose your response", integration: "integrated", value: 4 },
      { text: "Transform triggers into opportunities for deeper connection", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "Your ability to self-soothe during relationship stress is...",
    category: "Emotional Regulation",
    options: [
      { text: "I rely on my partner or external sources to feel better", integration: "emerging", value: 1 },
      { text: "I have some strategies but they don't always work", integration: "developing", value: 2 },
      { text: "I can usually calm myself down effectively", integration: "integrated", value: 4 },
      { text: "I maintain inner peace even during relationship challenges", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "How do you handle jealousy or insecurity when it arises?",
    category: "Emotional Regulation",
    options: [
      { text: "I become controlling, accusatory, or withdraw completely", integration: "emerging", value: 1 },
      { text: "I feel overwhelmed and communicate my fears poorly", integration: "developing", value: 2 },
      { text: "I acknowledge my feelings and communicate my needs", integration: "integrated", value: 4 },
      { text: "I use insecurity as information for deeper self-understanding", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "When your partner is emotional, your response is to...",
    category: "Emotional Regulation",
    options: [
      { text: "Get triggered and reactive or shut down emotionally", integration: "emerging", value: 1 },
      { text: "Try to help but often make it about me", integration: "developing", value: 2 },
      { text: "Stay present and offer appropriate support", integration: "integrated", value: 4 },
      { text: "Hold space with deep compassion and wisdom", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "Your relationship with your own shadow aspects is...",
    category: "Emotional Regulation",
    options: [
      { text: "I deny or project my shadow onto others", integration: "emerging", value: 1 },
      { text: "I'm aware of my shadow but judge it harshly", integration: "developing", value: 2 },
      { text: "I accept my shadow and work with it consciously", integration: "integrated", value: 4 },
      { text: "I embrace my shadow as a source of power and wholeness", integration: "mastery", value: 5 }
    ]
  },

  // Relationship Dynamics (5 questions)
  {
    text: "Your approach to relationship power dynamics is...",
    category: "Relationship Dynamics",
    options: [
      { text: "I either dominate or submit without awareness", integration: "emerging", value: 1 },
      { text: "I notice power struggles but don't know how to change them", integration: "developing", value: 2 },
      { text: "I work toward balance and mutual empowerment", integration: "integrated", value: 4 },
      { text: "I co-create relationships based on shared power and growth", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "When your partner has different needs or wants, you...",
    category: "Relationship Dynamics",
    options: [
      { text: "Feel threatened or try to convince them they're wrong", integration: "emerging", value: 1 },
      { text: "Accept it intellectually but feel resentful", integration: "developing", value: 2 },
      { text: "Honor their autonomy while expressing your own needs", integration: "integrated", value: 4 },
      { text: "Celebrate differences as opportunities for mutual growth", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "How do you handle your partner's growth and changes?",
    category: "Relationship Dynamics",
    options: [
      { text: "I resist change and try to keep things the same", integration: "emerging", value: 1 },
      { text: "I support growth in theory but feel threatened by changes", integration: "developing", value: 2 },
      { text: "I encourage growth even when it's challenging for me", integration: "integrated", value: 4 },
      { text: "I actively champion my partner's evolution and expansion", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "Your ability to maintain your identity in relationships is...",
    category: "Relationship Dynamics",
    options: [
      { text: "I lose myself or become overly rigid to maintain identity", integration: "emerging", value: 1 },
      { text: "I struggle to balance individual needs with relationship needs", integration: "developing", value: 2 },
      { text: "I maintain my core self while adapting appropriately", integration: "integrated", value: 4 },
      { text: "My authentic self actually emerges more fully in relationship", integration: "mastery", value: 5 }
    ]
  },
  {
    text: "When it comes to interdependence versus codependence, you...",
    category: "Relationship Dynamics",
    options: [
      { text: "Either merge completely or remain totally separate", integration: "emerging", value: 1 },
      { text: "Want healthy interdependence but fall into old patterns", integration: "developing", value: 2 },
      { text: "Create relationships with healthy mutual support", integration: "integrated", value: 4 },
      { text: "Model the art of conscious interdependence", integration: "mastery", value: 5 }
    ]
  }
];

export const integrationLevels = {
  emerging: {
    name: "Emerging Integration",
    description: "You are beginning your journey of conscious relationship development. There's great potential for growth.",
    characteristics: [
      "Limited self-awareness in relationships",
      "Reactive communication patterns",
      "Difficulty with emotional regulation",
      "Unconscious relationship dynamics"
    ],
    recommendations: [
      "Begin developing self-awareness through mindfulness",
      "Practice pausing before reacting in conflicts",
      "Learn basic communication skills",
      "Start exploring your attachment style"
    ]
  },
  developing: {
    name: "Developing Integration",
    description: "You have some awareness and skills but inconsistent application. You're building a foundation for healthier relationships.",
    characteristics: [
      "Growing self-awareness but inconsistent application",
      "Developing communication skills with room for growth",
      "Some emotional regulation abilities",
      "Beginning to recognize unhealthy patterns"
    ],
    recommendations: [
      "Practice consistent self-reflection",
      "Work on expressing emotions more skillfully",
      "Develop stronger boundaries",
      "Continue learning about relationship dynamics"
    ]
  },
  integrated: {
    name: "Integrated Awareness",
    description: "You demonstrate solid relationship skills and conscious awareness. You're able to navigate most challenges effectively.",
    characteristics: [
      "Strong self-awareness and personal responsibility",
      "Effective communication in most situations",
      "Good emotional regulation abilities",
      "Conscious participation in relationship dynamics"
    ],
    recommendations: [
      "Deepen your capacity for vulnerability",
      "Explore more advanced relationship concepts",
      "Practice holding space for partner's growth",
      "Continue refining your communication skills"
    ]
  },
  mastery: {
    name: "Relational Mastery",
    description: "You demonstrate advanced relationship consciousness and skill. You likely serve as a model for others in creating healthy connections.",
    characteristics: [
      "Deep self-awareness and wisdom",
      "Masterful communication even in difficult situations",
      "Excellent emotional regulation and presence",
      "Conscious co-creation of relationship dynamics"
    ],
    recommendations: [
      "Share your wisdom with others",
      "Continue exploring the edges of growth",
      "Mentor others in relationship development",
      "Explore spiritual dimensions of relationship"
    ]
  }
};