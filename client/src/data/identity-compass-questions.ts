export interface IdentityCompassOption {
  text: string;
  identity: string;
  value: number; // 1-5 scale for identity alignment
}

export interface IdentityCompassQuestion {
  text: string;
  category: string;
  options: IdentityCompassOption[];
}

export const identityCompassQuestions: IdentityCompassQuestion[] = [
  {
    text: "When facing a major life challenge, your instinct is to:",
    category: "challenge-response",
    options: [
      { text: "Face it head-on with courage and determination", identity: "warrior", value: 5 },
      { text: "Consider how it affects others and seek to protect them", identity: "nurturer", value: 5 },
      { text: "Find innovative solutions and transform the situation", identity: "creator", value: 5 },
      { text: "Explore what this challenge means for your life path", identity: "seeker", value: 5 },
      { text: "Rely on your own strength and handle it independently", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "Your deepest source of fulfillment comes from:",
    category: "fulfillment-source",
    options: [
      { text: "Overcoming obstacles and achieving victory", identity: "warrior", value: 4 },
      { text: "Helping others grow and flourish", identity: "nurturer", value: 4 },
      { text: "Bringing new ideas and beauty into the world", identity: "creator", value: 4 },
      { text: "Discovering truth and understanding life's mysteries", identity: "seeker", value: 4 },
      { text: "Maintaining your independence and authenticity", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "In a group setting, you naturally:",
    category: "group-dynamics",
    options: [
      { text: "Take charge and lead others toward the goal", identity: "warrior", value: 4 },
      { text: "Make sure everyone feels included and supported", identity: "nurturer", value: 4 },
      { text: "Contribute unique ideas and creative perspectives", identity: "creator", value: 4 },
      { text: "Ask questions that help the group think deeper", identity: "seeker", value: 4 },
      { text: "Observe and contribute when you have something valuable to add", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Your approach to personal growth involves:",
    category: "growth-approach",
    options: [
      { text: "Setting challenging goals and pushing through barriers", identity: "warrior", value: 5 },
      { text: "Learning how to better serve and care for others", identity: "nurturer", value: 5 },
      { text: "Developing your talents and creative expression", identity: "creator", value: 5 },
      { text: "Exploring deeper meaning and spiritual understanding", identity: "seeker", value: 5 },
      { text: "Becoming more self-sufficient and authentic", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "When others are in conflict, you tend to:",
    category: "conflict-mediation",
    options: [
      { text: "Step in to protect the underdog or establish order", identity: "warrior", value: 4 },
      { text: "Try to help everyone understand each other's feelings", identity: "nurturer", value: 4 },
      { text: "Suggest creative solutions that work for everyone", identity: "creator", value: 4 },
      { text: "Help them explore the deeper issues behind the conflict", identity: "seeker", value: 4 },
      { text: "Stay out of it unless directly asked for help", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Your core values center around:",
    category: "core-values",
    options: [
      { text: "Honor, courage, and standing up for what's right", identity: "warrior", value: 5 },
      { text: "Compassion, service, and the wellbeing of others", identity: "nurturer", value: 5 },
      { text: "Beauty, innovation, and bringing ideas to life", identity: "creator", value: 5 },
      { text: "Truth, wisdom, and understanding the nature of existence", identity: "seeker", value: 5 },
      { text: "Authenticity, freedom, and self-determination", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "When making important decisions, you prioritize:",
    category: "decision-making",
    options: [
      { text: "What will lead to the best outcome in the situation", identity: "warrior", value: 4 },
      { text: "What will cause the least harm to others", identity: "nurturer", value: 4 },
      { text: "What allows for the most creative and innovative result", identity: "creator", value: 4 },
      { text: "What aligns with your deepest understanding and values", identity: "seeker", value: 4 },
      { text: "What maintains your independence and integrity", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Your greatest fear is:",
    category: "core-fears",
    options: [
      { text: "Being defeated or failing to protect what matters", identity: "warrior", value: 3 },
      { text: "Causing harm to others or being unable to help them", identity: "nurturer", value: 3 },
      { text: "Being unable to express your creativity or vision", identity: "creator", value: 3 },
      { text: "Living a meaningless life without understanding", identity: "seeker", value: 3 },
      { text: "Losing your freedom or being controlled by others", identity: "loneWolf", value: 3 }
    ]
  },
  {
    text: "In your ideal world, you would spend your time:",
    category: "ideal-lifestyle",
    options: [
      { text: "Fighting for causes you believe in and protecting others", identity: "warrior", value: 4 },
      { text: "Caring for people and helping them reach their potential", identity: "nurturer", value: 4 },
      { text: "Creating beautiful, meaningful, or innovative works", identity: "creator", value: 4 },
      { text: "Exploring life's mysteries and sharing wisdom", identity: "seeker", value: 4 },
      { text: "Living freely according to your own values and rhythms", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Others often describe you as someone who:",
    category: "external-perception",
    options: [
      { text: "Never backs down from a challenge", identity: "warrior", value: 4 },
      { text: "Always puts others' needs before your own", identity: "nurturer", value: 4 },
      { text: "Sees possibilities that others miss", identity: "creator", value: 4 },
      { text: "Asks the deep questions others avoid", identity: "seeker", value: 4 },
      { text: "Marches to the beat of your own drum", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Your relationship to power and authority is:",
    category: "authority-relationship",
    options: [
      { text: "You respect earned authority but challenge unjust power", identity: "warrior", value: 4 },
      { text: "You prefer collaborative leadership focused on service", identity: "nurturer", value: 4 },
      { text: "You value creative freedom over traditional hierarchies", identity: "creator", value: 4 },
      { text: "You question authority and seek to understand its legitimacy", identity: "seeker", value: 4 },
      { text: "You prefer to be your own authority", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "When you're stressed or overwhelmed, you cope by:",
    category: "stress-response",
    options: [
      { text: "Taking action to address the problem directly", identity: "warrior", value: 4 },
      { text: "Focusing on taking care of others or being useful", identity: "nurturer", value: 4 },
      { text: "Channeling your emotions into creative expression", identity: "creator", value: 4 },
      { text: "Seeking solitude to reflect and gain perspective", identity: "seeker", value: 4 },
      { text: "Withdrawing to restore your energy independently", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "Your approach to learning and knowledge is:",
    category: "learning-style",
    options: [
      { text: "Learning what you need to achieve your goals", identity: "warrior", value: 3 },
      { text: "Learning how to better help and understand others", identity: "nurturer", value: 3 },
      { text: "Learning to expand your creative abilities and vision", identity: "creator", value: 3 },
      { text: "Learning for the sake of understanding and wisdom", identity: "seeker", value: 5 },
      { text: "Learning what interests you, regardless of others' opinions", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "In relationships, you value most:",
    category: "relationship-values",
    options: [
      { text: "Loyalty, trust, and mutual support in challenges", identity: "warrior", value: 4 },
      { text: "Emotional connection and caring for each other", identity: "nurturer", value: 5 },
      { text: "Shared creativity and inspiring each other", identity: "creator", value: 4 },
      { text: "Deep conversations and spiritual connection", identity: "seeker", value: 4 },
      { text: "Mutual respect for independence and authenticity", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "Your legacy would ideally be:",
    category: "legacy-vision",
    options: [
      { text: "Having fought the good fight and protected what matters", identity: "warrior", value: 4 },
      { text: "Having made a positive difference in people's lives", identity: "nurturer", value: 4 },
      { text: "Having created something beautiful that inspires others", identity: "creator", value: 4 },
      { text: "Having contributed to human understanding and wisdom", identity: "seeker", value: 4 },
      { text: "Having lived authentically and inspired others to do the same", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "When facing uncertainty, you:",
    category: "uncertainty-response",
    options: [
      { text: "Prepare for various scenarios and stay ready for action", identity: "warrior", value: 4 },
      { text: "Focus on what you can do to help others feel secure", identity: "nurturer", value: 4 },
      { text: "See uncertainty as an opportunity for creative possibilities", identity: "creator", value: 4 },
      { text: "Embrace uncertainty as part of life's mystery to explore", identity: "seeker", value: 4 },
      { text: "Trust in your ability to handle whatever comes", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Your motivation comes primarily from:",
    category: "motivation-source",
    options: [
      { text: "The desire to overcome challenges and protect others", identity: "warrior", value: 5 },
      { text: "The need to care for and support those around you", identity: "nurturer", value: 5 },
      { text: "The drive to create and bring your vision to life", identity: "creator", value: 5 },
      { text: "The quest for understanding and meaning", identity: "seeker", value: 5 },
      { text: "The need to live according to your own truth", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "When you succeed at something important, you:",
    category: "success-response",
    options: [
      { text: "Feel proud and ready for the next challenge", identity: "warrior", value: 4 },
      { text: "Feel grateful and want to share the success with others", identity: "nurturer", value: 4 },
      { text: "Feel inspired to create something even better", identity: "creator", value: 4 },
      { text: "Feel curious about what this success means for your journey", identity: "seeker", value: 4 },
      { text: "Feel satisfied that you achieved it on your own terms", identity: "loneWolf", value: 4 }
    ]
  },
  {
    text: "Your relationship to tradition and convention is:",
    category: "tradition-relationship",
    options: [
      { text: "You respect traditions that serve honor and justice", identity: "warrior", value: 3 },
      { text: "You value traditions that bring people together and provide care", identity: "nurturer", value: 3 },
      { text: "You appreciate tradition but believe in evolving and innovating", identity: "creator", value: 4 },
      { text: "You question traditions and seek to understand their deeper meaning", identity: "seeker", value: 4 },
      { text: "You follow traditions only if they align with your personal values", identity: "loneWolf", value: 5 }
    ]
  },
  {
    text: "When something you care about is threatened, you:",
    category: "protection-response",
    options: [
      { text: "Fight fiercely to defend it", identity: "warrior", value: 5 },
      { text: "Rally others to help protect and preserve it", identity: "nurturer", value: 4 },
      { text: "Find creative ways to transform the threat into opportunity", identity: "creator", value: 4 },
      { text: "Seek to understand the deeper forces at play", identity: "seeker", value: 3 },
      { text: "Protect it in your own way, without seeking others' approval", identity: "loneWolf", value: 4 }
    ]
  }
];

export const identityTypes = {
  warrior: {
    name: "The Warrior",
    description: "You are driven by courage, honor, and the desire to protect what matters. You face challenges head-on and fight for justice and truth.",
    traits: ["Courageous", "Protective", "Determined", "Honorable", "Action-oriented"],
    strengths: ["Leadership in crisis", "Unwavering determination", "Protective instincts", "Clear sense of right and wrong", "Ability to inspire others"],
    shadowAspects: ["Potential for aggression", "Difficulty with vulnerability", "All-or-nothing thinking"],
    growthPath: "Learning when to fight and when to yield, developing emotional intelligence alongside strength"
  },
  nurturer: {
    name: "The Nurturer",
    description: "You are motivated by love, compassion, and the desire to help others flourish. You create safe spaces and support growth in everyone around you.",
    traits: ["Compassionate", "Supportive", "Empathetic", "Generous", "Healing"],
    strengths: ["Creating emotional safety", "Understanding others' needs", "Building community", "Fostering growth", "Unconditional support"],
    shadowAspects: ["Self-neglect", "Boundary issues", "Enabling behaviors"],
    growthPath: "Learning to care for yourself as much as others, setting healthy boundaries while maintaining compassion"
  },
  creator: {
    name: "The Creator",
    description: "You are inspired by beauty, innovation, and the desire to bring new things into existence. You see possibilities everywhere and transform ideas into reality.",
    traits: ["Creative", "Visionary", "Innovative", "Expressive", "Transformative"],
    strengths: ["Generating original ideas", "Seeing possibilities", "Artistic expression", "Problem-solving creativity", "Inspiring innovation"],
    shadowAspects: ["Perfectionism", "Inconsistency", "Difficulty with mundane tasks"],
    growthPath: "Balancing creative vision with practical execution, learning to complete projects while staying inspired"
  },
  seeker: {
    name: "The Seeker",
    description: "You are driven by the quest for truth, meaning, and understanding. You explore life's deeper mysteries and seek wisdom in all experiences.",
    traits: ["Curious", "Philosophical", "Introspective", "Wise", "Truth-seeking"],
    strengths: ["Deep thinking", "Spiritual insight", "Pattern recognition", "Asking important questions", "Finding meaning"],
    shadowAspects: ["Overthinking", "Analysis paralysis", "Spiritual bypassing"],
    growthPath: "Balancing contemplation with action, using wisdom to create positive change in the world"
  },
  loneWolf: {
    name: "The Lone Wolf",
    description: "You are motivated by freedom, authenticity, and self-determination. You value independence and prefer to walk your own path.",
    traits: ["Independent", "Authentic", "Self-reliant", "Non-conforming", "Introspective"],
    strengths: ["Self-sufficiency", "Authentic living", "Clear personal boundaries", "Resistance to social pressure", "Deep self-knowledge"],
    shadowAspects: ["Isolation", "Difficulty trusting", "Resistance to help"],
    growthPath: "Learning to balance independence with meaningful connections, allowing others to support you occasionally"
  }
};