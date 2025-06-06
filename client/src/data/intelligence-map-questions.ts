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
    description: "You excel at logical reasoning, data analysis, and systematic problem-solving. Your mind naturally breaks down complex problems into manageable components.",
    traits: ["Logical reasoning", "Data analysis", "Critical thinking", "Systematic approach", "Fact-based decisions"],
    strengths: ["Problem decomposition", "Objective analysis", "Research skills", "Quality control", "Evidence-based thinking"],
    careers: ["Research scientist", "Data analyst", "Engineer", "Financial analyst", "Quality assurance specialist"]
  },
  emotional: {
    name: "Emotional Intelligence",
    description: "You have exceptional ability to understand, manage, and work with human emotions - both your own and others'. You excel in interpersonal relationships.",
    traits: ["Empathy", "Social awareness", "Relationship building", "Emotional regulation", "Communication"],
    strengths: ["Understanding people", "Conflict resolution", "Team building", "Motivating others", "Creating harmony"],
    careers: ["Counselor", "HR manager", "Teacher", "Social worker", "Team leader"]
  },
  creative: {
    name: "Creative Intelligence",
    description: "You think outside the box, generate original ideas, and see possibilities that others miss. Your mind thrives on innovation and artistic expression.",
    traits: ["Originality", "Innovation", "Artistic vision", "Flexibility", "Divergent thinking"],
    strengths: ["Generating new ideas", "Problem reframing", "Artistic expression", "Adaptability", "Inspiration"],
    careers: ["Artist", "Designer", "Writer", "Entrepreneur", "Creative director"]
  },
  strategic: {
    name: "Strategic Intelligence",
    description: "You excel at long-term planning, goal-setting, and seeing the big picture. You naturally think several steps ahead and position for future success.",
    traits: ["Long-term thinking", "Goal orientation", "Planning", "Vision", "Leadership"],
    strengths: ["Strategic planning", "Goal achievement", "Leadership", "Future focus", "Decision making"],
    careers: ["Executive", "Consultant", "Project manager", "Business strategist", "Military officer"]
  },
  systemic: {
    name: "Systemic Intelligence",
    description: "You understand how complex systems work and how different parts interconnect. You see patterns and relationships that create the bigger picture.",
    traits: ["Systems thinking", "Pattern recognition", "Holistic view", "Interconnectedness", "Synthesis"],
    strengths: ["Understanding complexity", "Seeing connections", "Holistic problem solving", "Integration", "Systems design"],
    careers: ["Systems analyst", "Organizational consultant", "Urban planner", "Ecosystem manager", "Process improvement specialist"]
  }
};