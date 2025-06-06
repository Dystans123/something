export interface AttachmentStyleOption {
  text: string;
  style: string;
  value: number; // 1-5 scale for style intensity
}

export interface AttachmentStyleQuestion {
  text: string;
  category: string;
  options: AttachmentStyleOption[];
}

export const attachmentStyleQuestions: AttachmentStyleQuestion[] = [
  {
    text: "When starting a new relationship, you typically:",
    category: "relationship-initiation",
    options: [
      { text: "Feel comfortable opening up and sharing personal details", style: "secure", value: 5 },
      { text: "Worry about whether they'll really like the real you", style: "anxious", value: 5 },
      { text: "Keep things surface-level until you're sure about them", style: "avoidant", value: 5 },
      { text: "Feel conflicted between wanting closeness and fearing rejection", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When someone you care about doesn't respond to your messages quickly, you:",
    category: "communication-anxiety",
    options: [
      { text: "Assume they're busy and wait patiently for their response", style: "secure", value: 4 },
      { text: "Start worrying that you've done something wrong", style: "anxious", value: 4 },
      { text: "Don't really mind and focus on other things", style: "avoidant", value: 4 },
      { text: "Feel frustrated and may send follow-up messages", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your approach to conflict in relationships is to:",
    category: "conflict-handling",
    options: [
      { text: "Address issues directly but calmly and constructively", style: "secure", value: 5 },
      { text: "Worry that conflict means the relationship is doomed", style: "anxious", value: 5 },
      { text: "Avoid confrontation and hope issues resolve themselves", style: "avoidant", value: 5 },
      { text: "Sometimes explode, sometimes withdraw completely", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When you're feeling stressed or upset, you prefer to:",
    category: "emotional-regulation",
    options: [
      { text: "Talk to someone you trust about what's bothering you", style: "secure", value: 4 },
      { text: "Seek extra reassurance and comfort from loved ones", style: "anxious", value: 4 },
      { text: "Handle it on your own without burdening others", style: "avoidant", value: 4 },
      { text: "Sometimes want support, sometimes want to be left alone", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your comfort level with emotional intimacy is:",
    category: "intimacy-comfort",
    options: [
      { text: "Generally comfortable sharing and receiving deep emotions", style: "secure", value: 5 },
      { text: "Craving deep connection but sometimes overwhelmed by it", style: "anxious", value: 5 },
      { text: "Preferring to keep some emotional distance for comfort", style: "avoidant", value: 5 },
      { text: "Unpredictable - sometimes craving it, sometimes avoiding it", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When someone gets too close too quickly, you:",
    category: "boundary-management",
    options: [
      { text: "Communicate your boundaries clearly and kindly", style: "secure", value: 4 },
      { text: "Feel flattered but also anxious about meeting their expectations", style: "anxious", value: 4 },
      { text: "Feel uncomfortable and may pull back automatically", style: "avoidant", value: 4 },
      { text: "Have mixed reactions depending on your mood", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your biggest fear in relationships is:",
    category: "relationship-fears",
    options: [
      { text: "Growing apart due to natural life changes", style: "secure", value: 3 },
      { text: "Being abandoned or rejected by someone you love", style: "anxious", value: 5 },
      { text: "Losing your independence and personal identity", style: "avoidant", value: 5 },
      { text: "Getting hurt because you trusted someone", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When you need support, you:",
    category: "support-seeking",
    options: [
      { text: "Directly ask for help from people you trust", style: "secure", value: 5 },
      { text: "Hope others will notice you need help without asking", style: "anxious", value: 4 },
      { text: "Try to handle everything yourself first", style: "avoidant", value: 4 },
      { text: "Sometimes ask for help, sometimes isolate completely", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your view of yourself in relationships is generally:",
    category: "self-perception",
    options: [
      { text: "I'm worthy of love and capable of loving others well", style: "secure", value: 5 },
      { text: "I need to work hard to be worthy of someone's love", style: "anxious", value: 4 },
      { text: "I'm fine on my own and don't need others to complete me", style: "avoidant", value: 4 },
      { text: "I'm not sure what I deserve in relationships", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "When planning for the future with someone, you:",
    category: "future-planning",
    options: [
      { text: "Feel excited about building a life together", style: "secure", value: 4 },
      { text: "Feel excited but also worried about things going wrong", style: "anxious", value: 4 },
      { text: "Feel somewhat uncomfortable making long-term commitments", style: "avoidant", value: 4 },
      { text: "Have conflicted feelings about future commitments", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your typical pattern in long-term relationships is:",
    category: "relationship-patterns",
    options: [
      { text: "Steady growth in trust and intimacy over time", style: "secure", value: 5 },
      { text: "Cycles of closeness and anxiety about the relationship", style: "anxious", value: 5 },
      { text: "Maintaining some level of emotional independence", style: "avoidant", value: 5 },
      { text: "Unpredictable ups and downs in emotional connection", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When someone you love is going through a difficult time, you:",
    category: "caregiving",
    options: [
      { text: "Offer consistent support while respecting their process", style: "secure", value: 4 },
      { text: "Want to fix everything and may become anxious if you can't help", style: "anxious", value: 4 },
      { text: "Offer practical help but may feel uncomfortable with intense emotions", style: "avoidant", value: 4 },
      { text: "Want to help but feel overwhelmed by their pain", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your comfort with depending on others is:",
    category: "dependency-comfort",
    options: [
      { text: "Comfortable with healthy interdependence", style: "secure", value: 5 },
      { text: "Sometimes too dependent, sometimes pushing for independence", style: "anxious", value: 4 },
      { text: "Preferring to be self-reliant in most situations", style: "avoidant", value: 5 },
      { text: "Inconsistent - sometimes clingy, sometimes distant", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When relationships end, you typically:",
    category: "relationship-endings",
    options: [
      { text: "Grieve the loss but eventually move forward with lessons learned", style: "secure", value: 4 },
      { text: "Struggle with intense pain and may blame yourself", style: "anxious", value: 4 },
      { text: "Focus on moving forward and may not process emotions deeply", style: "avoidant", value: 4 },
      { text: "Have intense, conflicted reactions that are hard to predict", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "Your approach to expressing love and affection is:",
    category: "affection-expression",
    options: [
      { text: "Natural and comfortable with various expressions of love", style: "secure", value: 4 },
      { text: "Sometimes overwhelming, wanting to express love constantly", style: "anxious", value: 4 },
      { text: "More comfortable showing love through actions than words", style: "avoidant", value: 4 },
      { text: "Inconsistent - sometimes very expressive, sometimes withdrawn", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "When you feel disconnected from someone close to you, you:",
    category: "reconnection-strategies",
    options: [
      { text: "Initiate a conversation to understand what's happening", style: "secure", value: 5 },
      { text: "Worry intensely and may become clingy or demanding", style: "anxious", value: 5 },
      { text: "Give them space and focus on your own activities", style: "avoidant", value: 5 },
      { text: "Feel confused about whether to reach out or withdraw", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "Your trust in relationships typically:",
    category: "trust-patterns",
    options: [
      { text: "Builds gradually based on consistent positive experiences", style: "secure", value: 5 },
      { text: "Fluctuates based on your anxiety levels and their actions", style: "anxious", value: 4 },
      { text: "Is given cautiously and may have clear limits", style: "avoidant", value: 4 },
      { text: "Is unpredictable and may change suddenly", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "When you're in a committed relationship, you feel:",
    category: "commitment-comfort",
    options: [
      { text: "Secure and happy about the mutual commitment", style: "secure", value: 5 },
      { text: "Happy but sometimes worried about losing the relationship", style: "anxious", value: 4 },
      { text: "Committed but also aware of maintaining your independence", style: "avoidant", value: 4 },
      { text: "Conflicted between wanting security and fearing being trapped", style: "disorganized", value: 5 }
    ]
  },
  {
    text: "Your approach to personal boundaries in relationships is:",
    category: "boundary-setting",
    options: [
      { text: "Clear about your needs while being respectful of others", style: "secure", value: 4 },
      { text: "Sometimes struggle to set boundaries for fear of conflict", style: "anxious", value: 4 },
      { text: "Very clear about boundaries and protective of personal space", style: "avoidant", value: 4 },
      { text: "Inconsistent - boundaries change based on emotions", style: "disorganized", value: 4 }
    ]
  },
  {
    text: "When someone cancels plans with you last minute, you:",
    category: "disappointment-handling",
    options: [
      { text: "Feel disappointed but understand that things come up", style: "secure", value: 4 },
      { text: "Feel hurt and may wonder if they're losing interest in you", style: "anxious", value: 4 },
      { text: "Feel relieved to have unexpected free time", style: "avoidant", value: 3 },
      { text: "Have an intense reaction that surprises even you", style: "disorganized", value: 4 }
    ]
  }
];

export const attachmentStyles = {
  secure: {
    name: "Secure Attachment",
    description: "You possess the psychological foundation for deeply fulfilling relationships, characterized by an innate ability to balance intimacy with independence. Your attachment system operates from a place of fundamental trust—both in your own worthiness of love and in others' capacity to provide consistent care. This secure base allows you to navigate the complexities of human connection with grace, authenticity, and resilience.",
    detailedAnalysis: "Your secure attachment style reflects early experiences of consistent, responsive caregiving that taught you to expect relationships to be sources of comfort rather than anxiety. You approach connections with an open heart while maintaining a strong sense of self. This rare combination allows you to offer genuine support to others without losing yourself, and to receive care without feeling overwhelmed or suspicious. You serve as an emotional anchor for others, demonstrating what healthy love looks like.",
    traits: ["Emotional security and stability", "Balanced intimacy and autonomy", "Effective communication skills", "Healthy boundary setting", "Consistent trust-building", "Conflict resolution abilities", "Emotional regulation mastery"],
    strengths: ["Creating safe emotional spaces for deep connection", "Maintaining individual identity within relationships", "Communicating needs and feelings clearly and kindly", "Resolving conflicts constructively without defensiveness", "Building trust through consistent, reliable behavior", "Supporting others without sacrificing self-care"],
    growthAreas: ["Recognizing when others need extra emotional support", "Developing patience with insecure attachment styles", "Learning to identify subtle relationship warning signs", "Balancing your natural giving with receiving from others"],
    tips: [
      "Your secure attachment is a rare gift that creates healing for others",
      "Practice recognizing when partners or friends need extra reassurance",
      "Use your natural communication skills to model healthy conflict resolution",
      "Remember that not everyone had the secure foundation you did—be patient",
      "Continue to prioritize both emotional intimacy and personal growth",
      "Trust your instincts about relationship red flags while remaining open-hearted"
    ]
  },
  anxious: {
    name: "Anxious Attachment",
    description: "You deeply value relationships but often worry about losing them. You may seek frequent reassurance and can become preoccupied with your partner's feelings and availability.",
    traits: ["Relationship-focused", "Emotionally sensitive", "Seeks reassurance", "Fear of abandonment", "Highly empathetic"],
    strengths: ["Deep emotional connection", "Highly attuned to others", "Committed to relationships", "Emotionally expressive", "Strong desire for intimacy"],
    growthAreas: ["Building self-soothing skills", "Developing secure self-worth", "Learning to trust", "Practicing independence"],
    tips: ["Practice self-soothing techniques when anxiety arises", "Work on building confidence independent of relationship status"]
  },
  avoidant: {
    name: "Avoidant Attachment",
    description: "You value independence and self-reliance. While you can form relationships, you prefer to maintain emotional distance and may feel uncomfortable with too much intimacy.",
    traits: ["Independent", "Self-reliant", "Emotionally reserved", "Values autonomy", "Practical approach to love"],
    strengths: ["Strong sense of self", "Independence", "Reliable", "Non-clingy", "Emotionally stable under pressure"],
    growthAreas: ["Opening up emotionally", "Allowing interdependence", "Expressing vulnerability", "Accepting support from others"],
    tips: ["Practice sharing emotions in small steps", "Allow others to support you occasionally"]
  },
  disorganized: {
    name: "Disorganized Attachment",
    description: "You have conflicting needs for closeness and distance. Your relationship patterns may be unpredictable, swinging between anxious and avoidant behaviors.",
    traits: ["Conflicted about relationships", "Unpredictable patterns", "Intense emotions", "Push-pull dynamics", "Complex inner world"],
    strengths: ["Deep emotional capacity", "Adaptability", "Intuitive understanding of pain", "Potential for profound growth", "Empathy for others' struggles"],
    growthAreas: ["Developing emotional regulation", "Creating consistent relationship patterns", "Building self-awareness", "Healing past wounds"],
    tips: ["Consider therapy to work through conflicted feelings", "Practice mindfulness to understand your emotional patterns"]
  }
};