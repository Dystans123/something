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
    description: "Your motivation engine runs on the fuel of freedom and self-determination, driving you to create a life where you have maximum control over your choices, methods, and direction. You possess an innate need to be the author of your own story, and you find deep satisfaction in knowing that your successes and failures are truly your own. This drive for independence isn't just a preference—it's a fundamental part of how you maintain your sense of self and personal integrity.",
    detailedAnalysis: "The Autonomy Driver within you represents a deep psychological need for self-governance and personal sovereignty. You likely experienced early situations where your choices were restricted or where you saw the negative consequences of depending too heavily on others' decisions. This created a motivational system that prioritizes freedom and self-direction above external rewards. You work best when you can set your own schedule, choose your own methods, and have the flexibility to pivot when you see a better way forward.",
    traits: ["Strong need for personal freedom and choice", "Self-directed learning and problem-solving", "Resistance to micromanagement and rigid control", "High personal responsibility and accountability", "Creative approach to challenges", "Preference for flexible work environments", "Value authenticity over conformity"],
    strengths: ["Taking initiative without needing external direction", "Creating innovative solutions through independent thinking", "Maintaining high motivation when given freedom to choose", "Adapting quickly to new situations with creative flexibility", "Taking full ownership of both successes and failures", "Working effectively with minimal supervision"],
    challenges: ["Difficulty accepting necessary rules and structures", "Resistance to feedback that feels controlling", "Tendency to isolate rather than collaborate", "Impatience with processes that limit flexibility", "Struggle with situations requiring strict compliance", "May reject good ideas if they come with restrictions"],
    growthPath: "Your evolution involves learning to see collaboration and some constraints as tools that can actually enhance your freedom rather than limit it. Finding ways to maintain autonomy within structured environments will expand your opportunities and impact."
  },
  status: {
    name: "Status Driver",
    description: "Your motivation engine is powered by the pursuit of excellence, achievement, and the respect that comes from demonstrating your capabilities to the world. You possess a deep drive to distinguish yourself through accomplishment and to be recognized as someone of significance and influence. This isn't merely about ego—it reflects a genuine desire to make a meaningful impact and to be valued for the unique contributions you bring to any situation.",
    detailedAnalysis: "The Status Driver within you represents a sophisticated motivational system that seeks both achievement and acknowledgment. You likely learned early that excellence and accomplishment lead to respect, opportunities, and influence. This has created a powerful engine that drives you to continuously improve, compete effectively, and strive for positions where your talents can be fully recognized and utilized. You understand that status, when earned through genuine merit, opens doors to greater impact and influence.",
    traits: ["Strong drive for achievement and excellence", "Natural competitive spirit and goal orientation", "Leadership qualities and influence-seeking", "Image consciousness and professional presence", "Results-focused approach to challenges", "Motivation through recognition and respect", "Ambition for advancement and growth"],
    strengths: ["Delivering exceptional performance under pressure", "Leading others toward ambitious goals", "Building professional networks and influence", "Inspiring teams through your own high standards", "Achieving measurable results and outcomes", "Adapting strategies to win in competitive environments"],
    challenges: ["Over-dependence on external validation for self-worth", "Tendency to prioritize appearance over substance", "Difficulty collaborating when it doesn't enhance status", "Anxiety about maintaining position or reputation", "Risk of becoming disconnected from intrinsic satisfaction", "Potential for sacrificing relationships for advancement"],
    growthPath: "Your evolution involves learning to balance external achievement with internal satisfaction, and to use your influence and status to lift others rather than just yourself. True leadership means your success creates more success for those around you."
  },
  curiosity: {
    name: "Curiosity Driver",
    description: "Your motivation engine is fueled by an insatiable hunger for knowledge, discovery, and understanding that drives you to constantly expand the boundaries of what you know. You possess a natural fascination with how things work, why they happen, and what possibilities exist beyond current understanding. This drive for learning and exploration isn't just intellectual—it's a fundamental need that energizes you and gives your life meaning and direction.",
    detailedAnalysis: "The Curiosity Driver within you represents a sophisticated learning system that seeks not just information, but genuine understanding and insight. You likely discovered early that knowledge brings both personal satisfaction and practical power, creating a motivational loop that drives continuous exploration and growth. You approach challenges as puzzles to be solved and see every experience as an opportunity to learn something new about the world or yourself.",
    traits: ["Insatiable appetite for learning and discovery", "Natural questioning and investigative mindset", "Open-minded approach to new ideas and perspectives", "Analytical thinking and pattern recognition", "Adaptability through continuous learning", "Innovation through knowledge synthesis", "Deep engagement with complex problems"],
    strengths: ["Staying current with new developments and trends", "Solving complex problems through creative thinking", "Adapting quickly to new situations through rapid learning", "Generating innovative solutions by connecting diverse knowledge", "Maintaining engagement through intellectual stimulation", "Bringing fresh perspectives to established practices"],
    challenges: ["Difficulty maintaining focus on routine or repetitive tasks", "Tendency to start many projects without finishing them", "Analysis paralysis when too much information is available", "Impatience with processes that don't involve learning", "Risk of becoming overwhelmed by too many interests", "Struggle with environments that discourage questioning"],
    growthPath: "Your evolution involves learning to channel your curiosity into focused action and practical application. Developing the discipline to complete projects will help you transform your insights into tangible value for yourself and others."
  },
  recognition: {
    name: "Recognition Driver",
    description: "Your motivation engine thrives on appreciation, acknowledgment, and the deep human need to be seen and valued for your unique contributions. You possess a natural ability to understand and connect with others, and you find genuine fulfillment when your efforts are noticed, appreciated, and make a positive difference in people's lives. This drive for recognition reflects your fundamental desire to matter and to know that your presence and work have meaningful impact.",
    detailedAnalysis: "The Recognition Driver within you represents a sophisticated social motivation system that seeks both appreciation and meaningful connection with others. You likely learned early that positive attention and acknowledgment create feelings of worth and belonging, developing a motivational pattern that drives you to contribute in ways that are visible and valued. You understand that recognition is not just about ego—it's about knowing that your efforts create real value for others.",
    traits: ["Strong desire for appreciation and acknowledgment", "Natural collaborative and team-oriented approach", "Service-oriented mindset focused on others' needs", "Expressive communication and relationship-building", "Sensitivity to feedback and others' reactions", "Motivation through positive social connection", "Drive to make visible, meaningful contributions"],
    strengths: ["Building strong collaborative relationships with others", "Understanding and responding to others' needs effectively", "Communicating ideas and contributions clearly", "Creating positive team dynamics and morale", "Providing excellent service and support to others", "Inspiring others through your dedication and care"],
    challenges: ["Over-dependence on external validation for self-worth", "Difficulty handling criticism or negative feedback", "Tendency toward people-pleasing at personal expense", "Anxiety when contributions go unnoticed or unappreciated", "Risk of losing authenticity in pursuit of approval", "Potential burnout from excessive giving without receiving"],
    growthPath: "Your growth involves developing internal validation alongside external recognition, learning to appreciate your own worth while still valuing others' feedback. Building healthy boundaries will help you give sustainably while maintaining your authentic self."
  },
  security: {
    name: "Security Driver",
    description: "Your motivation engine is powered by the fundamental need for stability, safety, and predictability in an uncertain world. You possess a natural wisdom about risk management and long-term planning that drives you to create sustainable foundations for yourself and those you care about. This drive for security isn't about fear—it's about the intelligent recognition that stability creates the platform from which all other goals become possible.",
    detailedAnalysis: "The Security Driver within you represents a sophisticated survival and thriving system that prioritizes sustainable success over quick wins. You likely learned early that preparation, planning, and careful decision-making lead to better outcomes and less stress. This has created a motivational pattern that values stability, reliability, and long-term thinking. You understand that true freedom comes from having a secure foundation to build upon.",
    traits: ["Strong focus on stability and long-term security", "Natural planning and risk assessment abilities", "Cautious approach to decision-making", "Reliability and consistency in commitments", "Practical thinking and resource management", "Preference for proven methods and predictable outcomes", "Protective instincts for self and loved ones"],
    strengths: ["Creating detailed plans that account for potential obstacles", "Managing resources efficiently and sustainably", "Providing reliable support and consistency for others", "Making decisions that minimize unnecessary risks", "Building systems and processes that create stability", "Anticipating problems before they become critical"],
    challenges: ["Resistance to change even when beneficial", "Tendency to miss opportunities due to over-caution", "Anxiety about uncertainty and unpredictable situations", "Difficulty adapting quickly to unexpected changes", "Potential for becoming stuck in comfort zones", "Risk of letting fear override potential growth"],
    growthPath: "Your evolution involves learning to see calculated risks as investments in future security and recognizing that adaptability is itself a form of security. Building confidence in your ability to handle uncertainty will expand your opportunities while maintaining your natural wisdom about sustainable success."
  }
};