export interface ToxicityOption {
  text: string;
  value: number; // 1-5 scale
}

export interface ToxicityQuestion {
  text: string;
  category: string;
  options: ToxicityOption[];
}

export const toxicityQuestions: ToxicityQuestion[] = [
  // Boundaries & Independence (5 questions)
  {
    text: "I feel guilty when I need time for myself.",
    category: "Boundaries & Independence",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner discourages me from seeing my friends.",
    category: "Boundaries & Independence",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I'm afraid to say 'no' because it might cause a conflict.",
    category: "Boundaries & Independence",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like I need permission to make decisions about my own life.",
    category: "Boundaries & Independence",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I avoid pursuing my own interests because they might upset my partner.",
    category: "Boundaries & Independence",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },

  // Emotional Health (5 questions)
  {
    text: "I often feel emotionally drained after spending time with my partner.",
    category: "Emotional Health",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like I'm walking on eggshells around my partner.",
    category: "Emotional Health",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner often dismisses my feelings or concerns.",
    category: "Emotional Health",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I suppress my emotions to avoid arguments.",
    category: "Emotional Health",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel anxious or stressed more often since being in this relationship.",
    category: "Emotional Health",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },

  // Communication Patterns (5 questions)
  {
    text: "My partner uses silent treatment or withdrawal as punishment.",
    category: "Communication Patterns",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like my partner doesn't really listen to what I'm saying.",
    category: "Communication Patterns",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "Conversations often turn into arguments where I'm blamed for everything.",
    category: "Communication Patterns",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner interrupts or talks over me frequently.",
    category: "Communication Patterns",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I avoid bringing up important topics because of how my partner might react.",
    category: "Communication Patterns",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },

  // Control & Manipulation (5 questions)
  {
    text: "My partner checks my phone, emails, or social media without permission.",
    category: "Control & Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like my partner tries to control how I spend my money.",
    category: "Control & Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner makes me question my own memory or perception of events.",
    category: "Control & Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like I have to justify my actions or whereabouts constantly.",
    category: "Control & Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner threatens to leave or harm themselves when we disagree.",
    category: "Control & Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  }
];