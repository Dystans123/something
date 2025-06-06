export interface IntelligenceMapOption {
  text: string;
  intelligence: string;
  value: number; // 1-5 scale for intelligence strength
}

export interface IntelligenceMapQuestion {
  text: string;
  category: string;
  options: IntelligenceMapOption[];
}

export const intelligenceMapQuestions: IntelligenceMapQuestion[] = [
  {
    text: "When faced with a complex problem, your first instinct is to:",
    category: "problem-solving",
    options: [
      { text: "Break it down into logical steps and analyze each component", intelligence: "analytical", value: 5 },
      { text: "Consider how it affects people and relationships involved", intelligence: "emotional", value: 5 },
      { text: "Look for creative, unconventional solutions", intelligence: "creative", value: 5 },
      { text: "Think about the bigger picture and long-term implications", intelligence: "strategic", value: 5 },
      { text: "Find patterns and connections to other systems", intelligence: "systemic", value: 5 }
    ]
  },
  {
    text: "In your ideal work environment, you would:",
    category: "work-style",
    options: [
      { text: "Work with data, research, and detailed analysis", intelligence: "analytical", value: 4 },
      { text: "Collaborate closely with others and build relationships", intelligence: "emotional", value: 4 },
      { text: "Design, create, and innovate new solutions", intelligence: "creative", value: 4 },
      { text: "Plan long-term strategies and make high-level decisions", intelligence: "strategic", value: 4 },
      { text: "Understand how different parts work together as a whole", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "When learning something new, you prefer to:",
    category: "learning",
    options: [
      { text: "Study the theory and understand the principles first", intelligence: "analytical", value: 4 },
      { text: "Learn through interaction and discussion with others", intelligence: "emotional", value: 4 },
      { text: "Experiment and try different approaches", intelligence: "creative", value: 4 },
      { text: "Understand how it fits into the bigger strategy", intelligence: "strategic", value: 4 },
      { text: "See how it connects to other knowledge and systems", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "Your friends would describe you as someone who:",
    category: "social-perception",
    options: [
      { text: "Always has the facts and thinks things through logically", intelligence: "analytical", value: 3 },
      { text: "Really understands people and their emotions", intelligence: "emotional", value: 3 },
      { text: "Comes up with unique and interesting ideas", intelligence: "creative", value: 3 },
      { text: "Sees the big picture and plans ahead", intelligence: "strategic", value: 3 },
      { text: "Understands how everything connects and influences each other", intelligence: "systemic", value: 3 }
    ]
  },
  {
    text: "When making decisions, you tend to:",
    category: "decision-making",
    options: [
      { text: "Gather all available data and analyze it objectively", intelligence: "analytical", value: 5 },
      { text: "Consider how it will impact people emotionally", intelligence: "emotional", value: 5 },
      { text: "Trust your intuition and think outside the box", intelligence: "creative", value: 5 },
      { text: "Think about long-term consequences and positioning", intelligence: "strategic", value: 5 },
      { text: "Consider how it affects the entire system or organization", intelligence: "systemic", value: 5 }
    ]
  },
  {
    text: "In a team project, you naturally:",
    category: "team-dynamics",
    options: [
      { text: "Take charge of research and fact-checking", intelligence: "analytical", value: 3 },
      { text: "Focus on team harmony and communication", intelligence: "emotional", value: 3 },
      { text: "Generate new ideas and creative solutions", intelligence: "creative", value: 3 },
      { text: "Set direction and coordinate overall strategy", intelligence: "strategic", value: 3 },
      { text: "Help everyone understand their role in the bigger picture", intelligence: "systemic", value: 3 }
    ]
  },
  {
    text: "Your biggest strength in solving problems is:",
    category: "strengths",
    options: [
      { text: "Your ability to analyze and break down complex information", intelligence: "analytical", value: 5 },
      { text: "Your understanding of human nature and motivations", intelligence: "emotional", value: 5 },
      { text: "Your ability to see possibilities others miss", intelligence: "creative", value: 5 },
      { text: "Your capacity to think several steps ahead", intelligence: "strategic", value: 5 },
      { text: "Your ability to see how everything fits together", intelligence: "systemic", value: 5 }
    ]
  },
  {
    text: "When explaining something to others, you:",
    category: "communication",
    options: [
      { text: "Use facts, data, and logical arguments", intelligence: "analytical", value: 4 },
      { text: "Connect with their feelings and use relatable examples", intelligence: "emotional", value: 4 },
      { text: "Use metaphors, stories, and creative analogies", intelligence: "creative", value: 4 },
      { text: "Frame it in terms of goals and outcomes", intelligence: "strategic", value: 4 },
      { text: "Show how it connects to other concepts they know", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "Your approach to challenges is typically:",
    category: "challenge-approach",
    options: [
      { text: "Methodical and evidence-based", intelligence: "analytical", value: 4 },
      { text: "Collaborative and people-focused", intelligence: "emotional", value: 4 },
      { text: "Innovative and experimental", intelligence: "creative", value: 4 },
      { text: "Goal-oriented and tactical", intelligence: "strategic", value: 4 },
      { text: "Holistic and interconnected", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "You feel most energized when:",
    category: "energy-source",
    options: [
      { text: "Solving complex analytical problems", intelligence: "analytical", value: 3 },
      { text: "Helping others and building meaningful connections", intelligence: "emotional", value: 3 },
      { text: "Creating something new and original", intelligence: "creative", value: 3 },
      { text: "Achieving important goals and milestones", intelligence: "strategic", value: 3 },
      { text: "Understanding how complex systems work", intelligence: "systemic", value: 3 }
    ]
  },
  {
    text: "When reading or consuming information, you prefer:",
    category: "information-processing",
    options: [
      { text: "Detailed reports with data and research", intelligence: "analytical", value: 4 },
      { text: "Stories about people and human experiences", intelligence: "emotional", value: 4 },
      { text: "Innovative ideas and creative perspectives", intelligence: "creative", value: 4 },
      { text: "Strategic insights and future trends", intelligence: "strategic", value: 4 },
      { text: "Comprehensive overviews of how things connect", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "Your natural reaction to conflict is to:",
    category: "conflict-handling",
    options: [
      { text: "Analyze the situation objectively and find logical solutions", intelligence: "analytical", value: 3 },
      { text: "Focus on understanding everyone's feelings and perspectives", intelligence: "emotional", value: 3 },
      { text: "Find creative compromises that work for everyone", intelligence: "creative", value: 3 },
      { text: "Focus on the end goal and find the most effective path", intelligence: "strategic", value: 3 },
      { text: "Look at how the conflict affects the larger system", intelligence: "systemic", value: 3 }
    ]
  },
  {
    text: "You're most likely to notice:",
    category: "attention-focus",
    options: [
      { text: "Inconsistencies in data or logical gaps", intelligence: "analytical", value: 4 },
      { text: "When someone seems upset or uncomfortable", intelligence: "emotional", value: 4 },
      { text: "Opportunities for improvement or innovation", intelligence: "creative", value: 4 },
      { text: "Patterns that suggest future opportunities or threats", intelligence: "strategic", value: 4 },
      { text: "How changes in one area affect other areas", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "In your free time, you enjoy:",
    category: "leisure-preferences",
    options: [
      { text: "Reading, researching, or solving puzzles", intelligence: "analytical", value: 3 },
      { text: "Spending quality time with friends and family", intelligence: "emotional", value: 3 },
      { text: "Creative hobbies like art, music, or writing", intelligence: "creative", value: 3 },
      { text: "Planning future goals and projects", intelligence: "strategic", value: 3 },
      { text: "Learning about how different things work and connect", intelligence: "systemic", value: 3 }
    ]
  },
  {
    text: "Your ideal role in an organization would be:",
    category: "organizational-role",
    options: [
      { text: "Research analyst or technical specialist", intelligence: "analytical", value: 5 },
      { text: "HR leader or team coordinator", intelligence: "emotional", value: 5 },
      { text: "Innovation leader or creative director", intelligence: "creative", value: 5 },
      { text: "Strategic planner or executive leader", intelligence: "strategic", value: 5 },
      { text: "Systems architect or organizational designer", intelligence: "systemic", value: 5 }
    ]
  },
  {
    text: "When you're stuck on a problem, you typically:",
    category: "problem-solving-approach",
    options: [
      { text: "Gather more data and analyze it more thoroughly", intelligence: "analytical", value: 4 },
      { text: "Talk it through with others to get different perspectives", intelligence: "emotional", value: 4 },
      { text: "Step back and approach it from a completely different angle", intelligence: "creative", value: 4 },
      { text: "Consider whether you're solving the right problem", intelligence: "strategic", value: 4 },
      { text: "Look at how the problem fits into the larger context", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "You feel most confident when:",
    category: "confidence-source",
    options: [
      { text: "You have all the facts and data you need", intelligence: "analytical", value: 3 },
      { text: "You understand how everyone involved feels about the situation", intelligence: "emotional", value: 3 },
      { text: "You can think of multiple creative solutions", intelligence: "creative", value: 3 },
      { text: "You have a clear plan and strategy", intelligence: "strategic", value: 3 },
      { text: "You understand how all the pieces fit together", intelligence: "systemic", value: 3 }
    ]
  },
  {
    text: "Your communication style is generally:",
    category: "communication-style",
    options: [
      { text: "Precise, detailed, and fact-based", intelligence: "analytical", value: 4 },
      { text: "Warm, empathetic, and relationship-focused", intelligence: "emotional", value: 4 },
      { text: "Inspiring, imaginative, and idea-rich", intelligence: "creative", value: 4 },
      { text: "Clear, goal-oriented, and purposeful", intelligence: "strategic", value: 4 },
      { text: "Comprehensive, interconnected, and holistic", intelligence: "systemic", value: 4 }
    ]
  },
  {
    text: "When evaluating options, you prioritize:",
    category: "evaluation-criteria",
    options: [
      { text: "Accuracy, logic, and evidence", intelligence: "analytical", value: 5 },
      { text: "Impact on people and relationships", intelligence: "emotional", value: 5 },
      { text: "Originality and potential for innovation", intelligence: "creative", value: 5 },
      { text: "Alignment with long-term goals", intelligence: "strategic", value: 5 },
      { text: "Effect on the overall system or ecosystem", intelligence: "systemic", value: 5 }
    ]
  },
  {
    text: "Others often come to you for:",
    category: "sought-expertise",
    options: [
      { text: "Fact-checking and logical analysis", intelligence: "analytical", value: 4 },
      { text: "Emotional support and understanding", intelligence: "emotional", value: 4 },
      { text: "Fresh ideas and creative solutions", intelligence: "creative", value: 4 },
      { text: "Strategic advice and planning", intelligence: "strategic", value: 4 },
      { text: "Understanding complex relationships and connections", intelligence: "systemic", value: 4 }
    ]
  }
];

export const intelligenceTypes = {
  analytical: {
    name: "Analytical Intelligence",
    description: "Your mind operates like a precision instrument, naturally breaking down complexity into clear, logical components. You possess the rare ability to see through surface-level chaos to the underlying patterns and structures that govern reality. This intelligence type drives you to seek truth through evidence, making you a natural detective of information and a guardian of logical consistency.",
    detailedAnalysis: "Your analytical intelligence manifests as an almost instinctive need to understand 'why' and 'how' before accepting any conclusion. You process information sequentially, building robust mental models through careful examination of cause and effect. This methodical approach often makes you the person others turn to when they need to verify facts or untangle complex problems. Your brain naturally seeks contradictions and inconsistencies, making you excellent at quality control and risk assessment.",
    traits: ["Logical reasoning mastery", "Data synthesis expertise", "Critical thinking precision", "Systematic problem decomposition", "Evidence-based decision making", "Pattern recognition in data", "Quality assurance mindset"],
    strengths: ["Breaking complex problems into solvable parts", "Identifying logical fallacies and inconsistencies", "Creating systematic approaches to challenges", "Maintaining objectivity under pressure", "Conducting thorough research and analysis", "Building reliable decision-making frameworks"],
    applications: ["Research and development projects", "Financial analysis and modeling", "Quality control and process improvement", "Data-driven strategy development", "Technical problem solving", "Risk assessment and mitigation"],
    developmentAreas: ["Embracing creative ambiguity", "Considering emotional factors in decisions", "Communicating complex ideas simply", "Balancing analysis with action", "Developing intuitive decision-making"],
    careerSuggestions: ["Data Scientist", "Research Analyst", "Quality Assurance Manager", "Process Engineer", "Financial Modeler", "Business Intelligence Analyst", "Systems Analyst", "Forensic Accountant"],
    growthTips: [
      "Practice explaining complex concepts in simple terms to develop communication skills",
      "Engage with creative activities to balance your analytical nature",
      "Learn to trust your intuition alongside your analytical process",
      "Collaborate with emotionally intelligent people to broaden your perspective",
      "Set time limits for analysis to avoid over-thinking"
    ]
  },
  emotional: {
    name: "Emotional Intelligence",
    description: "You possess the remarkable ability to navigate the complex landscape of human emotions with intuitive skill and profound understanding. Your intelligence operates in the realm of feelings, motivations, and interpersonal dynamics, allowing you to connect deeply with others and create meaningful relationships. You understand that emotions are not obstacles to logic—they are a sophisticated information system about human needs and motivations.",
    detailedAnalysis: "Your emotional intelligence allows you to read between the lines of human interaction, picking up on subtle cues that others miss. You naturally understand that behind every behavior is an emotional state, and behind every emotion is a human need. This gives you the ability to influence, motivate, and heal in ways that purely logical approaches cannot achieve. You serve as an emotional translator, helping others understand their own feelings and the feelings of those around them.",
    traits: ["Deep empathetic understanding", "Social awareness mastery", "Relationship building expertise", "Emotional regulation skills", "Nonverbal communication reading", "Motivational insight", "Conflict de-escalation ability"],
    strengths: ["Understanding underlying emotional motivations", "Creating psychological safety for others", "Building trust and rapport quickly", "Facilitating difficult conversations", "Inspiring and motivating teams", "Recognizing and managing emotional patterns"],
    applications: ["Team leadership and management", "Counseling and coaching", "Customer relationship management", "Organizational culture development", "Conflict resolution and mediation", "Training and development programs"],
    developmentAreas: ["Setting emotional boundaries", "Balancing empathy with objectivity", "Using data to support emotional insights", "Managing emotional overwhelm", "Developing strategic thinking skills"],
    careerSuggestions: ["Therapist/Counselor", "Human Resources Director", "Team Lead/Manager", "Social Worker", "Customer Success Manager", "Organizational Development Consultant", "Executive Coach", "Sales Professional"],
    growthTips: [
      "Learn to separate your emotions from others' to avoid emotional exhaustion",
      "Develop data analysis skills to support your emotional insights with facts",
      "Practice setting healthy boundaries while maintaining empathy",
      "Study conflict resolution techniques to enhance your natural abilities",
      "Combine your emotional insights with strategic planning skills"
    ]
  },
  creative: {
    name: "Creative Intelligence",
    description: "Your mind operates as a boundless generator of possibilities, constantly making novel connections between seemingly unrelated concepts. You possess the extraordinary ability to transcend conventional thinking patterns and birth new realities from the realm of imagination. Your intelligence thrives in ambiguity and uncertainty, transforming chaos into beauty and problems into opportunities for innovation.",
    detailedAnalysis: "Your creative intelligence manifests as a natural ability to see what others cannot—potential where others see limitations, beauty where others see mundane reality, solutions where others see impossibilities. You think in metaphors, visualize in colors and forms, and approach problems from angles that surprise even yourself. This intelligence type makes you a natural innovator, constantly pushing boundaries and challenging the status quo through original thinking and artistic expression.",
    traits: ["Innovative thinking mastery", "Artistic vision and expression", "Divergent problem-solving", "Metaphorical and abstract reasoning", "Aesthetic sensitivity", "Risk-taking in ideas", "Pattern synthesis from chaos"],
    strengths: ["Generating breakthrough ideas from nowhere", "Reframing problems to reveal hidden solutions", "Creating beauty and meaning through artistic expression", "Adapting quickly to changing circumstances", "Inspiring others with original vision", "Synthesizing disparate concepts into cohesive wholes"],
    applications: ["Product innovation and design", "Marketing and brand development", "Content creation and storytelling", "Problem-solving for complex challenges", "Artistic and cultural projects", "Entrepreneurial ventures"],
    developmentAreas: ["Implementing ideas systematically", "Working within structured constraints", "Communicating abstract concepts clearly", "Managing practical details", "Collaborating with analytical thinkers"],
    careerSuggestions: ["Creative Director", "Product Designer", "Artist/Musician", "Entrepreneur", "Marketing Creative", "Content Creator", "Innovation Consultant", "UX/UI Designer"],
    growthTips: [
      "Partner with detail-oriented people to help implement your ideas",
      "Learn project management skills to bring creative visions to life",
      "Practice articulating abstract concepts in concrete terms",
      "Develop business skills to commercialize your creative insights",
      "Create systems to capture and organize your creative inspirations"
    ]
  },
  strategic: {
    name: "Strategic Intelligence",
    description: "Your mind operates like a master chess player, naturally thinking multiple moves ahead and positioning for long-term success. You possess the rare ability to see through present complexity to future possibilities, crafting pathways from current reality to desired outcomes. Your intelligence excels at identifying leverage points—those crucial decisions and actions that create maximum impact toward achieving ambitious goals.",
    detailedAnalysis: "Your strategic intelligence manifests as an intuitive understanding of how actions today shape tomorrow's reality. You naturally see the interconnections between decisions, resources, and outcomes, allowing you to craft comprehensive plans that account for multiple scenarios. This intelligence type makes you a natural leader and visionary, capable of inspiring others with compelling pictures of possible futures while maintaining the practical wisdom to make those visions achievable.",
    traits: ["Visionary long-term thinking", "Goal-oriented planning mastery", "Resource optimization", "Risk-reward calculation", "Leadership and influence", "Future scenario modeling", "Competitive advantage identification"],
    strengths: ["Creating comprehensive long-term strategies", "Identifying and securing competitive advantages", "Making complex decisions under uncertainty", "Inspiring teams with compelling visions", "Optimizing resource allocation for maximum impact", "Anticipating market and industry trends"],
    applications: ["Business strategy and planning", "Organizational leadership", "Market expansion initiatives", "Competitive positioning", "Investment and resource allocation", "Change management and transformation"],
    developmentAreas: ["Paying attention to immediate details", "Considering emotional factors in planning", "Adapting when plans need rapid changes", "Including diverse perspectives in strategy", "Balancing vision with practical execution"],
    careerSuggestions: ["CEO/Executive Leader", "Strategy Consultant", "Business Development Director", "Investment Manager", "Management Consultant", "Operations Director", "Strategic Planner", "Venture Capitalist"],
    growthTips: [
      "Develop skills in tactical execution to complement your strategic vision",
      "Learn to communicate strategies in emotionally compelling ways",
      "Practice rapid adaptation when circumstances change unexpectedly",
      "Include diverse stakeholders in your strategic planning process",
      "Balance long-term vision with short-term operational needs"
    ]
  },
  systemic: {
    name: "Systemic Intelligence",
    description: "Your mind naturally perceives the intricate web of relationships that connect all things, seeing beyond individual components to understand how entire systems function and evolve. You possess the remarkable ability to hold multiple perspectives simultaneously while recognizing the underlying patterns that govern complex interactions. Your intelligence operates at the intersection of holistic thinking and practical understanding, making you a natural systems architect and organizational healer.",
    detailedAnalysis: "Your systemic intelligence allows you to see the forest, the trees, and the entire ecosystem simultaneously. You understand that every action creates ripple effects throughout interconnected networks, and you can predict how changes in one area will impact the whole. This makes you invaluable in complex environments where linear thinking fails and holistic solutions are required. You serve as a bridge between different perspectives, helping others understand their role in larger systems.",
    traits: ["Holistic systems thinking", "Pattern recognition across domains", "Interconnectedness awareness", "Multi-perspective integration", "Complexity navigation", "Ecosystem understanding", "Emergence and adaptation insight"],
    strengths: ["Understanding complex interconnections", "Identifying leverage points in systems", "Designing holistic solutions", "Integrating diverse perspectives", "Navigating organizational complexity", "Predicting system-wide effects of changes"],
    applications: ["Organizational design and development", "Process optimization and integration", "Complex problem solving", "Change management initiatives", "Ecosystem and environmental planning", "Technology systems integration"],
    developmentAreas: ["Focusing on specific details", "Making quick decisions without full analysis", "Working within rigid structures", "Simplifying complex explanations", "Managing information overload"],
    careerSuggestions: ["Systems Analyst", "Organizational Development Consultant", "Process Improvement Manager", "Urban Planner", "Ecosystem Manager", "Integration Architect", "Change Management Specialist", "Operations Research Analyst"],
    growthTips: [
      "Practice breaking down complex insights into actionable steps",
      "Develop skills in rapid decision-making for urgent situations",
      "Learn to communicate systems insights in simple, clear language",
      "Work on prioritizing when dealing with multiple interconnected issues",
      "Balance holistic thinking with focused execution on specific goals"
    ]
  }
};