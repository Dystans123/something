export interface IntelligenceTypeOption {
  text: string;
  intelligence: string;
  value: number; // 1-5 scale for intelligence strength
}

export interface IntelligenceTypeQuestion {
  text: string;
  category: string;
  options: IntelligenceTypeOption[];
}

export const intelligenceTypeQuestions: IntelligenceTypeQuestion[] = [
  {
    text: "When learning something new, I prefer to:",
    category: "Learning Style",
    options: [
      { text: "Read detailed explanations and take written notes", intelligence: "linguistic", value: 5 },
      { text: "See visual diagrams and create mind maps", intelligence: "spatial", value: 5 },
      { text: "Listen to explanations and discuss with others", intelligence: "interpersonal", value: 4 },
      { text: "Try it hands-on and experiment myself", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Break it down into logical steps and patterns", intelligence: "logical-mathematical", value: 5 }
    ]
  },
  {
    text: "In my free time, I'm most likely to:",
    category: "Leisure Activities",
    options: [
      { text: "Read books, write in journals, or play word games", intelligence: "linguistic", value: 5 },
      { text: "Listen to music, play instruments, or sing", intelligence: "musical", value: 5 },
      { text: "Exercise, dance, or work with my hands", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Spend time in nature or with animals", intelligence: "naturalistic", value: 5 },
      { text: "Reflect, meditate, or pursue personal goals", intelligence: "intrapersonal", value: 5 }
    ]
  },
  {
    text: "When solving problems, I tend to:",
    category: "Problem Solving",
    options: [
      { text: "Use logical reasoning and systematic analysis", intelligence: "logical-mathematical", value: 5 },
      { text: "Visualize the solution and use spatial thinking", intelligence: "spatial", value: 5 },
      { text: "Talk it through with others and seek input", intelligence: "interpersonal", value: 5 },
      { text: "Trust my intuition and inner wisdom", intelligence: "intrapersonal", value: 5 },
      { text: "Look for patterns in nature or real-world examples", intelligence: "naturalistic", value: 4 }
    ]
  },
  {
    text: "I remember information best when it's:",
    category: "Memory Style",
    options: [
      { text: "Written in words or explained verbally", intelligence: "linguistic", value: 5 },
      { text: "Set to music or has a rhythmic pattern", intelligence: "musical", value: 5 },
      { text: "Presented as charts, graphs, or visual aids", intelligence: "spatial", value: 5 },
      { text: "Connected to physical movement or action", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Organized in logical sequences or formulas", intelligence: "logical-mathematical", value: 5 }
    ]
  },
  {
    text: "In group settings, I naturally:",
    category: "Social Interaction",
    options: [
      { text: "Take charge and organize activities", intelligence: "interpersonal", value: 5 },
      { text: "Listen carefully and contribute thoughtfully", intelligence: "intrapersonal", value: 4 },
      { text: "Use humor and storytelling to connect", intelligence: "linguistic", value: 4 },
      { text: "Create harmony and help resolve conflicts", intelligence: "interpersonal", value: 4 },
      { text: "Prefer to work independently on my part", intelligence: "intrapersonal", value: 5 }
    ]
  },
  {
    text: "When I encounter a complex mathematical problem, I:",
    category: "Mathematical Thinking",
    options: [
      { text: "Break it down into logical steps systematically", intelligence: "logical-mathematical", value: 5 },
      { text: "Draw diagrams or visualize the relationships", intelligence: "spatial", value: 4 },
      { text: "Look for patterns and real-world applications", intelligence: "naturalistic", value: 3 },
      { text: "Work through it with others collaboratively", intelligence: "interpersonal", value: 3 },
      { text: "Feel overwhelmed and prefer word-based problems", intelligence: "linguistic", value: 2 }
    ]
  },
  {
    text: "Music in my life is:",
    category: "Musical Relationship",
    options: [
      { text: "Essential - I play instruments or compose", intelligence: "musical", value: 5 },
      { text: "Important - I have strong preferences and emotional responses", intelligence: "musical", value: 4 },
      { text: "Enjoyable background while I work or exercise", intelligence: "bodily-kinesthetic", value: 3 },
      { text: "Helpful for concentration and reflection", intelligence: "intrapersonal", value: 3 },
      { text: "Not particularly important to me", intelligence: "logical-mathematical", value: 1 }
    ]
  },
  {
    text: "When giving directions, I typically:",
    category: "Spatial Awareness",
    options: [
      { text: "Draw a map or use visual landmarks", intelligence: "spatial", value: 5 },
      { text: "Give detailed verbal step-by-step instructions", intelligence: "linguistic", value: 4 },
      { text: "Use measurements and compass directions", intelligence: "logical-mathematical", value: 4 },
      { text: "Show them physically or walk them through it", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Relate it to familiar places they know", intelligence: "interpersonal", value: 3 }
    ]
  },
  {
    text: "My ideal learning environment would include:",
    category: "Environment Preference",
    options: [
      { text: "Quiet spaces for reading and writing", intelligence: "linguistic", value: 4 },
      { text: "Natural settings with plants and animals", intelligence: "naturalistic", value: 5 },
      { text: "Labs or workshops for hands-on experimentation", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Music studios or acoustically rich spaces", intelligence: "musical", value: 4 },
      { text: "Private areas for personal reflection", intelligence: "intrapersonal", value: 5 }
    ]
  },
  {
    text: "When I was a child, I was most likely to:",
    category: "Childhood Preferences",
    options: [
      { text: "Read constantly and create stories", intelligence: "linguistic", value: 5 },
      { text: "Build with blocks and solve puzzles", intelligence: "spatial", value: 5 },
      { text: "Play sports and be physically active", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Collect things from nature and observe animals", intelligence: "naturalistic", value: 5 },
      { text: "Organize games and lead other children", intelligence: "interpersonal", value: 5 }
    ]
  },
  {
    text: "I understand people best by:",
    category: "Understanding Others",
    options: [
      { text: "Reading their body language and expressions", intelligence: "spatial", value: 3 },
      { text: "Listening to their tone of voice and words", intelligence: "linguistic", value: 4 },
      { text: "Feeling their emotions and energy", intelligence: "interpersonal", value: 5 },
      { text: "Observing their behavior patterns over time", intelligence: "logical-mathematical", value: 4 },
      { text: "Relating their experiences to my own", intelligence: "intrapersonal", value: 4 }
    ]
  },
  {
    text: "When planning a vacation, I focus on:",
    category: "Planning Style",
    options: [
      { text: "Researching history and cultural information", intelligence: "linguistic", value: 4 },
      { text: "Finding natural wonders and outdoor activities", intelligence: "naturalistic", value: 5 },
      { text: "Mapping routes and visualizing the journey", intelligence: "spatial", value: 4 },
      { text: "Planning active adventures and physical challenges", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Creating opportunities for personal growth", intelligence: "intrapersonal", value: 4 }
    ]
  },
  {
    text: "My approach to organizing my living space is:",
    category: "Organization Style",
    options: [
      { text: "Logical systems with clear categories", intelligence: "logical-mathematical", value: 5 },
      { text: "Visually pleasing arrangements and color coordination", intelligence: "spatial", value: 5 },
      { text: "Functional setups that support my activities", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Including plants and natural elements", intelligence: "naturalistic", value: 4 },
      { text: "Reflecting my personal values and identity", intelligence: "intrapersonal", value: 4 }
    ]
  },
  {
    text: "In conversations, I tend to:",
    category: "Communication Style",
    options: [
      { text: "Use precise language and detailed explanations", intelligence: "linguistic", value: 5 },
      { text: "Ask probing questions and analyze responses", intelligence: "logical-mathematical", value: 4 },
      { text: "Share personal experiences and emotions", intelligence: "intrapersonal", value: 4 },
      { text: "Focus on understanding others' perspectives", intelligence: "interpersonal", value: 5 },
      { text: "Use gestures and physical expressions", intelligence: "bodily-kinesthetic", value: 3 }
    ]
  },
  {
    text: "When stressed, I find relief through:",
    category: "Stress Management",
    options: [
      { text: "Writing in journals or talking it out", intelligence: "linguistic", value: 4 },
      { text: "Listening to music or playing instruments", intelligence: "musical", value: 5 },
      { text: "Physical exercise or movement", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Spending time in nature", intelligence: "naturalistic", value: 5 },
      { text: "Quiet reflection and self-analysis", intelligence: "intrapersonal", value: 5 }
    ]
  },
  {
    text: "I'm most motivated by:",
    category: "Motivation Sources",
    options: [
      { text: "Intellectual challenges and learning opportunities", intelligence: "logical-mathematical", value: 4 },
      { text: "Creative expression and artistic pursuits", intelligence: "spatial", value: 4 },
      { text: "Helping others and building relationships", intelligence: "interpersonal", value: 5 },
      { text: "Personal growth and self-understanding", intelligence: "intrapersonal", value: 5 },
      { text: "Physical achievements and skill mastery", intelligence: "bodily-kinesthetic", value: 4 }
    ]
  },
  {
    text: "When attending a lecture, I:",
    category: "Learning Reception",
    options: [
      { text: "Take detailed written notes and ask questions", intelligence: "linguistic", value: 5 },
      { text: "Create visual diagrams and concept maps", intelligence: "spatial", value: 5 },
      { text: "Focus on the logical structure and evidence", intelligence: "logical-mathematical", value: 5 },
      { text: "Need to move or fidget to concentrate", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Connect the content to personal experiences", intelligence: "intrapersonal", value: 4 }
    ]
  },
  {
    text: "My ideal hobby would involve:",
    category: "Interest Areas",
    options: [
      { text: "Writing, reading, or language learning", intelligence: "linguistic", value: 5 },
      { text: "Gardening, hiking, or studying wildlife", intelligence: "naturalistic", value: 5 },
      { text: "Building, crafting, or athletic training", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Composing, performing, or music production", intelligence: "musical", value: 5 },
      { text: "Coaching, teaching, or community organizing", intelligence: "interpersonal", value: 5 }
    ]
  },
  {
    text: "When making important decisions, I:",
    category: "Decision Making",
    options: [
      { text: "Analyze data and weigh pros and cons logically", intelligence: "logical-mathematical", value: 5 },
      { text: "Visualize potential outcomes and scenarios", intelligence: "spatial", value: 4 },
      { text: "Seek advice from trusted friends and mentors", intelligence: "interpersonal", value: 4 },
      { text: "Trust my gut feelings and inner wisdom", intelligence: "intrapersonal", value: 5 },
      { text: "Consider environmental and long-term impacts", intelligence: "naturalistic", value: 4 }
    ]
  },
  {
    text: "I learn languages best through:",
    category: "Language Learning",
    options: [
      { text: "Grammar rules, vocabulary lists, and writing", intelligence: "linguistic", value: 5 },
      { text: "Songs, rhythms, and pronunciation patterns", intelligence: "musical", value: 5 },
      { text: "Conversation and social interaction", intelligence: "interpersonal", value: 5 },
      { text: "Immersion and real-world practice", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Personal reflection and self-study", intelligence: "intrapersonal", value: 4 }
    ]
  },
  {
    text: "My workspace typically includes:",
    category: "Work Environment",
    options: [
      { text: "Books, papers, and writing materials", intelligence: "linguistic", value: 4 },
      { text: "Charts, images, and visual displays", intelligence: "spatial", value: 4 },
      { text: "Music, instruments, or audio equipment", intelligence: "musical", value: 4 },
      { text: "Plants, natural light, or outdoor views", intelligence: "naturalistic", value: 4 },
      { text: "Minimal distractions for deep focus", intelligence: "intrapersonal", value: 4 }
    ]
  },
  {
    text: "When explaining complex ideas, I:",
    category: "Teaching Style",
    options: [
      { text: "Use detailed verbal or written explanations", intelligence: "linguistic", value: 5 },
      { text: "Create diagrams, charts, or visual aids", intelligence: "spatial", value: 5 },
      { text: "Break it down into logical, sequential steps", intelligence: "logical-mathematical", value: 5 },
      { text: "Use real-world examples and demonstrations", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Encourage questions and group discussion", intelligence: "interpersonal", value: 4 }
    ]
  },
  {
    text: "I'm naturally drawn to:",
    category: "Natural Inclinations",
    options: [
      { text: "Patterns, systems, and logical relationships", intelligence: "logical-mathematical", value: 5 },
      { text: "Colors, shapes, and spatial arrangements", intelligence: "spatial", value: 5 },
      { text: "Rhythms, melodies, and sound patterns", intelligence: "musical", value: 5 },
      { text: "Natural cycles, ecosystems, and living things", intelligence: "naturalistic", value: 5 },
      { text: "Human emotions, motivations, and relationships", intelligence: "interpersonal", value: 5 }
    ]
  },
  {
    text: "When reading fiction, I most appreciate:",
    category: "Literary Preferences",
    options: [
      { text: "Beautiful language and literary style", intelligence: "linguistic", value: 5 },
      { text: "Complex plots and logical mysteries", intelligence: "logical-mathematical", value: 4 },
      { text: "Rich character development and psychology", intelligence: "intrapersonal", value: 4 },
      { text: "Vivid descriptions and world-building", intelligence: "spatial", value: 4 },
      { text: "Social dynamics and relationships", intelligence: "interpersonal", value: 4 }
    ]
  },
  {
    text: "My memory works best with:",
    category: "Memory Strategies",
    options: [
      { text: "Verbal rehearsal and word associations", intelligence: "linguistic", value: 5 },
      { text: "Visual imagery and spatial locations", intelligence: "spatial", value: 5 },
      { text: "Logical sequences and numbered lists", intelligence: "logical-mathematical", value: 5 },
      { text: "Musical rhythms and melodic patterns", intelligence: "musical", value: 5 },
      { text: "Physical movements and muscle memory", intelligence: "bodily-kinesthetic", value: 5 }
    ]
  },
  {
    text: "I feel most energized when:",
    category: "Energy Sources",
    options: [
      { text: "Engaging in deep conversations about ideas", intelligence: "linguistic", value: 4 },
      { text: "Creating art or designing beautiful spaces", intelligence: "spatial", value: 4 },
      { text: "Being physically active and moving my body", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Connecting with people and building community", intelligence: "interpersonal", value: 5 },
      { text: "Pursuing personal passions and interests", intelligence: "intrapersonal", value: 5 }
    ]
  },
  {
    text: "When traveling to new places, I'm most interested in:",
    category: "Travel Interests",
    options: [
      { text: "Historical sites and cultural landmarks", intelligence: "linguistic", value: 4 },
      { text: "Natural wonders and wildlife observation", intelligence: "naturalistic", value: 5 },
      { text: "Architectural marvels and artistic treasures", intelligence: "spatial", value: 4 },
      { text: "Adventure activities and physical challenges", intelligence: "bodily-kinesthetic", value: 4 },
      { text: "Meeting locals and experiencing social customs", intelligence: "interpersonal", value: 4 }
    ]
  },
  {
    text: "My approach to time management is:",
    category: "Time Organization",
    options: [
      { text: "Detailed schedules with written lists and plans", intelligence: "linguistic", value: 4 },
      { text: "Visual calendars with color-coded systems", intelligence: "spatial", value: 4 },
      { text: "Logical prioritization based on importance", intelligence: "logical-mathematical", value: 5 },
      { text: "Flexible adaptation to energy and mood cycles", intelligence: "intrapersonal", value: 4 },
      { text: "Collaborative planning with input from others", intelligence: "interpersonal", value: 3 }
    ]
  },
  {
    text: "I understand myself best through:",
    category: "Self-Knowledge",
    options: [
      { text: "Writing, journaling, and verbal reflection", intelligence: "linguistic", value: 4 },
      { text: "Quiet contemplation and meditation", intelligence: "intrapersonal", value: 5 },
      { text: "Feedback and insights from close friends", intelligence: "interpersonal", value: 4 },
      { text: "Analyzing patterns in my behavior and choices", intelligence: "logical-mathematical", value: 4 },
      { text: "Observing how I respond to different environments", intelligence: "naturalistic", value: 3 }
    ]
  },
  {
    text: "My ideal career would involve:",
    category: "Career Preferences",
    options: [
      { text: "Research, analysis, and systematic investigation", intelligence: "logical-mathematical", value: 5 },
      { text: "Creative design and visual problem-solving", intelligence: "spatial", value: 5 },
      { text: "Physical skill and hands-on craftsmanship", intelligence: "bodily-kinesthetic", value: 5 },
      { text: "Environmental conservation and sustainability", intelligence: "naturalistic", value: 5 },
      { text: "Personal development and self-directed work", intelligence: "intrapersonal", value: 5 }
    ]
  }
];

export const intelligenceTypes = {
  "linguistic": {
    name: "Linguistic Intelligence",
    description: "You excel with words, language, and verbal communication.",
    characteristics: [
      "Strong reading and writing abilities",
      "Excellent verbal communication skills",
      "Love for languages and wordplay",
      "Ability to learn through listening and speaking"
    ],
    strengths: [
      "Exceptional communication skills",
      "Natural storytelling ability",
      "Strong memory for verbal information",
      "Talent for learning languages",
      "Persuasive speaking and writing"
    ],
    careers: [
      "Writer/Author",
      "Journalist",
      "Teacher/Professor",
      "Lawyer",
      "Translator",
      "Speech Therapist",
      "Librarian"
    ],
    development: [
      "Keep a daily journal to strengthen writing skills",
      "Join debate clubs or public speaking groups",
      "Learn new languages or explore etymology",
      "Read diverse genres and analyze writing styles",
      "Practice storytelling and creative writing"
    ],
    superpower: "You can influence and inspire others through the power of words, turning complex ideas into compelling narratives that move people to action."
  },
  "logical-mathematical": {
    name: "Logical-Mathematical Intelligence",
    description: "You think in patterns, logic, and mathematical relationships.",
    characteristics: [
      "Strong analytical and reasoning skills",
      "Ability to see patterns and relationships",
      "Comfort with numbers and calculations",
      "Systematic approach to problem-solving"
    ],
    strengths: [
      "Exceptional problem-solving abilities",
      "Strong logical reasoning skills",
      "Natural understanding of cause and effect",
      "Ability to work with abstract concepts",
      "Systematic and organized thinking"
    ],
    careers: [
      "Scientist/Researcher",
      "Engineer",
      "Mathematician",
      "Computer Programmer",
      "Accountant",
      "Economist",
      "Data Analyst"
    ],
    development: [
      "Engage in logic puzzles and brain teasers daily",
      "Study patterns in nature and mathematics",
      "Practice systematic problem-solving methods",
      "Learn programming or statistical analysis",
      "Explore scientific research and experimentation"
    ],
    superpower: "You can decode the hidden patterns that govern our world, solving complex problems that others find overwhelming through pure logic and systematic thinking."
  },
  "spatial": {
    name: "Spatial Intelligence",
    description: "You think in images, visualize clearly, and understand spatial relationships.",
    characteristics: [
      "Strong visual memory and imagination",
      "Ability to visualize objects in 3D",
      "Talent for art and design",
      "Good sense of direction and space"
    ],
    strengths: [
      "Exceptional visual-spatial processing",
      "Strong artistic and creative abilities",
      "Excellent navigation skills",
      "Ability to visualize complex concepts",
      "Talent for design and aesthetics"
    ],
    careers: [
      "Architect",
      "Graphic Designer",
      "Artist/Sculptor",
      "Pilot",
      "Engineer",
      "Interior Designer",
      "Photographer"
    ],
    development: [
      "Practice drawing and sketching regularly",
      "Engage in 3D puzzles and building activities",
      "Study art history and design principles",
      "Use mind mapping for learning and planning",
      "Explore photography and visual composition"
    ],
    superpower: "You can see possibilities that others miss, transforming abstract concepts into concrete visual solutions that inspire and guide innovation."
  },
  "musical": {
    name: "Musical Intelligence",
    description: "You understand rhythm, melody, and the emotional power of sound.",
    characteristics: [
      "Strong sense of rhythm and pitch",
      "Ability to recognize musical patterns",
      "Emotional connection to music",
      "Talent for creating or performing music"
    ],
    strengths: [
      "Exceptional auditory processing abilities",
      "Strong sense of rhythm and timing",
      "Natural understanding of musical patterns",
      "Ability to express emotions through sound",
      "Enhanced memory through musical association"
    ],
    careers: [
      "Musician/Composer",
      "Music Teacher",
      "Sound Engineer",
      "Music Therapist",
      "Conductor",
      "Audio Producer",
      "DJ/Radio Host"
    ],
    development: [
      "Learn to play a musical instrument",
      "Study music theory and composition",
      "Explore different musical genres and cultures",
      "Practice active listening to enhance discrimination",
      "Use music as a tool for learning other subjects"
    ],
    superpower: "You can tap into the universal language of music to heal emotions, enhance memory, and create profound connections between people across all boundaries."
  },
  "bodily-kinesthetic": {
    name: "Bodily-Kinesthetic Intelligence",
    description: "You learn through movement and have excellent body awareness.",
    characteristics: [
      "Strong physical coordination and balance",
      "Learn best through hands-on activities",
      "Good at sports and physical activities",
      "Expressive through body language and movement"
    ],
    strengths: [
      "Exceptional physical coordination and control",
      "Strong mind-body connection",
      "Ability to learn through physical practice",
      "Excellent timing and motor skills",
      "Natural understanding of physical processes"
    ],
    careers: [
      "Athlete/Coach",
      "Dancer/Choreographer",
      "Surgeon",
      "Physical Therapist",
      "Craftsperson",
      "Mechanic",
      "Actor"
    ],
    development: [
      "Engage in regular physical exercise and sports",
      "Practice martial arts or dance for body awareness",
      "Learn hands-on skills like crafting or building",
      "Use physical movement to aid learning",
      "Explore body-based healing practices"
    ],
    superpower: "You possess an intuitive mastery over physical space and movement, able to achieve seemingly impossible feats through perfect mind-body coordination."
  },
  "interpersonal": {
    name: "Interpersonal Intelligence",
    description: "You understand and connect deeply with other people.",
    characteristics: [
      "Strong empathy and emotional awareness",
      "Ability to read social cues accurately",
      "Natural leadership and communication skills",
      "Enjoyment of working with groups"
    ],
    strengths: [
      "Exceptional ability to understand others",
      "Strong leadership and teamwork skills",
      "Natural empathy and emotional intelligence",
      "Excellent communication and persuasion abilities",
      "Talent for resolving conflicts and building consensus"
    ],
    careers: [
      "Counselor/Therapist",
      "Teacher",
      "Social Worker",
      "Sales Professional",
      "Manager/Executive",
      "Politician",
      "Human Resources"
    ],
    development: [
      "Practice active listening and empathy building",
      "Study psychology and human behavior",
      "Engage in volunteer work and community service",
      "Develop conflict resolution and mediation skills",
      "Join groups and practice leadership roles"
    ],
    superpower: "You can read the invisible threads that connect all human hearts, bringing out the best in others and creating harmony where there was once discord."
  },
  "intrapersonal": {
    name: "Intrapersonal Intelligence", 
    description: "You have deep self-awareness and understand your inner world.",
    characteristics: [
      "Strong self-reflection and introspection",
      "Clear understanding of personal strengths/weaknesses",
      "Independent and self-motivated",
      "Deep awareness of emotions and motivations"
    ],
    strengths: [
      "Exceptional self-awareness and emotional regulation",
      "Strong intrinsic motivation and goal-setting ability",
      "Ability to work independently and self-direct",
      "Deep understanding of personal values and beliefs",
      "Natural wisdom and philosophical thinking"
    ],
    careers: [
      "Researcher/Scholar",
      "Writer/Philosopher",
      "Entrepreneur",
      "Counselor/Life Coach",
      "Spiritual Leader",
      "Freelancer/Consultant",
      "Artist"
    ],
    development: [
      "Maintain regular journaling and self-reflection",
      "Practice meditation and mindfulness techniques",
      "Set personal goals and track progress",
      "Explore philosophy and spirituality",
      "Develop emotional intelligence and regulation skills"
    ],
    superpower: "You possess the rare gift of deep self-knowledge, able to navigate life's complexities with inner wisdom and authentic purpose that lights the way for others."
  },
  "naturalistic": {
    name: "Naturalistic Intelligence",
    description: "You understand patterns in nature and living systems.",
    characteristics: [
      "Strong connection to nature and environments",
      "Ability to recognize and classify natural patterns",
      "Interest in plants, animals, and ecosystems",
      "Environmental awareness and sensitivity"
    ],
    strengths: [
      "Exceptional ability to recognize patterns in nature",
      "Strong environmental awareness and sensitivity",
      "Natural understanding of living systems",
      "Ability to work harmoniously with natural processes",
      "Talent for classification and organization"
    ],
    careers: [
      "Biologist/Ecologist",
      "Environmental Scientist",
      "Veterinarian",
      "Farmer/Agriculturalist",
      "Park Ranger",
      "Botanist",
      "Conservation Specialist"
    ],
    development: [
      "Spend regular time in natural environments",
      "Study ecology, biology, and environmental science",
      "Practice observation and classification skills",
      "Engage in gardening and plant care",
      "Participate in conservation and environmental projects"
    ],
    superpower: "You can sense the intricate web of life that connects all living things, understanding nature's wisdom and serving as a bridge between the human and natural worlds."
  }
};