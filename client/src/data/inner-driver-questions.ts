export interface InnerDriverOption {
  text: string;
  driver: string;
  value: number; // 1-5 scale for driver intensity
}

export interface InnerDriverQuestion {
  text: string;
  category: string;
  options: InnerDriverOption[];
}

export const innerDriverQuestions: InnerDriverQuestion[] = [
  {
    text: "What motivates you most when taking on a new project?",
    category: "project-motivation",
    options: [
      { text: "The freedom to do it your own way", driver: "autonomy", value: 5 },
      { text: "The recognition and respect you'll gain", driver: "status", value: 5 },
      { text: "Learning something completely new", driver: "curiosity", value: 5 },
      { text: "Getting acknowledgment for your contributions", driver: "recognition", value: 5 },
      { text: "Knowing it will provide stability and safety", driver: "security", value: 5 }
    ]
  },
  {
    text: "In your ideal work environment, you would have:",
    category: "work-preferences",
    options: [
      { text: "Complete control over your schedule and methods", driver: "autonomy", value: 4 },
      { text: "A prestigious title and respected position", driver: "status", value: 4 },
      { text: "Opportunities to explore and experiment constantly", driver: "curiosity", value: 4 },
      { text: "Regular feedback and appreciation for your work", driver: "recognition", value: 4 },
      { text: "Stable income and clear job security", driver: "security", value: 4 }
    ]
  },
  {
    text: "When you achieve something significant, what matters most to you?",
    category: "achievement-value",
    options: [
      { text: "That you accomplished it through your own choices", driver: "autonomy", value: 4 },
      { text: "That it elevates your social or professional standing", driver: "status", value: 4 },
      { text: "That you learned fascinating things along the way", driver: "curiosity", value: 4 },
      { text: "That others notice and appreciate your success", driver: "recognition", value: 4 },
      { text: "That it makes your future more secure", driver: "security", value: 4 }
    ]
  },
  {
    text: "Your biggest fear in life is:",
    category: "core-fears",
    options: [
      { text: "Being controlled or restricted by others", driver: "autonomy", value: 5 },
      { text: "Losing respect or falling in social standing", driver: "status", value: 5 },
      { text: "Being bored or mentally unstimulated", driver: "curiosity", value: 5 },
      { text: "Being ignored or having your efforts go unnoticed", driver: "recognition", value: 5 },
      { text: "Financial instability or unpredictable circumstances", driver: "security", value: 5 }
    ]
  },
  {
    text: "When making career decisions, you prioritize:",
    category: "career-priorities",
    options: [
      { text: "Flexibility and independence in how you work", driver: "autonomy", value: 5 },
      { text: "Opportunities for advancement and prestige", driver: "status", value: 5 },
      { text: "Variety and intellectual stimulation", driver: "curiosity", value: 5 },
      { text: "Visibility and opportunities to showcase your talents", driver: "recognition", value: 5 },
      { text: "Steady income and reliable benefits", driver: "security", value: 5 }
    ]
  },
  {
    text: "In relationships, you most value:",
    category: "relationship-values",
    options: [
      { text: "Partners who respect your independence", driver: "autonomy", value: 4 },
      { text: "Partners who enhance your social image", driver: "status", value: 3 },
      { text: "Partners who share your interests and curiosity", driver: "curiosity", value: 4 },
      { text: "Partners who appreciate and celebrate you", driver: "recognition", value: 4 },
      { text: "Partners who provide emotional and financial stability", driver: "security", value: 4 }
    ]
  },
  {
    text: "When you're stressed, what helps you most?",
    category: "stress-relief",
    options: [
      { text: "Having space and time to yourself", driver: "autonomy", value: 4 },
      { text: "Reminding yourself of your accomplishments", driver: "status", value: 3 },
      { text: "Learning something new or engaging your mind", driver: "curiosity", value: 4 },
      { text: "Talking to someone who appreciates your situation", driver: "recognition", value: 4 },
      { text: "Creating a detailed plan to regain control", driver: "security", value: 4 }
    ]
  },
  {
    text: "Your approach to taking risks is:",
    category: "risk-approach",
    options: [
      { text: "Take risks that give you more control over your life", driver: "autonomy", value: 4 },
      { text: "Take calculated risks that could improve your position", driver: "status", value: 4 },
      { text: "Take risks that could lead to exciting discoveries", driver: "curiosity", value: 5 },
      { text: "Take risks where success would be highly visible", driver: "recognition", value: 4 },
      { text: "Avoid unnecessary risks and focus on safety", driver: "security", value: 5 }
    ]
  },
  {
    text: "When choosing how to spend your free time, you prefer:",
    category: "leisure-choices",
    options: [
      { text: "Activities you can do at your own pace and style", driver: "autonomy", value: 4 },
      { text: "Activities that reflect well on your image", driver: "status", value: 3 },
      { text: "Activities that teach you something new", driver: "curiosity", value: 4 },
      { text: "Activities where others can see your skills", driver: "recognition", value: 3 },
      { text: "Activities that are relaxing and predictable", driver: "security", value: 4 }
    ]
  },
  {
    text: "Your biggest frustration at work comes from:",
    category: "work-frustrations",
    options: [
      { text: "Micromanagement and lack of freedom", driver: "autonomy", value: 5 },
      { text: "Being overlooked for promotions or important roles", driver: "status", value: 5 },
      { text: "Repetitive tasks with no learning opportunities", driver: "curiosity", value: 5 },
      { text: "Your contributions going unnoticed or uncredited", driver: "recognition", value: 5 },
      { text: "Uncertainty about your job security or future", driver: "security", value: 5 }
    ]
  },
  {
    text: "When setting personal goals, you focus on:",
    category: "goal-setting",
    options: [
      { text: "Goals that increase your personal freedom", driver: "autonomy", value: 4 },
      { text: "Goals that elevate your status or reputation", driver: "status", value: 4 },
      { text: "Goals that satisfy your intellectual curiosity", driver: "curiosity", value: 4 },
      { text: "Goals that showcase your abilities to others", driver: "recognition", value: 4 },
      { text: "Goals that build stability and reduce uncertainty", driver: "security", value: 4 }
    ]
  },
  {
    text: "Your ideal vacation would involve:",
    category: "vacation-preferences",
    options: [
      { text: "Complete freedom to do whatever you want each day", driver: "autonomy", value: 4 },
      { text: "Staying at prestigious locations or exclusive experiences", driver: "status", value: 4 },
      { text: "Exploring new places and learning about different cultures", driver: "curiosity", value: 4 },
      { text: "Sharing amazing experiences on social media", driver: "recognition", value: 3 },
      { text: "A well-planned, safe trip with reliable accommodations", driver: "security", value: 4 }
    ]
  },
  {
    text: "When facing a difficult decision, you ask yourself:",
    category: "decision-framework",
    options: [
      { text: "Which option gives me the most control?", driver: "autonomy", value: 5 },
      { text: "Which option makes me look best?", driver: "status", value: 4 },
      { text: "Which option is most interesting to explore?", driver: "curiosity", value: 4 },
      { text: "Which option will get me the most positive attention?", driver: "recognition", value: 4 },
      { text: "Which option is safest and most reliable?", driver: "security", value: 5 }
    ]
  },
  {
    text: "Your energy levels are highest when you're:",
    category: "energy-sources",
    options: [
      { text: "Working independently on something you chose", driver: "autonomy", value: 4 },
      { text: "In a position of influence or leadership", driver: "status", value: 4 },
      { text: "Learning something that fascinated you", driver: "curiosity", value: 4 },
      { text: "Receiving praise or acknowledgment for your work", driver: "recognition", value: 4 },
      { text: "Making progress on long-term stability goals", driver: "security", value: 3 }
    ]
  },
  {
    text: "When you were a child, you most wanted:",
    category: "childhood-desires",
    options: [
      { text: "To make your own choices and decisions", driver: "autonomy", value: 4 },
      { text: "To be seen as special or important", driver: "status", value: 4 },
      { text: "To understand how everything worked", driver: "curiosity", value: 4 },
      { text: "To have adults notice and praise your efforts", driver: "recognition", value: 4 },
      { text: "To feel safe and know what to expect", driver: "security", value: 4 }
    ]
  },
  {
    text: "Your definition of success includes:",
    category: "success-definition",
    options: [
      { text: "Living life on your own terms", driver: "autonomy", value: 5 },
      { text: "Achieving a respected position in society", driver: "status", value: 5 },
      { text: "Never stopping learning and growing", driver: "curiosity", value: 4 },
      { text: "Being appreciated for your unique contributions", driver: "recognition", value: 5 },
      { text: "Having financial security and peace of mind", driver: "security", value: 5 }
    ]
  },
  {
    text: "When working on a team, you prefer to:",
    category: "team-preferences",
    options: [
      { text: "Work independently on your assigned part", driver: "autonomy", value: 4 },
      { text: "Take on a leadership or highly visible role", driver: "status", value: 4 },
      { text: "Focus on the most interesting or challenging aspects", driver: "curiosity", value: 4 },
      { text: "Contribute in ways that highlight your expertise", driver: "recognition", value: 4 },
      { text: "Ensure the project stays on track and meets deadlines", driver: "security", value: 3 }
    ]
  },
  {
    text: "Your approach to learning new skills is:",
    category: "learning-approach",
    options: [
      { text: "Self-directed learning at your own pace", driver: "autonomy", value: 4 },
      { text: "Learning skills that will advance your career", driver: "status", value: 4 },
      { text: "Learning whatever captures your interest", driver: "curiosity", value: 5 },
      { text: "Learning skills that others will notice and value", driver: "recognition", value: 4 },
      { text: "Learning practical skills that provide security", driver: "security", value: 4 }
    ]
  },
  {
    text: "When you disagree with authority figures, you:",
    category: "authority-response",
    options: [
      { text: "Assert your right to think and act independently", driver: "autonomy", value: 5 },
      { text: "Consider how challenging them might affect your position", driver: "status", value: 3 },
      { text: "Question their reasoning and seek to understand", driver: "curiosity", value: 4 },
      { text: "Present your alternative viewpoint professionally", driver: "recognition", value: 3 },
      { text: "Weigh the risks before deciding whether to speak up", driver: "security", value: 4 }
    ]
  },
  {
    text: "Your biggest source of pride comes from:",
    category: "pride-source",
    options: [
      { text: "Achievements you accomplished through your own efforts", driver: "autonomy", value: 4 },
      { text: "Recognition of your expertise or accomplishments", driver: "status", value: 4 },
      { text: "Discoveries you made or problems you solved", driver: "curiosity", value: 4 },
      { text: "Positive feedback and appreciation from others", driver: "recognition", value: 5 },
      { text: "Building stability and security for yourself or loved ones", driver: "security", value: 4 }
    ]
  }
];

export const driverTypes = {
  autonomy: {
    name: "Autonomy Driver",
    description: "You are motivated by freedom, independence, and self-determination. You need control over your choices and the ability to direct your own path.",
    traits: ["Independent", "Self-directed", "Values freedom", "Resists control", "Self-reliant"],
    strengths: ["Self-motivation", "Creative problem-solving", "Personal responsibility", "Adaptability", "Innovation"],
    challenges: ["Difficulty with rules", "Resistance to feedback", "May isolate from others"],
    growthPath: "Learn to balance independence with collaboration, accept helpful constraints"
  },
  status: {
    name: "Status Driver",
    description: "You are motivated by achievement, recognition, and social position. You strive to be respected and valued for your accomplishments.",
    traits: ["Achievement-oriented", "Competitive", "Image-conscious", "Leadership-focused", "Goal-driven"],
    strengths: ["High performance", "Leadership abilities", "Professional growth", "Inspiring others", "Results-oriented"],
    challenges: ["External validation dependency", "Competition over collaboration", "Status anxiety"],
    growthPath: "Develop internal validation, focus on meaningful impact over image"
  },
  curiosity: {
    name: "Curiosity Driver",
    description: "You are motivated by learning, discovery, and understanding. You thrive on intellectual stimulation and exploring new ideas.",
    traits: ["Inquisitive", "Open-minded", "Learning-focused", "Exploratory", "Analytical"],
    strengths: ["Continuous learning", "Innovation", "Problem-solving", "Adaptability", "Knowledge synthesis"],
    challenges: ["Difficulty with routine", "May lack focus", "Analysis paralysis"],
    growthPath: "Learn to apply knowledge practically, balance exploration with execution"
  },
  recognition: {
    name: "Recognition Driver",
    description: "You are motivated by appreciation, acknowledgment, and being valued by others. You need to feel seen and appreciated for your contributions.",
    traits: ["Appreciation-seeking", "Collaborative", "Service-oriented", "Expressive", "Relationship-focused"],
    strengths: ["Team collaboration", "Service to others", "Communication skills", "Emotional intelligence", "Building connections"],
    challenges: ["External validation dependency", "Difficulty with criticism", "People-pleasing tendencies"],
    growthPath: "Develop self-appreciation, learn to value internal satisfaction over external praise"
  },
  security: {
    name: "Security Driver",
    description: "You are motivated by stability, safety, and predictability. You need to feel secure and protected from uncertainty and risk.",
    traits: ["Cautious", "Planning-oriented", "Risk-averse", "Reliable", "Practical"],
    strengths: ["Careful planning", "Risk management", "Reliability", "Long-term thinking", "Stability creation"],
    challenges: ["Resistance to change", "May miss opportunities", "Anxiety about uncertainty"],
    growthPath: "Learn to embrace calculated risks, develop confidence in your adaptability"
  }
};