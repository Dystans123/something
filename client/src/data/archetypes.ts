export interface Archetype {
  name: string;
  subtitle: string;
  icon: string;
  description: string;
}

export const archetypes: Record<string, Archetype> = {
  "Avenger": {
    name: "The Avenger",
    subtitle: "The Righteous Punisher",
    icon: "scale-3d",
    description: `Your Shadow is The Avenger—a fierce guardian born of deep wounds. Somewhere along the way, someone violated your trust or dignity, and you vowed, often without even realizing it, that no injustice would go unpunished. You carry a ledger of every betrayal, slight, or broken promise, and beneath your calm or composed exterior simmers a fire that demands balance. In its shadow form, this archetype feels holy—"I must set things right"—but its true fuel is unresolved pain.

In shadow mode, you might recognize yourself:

• Replaying past hurts in your mind late at night, fueling fantasies of payback.
• Testing friends or partners, waiting for them to "fail" so you can confirm your worldview.
• Believing forgiveness equals weakness—so you hold on to every grievance.
• Splitting reality into heroes and villains, with little nuance between.

🔄 How It Affects Your Life

💬 Relationships: You may draw people in with your passion for justice—until they feel the weight of your judgment. Close ones can sense your vigilance, as if they, too, must prove their loyalty. Small mistakes become proof you were right all along.

🎯 Decisions: You're driven by a need to correct wrongs—whether that's championing a cause or settling a personal score. You might leap into conflict to feel powerful, even when peace would serve you more.

🧱 Inner World: Anger becomes a strangely comforting companion—proof you still care. But behind that righteous flame often lies exhaustion and a quiet loneliness, as if no one can truly understand the depth of your hurt.

🌱 Shadow as Potential

Imagine transforming the Avenger's fire into a beacon of truth and protection rather than punishment. When integrated, your passion for justice becomes compassion in action:

• You confront inequality with wisdom, not vengeance.
• Your boundaries are clear—others know where you stand without fear of arbitrary wrath.
• You become a guardian, not a judge.

🛠️ What You Can Do

• Name the wound: Write down the single event or pattern that still hurts. Acknowledging it defangs its power.
• Practice radical empathy: In a moment of anger, pause and ask, "What pain might be driving theirs?"
• Choose restoration over retribution: When you feel the urge to punish, ask yourself, "What outcome truly heals?"

By gently tending your own injury, you can turn the Avenger's righteous flame into a warm light that guides, rather than a wildfire that destroys.`
  },
  "Controller": {
    name: "The Controller",
    subtitle: "The Sovereign of Safety",
    icon: "crown",
    description: `Your Shadow is The Controller—a vigilant architect who believes that only by mastering every detail can you keep chaos at bay. From an early point, perhaps when circumstances felt unpredictable or unsafe, you learned to tighten your grip on life's reins. Control became your refuge and your identity. Yet behind every plan and protocol hides a tender part of you whispering, "What if I can't handle the unknown?"

In shadow form, you may notice yourself:

• Micromanaging tasks, relationships, or even your own feelings to prevent "disaster."
• Judging spontaneity or creativity as reckless and irresponsible.
• Feeling anxious or angry when someone disrupts your carefully laid plans.
• Equating vulnerability with ineptitude—so you never let anyone see you wobble.

🔄 How It Affects Your Life

💬 Relationships: You often step in to "help" by organizing others—whether they asked for it or not. Loved ones may feel smothered or infantilized, as if you're guarding them from life instead of walking alongside them. Offering or receiving genuine support can feel like a loss of control.

🎯 Decisions: You gravitate toward familiar structures—rigid schedules, checklists, backup plans. Risks feel like threats to your survival, so you play it safe, sometimes at the cost of joy or growth. Impromptu opportunities awaken a knot of dread in your stomach.

🧱 Inner World: Beneath your composed exterior, there's a low hum of tension, as if you're perpetually bracing for an invisible storm. You pride yourself on being the "reliable one," but inside you might fear that if things really fell apart, you'd be powerless.

🌱 Shadow as Potential

Imagine swapping your tightening grip for a steady anchor—able to guide without smothering, to plan without panicking. Integrated, The Controller transforms into a wise steward:

• You set clear intentions and boundaries yet remain open to the unexpected.
• Your calm presence becomes a comfort, not a command.
• You trust both yourself and others to adapt when plans shift.

🛠️ What You Can Do

• Surrender one plan each day: choose a small task and let it unfold however it does.
• Notice the urge to fix or organize—pause and ask, "Do I really need to control this?"
• Practice radical trust: invite someone else to lead, then observe what you learn instead of how you react.`
  },
  "Manipulator": {
    name: "The Manipulator", 
    subtitle: "The Strategic Weaver",
    icon: "chess-knight",
    description: `Your Shadow is The Manipulator—a master of invisible influence who learned early that direct power is fragile, but hidden power endures. You've discovered that people reveal their secrets when they trust you, and those secrets become tools for survival or advancement. In its shadow form, this archetype whispers, "Everyone's playing games—I'm just better at it."

In shadow mode, you may catch yourself:

• Calculating how every interaction might benefit you, even with loved ones.
• Presenting different versions of yourself to different people—carefully crafted personas.
• Viewing truth as fluid—not lies, exactly, but strategic omissions and gentle misdirections.
• Feeling secretly proud of your ability to "read" and influence others.

🔄 How It Affects Your Life

💬 Relationships: Your connections may feel transactional, even when you crave genuine intimacy. Others might sense they're being "handled" rather than seen. You excel at giving people what they want to hear, but struggle to share what you actually feel.

🎯 Decisions: You're drawn to opportunities that offer leverage or hidden advantages. You might choose paths based on who you can influence rather than what truly fulfills you. Every choice becomes a chess move in a larger game.

🧱 Inner World: Behind your strategic mind lies a question: "Who am I when I'm not performing?" You may feel disconnected from your authentic desires, having spent so long adapting to what serves your goals.

🌱 Shadow as Potential

Imagine channeling your gift for understanding human nature into authentic influence. When integrated, The Manipulator becomes a wise counselor:

• You help others see their own potential rather than exploiting their weaknesses.
• Your strategic mind serves collective goals, not just personal gain.
• You use your insights to heal and connect rather than control and divide.

🛠️ What You Can Do

• Practice authentic vulnerability: share one genuine feeling without agenda.
• Notice when you're "managing" someone—pause and ask, "What would honesty look like here?"
• Use your people skills to serve: help someone achieve their dreams without expecting anything in return.

Your gift for seeing beneath the surface can become a force for deep healing and genuine connection.`
  },
  "Cynic": {
    name: "The Cynic",
    subtitle: "The Disillusioned Visionary", 
    icon: "eye-slash",
    description: `Your Shadow is The Cynic—a protector born from broken promises and dashed hopes. Somewhere along your journey, belief betrayed you. You offered your trust, and it was met with disappointment or betrayal. So now you keep a safe distance, wrapped in irony and skepticism. You believe that caring less guards you from hurt, and sarcasm becomes your loyal companion, whispering, "Better to expect nothing than be let down."

In shadow form, you may catch yourself:

• Reacting to sincerity with a sarcastic quip, as if laughter could deflect pain.
• Questioning everyone's motives—even your own—before taking a chance.
• Preferring detachment over disappointment, as if caring is too risky.
• Viewing hope as a foolish luxury rather than a guiding light.

🔄 How It Affects Your Life

💬 Relationships: You hold others at arm's length, almost daring them to prove you wrong. When someone tries to get close, you might test their loyalty or predict their flaws—so you never have to risk genuine vulnerability. Loved ones may feel like they're performing just to earn your guarded trust.

🎯 Decisions: You rarely let yourself dream big, fearing that ambition sets you up for failure. Instead of aiming high, you set low expectations—ensuring only small disappointments. Opportunities that ignite excitement are often dismissed as "too good to be true."

🧱 Inner World: Under your witty armor lies a quiet ache—a longing for connection untainted by suspicion. You may feel hollow after a clever retort, as if, in avoiding pain, you also avoid joy.

🌱 Shadow as Potential

Imagine that same sharp insight becoming your compass for authentic discernment. Integrated, The Cynic transforms into a Discerning Visionary:

• You see the world's flaws without closing your heart to beauty.
• Your realism becomes a source of steady hope, not jaded despair.
• You allow yourself to risk hope—knowing you can navigate setbacks with wisdom.

🛠️ What You Can Do

• Invite one sincere emotion each day—gratitude, wonder, or excitement—without qualifying it.
• Catch your inner critic when it scoffs, and gently ask, "What if this time it's different?"
• Notice moments of delight, even small ones, and let yourself fully feel them—without the safety net of irony.`
  },
  "Rebel": {
    name: "The Rebel",
    subtitle: "The Sacred Disruptor",
    icon: "sword",
    description: `Your Shadow is The Rebel—a fearless spirit forged in the fires of resistance. At your core pulses a restlessness, a refusal to bend to anyone's script. You bristle at rules, traditions, and expectations, believing that true freedom lies in breaking every chain. Yet beneath this bold defiance often hides a quieter lament: the fear that belonging means losing yourself, so you choose exile over containment.

In its shadow form, you may notice yourself:

• Reacting with instant defiance to well-meaning guidance—"I won't do it simply because you said so."
• Picking fights or sowing discord, even when peace would serve you better.
• Wearing nonconformity like a badge of honor, yet sometimes wondering, "Am I alone in this?"
• Defining your identity by the boundaries you cross rather than the bridges you build.

🔄 How It Affects Your Life

💬 Relationships: You may push people away the moment they try to get too close or set gentle boundaries. While you crave authenticity, you fear that intimacy demands compromise—so you retreat into freedom's fortress. Loved ones can feel hurt by your sudden rejections or unpredictable moods.

🎯 Decisions: You leap at new possibilities, especially if they flout convention. But this thrill can veer into chaos, leaving plans half-made and commitments unkept. You may sabotage stability just to prove you're not "tamed."

🧱 Inner World: Beneath the swagger lies a whisper: "What if I'm missing out on belonging, on care, on home?" You may feel both powerful and painfully isolated—a pioneer on a desert island of your own making.

🌱 Shadow as Potential

Imagine channeling that revolutionary fire into creative, purposeful change rather than perpetual rebellion. When integrated, The Rebel becomes a Sacred Disruptor:

• You challenge norms with insight, crafting new paradigms that uplift rather than destroy.
• Your independence inspires collaboration—you lead by example, not opposition.
• You honor your need for freedom while building bridges that welcome others in.

🛠️ What You Can Do

• Pause before you push back: Ask yourself, "Is this resisting authority—or resisting growth?"
• Pick one structure (a class, a ritual, a routine) and experiment within its rules—see what freedom you find there.
• Channel defiance into creation: start a project that reflects your vision, rather than tearing down someone else's.

By embracing both your urge to disrupt and your need for connection, you transform from lone iconoclast into visionary architect—someone who doesn't just rebel, but reimagines the world.`
  },
  "Seducer": {
    name: "The Seducer",
    subtitle: "The Emotional Alchemist",
    icon: "heart",
    description: `Your Shadow is the Seducer — a magnetic presence that learned early on: to be seen is to be safe. You've mastered the art of charm, using eye contact, wit, and allure to draw others in. Beneath that dazzling facade, however, lies a fragile core afraid of true exposure. You believe that if you reveal your true self—flaws, doubts, unmet longings—you'll be unlovable.

In its shadow form, this archetype often shows up as:

• Leaning on flirtation or performance to mask insecurity.
• Shifting personas to fit different audiences, never quite "you."
• A silent conviction that authenticity is too dangerous to risk.
• A craving for validation that never fully satisfies.

🔄 How It Affects Your Life

💬 Relationships: You may dazzle at first, but when someone tries to see beneath the surface, you pull away. Intimacy feels like a threat to the masterpiece you've built. You fear they'll love the mask—but reject the real you.

🎯 Decisions: You choose paths that enhance your image—high-profile roles, glamorous adventures—yet may shy away from situations that demand genuine vulnerability. You radiate confidence, even as your heart trembles.

🧱 Inner World: Under the applause and attention, there's a hollow echo. You hustle for external affirmation because the voice inside whispers, "You're not enough."

🌱 Shadow as Potential

Imagine harnessing that magnetism not to conceal, but to illuminate your truth. Once integrated, the Seducer becomes an Authentic Alchemist:

• You draw others in with warmth and openness, not just spectacle.
• Your vulnerability becomes your greatest strength, forging deeper connections.
• You trust that being seen—in all your imperfection—is the most powerful form of attraction.

🛠️ What You Can Do

• Reveal one truth today that you usually hide—no embellishment. Notice how it lands.
• Practice presence over performance: pause before you "turn on" the charm and ask, "Can I just be here?"
• Honor your worth internally, not through likes or compliments. Speak to yourself: "I am enough, as I am."`
  },
  "Martyr": {
    name: "The Martyr",
    subtitle: "The Wounded Caregiver",
    icon: "cross",
    description: `Your Shadow is The Martyr—a wounded caregiver who learned early that love is earned through sacrifice. You believe that your worth is measured by how much you give up for others, how much pain you can endure, and how selflessly you serve. In its shadow form, this archetype whispers, "I matter only when I'm needed."

In shadow mode, you may notice yourself:

• Automatically putting others' needs before your own, even when they don't ask.
• Feeling guilty for having boundaries or pursuing personal goals.
• Attracting people who take more than they give, then feeling resentful while continuing to serve.
• Finding identity in being the helper, the rescuer, the one who suffers so others don't have to.

🔄 How It Affects Your Life

💬 Relationships: You may unconsciously seek out wounded people or difficult situations to validate your role as the rescuer. Partners and friends might initially appreciate your giving nature, but over time feel smothered by your inability to receive care. Your relationships become imbalanced—you give everything, they take everything.

🎯 Decisions: You consistently choose paths that involve sacrifice—staying in draining jobs, living situations, or relationships because leaving would feel "selfish." You might avoid opportunities that would benefit you if they might inconvenience others.

🧱 Inner World: There's a deep well of exhaustion beneath your endless giving. You may feel simultaneously needed and invisible, important and utterly depleted. Receiving help or care feels uncomfortable—you're much more comfortable giving.

🌱 Shadow as Potential

Imagine transforming your gift for empathy and service into balanced compassion. When integrated, The Martyr becomes a Healed Healer:

• You help others from a place of abundance rather than depletion.
• Your compassion includes yourself, and you model healthy boundaries.
• You discover that loving yourself enhances your ability to love others authentically.

🛠️ What You Can Do

• Practice receiving: let someone help you with something small, without rushing to reciprocate.
• Notice your patterns: when do you automatically say yes? Pause and ask, "Do I really want to do this?"
• Set one boundary each week, starting small—perhaps saying no to a request that would drain you.

Your healing journey teaches others that love doesn't require martyrdom—it requires wholeness.`
  },
  "Inner Child": {
    name: "The Inner Child",
    subtitle: "The Wounded Innocent",
    icon: "baby",
    description: `Your Shadow is The Inner Child—the part of you that never quite felt safe enough to grow up. This archetype holds the wounds of abandonment, betrayal, or emotional neglect from your formative years. You carry within you a profound sensitivity and a deep longing for the safety and unconditional love you may have missed.

In shadow form, you might recognize yourself:

• Feeling small in the face of conflict or authority.
• Having emotional responses that feel overwhelming or childlike, even when your rational mind knows better.
• Struggling with feeling "not enough"—not smart enough, not worthy enough, not deserving of love or success.
• Seeking approval from others to feel secure, or avoiding risks because failure feels too devastating.

🔄 How It Affects Your Life

💬 Relationships: You may cling to people who show you kindness, or conversely, push them away when they get too close, fearing inevitable abandonment. You might struggle to maintain healthy boundaries—either having none at all or building walls so high that no one can reach you.

🎯 Decisions: Fear often drives your choices. You might avoid taking risks, speaking up, or pursuing dreams because the possibility of rejection or failure feels unbearable. There's often a sense of waiting—for someone to rescue you, to see you, to make everything okay.

🧱 Inner World: Your emotional landscape can feel vast and overwhelming. You may carry shame about your sensitivity, believing you should be "stronger" or more adult. Yet beneath the pain lies incredible capacity for wonder, creativity, and authentic connection.

🌱 Shadow as Potential

When integrated, your sensitivity becomes a superpower. The healed Inner Child brings:

• Emotional authenticity that creates deep connections with others.
• Playfulness and wonder that bring joy and creativity to the world.
• Intuitive wisdom that can sense what others truly need.
• The courage to be vulnerable, which inspires others to do the same.

🛠️ What You Can Do

• Practice self-parenting: when you feel small or scared, ask yourself, "What would I need to hear right now?" Then offer yourself those words.
• Honor your sensitivity: it's not a weakness—it's a gift that allows you to connect deeply with life and others.
• Create safety: establish routines, spaces, or relationships that help you feel secure and valued.

By learning to be the loving parent to yourself that you needed, you can turn your wounds into wisdom and help others heal their own inner children.`
  }
};
