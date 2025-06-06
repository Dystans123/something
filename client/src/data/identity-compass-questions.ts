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
    description: "Your soul burns with the sacred fire of protection and justice, driving you to stand as a guardian for what matters most in this world. You possess an unshakeable moral compass that points toward courage in the face of adversity, and you naturally step forward when others step back. Your identity is forged in the crucible of challenge, where your strength, honor, and determination are tested and proven.",
    detailedAnalysis: "The Warrior within you represents the archetypal force of protection and righteous action. You are drawn to causes larger than yourself and feel a deep responsibility to defend the vulnerable and fight for justice. This identity gives you extraordinary resilience and the ability to take decisive action when others are paralyzed by fear or uncertainty. Your presence alone can inspire confidence in others and rally them to face their own challenges with greater courage.",
    traits: ["Unwavering courage in adversity", "Natural protective instincts", "Strong moral compass and sense of justice", "Leadership in crisis situations", "Determination that doesn't yield to obstacles", "Honor and integrity in all actions", "Ability to inspire others to be brave"],
    strengths: ["Taking decisive action when others hesitate", "Protecting those who cannot protect themselves", "Standing firm in your convictions under pressure", "Leading others through difficult times", "Maintaining hope and fighting spirit against all odds", "Creating safety through your strength and presence"],
    shadowAspects: ["Tendency toward aggression when frustrated", "Difficulty showing vulnerability or asking for help", "All-or-nothing thinking that misses nuance", "Potential for righteous anger to become destructive", "Risk of becoming overly controlling in protection", "Struggle with situations that require patience over action"],
    growthPath: "Your path involves learning the wisdom of strategic restraint—knowing when to fight and when to yield. Developing emotional intelligence and vulnerability will make your strength even more powerful, as true warriors know that the greatest battles are often fought within the heart."
  },
  nurturer: {
    name: "The Nurturer",
    description: "Your heart operates as a wellspring of compassion and care, naturally creating healing spaces where others can grow, flourish, and become their truest selves. You possess an innate understanding of what others need to thrive, and you find deep fulfillment in supporting their journey toward wholeness. Your identity is rooted in the sacred act of tending to life in all its forms.",
    detailedAnalysis: "The Nurturer within you embodies the archetypal force of love and growth. You have an extraordinary ability to see potential in others, even when they cannot see it themselves. Your presence creates emotional safety that allows people to be vulnerable, heal from their wounds, and step into their power. You understand that true strength often comes through gentleness, and that the greatest transformations happen in environments of unconditional acceptance and support.",
    traits: ["Deep empathy and emotional intelligence", "Natural healing presence", "Ability to see potential in others", "Creating safe spaces for vulnerability", "Unconditional acceptance and support", "Intuitive understanding of emotional needs", "Generous heart that gives freely"],
    strengths: ["Making others feel valued and understood", "Creating communities where people belong", "Facilitating healing and emotional growth", "Supporting others through difficult transitions", "Building trust through consistent care", "Recognizing and nurturing hidden talents in others"],
    shadowAspects: ["Self-neglect while caring for others", "Difficulty setting healthy boundaries", "Tendency to enable rather than empower", "Taking on others' emotions as your own", "Becoming depleted from over-giving", "Struggling to receive care from others"],
    growthPath: "Your journey involves learning that caring for yourself is not selfish—it's essential for sustaining your ability to care for others. Setting boundaries actually enhances your capacity to love, and receiving support models healthy relationship dynamics for those you nurture."
  },
  creator: {
    name: "The Creator",
    description: "Your spirit dances with the infinite possibilities of what could be, driven by an irrepressible urge to bring new realities into existence. You see the world as raw material for transformation, and your imagination serves as a bridge between the realm of ideas and the world of form. Your identity is defined by your ability to birth beauty, innovation, and meaning from the void of potential.",
    detailedAnalysis: "The Creator within you embodies the archetypal force of innovation and artistic expression. You possess a unique ability to perceive patterns, connections, and possibilities that others miss, and you feel compelled to manifest these visions in tangible form. Your creative process is often mysterious even to yourself—ideas seem to flow through you rather than from you, and you serve as a channel for bringing new beauty and solutions into the world.",
    traits: ["Visionary imagination and artistic sensibility", "Ability to see possibilities in everything", "Natural innovation and problem-solving", "Expressive communication of ideas", "Transformative thinking that challenges status quo", "Aesthetic sensitivity and appreciation for beauty", "Courage to experiment and take creative risks"],
    strengths: ["Generating breakthrough ideas and solutions", "Inspiring others with your vision and creativity", "Transforming problems into opportunities for innovation", "Creating beauty that uplifts and moves people", "Adapting quickly to new situations with creative flexibility", "Seeing potential where others see limitations"],
    shadowAspects: ["Perfectionism that prevents completion", "Inconsistency in following through on projects", "Difficulty with routine or mundane tasks", "Becoming overwhelmed by too many ideas", "Impatience with practical details", "Tendency to abandon projects when inspiration wanes"],
    growthPath: "Your evolution involves learning to balance divine inspiration with earthly execution. Developing discipline and project management skills will help you bring more of your visions to completion, while learning to find creativity within constraints will deepen your artistic mastery."
  },
  seeker: {
    name: "The Seeker",
    description: "Your soul is driven by an insatiable hunger for truth, meaning, and understanding that transcends the surface of ordinary experience. You are drawn to life's deepest mysteries and find yourself perpetually questioning, exploring, and seeking wisdom in every encounter. Your identity is forged in the pursuit of enlightenment and the integration of knowledge with lived experience.",
    detailedAnalysis: "The Seeker within you represents the archetypal force of wisdom and spiritual inquiry. You possess a natural inclination to look beyond appearances and ask the questions that others avoid or haven't considered. Your journey is one of constant learning, growth, and evolution as you seek to understand the deeper patterns and meanings that govern existence. You serve as a bridge between the known and unknown, bringing insights from your explorations back to illuminate the path for others.",
    traits: ["Insatiable curiosity about life's deeper meanings", "Natural philosophical and spiritual inclination", "Ability to see patterns and connections across domains", "Comfort with uncertainty and mystery", "Deep introspective and reflective capacity", "Wisdom that comes from direct experience", "Questions that challenge assumptions and reveal truth"],
    strengths: ["Gaining profound insights from life experiences", "Asking questions that lead to breakthrough understanding", "Finding meaning and purpose in difficult circumstances", "Guiding others through their own spiritual journeys", "Synthesizing knowledge from diverse sources", "Maintaining perspective during challenging times"],
    shadowAspects: ["Overthinking that leads to paralysis", "Analysis that becomes a substitute for action", "Spiritual bypassing of practical responsibilities", "Becoming lost in abstract concepts", "Difficulty making decisions without complete understanding", "Tendency to become isolated in pursuit of truth"],
    growthPath: "Your path involves learning to ground your wisdom in practical action and service to others. The greatest insights come from living your understanding, not just contemplating it. Your journey is to become a wisdom keeper who shares knowledge through example as much as words."
  },
  loneWolf: {
    name: "The Lone Wolf",
    description: "Your spirit thrives in the space of radical authenticity and self-determination, choosing to walk a path that honors your deepest truth over social conformity. You possess an uncompromising commitment to living according to your own values and vision, and you find strength in solitude that others might fear. Your identity is built on the foundation of fierce independence and authentic self-expression.",
    detailedAnalysis: "The Lone Wolf within you embodies the archetypal force of individualism and authentic living. You have developed a rare ability to trust your own inner compass even when it leads you away from the crowd. This independence isn't born from antisocial tendencies but from a deep respect for your own sovereignty and a refusal to compromise your integrity for acceptance. You understand that true belonging can only come from being genuinely yourself.",
    traits: ["Unwavering commitment to authenticity", "Strong sense of personal sovereignty", "Ability to thrive in solitude", "Resistance to social pressure and conformity", "Deep self-knowledge and introspection", "Clear personal boundaries and values", "Courage to stand alone when necessary"],
    strengths: ["Living authentically regardless of others' opinions", "Making decisions based on your own values and wisdom", "Maintaining independence while still caring for others", "Inspiring others to be more authentic", "Staying true to yourself under pressure", "Creating your own path when existing ones don't fit"],
    shadowAspects: ["Isolation that cuts you off from meaningful connection", "Difficulty trusting others or accepting help", "Resistance to collaboration even when beneficial", "Stubbornness that prevents growth", "Tendency to reject good advice because it comes from others", "Missing out on the gifts that community can offer"],
    growthPath: "Your journey involves learning that true independence includes the wisdom to know when connection serves your authentic self. You can maintain your sovereignty while still allowing others to support and enrich your journey. The strongest wolves know when to run with the pack."
  }
};