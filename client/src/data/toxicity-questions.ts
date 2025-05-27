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
  // Boundaries & Independence
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
    text: "My partner gets upset when I spend time on my hobbies.",
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
    text: "I feel like I've lost my sense of identity in this relationship.",
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
    text: "I change my plans to avoid my partner's disapproval.",
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
    text: "I feel comfortable maintaining friendships outside our relationship.",
    category: "Boundaries & Independence",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },

  // Communication & Respect
  {
    text: "Our arguments often include name-calling or mocking.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like my emotions are frequently dismissed.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "It's hard for us to resolve issues without drama.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner listens to my concerns without getting defensive.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I feel heard and understood when we communicate.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "My partner raises their voice or yells during disagreements.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel safe expressing my opinions, even when they differ.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "My partner interrupts me or talks over me frequently.",
    category: "Communication & Respect",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },

  // Jealousy & Control
  {
    text: "My partner often asks who I've been texting.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I have to explain even the smallest decisions.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "Jealousy in our relationship is seen as a sign of love.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner checks my phone or social media without permission.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like I'm being monitored or watched.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner trusts me to make my own choices.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I'm accused of flirting when I'm just being friendly.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner gets angry when I don't respond to texts immediately.",
    category: "Jealousy & Control",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },

  // Emotional Manipulation
  {
    text: "I feel emotionally blackmailed ('If you love me, then...').",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner often makes me feel guilty, even when they were clearly at fault.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I often feel like I'm walking on eggshells.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner threatens to leave during arguments.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like I have to apologize for things that aren't my fault.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner uses my insecurities against me during fights.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "I feel like my emotions are used to control me.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },
  {
    text: "My partner gives me the silent treatment as punishment.",
    category: "Emotional Manipulation",
    options: [
      { text: "Strongly No", value: 1 },
      { text: "Rather No", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather Yes", value: 4 },
      { text: "Strongly Yes", value: 5 }
    ]
  },

  // Emotional Safety & Trust
  {
    text: "I feel comfortable talking about how I feel.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I'm not afraid that my secrets will be used against me.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I know I can rely on my partner during hard times.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I feel supported in my goals and dreams.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I trust my partner with my vulnerabilities.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I feel accepted for who I am, not who my partner wants me to be.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "I feel emotionally safe in this relationship.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  },
  {
    text: "My partner celebrates my successes with me.",
    category: "Emotional Safety & Trust",
    options: [
      { text: "Strongly Yes", value: 1 },
      { text: "Rather Yes", value: 2 },
      { text: "Not Sure", value: 3 },
      { text: "Rather No", value: 4 },
      { text: "Strongly No", value: 5 }
    ]
  }
];