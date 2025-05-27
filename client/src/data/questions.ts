export interface QuestionOption {
  text: string;
  archetype: string;
}

export interface Question {
  text: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    text: "When someone wrongs you, your first impulse is to…",
    options: [
      { text: "Plot how you'll expose their hypocrisy.", archetype: "Avenger" },
      { text: "Take charge and prevent it happening again.", archetype: "Controller" },
      { text: "Figure out how to turn the situation to your advantage.", archetype: "Manipulator" },
      { text: "Laugh it off—nothing matters anyway.", archetype: "Cynic" },
      { text: "Refuse to comply with rules they broke.", archetype: "Rebel" },
      { text: "Use your charm to smooth things over.", archetype: "Seducer" },
      { text: "Sacrifice your own needs to make amends.", archetype: "Martyr" },
      { text: "Retreat inward, replaying old hurts.", archetype: "Inner Child" }
    ]
  },
  {
    text: "Faced with a sudden change of plans, you…",
    options: [
      { text: "Demand someone explain why you weren't consulted.", archetype: "Avenger" },
      { text: "Reorganize everything to restore order.", archetype: "Controller" },
      { text: "Look for loopholes you can exploit.", archetype: "Manipulator" },
      { text: "Shrug—it was bound to disappoint.", archetype: "Cynic" },
      { text: "Rebel against the new agenda entirely.", archetype: "Rebel" },
      { text: "Flirt your way into a better deal.", archetype: "Seducer" },
      { text: "Offer to help everyone else adapt first.", archetype: "Martyr" },
      { text: "Feel scared and hide until it passes.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When offered praise, you most often feel…",
    options: [
      { text: "I'll show them they were wrong soon enough.", archetype: "Avenger" },
      { text: "I need to use this momentum to control the next steps.", archetype: "Controller" },
      { text: "How can I leverage this for my goals?", archetype: "Manipulator" },
      { text: "It's meaningless—people always let you down.", archetype: "Cynic" },
      { text: "Why should I follow their compliments?", archetype: "Rebel" },
      { text: "Happy—please, tell me more.", archetype: "Seducer" },
      { text: "Guilty—I haven't done enough yet.", archetype: "Martyr" },
      { text: "Surprised—maybe I'm actually ok.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You catch someone lying. You…",
    options: [
      { text: "Make them pay for betraying trust.", archetype: "Avenger" },
      { text: "Insist you handle every detail next time.", archetype: "Controller" },
      { text: "Twist the truth back at them later.", archetype: "Manipulator" },
      { text: "Call them out with a sarcastic remark.", archetype: "Cynic" },
      { text: "Dismiss it—rules are meant to be bent.", archetype: "Rebel" },
      { text: "Use your smile to disarm them.", archetype: "Seducer" },
      { text: "Apologize for putting them in that position.", archetype: "Martyr" },
      { text: "Crumble inside, thinking you'll be next.", archetype: "Inner Child" }
    ]
  },
  {
    text: "A friend asks for your honest feedback and you…",
    options: [
      { text: "Spell out every fault so they learn.", archetype: "Avenger" },
      { text: "Give a detailed plan for how they should change.", archetype: "Controller" },
      { text: "Frame your advice to get what you want.", archetype: "Manipulator" },
      { text: "Question why they even care.", archetype: "Cynic" },
      { text: "Encourage them to break free of norms.", archetype: "Rebel" },
      { text: "Compliment them generously first.", archetype: "Seducer" },
      { text: "Worry you'll hurt their feelings and hold back.", archetype: "Martyr" },
      { text: "Feel you don't deserve to help.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When someone shows vulnerability, you…",
    options: [
      { text: "Remind them of consequences if they stay soft.", archetype: "Avenger" },
      { text: "Step in to organize their recovery.", archetype: "Controller" },
      { text: "Gently guide them toward your hidden agenda.", archetype: "Manipulator" },
      { text: "Make a quip to avoid the emotion.", archetype: "Cynic" },
      { text: "Cheer them on to break the mold.", archetype: "Rebel" },
      { text: "Shower them with comfort and attention.", archetype: "Seducer" },
      { text: "Feel compelled to sacrifice your own comfort.", archetype: "Martyr" },
      { text: "Want to wrap them in a hug but feel shy.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You spot an opportunity that conflicts with your ethics; you…",
    options: [
      { text: "Expose those who set the trap.", archetype: "Avenger" },
      { text: "Create safeguards so it can't happen again.", archetype: "Controller" },
      { text: "Consider bending your principles for gain.", archetype: "Manipulator" },
      { text: "Assume it's a scam—walk away.", archetype: "Cynic" },
      { text: "Reject it outright, on principle.", archetype: "Rebel" },
      { text: "Present yourself as the trustworthy choice.", archetype: "Seducer" },
      { text: "Feel torn—then sacrifice your gain for peace.", archetype: "Martyr" },
      { text: "Freeze, fearing any decision is wrong.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When you feel powerless, you tend to…",
    options: [
      { text: "Promise vengeance next time.", archetype: "Avenger" },
      { text: "Seize any small control you can find.", archetype: "Controller" },
      { text: "Plot how to turn the tables later.", archetype: "Manipulator" },
      { text: "Dismiss it—power never lasts.", archetype: "Cynic" },
      { text: "Defy whoever disempowered you.", archetype: "Rebel" },
      { text: "Turn on your charisma to sway power back.", archetype: "Seducer" },
      { text: "Retreat into selfless service, hoping someone saves you.", archetype: "Martyr" },
      { text: "Shrink inside, believing you deserve it.", archetype: "Inner Child" }
    ]
  },
  {
    text: "A loved one betrays your confidence. You…",
    options: [
      { text: "Make sure they regret it.", archetype: "Avenger" },
      { text: "Institute rules so it never happens again.", archetype: "Controller" },
      { text: "Leak a secret of theirs in return.", archetype: "Manipulator" },
      { text: "Mock the idea of trust—everyone lies.", archetype: "Cynic" },
      { text: "Refuse to be tied down by loyalty.", archetype: "Rebel" },
      { text: "Use your charm to keep them close anyway.", archetype: "Seducer" },
      { text: "Apologize for trusting them in the first place.", archetype: "Martyr" },
      { text: "Feel deeply wounded and withdraw.", archetype: "Inner Child" }
    ]
  },
  {
    text: "Faced with a moral dilemma, you…",
    options: [
      { text: "Lean into righteous outrage.", archetype: "Avenger" },
      { text: "Draw up a rulebook to decide.", archetype: "Controller" },
      { text: "Seek the twist that benefits you most.", archetype: "Manipulator" },
      { text: "Assume there's no right answer.", archetype: "Cynic" },
      { text: "Challenge the very premise of the dilemma.", archetype: "Rebel" },
      { text: "Charm everyone into seeing your side.", archetype: "Seducer" },
      { text: "Choose self-sacrifice to avoid guilt.", archetype: "Martyr" },
      { text: "Avoid decision, too scared to err.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You feel a surge of jealousy. You…",
    options: [
      { text: "Plot how to bring the rival down.", archetype: "Avenger" },
      { text: "Take charge of the situation so you're safe.", archetype: "Controller" },
      { text: "Use subtle tactics to regain your advantage.", archetype: "Manipulator" },
      { text: "Dismiss it—jealousy is for fools.", archetype: "Cynic" },
      { text: "Rebel against whatever standard you envy.", archetype: "Rebel" },
      { text: "Turn up your allure to outshine them.", archetype: "Seducer" },
      { text: "Guilt yourself for feeling envious.", archetype: "Martyr" },
      { text: "Hide away, believing you're unworthy.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When someone praises your success, you…",
    options: [
      { text: "Recall times they ignored you, planning payback.", archetype: "Avenger" },
      { text: "Immediately plan the next move to stay in control.", archetype: "Controller" },
      { text: "Consider how to leverage their admiration.", archetype: "Manipulator" },
      { text: "Think, \"It won't last.\"", archetype: "Cynic" },
      { text: "Reject the hype, demanding authenticity.", archetype: "Rebel" },
      { text: "Bask in it—tell them more about your wins.", archetype: "Seducer" },
      { text: "Feel guilty for being proud.", archetype: "Martyr" },
      { text: "Wonder if you truly deserve it.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You discover a secret that could help you. You…",
    options: [
      { text: "Expose those who kept it hidden.", archetype: "Avenger" },
      { text: "Control its flow carefully.", archetype: "Controller" },
      { text: "Twist it for maximum personal gain.", archetype: "Manipulator" },
      { text: "Doubt its value—secrets always backfire.", archetype: "Cynic" },
      { text: "Defy anyone who claims ownership of it.", archetype: "Rebel" },
      { text: "Seduce allies with hints of your knowledge.", archetype: "Seducer" },
      { text: "Feel guilty using it for yourself.", archetype: "Martyr" },
      { text: "Fear you'll be judged for possessing it.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When a plan fails, you immediately…",
    options: [
      { text: "Demand someone pay for the mistake.", archetype: "Avenger" },
      { text: "Rewrite the plan to eliminate risk.", archetype: "Controller" },
      { text: "Look for hidden advantages in the failure.", archetype: "Manipulator" },
      { text: "Declare it was doomed from the start.", archetype: "Cynic" },
      { text: "Resist going back to the status quo.", archetype: "Rebel" },
      { text: "Smile and charm your way into Plan B.", archetype: "Seducer" },
      { text: "Apologize, blaming yourself entirely.", archetype: "Martyr" },
      { text: "Retreat into self-doubt.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You notice someone in distress. You…",
    options: [
      { text: "Get furious at whoever caused it.", archetype: "Avenger" },
      { text: "Take over to \"fix\" the situation.", archetype: "Controller" },
      { text: "Gently steer them toward your own solution.", archetype: "Manipulator" },
      { text: "Think it's just life being unfair.", archetype: "Cynic" },
      { text: "Encourage them to break free from whatever binds them.", archetype: "Rebel" },
      { text: "Offer warmth and attention to comfort them.", archetype: "Seducer" },
      { text: "Sacrifice your time and energy until they improve.", archetype: "Martyr" },
      { text: "Feel overwhelmed, unsure how to help.", archetype: "Inner Child" }
    ]
  },
  {
    text: "At a social gathering, you tend to…",
    options: [
      { text: "Observe for slights you'll right later.", archetype: "Avenger" },
      { text: "Organize the group so no one feels lost.", archetype: "Controller" },
      { text: "Maneuver conversations to your benefit.", archetype: "Manipulator" },
      { text: "Stand apart, making witty jabs at the crowd.", archetype: "Cynic" },
      { text: "Flout etiquette just to feel free.", archetype: "Rebel" },
      { text: "Charm everyone with laughter and stories.", archetype: "Seducer" },
      { text: "Serve drinks or snacks to feel needed.", archetype: "Martyr" },
      { text: "Find a quiet corner to avoid pressure.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When someone challenges your authority, you…",
    options: [
      { text: "Strike back with righteous indignation.", archetype: "Avenger" },
      { text: "Reinforce rules to reassert control.", archetype: "Controller" },
      { text: "Undermine them behind the scenes.", archetype: "Manipulator" },
      { text: "Shrug—it was only a position.", archetype: "Cynic" },
      { text: "Rip up the rulebook in protest.", archetype: "Rebel" },
      { text: "Smile and seduce your way back into favor.", archetype: "Seducer" },
      { text: "Feel hurt, then bow to their demand.", archetype: "Martyr" },
      { text: "Panic and retreat into silence.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You're offered a shortcut that feels wrong. You…",
    options: [
      { text: "Expose it as the fraud it is.", archetype: "Avenger" },
      { text: "Insist on creating a new, safer path.", archetype: "Controller" },
      { text: "Use it—then cover your tracks.", archetype: "Manipulator" },
      { text: "Scoff—it was too easy to trust.", archetype: "Cynic" },
      { text: "Refuse out of principle.", archetype: "Rebel" },
      { text: "Wink and flirt to soften the edge.", archetype: "Seducer" },
      { text: "Refuse and apologize for causing trouble.", archetype: "Martyr" },
      { text: "Freeze, feeling unworthy of the offer.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When you think of failure, you…",
    options: [
      { text: "Swear you'll make them regret ever doubting you.", archetype: "Avenger" },
      { text: "Plan ten backups so it can't happen again.", archetype: "Controller" },
      { text: "Consider how you might spin it later.", archetype: "Manipulator" },
      { text: "Think, \"It was bound to happen.\"", archetype: "Cynic" },
      { text: "Rebel against the notion of limits.", archetype: "Rebel" },
      { text: "Fear you'll lose all your admirers.", archetype: "Seducer" },
      { text: "Blame yourself and vow to endure.", archetype: "Martyr" },
      { text: "Hide away, feeling you don't deserve success.", archetype: "Inner Child" }
    ]
  },
  {
    text: "A close friend asks you to trust them. You…",
    options: [
      { text: "Remind them of every time they broke it.", archetype: "Avenger" },
      { text: "Set clear rules before you'll agree.", archetype: "Controller" },
      { text: "Ask what you'll get in return.", archetype: "Manipulator" },
      { text: "Answer with a sarcastic, \"Sure, what could go wrong?\"", archetype: "Cynic" },
      { text: "Refuse—trust is shackles.", archetype: "Rebel" },
      { text: "Flatter them into proving themselves.", archetype: "Seducer" },
      { text: "Agree—desperate for connection.", archetype: "Martyr" },
      { text: "Hesitate, wounds still fresh.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You find someone taking credit for your work. You…",
    options: [
      { text: "Expose them publicly.", archetype: "Avenger" },
      { text: "Rewrite the process so it doesn't happen again.", archetype: "Controller" },
      { text: "Plant a rumor to undermine their claim.", archetype: "Manipulator" },
      { text: "Think, \"Typical.\"", archetype: "Cynic" },
      { text: "Refuse to play by their rules.", archetype: "Rebel" },
      { text: "Use charm to win back favor.", archetype: "Seducer" },
      { text: "Apologize for not making your role clearer.", archetype: "Martyr" },
      { text: "Feel small and question your worth.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When tempted by gossip, you…",
    options: [
      { text: "Use it to punish the guilty.", archetype: "Avenger" },
      { text: "Control its spread to protect yourself.", archetype: "Controller" },
      { text: "Twist it to suit your own story.", archetype: "Manipulator" },
      { text: "Roll your eyes—everyone gossips.", archetype: "Cynic" },
      { text: "Spread it defiantly.", archetype: "Rebel" },
      { text: "Laugh and charmingly share a hint.", archetype: "Seducer" },
      { text: "Feel bad, then share anyway out of habit.", archetype: "Martyr" },
      { text: "Avoid it, fearing you'll be next.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You experience a painful memory—your first reaction is to…",
    options: [
      { text: "Plot how you'll make peace on your own terms.", archetype: "Avenger" },
      { text: "Organize your thoughts to prevent a repeat.", archetype: "Controller" },
      { text: "Twist the narrative to protect your image.", archetype: "Manipulator" },
      { text: "Laugh bitterly—of course it still hurts.", archetype: "Cynic" },
      { text: "Reject any lesson it tries to teach.", archetype: "Rebel" },
      { text: "Distract yourself with admiration or attention.", archetype: "Seducer" },
      { text: "Feel guilty for still being affected.", archetype: "Martyr" },
      { text: "Curl inward, wishing someone would notice.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When you accomplish something important, you…",
    options: [
      { text: "Feel vindicated—now they'll see.", archetype: "Avenger" },
      { text: "Immediately plan how to maintain control.", archetype: "Controller" },
      { text: "Calculate how to leverage this success.", archetype: "Manipulator" },
      { text: "Wait for the inevitable disappointment.", archetype: "Cynic" },
      { text: "Worry you've become too conventional.", archetype: "Rebel" },
      { text: "Bask in the spotlight and praise.", archetype: "Seducer" },
      { text: "Downplay it—others deserve recognition more.", archetype: "Martyr" },
      { text: "Feel surprised and slightly undeserving.", archetype: "Inner Child" }
    ]
  },
  {
    text: "Someone asks you what you're afraid of. You…",
    options: [
      { text: "Deflect—they don't deserve your truth.", archetype: "Avenger" },
      { text: "Give a carefully managed answer.", archetype: "Controller" },
      { text: "Share something strategic, not real.", archetype: "Manipulator" },
      { text: "Make a joke—as if fear matters.", archetype: "Cynic" },
      { text: "Refuse to be vulnerable on command.", archetype: "Rebel" },
      { text: "Turn it into a charming story.", archetype: "Seducer" },
      { text: "Worry about burdening them with darkness.", archetype: "Martyr" },
      { text: "Feel exposed and want to hide.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You're in a group where everyone's laughing at someone's expense. You…",
    options: [
      { text: "Join in if the target deserves it.", archetype: "Avenger" },
      { text: "Redirect the conversation to safer ground.", archetype: "Controller" },
      { text: "Note who's laughing for future reference.", archetype: "Manipulator" },
      { text: "Roll your eyes—this is human nature.", archetype: "Cynic" },
      { text: "Call out the cruelty directly.", archetype: "Rebel" },
      { text: "Smile along to fit in.", archetype: "Seducer" },
      { text: "Feel sick but stay silent to avoid conflict.", archetype: "Martyr" },
      { text: "Shrink, fearing you'll be next.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When you see someone being treated unfairly, you…",
    options: [
      { text: "Jump in to defend them fiercely.", archetype: "Avenger" },
      { text: "Document everything for later action.", archetype: "Controller" },
      { text: "Consider whether helping serves your interests.", archetype: "Manipulator" },
      { text: "Think—welcome to the real world.", archetype: "Cynic" },
      { text: "Challenge the system causing the injustice.", archetype: "Rebel" },
      { text: "Use your influence to smooth things over.", archetype: "Seducer" },
      { text: "Take on their suffering as your own.", archetype: "Martyr" },
      { text: "Feel helpless and overwhelmed.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You have to give difficult news to someone. You…",
    options: [
      { text: "Deliver it bluntly—they need to face reality.", archetype: "Avenger" },
      { text: "Plan exactly how to minimize damage.", archetype: "Controller" },
      { text: "Frame it to position yourself favorably.", archetype: "Manipulator" },
      { text: "Assume they already expect the worst.", archetype: "Cynic" },
      { text: "Reject the idea that truth needs softening.", archetype: "Rebel" },
      { text: "Soften it with charm and reassurance.", archetype: "Seducer" },
      { text: "Agonize over causing pain.", archetype: "Martyr" },
      { text: "Procrastinate, hoping someone else will do it.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When someone compliments your appearance, you…",
    options: [
      { text: "Wonder what they want from you.", archetype: "Avenger" },
      { text: "Accept graciously while staying alert.", archetype: "Controller" },
      { text: "Store it as potential leverage.", archetype: "Manipulator" },
      { text: "Assume they're just being polite.", archetype: "Cynic" },
      { text: "Feel suspicious of superficial praise.", archetype: "Rebel" },
      { text: "Light up and encourage more.", archetype: "Seducer" },
      { text: "Deflect—others are more beautiful.", archetype: "Martyr" },
      { text: "Blush and feel genuinely surprised.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You're invited to an event you don't want to attend. You…",
    options: [
      { text: "Make them regret inviting you.", archetype: "Avenger" },
      { text: "Politely decline with a perfect excuse.", archetype: "Controller" },
      { text: "Accept only if it benefits you somehow.", archetype: "Manipulator" },
      { text: "Assume it'll be awful anyway.", archetype: "Cynic" },
      { text: "Refuse on principle—your time, your choice.", archetype: "Rebel" },
      { text: "Charm your way out while leaving the door open.", archetype: "Seducer" },
      { text: "Go anyway to avoid disappointing them.", archetype: "Martyr" },
      { text: "Panic about hurting their feelings.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When you're alone with your thoughts, you most often…",
    options: [
      { text: "Plan your next move against those who wronged you.", archetype: "Avenger" },
      { text: "Organize tomorrow's priorities and contingencies.", archetype: "Controller" },
      { text: "Strategize how to advance your position.", archetype: "Manipulator" },
      { text: "Expect disappointment from current hopes.", archetype: "Cynic" },
      { text: "Dream of breaking free from all constraints.", archetype: "Rebel" },
      { text: "Imagine conversations where you charm everyone.", archetype: "Seducer" },
      { text: "Worry about everyone else's problems.", archetype: "Martyr" },
      { text: "Replay moments when you felt small or hurt.", archetype: "Inner Child" }
    ]
  },
  {
    text: "Someone offers you genuine help with no strings attached. You…",
    options: [
      { text: "Search for the hidden agenda.", archetype: "Avenger" },
      { text: "Accept but maintain control of the process.", archetype: "Controller" },
      { text: "Wonder how you can repay them strategically.", archetype: "Manipulator" },
      { text: "Assume there's always a catch.", archetype: "Cynic" },
      { text: "Feel suspicious of \"free\" assistance.", archetype: "Rebel" },
      { text: "Graciously accept and turn on the charm.", archetype: "Seducer" },
      { text: "Feel guilty for needing help at all.", archetype: "Martyr" },
      { text: "Feel surprised anyone would care.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You notice you've hurt someone's feelings. You…",
    options: [
      { text: "Justify it—they needed to hear the truth.", archetype: "Avenger" },
      { text: "Manage the situation to prevent escalation.", archetype: "Controller" },
      { text: "Apologize strategically to maintain the relationship.", archetype: "Manipulator" },
      { text: "Think—people are too sensitive.", archetype: "Cynic" },
      { text: "Refuse to apologize for being authentic.", archetype: "Rebel" },
      { text: "Charm your way back into their good graces.", archetype: "Seducer" },
      { text: "Feel terrible and overcompensate.", archetype: "Martyr" },
      { text: "Feel awful and withdraw in shame.", archetype: "Inner Child" }
    ]
  },
  {
    text: "You're facing a major life transition. You…",
    options: [
      { text: "Prepare to fight for what you deserve.", archetype: "Avenger" },
      { text: "Create detailed plans for every scenario.", archetype: "Controller" },
      { text: "Position yourself to benefit from the change.", archetype: "Manipulator" },
      { text: "Expect it to go badly.", archetype: "Cynic" },
      { text: "See it as a chance to reinvent yourself.", archetype: "Rebel" },
      { text: "Worry about maintaining your image.", archetype: "Seducer" },
      { text: "Focus on how it affects others first.", archetype: "Martyr" },
      { text: "Feel scared and want someone to guide you.", archetype: "Inner Child" }
    ]
  },
  {
    text: "Someone asks for your deepest secret. You…",
    options: [
      { text: "Test their loyalty first.", archetype: "Avenger" },
      { text: "Share something calculated and safe.", archetype: "Controller" },
      { text: "Reveal something that makes you seem more intriguing.", archetype: "Manipulator" },
      { text: "Deflect with humor—everyone has secrets.", archetype: "Cynic" },
      { text: "Refuse—your inner world is yours alone.", archetype: "Rebel" },
      { text: "Share something that draws them closer.", archetype: "Seducer" },
      { text: "Share too much, then regret it.", archetype: "Martyr" },
      { text: "Feel terrified of being truly known.", archetype: "Inner Child" }
    ]
  },
  {
    text: "When you look in the mirror, you most often think…",
    options: [
      { text: "\"I'll show them all.\"", archetype: "Avenger" },
      { text: "\"I need to maintain this image.\"", archetype: "Controller" },
      { text: "\"How can I use this to my advantage?\"", archetype: "Manipulator" },
      { text: "\"It doesn't matter what I look like.\"", archetype: "Cynic" },
      { text: "\"I refuse to conform to beauty standards.\"", archetype: "Rebel" },
      { text: "\"I hope others find me attractive.\"", archetype: "Seducer" },
      { text: "\"I should focus on others, not myself.\"", archetype: "Martyr" },
      { text: "\"I wish I could hide.\"", archetype: "Inner Child" }
    ]
  },
  {
    text: "You have a recurring dream about…",
    options: [
      { text: "Finally getting justice for past wrongs.", archetype: "Avenger" },
      { text: "Everything falling apart without your control.", archetype: "Controller" },
      { text: "Being caught in your own web of deception.", archetype: "Manipulator" },
      { text: "Nothing mattering in the end.", archetype: "Cynic" },
      { text: "Breaking free from invisible chains.", archetype: "Rebel" },
      { text: "Being adored by everyone.", archetype: "Seducer" },
      { text: "Carrying everyone else's burdens.", archetype: "Martyr" },
      { text: "Being small and lost in a big world.", archetype: "Inner Child" }
    ]
  },
  {
    text: "At the end of your life, you hope to be remembered as…",
    options: [
      { text: "Someone who fought for justice.", archetype: "Avenger" },
      { text: "Someone who brought order and stability.", archetype: "Controller" },
      { text: "Someone who was cleverer than the rest.", archetype: "Manipulator" },
      { text: "Someone who saw things as they really were.", archetype: "Cynic" },
      { text: "Someone who lived authentically.", archetype: "Rebel" },
      { text: "Someone who was loved and admired.", archetype: "Seducer" },
      { text: "Someone who sacrificed everything for others.", archetype: "Martyr" },
      { text: "Someone who was finally understood.", archetype: "Inner Child" }
    ]
  },
  {
    text: "Your greatest fear is…",
    options: [
      { text: "That injustice will prevail.", archetype: "Avenger" },
      { text: "That everything will spiral out of control.", archetype: "Controller" },
      { text: "That others will see through your facade.", archetype: "Manipulator" },
      { text: "That hope is just delusion.", archetype: "Cynic" },
      { text: "That you'll become what you despise.", archetype: "Rebel" },
      { text: "That you'll be rejected for who you really are.", archetype: "Seducer" },
      { text: "That your sacrifice will be meaningless.", archetype: "Martyr" },
      { text: "That you'll always be alone.", archetype: "Inner Child" }
    ]
  }
];
