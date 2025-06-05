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
  // Attachment Patterns
  {
    text: "When someone I care about doesn't respond to my messages quickly, I usually:",
    category: "Attachment Patterns",
    options: [
      { text: "Feel anxious and worry they're upset with me", pattern: "anxious-attachment", value: 5 },
      { text: "Feel slightly concerned but try to stay calm", pattern: "anxious-attachment", value: 3 },
      { text: "Understand they might be busy and wait patiently", pattern: "secure-attachment", value: 1 },
      { text: "Feel annoyed but don't show it", pattern: "avoidant-attachment", value: 3 },
      { text: "Prefer it when people take their time to respond", pattern: "avoidant-attachment", value: 5 }
    ]
  },
  {
    text: "In romantic relationships, I tend to:",
    category: "Attachment Patterns",
    options: [
      { text: "Need constant reassurance about my partner's feelings", pattern: "anxious-attachment", value: 5 },
      { text: "Sometimes seek reassurance when feeling insecure", pattern: "anxious-attachment", value: 3 },
      { text: "Feel secure without needing frequent validation", pattern: "secure-attachment", value: 1 },
      { text: "Prefer to keep some emotional distance", pattern: "avoidant-attachment", value: 3 },
      { text: "Feel uncomfortable with too much emotional closeness", pattern: "avoidant-attachment", value: 5 }
    ]
  },
  {
    text: "When conflicts arise in my relationships, I:",
    category: "Conflict Resolution",
    options: [
      { text: "Become very emotional and need immediate resolution", pattern: "anxious-attachment", value: 5 },
      { text: "Feel stressed but try to work through it together", pattern: "secure-attachment", value: 2 },
      { text: "Stay calm and focus on finding solutions", pattern: "secure-attachment", value: 1 },
      { text: "Tend to withdraw and avoid confrontation", pattern: "avoidant-attachment", value: 4 },
      { text: "Shut down emotionally and distance myself", pattern: "avoidant-attachment", value: 5 }
    ]
  },
  {
    text: "I express my needs in relationships by:",
    category: "Communication Patterns",
    options: [
      { text: "Hoping others will notice without me having to ask", pattern: "passive-communication", value: 5 },
      { text: "Dropping hints and expecting them to understand", pattern: "passive-communication", value: 4 },
      { text: "Communicating directly but respectfully", pattern: "assertive-communication", value: 1 },
      { text: "Being very direct, sometimes too blunt", pattern: "aggressive-communication", value: 3 },
      { text: "Demanding that my needs be met immediately", pattern: "aggressive-communication", value: 5 }
    ]
  },
  {
    text: "When someone sets boundaries with me, I:",
    category: "Boundary Recognition",
    options: [
      { text: "Respect them immediately and adjust my behavior", pattern: "healthy-boundaries", value: 1 },
      { text: "Try to respect them but sometimes struggle", pattern: "boundary-challenges", value: 3 },
      { text: "Feel rejected and take it personally", pattern: "boundary-violation", value: 4 },
      { text: "Test the boundaries to see if they're serious", pattern: "boundary-violation", value: 5 },
      { text: "Ignore them because I know what's best", pattern: "boundary-violation", value: 5 }
    ]
  },
  {
    text: "In friendships, I typically:",
    category: "Social Dynamics",
    options: [
      { text: "Give more than I receive", pattern: "people-pleasing", value: 5 },
      { text: "Try to maintain a balance of give and take", pattern: "balanced-relationships", value: 1 },
      { text: "Expect others to reach out to me first", pattern: "passive-engagement", value: 4 },
      { text: "Keep most friendships at a surface level", pattern: "emotional-distance", value: 4 },
      { text: "Have difficulty trusting friends completely", pattern: "trust-issues", value: 5 }
    ]
  },
  {
    text: "When I feel hurt by someone's actions, I:",
    category: "Emotional Processing",
    options: [
      { text: "Talk to them directly about how I feel", pattern: "direct-communication", value: 1 },
      { text: "Give them the silent treatment until they apologize", pattern: "passive-aggressive", value: 5 },
      { text: "Vent to others but avoid confronting the person", pattern: "indirect-communication", value: 4 },
      { text: "Pretend it doesn't bother me and move on", pattern: "emotional-suppression", value: 4 },
      { text: "End the relationship rather than work through it", pattern: "avoidance-pattern", value: 5 }
    ]
  },
  {
    text: "I choose romantic partners who:",
    category: "Partner Selection",
    options: [
      { text: "Need me to take care of them", pattern: "codependent-attraction", value: 5 },
      { text: "Are emotionally unavailable or distant", pattern: "avoidant-attraction", value: 5 },
      { text: "Share similar values and life goals", pattern: "healthy-selection", value: 1 },
      { text: "Are very different from me to create excitement", pattern: "drama-seeking", value: 4 },
      { text: "Remind me of familiar family dynamics", pattern: "trauma-bonding", value: 5 }
    ]
  },
  {
    text: "When someone criticizes me, I:",
    category: "Feedback Reception",
    options: [
      { text: "Listen carefully and consider their perspective", pattern: "growth-mindset", value: 1 },
      { text: "Feel defensive but try to stay open", pattern: "defensive-but-aware", value: 3 },
      { text: "Immediately become defensive and argue back", pattern: "defensive-reaction", value: 5 },
      { text: "Shut down and withdraw from the conversation", pattern: "withdrawal-response", value: 4 },
      { text: "Take it very personally and feel devastated", pattern: "rejection-sensitivity", value: 5 }
    ]
  },
  {
    text: "I maintain my independence in relationships by:",
    category: "Autonomy Management",
    options: [
      { text: "Keeping my own interests and friendships", pattern: "healthy-independence", value: 1 },
      { text: "Occasionally doing things on my own", pattern: "moderate-independence", value: 2 },
      { text: "Feeling guilty when I want time alone", pattern: "independence-guilt", value: 4 },
      { text: "Losing myself in my partner's interests", pattern: "identity-fusion", value: 5 },
      { text: "Avoiding commitment to maintain freedom", pattern: "commitment-avoidance", value: 5 }
    ]
  },
  {
    text: "When my partner or friend is going through a difficult time, I:",
    category: "Support Patterns",
    options: [
      { text: "Offer support while maintaining my own well-being", pattern: "balanced-support", value: 1 },
      { text: "Drop everything to help them through it", pattern: "over-supporting", value: 4 },
      { text: "Feel overwhelmed by their emotions", pattern: "emotional-overwhelm", value: 5 },
      { text: "Try to fix their problems for them", pattern: "rescuing-behavior", value: 5 },
      { text: "Feel uncomfortable and distance myself", pattern: "support-avoidance", value: 4 }
    ]
  },
  {
    text: "I handle jealousy in relationships by:",
    category: "Jealousy Management",
    options: [
      { text: "Communicating my feelings openly and honestly", pattern: "healthy-jealousy", value: 1 },
      { text: "Trying to control my partner's interactions", pattern: "controlling-jealousy", value: 5 },
      { text: "Feeling insecure but keeping it to myself", pattern: "internalized-jealousy", value: 4 },
      { text: "Acting out passive-aggressively", pattern: "passive-aggressive-jealousy", value: 5 },
      { text: "Pretending I don't feel jealous at all", pattern: "jealousy-denial", value: 3 }
    ]
  },
  {
    text: "In group social situations, I tend to:",
    category: "Social Dynamics",
    options: [
      { text: "Feel comfortable and engage naturally", pattern: "social-confidence", value: 1 },
      { text: "Take on the role of peacekeeper or mediator", pattern: "mediator-role", value: 3 },
      { text: "Focus on making sure everyone else is comfortable", pattern: "people-pleasing", value: 4 },
      { text: "Feel anxious and worry about being judged", pattern: "social-anxiety", value: 5 },
      { text: "Prefer to observe rather than actively participate", pattern: "social-withdrawal", value: 4 }
    ]
  },
  {
    text: "When making decisions that affect my relationships, I:",
    category: "Decision Making",
    options: [
      { text: "Consider both my needs and others' feelings", pattern: "balanced-decisions", value: 1 },
      { text: "Always put others' needs before my own", pattern: "self-sacrificing", value: 5 },
      { text: "Make decisions based solely on what I want", pattern: "self-centered", value: 5 },
      { text: "Avoid making decisions that might upset anyone", pattern: "decision-avoidance", value: 4 },
      { text: "Ask others to make the decision for me", pattern: "decision-dependency", value: 5 }
    ]
  },
  {
    text: "I trust new people by:",
    category: "Trust Development",
    options: [
      { text: "Starting with basic trust and building gradually", pattern: "healthy-trust", value: 1 },
      { text: "Trusting completely from the beginning", pattern: "over-trusting", value: 4 },
      { text: "Requiring extensive proof before trusting anyone", pattern: "trust-resistance", value: 5 },
      { text: "Pretending to trust while remaining guarded", pattern: "false-trust", value: 4 },
      { text: "Avoiding situations where trust is necessary", pattern: "trust-avoidance", value: 5 }
    ]
  },
  {
    text: "When relationships end, I typically:",
    category: "Relationship Endings",
    options: [
      { text: "Process the emotions and learn from the experience", pattern: "healthy-processing", value: 1 },
      { text: "Blame myself for everything that went wrong", pattern: "self-blame", value: 5 },
      { text: "Blame the other person entirely", pattern: "external-blame", value: 5 },
      { text: "Immediately jump into a new relationship", pattern: "rebound-pattern", value: 4 },
      { text: "Avoid dating for extended periods", pattern: "relationship-avoidance", value: 4 }
    ]
  },
  {
    text: "I show love and affection by:",
    category: "Love Expression",
    options: [
      { text: "Expressing it in ways that feel natural to me", pattern: "authentic-expression", value: 1 },
      { text: "Doing whatever I think the other person wants", pattern: "performative-love", value: 4 },
      { text: "Having difficulty expressing feelings directly", pattern: "expression-difficulty", value: 4 },
      { text: "Showing love through acts of service only", pattern: "action-based-love", value: 3 },
      { text: "Expecting others to know without me saying it", pattern: "unexpressed-love", value: 5 }
    ]
  },
  {
    text: "When I feel overwhelmed in relationships, I:",
    category: "Stress Response",
    options: [
      { text: "Communicate my needs and ask for space", pattern: "healthy-communication", value: 1 },
      { text: "Withdraw without explanation", pattern: "withdrawal-pattern", value: 4 },
      { text: "Become more clingy and demanding", pattern: "anxious-response", value: 5 },
      { text: "Lash out and then feel guilty", pattern: "emotional-reactivity", value: 5 },
      { text: "Pretend everything is fine", pattern: "emotional-suppression", value: 4 }
    ]
  },
  {
    text: "I handle power dynamics in relationships by:",
    category: "Power Dynamics",
    options: [
      { text: "Striving for equality and mutual respect", pattern: "balanced-power", value: 1 },
      { text: "Preferring to be in control of most decisions", pattern: "dominant-power", value: 4 },
      { text: "Usually letting others take the lead", pattern: "submissive-power", value: 4 },
      { text: "Struggling with feeling powerless", pattern: "powerlessness", value: 5 },
      { text: "Using manipulation to get what I want", pattern: "manipulative-power", value: 5 }
    ]
  },
  {
    text: "My approach to emotional intimacy is:",
    category: "Intimacy Patterns",
    options: [
      { text: "I'm comfortable with gradual emotional closeness", pattern: "healthy-intimacy", value: 1 },
      { text: "I crave intense emotional connection immediately", pattern: "intimacy-seeking", value: 4 },
      { text: "I feel scared of emotional vulnerability", pattern: "intimacy-fear", value: 5 },
      { text: "I share everything but struggle with boundaries", pattern: "over-sharing", value: 4 },
      { text: "I keep most of my feelings to myself", pattern: "emotional-guarding", value: 5 }
    ]
  }
];

export const relationshipPatterns = {
  "anxious-attachment": {
    name: "Anxious Attachment",
    description: "You tend to seek closeness but worry about rejection and abandonment.",
    characteristics: [
      "Need frequent reassurance in relationships",
      "Fear of abandonment or rejection",
      "Tendency to overthink partner's behavior",
      "Difficulty self-soothing when distressed"
    ]
  },
  "avoidant-attachment": {
    name: "Avoidant Attachment", 
    description: "You value independence but may struggle with emotional intimacy.",
    characteristics: [
      "Preference for emotional distance",
      "Discomfort with vulnerability",
      "Tendency to minimize emotions",
      "Difficulty depending on others"
    ]
  },
  "secure-attachment": {
    name: "Secure Attachment",
    description: "You generally feel comfortable with intimacy and independence.",
    characteristics: [
      "Comfortable with emotional closeness",
      "Able to communicate needs effectively",
      "Trusting and reliable in relationships",
      "Good balance of autonomy and connection"
    ]
  },
  "people-pleasing": {
    name: "People-Pleasing Pattern",
    description: "You prioritize others' needs and approval over your own well-being.",
    characteristics: [
      "Difficulty saying no to requests",
      "Fear of disappointing others",
      "Tendency to ignore own needs",
      "Seeking validation through giving"
    ]
  },
  "codependent-attraction": {
    name: "Codependent Attraction",
    description: "You're drawn to relationships where you can rescue or be needed.",
    characteristics: [
      "Attraction to partners who need fixing",
      "Feeling responsible for others' emotions",
      "Loss of identity in relationships",
      "Difficulty with healthy boundaries"
    ]
  },
  "boundary-violation": {
    name: "Boundary Challenges",
    description: "You struggle with recognizing and respecting personal boundaries.",
    characteristics: [
      "Difficulty accepting others' limits",
      "Taking rejection personally",
      "Tendency to push when told no",
      "Unclear personal boundaries"
    ]
  }
};