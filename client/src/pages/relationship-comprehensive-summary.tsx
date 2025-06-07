import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AdSense } from "@/components/ui/adsense";
import { ArrowLeft, Heart, Share2, Download, RefreshCw, Shield, Users, Compass, Star } from "lucide-react";

interface TestResult {
  testId: string;
  result: any;
  completedAt: string;
}

export default function RelationshipComprehensiveSummary() {
  const [, setLocation] = useLocation();
  const [results, setResults] = useState<TestResult[]>([]);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    try {
      // Load all test results from localStorage
      const savedResults = localStorage.getItem('psychTestResults');
      if (savedResults) {
        const allResults = JSON.parse(savedResults);
        
        // Validate that results is an array
        if (Array.isArray(allResults)) {
          // Filter for relationship journey tests
          const relationshipResults = allResults.filter((r: TestResult) => 
            r && r.testId && ['shadow-test', 'toxicity-compass', 'relationship-patterns', 'integration-guide'].includes(r.testId)
          );
          setResults(relationshipResults);
          
          if (relationshipResults.length === 4) {
            generateComprehensiveProfile(relationshipResults);
          }
        }
      }
    } catch (error) {
      console.warn('Error loading relationship test results:', error);
      // Clear corrupted data and reset
      localStorage.removeItem('psychTestResults');
      localStorage.removeItem('psychTestProgress');
    }
  }, []);

  const generateComprehensiveProfile = (testResults: TestResult[]) => {
    const shadowResult = testResults.find(r => r.testId === 'shadow-test')?.result;
    const toxicityResult = testResults.find(r => r.testId === 'toxicity-compass')?.result;
    const patternsResult = testResults.find(r => r.testId === 'relationship-patterns')?.result;
    const integrationResult = testResults.find(r => r.testId === 'integration-guide')?.result;

    const profile = {
      overallWellness: calculateOverallWellness(toxicityResult, integrationResult),
      dominantPattern: patternsResult?.dominantPattern || 'secure',
      integrationLevel: integrationResult?.integrationLevel || 'developing',
      toxicityRisk: toxicityResult?.zone || 'green',
      coreInsights: generateCoreInsights(shadowResult, patternsResult, integrationResult),
      strengthsAndGifts: generateStrengths(patternsResult, integrationResult),
      growthOpportunities: generateGrowthOpportunities(toxicityResult, patternsResult, integrationResult),
      relationshipGuidance: generateRelationshipGuidance(patternsResult, integrationResult, toxicityResult),
      integrationPractices: generateIntegrationPractices(integrationResult, patternsResult)
    };

    setProfileData(profile);
  };

  const calculateOverallWellness = (toxicity: any, integration: any) => {
    const toxicityScore = toxicity?.zone === 'green' ? 100 : toxicity?.zone === 'yellow' ? 70 : 40;
    const integrationScore = integration?.averageScore ? (integration.averageScore / 5) * 100 : 60;
    return Math.round((toxicityScore + integrationScore) / 2);
  };

  const generateCoreInsights = (shadow: any, patterns: any, integration: any) => {
    const insights = [];
    
    // Deep attachment pattern insights with expanded psychological understanding
    if (patterns?.dominantPattern === 'secure') {
      insights.push("Your emerging awareness of relationship dynamics represents the beginning of profound transformation - every conscious choice you make now creates ripple effects for healthier connections.");
      insights.push("Your secure attachment foundation creates psychological safety in relationships, allowing both partners to grow authentically while maintaining deep connection. This rare gift enables you to serve as an emotional anchor during turbulent times.");
      insights.push("You naturally balance emotional availability with healthy boundaries, creating an environment where love can flourish without suffocation. Your relationships become laboratories for mutual evolution and conscious growth.");
    } else if (patterns?.dominantPattern === 'anxious') {
      insights.push("Your emerging awareness of relationship dynamics represents the beginning of profound transformation - every conscious choice you make now creates ripple effects for healthier connections.");
      insights.push("Your heightened emotional sensitivity reveals a profound capacity for deep love and connection, though your nervous system may interpret normal relationship fluctuations as threats to the bond. This sensitivity, when regulated, becomes your greatest strength in creating intimate connections.");
      insights.push("Beneath your need for reassurance lies an extraordinary ability to attune to your partner's emotional states - a gift that, when channeled consciously, creates remarkable intimacy. Your emotional radar can detect subtle shifts that others miss entirely.");
      insights.push("Your intense capacity for love stems from an open heart that has remained vulnerable despite past wounds. This courage to keep loving, even when afraid, is a testament to your resilience and authentic desire for deep connection.");
    } else if (patterns?.dominantPattern === 'avoidant') {
      insights.push("Your emerging awareness of relationship dynamics represents the beginning of profound transformation - every conscious choice you make now creates ripple effects for healthier connections.");
      insights.push("Your protective mechanisms around emotional vulnerability likely developed as intelligent adaptations to early experiences, but may now limit your access to the deep connection you actually crave. These defenses once served you well but can now be gradually softened.");
      insights.push("Your strength in maintaining independence and emotional regulation can be balanced with gradual expansion of your comfort zone for emotional expression and interdependence. True autonomy includes the freedom to choose intimacy when it serves your highest good.");
      insights.push("Your ability to remain calm during emotional storms provides invaluable stability in relationships. When paired with increased emotional expression, this creates a powerful foundation for lasting partnerships built on both security and authenticity.");
    } else if (patterns?.dominantPattern === 'dismissive') {
      insights.push("Your emerging awareness of relationship dynamics represents the beginning of profound transformation - every conscious choice you make now creates ripple effects for healthier connections.");
      insights.push("Your dismissive patterns reflect learned strategies for emotional self-protection, yet beneath this armor lies a deep human need for connection that deserves honoring and gentle exploration. Your journey involves rediscovering the value of emotional intimacy.");
      insights.push("Your intellectual approach to relationships, while sometimes distancing, offers valuable perspective and problem-solving abilities that can greatly benefit partnerships when balanced with emotional engagement.");
    }

    // Expanded shadow archetype integration insights
    if (shadow?.archetype === 'ruler') {
      insights.push("Your Ruler shadow brings powerful leadership qualities to relationships, creating natural magnetism and the ability to inspire growth in others. The challenge lies in balancing authority with collaboration, ensuring that your strength empowers rather than overshadows your partner.");
    } else if (shadow?.archetype === 'lover') {
      insights.push("Your Lover shadow reveals deep passion and romantic idealization, which can inspire beautiful connection while potentially creating unrealistic expectations of perpetual intensity. Learning to love the ordinary moments alongside the extraordinary ones deepens authentic intimacy.");
    } else if (shadow?.archetype === 'caregiver') {
      insights.push("Your Caregiver shadow demonstrates profound nurturing capacity and an intuitive understanding of others' needs. The growth edge involves learning to receive care as gracefully as you give it, creating balanced reciprocity in your relationships.");
    } else if (shadow?.archetype === 'rebel') {
      insights.push("Your Rebel shadow brings fierce independence and authenticity, challenging conventional relationship norms in favor of genuine connection. This energy can revolutionize how you and your partners approach love, intimacy, and commitment.");
    } else if (shadow?.archetype === 'sage') {
      insights.push("Your Sage shadow offers profound wisdom and the ability to see relationship patterns clearly. Your challenge is to share this insight without creating teacher-student dynamics that can inhibit emotional intimacy and mutual vulnerability.");
    } else if (shadow?.archetype === 'explorer') {
      insights.push("Your Explorer shadow craves adventure and new experiences, bringing excitement and growth to relationships. Balancing this with commitment and consistency creates partnerships that are both stable and continuously evolving.");
    }

    // Detailed integration level insights with specific relationship applications
    if (integration?.integrationLevel === 'mastery') {
      insights.push("Your advanced relationship consciousness allows you to hold space for complex emotions and dynamics, serving as a catalyst for healing and growth in your partnerships. You naturally transform conflicts into opportunities for deeper understanding and connection.");
    } else if (integration?.integrationLevel === 'integrated') {
      insights.push("Your developed self-awareness enables you to recognize and work with relationship patterns consciously, creating opportunities for continuous growth and deeper intimacy. You can catch unhealthy dynamics before they become entrenched and redirect them toward healing.");
    } else if (integration?.integrationLevel === 'developing') {
      insights.push("You're building crucial relationship skills with clear areas for growth, indicating readiness for deeper levels of conscious partnership and emotional maturity. Your willingness to examine your patterns shows tremendous courage and commitment to authentic love.");
    } else {
      insights.push("Your emerging awareness of relationship dynamics represents the beginning of profound transformation - every conscious choice you make now creates ripple effects for healthier connections. This awakening is the first step toward the kind of love you truly desire.");
    }

    return insights;
  };

  const generateStrengths = (patterns: any, integration: any) => {
    const strengths = [];
    
    if (patterns?.dominantPattern === 'secure') {
      strengths.push("Exceptional ability to create psychological safety - you naturally make others feel seen, heard, and valued, creating an environment where authentic vulnerability can flourish");
      strengths.push("Masterful balance of emotional availability and healthy boundaries, allowing authentic connection without losing yourself or suffocating your partner");
      strengths.push("Innate capacity for conflict resolution that transforms disagreements into opportunities for deeper understanding and stronger bonds");
      strengths.push("Emotional regulation skills that provide stability during relationship storms while remaining open to growth and change");
      strengths.push("Natural mentoring ability - your secure presence helps others develop their own relationship skills and emotional intelligence");
      strengths.push("Ability to remain grounded during crisis while offering compassionate support without rescuing or enabling");
      strengths.push("Gift for seeing the highest potential in your partners and creating space for them to grow into that vision");
      strengths.push("Remarkable capacity to forgive and rebuild trust when relationships experience setbacks or breaches");
    } else if (patterns?.dominantPattern === 'anxious') {
      strengths.push("Extraordinary emotional attunement - you can sense subtle shifts in relationship dynamics that others miss, making you incredibly responsive to your partner's needs");
      strengths.push("Profound capacity for deep love and intimate connection that creates transformative bonds and lasting emotional memories");
      strengths.push("High emotional intelligence that allows you to understand complex relationship dynamics and navigate them with increasing skill");
      strengths.push("Passionate commitment to working through relationship challenges rather than avoiding them, demonstrating remarkable relationship resilience");
      strengths.push("Ability to create intense emotional intimacy when your nervous system feels safe, leading to extraordinarily deep connections");
      strengths.push("Natural empathy that allows you to understand and validate your partner's emotional experiences with remarkable accuracy");
      strengths.push("Courage to remain emotionally open and vulnerable even after experiencing hurt or disappointment");
      strengths.push("Intuitive understanding of the healing power of love and your willingness to offer that healing to others");
      strengths.push("Ability to inspire emotional growth and deeper feeling capacity in partners who may be more emotionally distant");
    } else if (patterns?.dominantPattern === 'avoidant') {
      strengths.push("Remarkable emotional self-regulation that provides stability and consistency in relationships, creating a calming influence during turbulent times");
      strengths.push("Healthy respect for independence and personal boundaries that prevents codependency and enables both partners to maintain their individual identities");
      strengths.push("Ability to think clearly during emotional intensity, offering rational perspective during conflicts when emotions run high");
      strengths.push("Strong sense of personal identity that doesn't get lost in relationship dynamics, maintaining authenticity even in intimate partnerships");
      strengths.push("Capacity for loyalty and commitment once trust is established, though expressed through actions rather than constant emotional expression");
      strengths.push("Ability to give partners space to process emotions without feeling rejected or taking their need for space personally");
      strengths.push("Natural problem-solving abilities that can help resolve practical relationship issues and conflicts efficiently");
      strengths.push("Consistency in showing up for responsibilities and commitments, providing a reliable foundation for partnership");
      strengths.push("Ability to remain calm during crisis situations, offering steady presence when your partner is experiencing emotional overwhelm");
    } else if (patterns?.dominantPattern === 'dismissive') {
      strengths.push("Strong personal boundaries and self-advocacy skills that prevent relationship exploitation and maintain healthy limits");
      strengths.push("Intellectual approach to relationships that can offer valuable perspective on emotional situations and clear analysis of dynamics");
      strengths.push("Consistency and reliability in practical aspects of partnership, providing stability through actions and follow-through");
      strengths.push("Ability to maintain objectivity during relationship crises, offering clear-headed perspective when emotions cloud judgment");
      strengths.push("Independence that prevents you from becoming overly dependent on relationships for self-worth or identity");
      strengths.push("Practical wisdom about relationship dynamics that can help navigate complex situations with clarity");
    }

    // Add integration-based strengths with expanded descriptions
    if (integration?.integrationLevel === 'mastery') {
      strengths.push("Advanced self-awareness that allows you to catch and redirect unhealthy patterns in real-time, preventing relationship damage before it occurs");
      strengths.push("Ability to hold space for your partner's growth without taking their emotions personally or trying to fix their experience");
      strengths.push("Skilled at transforming relationship challenges into opportunities for mutual evolution and deeper understanding");
      strengths.push("Capacity to see relationship dynamics from multiple perspectives simultaneously, enabling nuanced responses to complex situations");
      strengths.push("Natural ability to create healing environments where both partners can address past wounds and grow together");
    } else if (integration?.integrationLevel === 'integrated') {
      strengths.push("Developed self-awareness that enables conscious choice-making in relationship dynamics rather than reactive responses");
      strengths.push("Growing ability to hold paradox - being both independent and interdependent, strong and vulnerable, giving and receiving");
      strengths.push("Increasing skill at transforming conflicts into opportunities for greater intimacy and understanding");
      strengths.push("Capacity to recognize and interrupt unhealthy patterns before they become entrenched in the relationship");
    } else if (integration?.integrationLevel === 'developing') {
      strengths.push("Growing self-awareness and willingness to examine your relationship patterns with honesty and courage");
      strengths.push("Increasing ability to communicate your needs and boundaries clearly while remaining open to your partner's perspective");
      strengths.push("Developing skills in emotional regulation and conscious response rather than reactive behavior");
    }

    return strengths;
  };

  const generateGrowthOpportunities = (toxicity: any, patterns: any, integration: any) => {
    const opportunities = [];

    // Universal growth opportunities that apply to everyone
    opportunities.push("Develop deeper emotional intelligence by practicing daily awareness of your feelings, triggers, and emotional patterns in relationships");
    opportunities.push("Strengthen your communication skills by learning to express needs clearly while remaining open to your partner's perspective and experience");
    opportunities.push("Build greater self-awareness through regular reflection on your relationship patterns, reactions, and the unconscious dynamics you create with others");

    // Toxicity-based opportunities with expanded guidance
    if (toxicity?.zone === 'red') {
      opportunities.push("Urgent Priority: Establish comprehensive safety protocols and seek immediate professional support to address toxic dynamics that are compromising your physical and emotional well-being");
      opportunities.push("Develop a detailed exit strategy including financial planning, housing options, legal consultation, and a strong support network of trusted friends, family, or professionals");
      opportunities.push("Learn to recognize and document gaslighting, manipulation, and other toxic behaviors to maintain clarity about what is actually happening in your relationship");
      opportunities.push("Practice trauma-informed self-care including therapy, support groups, and healing modalities that help you recover your sense of self-worth and personal power");
    } else if (toxicity?.zone === 'yellow') {
      opportunities.push("Focus on strengthening personal boundaries by clearly identifying your limits and practicing assertive communication when those boundaries are crossed");
      opportunities.push("Learn to recognize early warning signs of toxic patterns including emotional manipulation, control tactics, and escalating conflict dynamics");
      opportunities.push("Develop conflict resolution skills that allow you to address problems without escalating tension or compromising your personal safety and well-being");
      opportunities.push("Build emotional resilience through stress management techniques, self-care practices, and professional support to prevent further deterioration of relationship health");
    } else if (toxicity?.zone === 'green') {
      opportunities.push("Use your foundation of relationship safety to explore deeper levels of vulnerability, intimacy, and authentic self-expression with your partner");
      opportunities.push("Focus on preventing complacency by continuing to invest in relationship growth, appreciation practices, and conscious communication even when things are going well");
      opportunities.push("Develop skills in supporting others who may be struggling with relationship challenges, using your healthy dynamic as a model for what's possible");
    }

    // Comprehensive attachment pattern growth opportunities
    if (patterns?.dominantPattern === 'anxious') {
      opportunities.push("Master nervous system regulation through daily breathwork, meditation, somatic practices, and other techniques that help you stay grounded when relationship anxiety arises");
      opportunities.push("Develop secure self-worth that exists independently of your partner's validation by building meaningful friendships, pursuing personal goals, and cultivating individual interests");
      opportunities.push("Practice tolerating uncertainty in relationships without immediately seeking reassurance, learning to sit with discomfort and trust your own inner wisdom");
      opportunities.push("Learn to differentiate between genuine intuitive concerns about your relationship and anxiety-based fears that stem from past wounds or insecure attachment patterns");
      opportunities.push("Build confidence in your ability to handle relationship challenges and potential loss, reducing the desperation that can push partners away");
      opportunities.push("Develop healthy coping strategies for when your partner needs space or is going through their own challenges without taking it personally");
      opportunities.push("Practice self-soothing techniques that don't require your partner's involvement, creating a toolkit of resources for emotional regulation");
      opportunities.push("Work on healing childhood wounds or past relationship traumas that contribute to anxious attachment patterns through therapy or other healing modalities");
    } else if (patterns?.dominantPattern === 'avoidant') {
      opportunities.push("Gradually expand your emotional vocabulary and practice expressing feelings in low-stakes situations to build comfort with emotional intimacy over time");
      opportunities.push("Explore the underlying fears that drive emotional withdrawal - often related to fear of engulfment, loss of independence, or past emotional injuries");
      opportunities.push("Practice staying emotionally present during your partner's emotional expressions without shutting down, withdrawing, or immediately moving into problem-solving mode");
      opportunities.push("Challenge yourself to share one vulnerable thought, feeling, or fear each week with your partner to slowly build tolerance for emotional intimacy");
      opportunities.push("Learn to recognize when you're emotionally withdrawing and develop techniques for staying connected even when you feel overwhelmed by closeness");
      opportunities.push("Practice receiving care, affection, and emotional support from your partner without feeling suffocated or like you're losing your independence");
      opportunities.push("Explore how emotional connection can actually enhance rather than threaten your sense of autonomy and individual identity");
      opportunities.push("Work on developing what researchers call 'earned security' - the ability to feel safe in emotional intimacy despite early experiences that taught you to be self-reliant");
    } else if (patterns?.dominantPattern === 'dismissive') {
      opportunities.push("Develop genuine curiosity about emotional experiences - both your own and your partner's - rather than dismissing them as unnecessary drama or inefficiency");
      opportunities.push("Practice empathetic listening without immediately offering solutions, logical analysis, or attempts to rationalize away your partner's emotional experience");
      opportunities.push("Explore how emotional connection can actually enhance rather than threaten your sense of independence, productivity, and life satisfaction");
      opportunities.push("Learn to recognize the difference between healthy emotional expression and what you may perceive as 'emotional dysfunction' or manipulation");
      opportunities.push("Practice sitting with emotions - both yours and your partner's - without needing to fix, solve, or escape from the emotional experience");
      opportunities.push("Develop appreciation for the practical benefits of emotional intimacy including better communication, reduced conflict, and increased relationship satisfaction");
      opportunities.push("Challenge beliefs about emotions being weakness or waste of time by researching the science of emotional intelligence and relationship success");
    } else if (patterns?.dominantPattern === 'secure') {
      opportunities.push("Continue deepening your capacity to hold space for increasingly complex relationship dynamics while supporting your partner's growth without taking responsibility for their healing");
      opportunities.push("Explore advanced relationship skills like conflict transformation, tantric communication, and conscious partnership practices that push the boundaries of conventional intimacy");
      opportunities.push("Use your secure foundation to heal family lineage patterns and model healthy relationship dynamics for others in your community and social network");
      opportunities.push("Challenge yourself to explore new depths of vulnerability and authenticity that push your own edges while maintaining your secure foundation");
      opportunities.push("Develop leadership skills in relationship consciousness by mentoring other couples or individuals who are working to develop more secure attachment patterns");
    }

    // Comprehensive integration level opportunities
    if (integration?.integrationLevel === 'emerging') {
      opportunities.push("Build foundational emotional intelligence through daily mindfulness practices, emotion identification exercises, and regular self-reflection about your relationship patterns");
      opportunities.push("Develop basic communication skills including active listening, expressing needs clearly, and learning to give and receive feedback without becoming defensive");
      opportunities.push("Learn to identify your relationship patterns, triggers, and automatic responses so you can begin to make more conscious choices in how you show up with partners");
      opportunities.push("Practice basic boundary setting by learning to identify your limits and communicate them clearly and kindly to others");
    } else if (integration?.integrationLevel === 'developing') {
      opportunities.push("Strengthen your ability to catch unhealthy patterns in real-time and consciously choose different responses rather than reacting from old conditioning");
      opportunities.push("Practice holding paradox - learning to be both independent and interdependent, strong and vulnerable, giving and receiving simultaneously");
      opportunities.push("Develop more sophisticated communication skills including nonviolent communication, difficult conversation navigation, and conflict transformation techniques");
      opportunities.push("Work on integrating your shadow aspects - the parts of yourself that you've rejected or denied - so they don't unconsciously sabotage your relationships");
    } else if (integration?.integrationLevel === 'integrated') {
      opportunities.push("Explore advanced relationship consciousness work including energy dynamics, somatic approaches to intimacy, and transpersonal aspects of partnership");
      opportunities.push("Consider mentoring others in their relationship journey by sharing your hard-won wisdom and modeling healthy relationship dynamics");
      opportunities.push("Focus on the collective healing aspects of your relationship work - how your consciousness contributes to the evolution of love and partnership in the world");
      opportunities.push("Develop mastery in specific relationship modalities that call to you, whether that's therapeutic approaches, spiritual practices, or innovative relationship structures");
    } else if (integration?.integrationLevel === 'mastery') {
      opportunities.push("Focus on the subtle arts of relationship mastery including energy transmission, holding space for miraculous transformation, and creating containers for profound healing");
      opportunities.push("Explore how your relationship consciousness can serve the collective evolution of human love and partnership on a larger scale");
      opportunities.push("Consider formal training or certification in relationship coaching, therapy, or other healing modalities that allow you to serve others more effectively");
    }

    // Additional universal growth opportunities
    opportunities.push("Explore your family of origin patterns and how they influence your current relationship dynamics, working to heal intergenerational trauma where needed");
    opportunities.push("Develop a regular practice of appreciation and gratitude in your relationships, actively acknowledging your partner's positive qualities and contributions");
    opportunities.push("Build community with other conscious individuals and couples who can support your relationship growth and provide models of healthy partnership");
    opportunities.push("Engage in ongoing education about relationship psychology, attachment theory, and conscious partnership through books, workshops, therapy, or coaching");
    opportunities.push("Practice forgiveness - both of yourself and your partner - for past mistakes while maintaining appropriate boundaries and accountability");
    opportunities.push("Develop your capacity for repair and reconnection after relationship conflicts or disconnections, learning to rebuild trust and intimacy after challenges");

    return opportunities;
  };

  const generateRelationshipGuidance = (patterns: any, integration: any, toxicity: any) => {
    const guidance = [];

    // Default guidance for all relationship consciousness levels
    guidance.push("Every step you take toward conscious relationship engagement creates positive change. Start with small, consistent practices and build from there.");

    // Safety-first guidance for high toxicity
    if (toxicity?.zone === 'red') {
      guidance.push("🚨 Safety Priority: Your assessment indicates concerning toxic patterns. Consider reaching out to a therapist, counselor, or trusted support network immediately. Remember that you deserve relationships that honor your dignity and well-being.");
      guidance.push("Create a comprehensive safety plan that includes trusted contacts, emergency resources, and clear steps for protecting yourself if dynamics escalate. Your physical and emotional safety must be the top priority.");
      guidance.push("Document concerning behaviors and patterns to help you maintain clarity about what's happening. Toxic relationships often involve gaslighting that can make you question your own perceptions.");
      guidance.push("Build a strong support network outside the relationship. Isolation is a common tactic in toxic dynamics, so maintaining connections with friends, family, or support groups is crucial.");
    } else if (toxicity?.zone === 'yellow') {
      guidance.push("Caution Advised: Some concerning patterns detected. Focus on strengthening your personal boundaries and developing assertiveness skills to prevent further deterioration of relationship health.");
      guidance.push("Consider couples therapy or individual therapy to address these warning signs before they become more entrenched patterns. Early intervention can prevent escalation.");
      guidance.push("Practice clear communication about your needs and limits. Yellow zone dynamics often improve with increased clarity and consistency in boundary-setting.");
      guidance.push("Monitor your stress levels and emotional well-being closely. If you notice increasing anxiety, depression, or loss of self-worth, seek professional support.");
    } else if (toxicity?.zone === 'green') {
      guidance.push("Your relationship environment shows healthy patterns. Continue nurturing these positive dynamics through consistent care, appreciation, and conscious communication.");
      guidance.push("Use this foundation of safety to explore deeper levels of intimacy and vulnerability. Green zone relationships can handle more complex emotional terrain.");
      guidance.push("Focus on growth and evolution together. Safe relationships provide the perfect laboratory for exploring new ways of loving and being loved.");
    }

    // Comprehensive attachment-specific guidance
    if (patterns?.dominantPattern === 'secure') {
      guidance.push("Your secure foundation is a gift not only to yourself but to your partners. Continue using your natural ability to create safety and model healthy relationship dynamics for others in your life.");
      guidance.push("Consider how you might support others in developing secure relationships - your influence can create positive ripple effects in your community and family systems.");
      guidance.push("Focus on deepening intimacy through continued vulnerability and supporting your partner's individual growth alongside your shared journey. Secure attachment allows for both togetherness and separateness.");
      guidance.push("Challenge yourself to explore new depths of emotional and physical intimacy. Your secure base allows you to take healthy risks in love that others might find too threatening.");
      guidance.push("Use your natural conflict resolution skills to transform disagreements into opportunities for greater understanding and connection rather than just resolution.");
      guidance.push("Consider becoming a mentor or guide for other couples or individuals learning about healthy relationship dynamics. Your lived experience of security is valuable to others.");
    } else if (patterns?.dominantPattern === 'anxious') {
      guidance.push("Your intense capacity for love is beautiful, but learning to self-soothe will help you love from abundance rather than fear. Practice grounding techniques daily to regulate your nervous system.");
      guidance.push("When anxiety arises about your relationship, pause and ask: 'Is this my intuition or my activation?' This distinction will transform how you navigate concerns and communicate with your partner.");
      guidance.push("Communicate your needs clearly using 'I' statements, and remember that asking for reassurance occasionally is normal - it's the frequency and intensity that matters for relationship health.");
      guidance.push("Develop secure self-worth through individual activities, friendships, and personal goals that exist independently of your romantic relationship. This reduces pressure on your partner to be your sole source of validation.");
      guidance.push("Practice tolerating uncertainty and discomfort without immediately seeking reassurance. Building this capacity will dramatically improve your relationship satisfaction and reduce partner fatigue.");
      guidance.push("Learn to distinguish between reasonable relationship concerns and anxiety-driven fears. Keep a journal to track patterns and discuss insights with a therapist if needed.");
      guidance.push("Create a self-soothing toolkit that doesn't require your partner's involvement. This might include breathing exercises, physical activity, creative outlets, or connecting with friends.");
      guidance.push("Work on developing what therapists call 'earned security' - the ability to provide yourself with the safety and validation you seek from others.");
    } else if (patterns?.dominantPattern === 'avoidant') {
      guidance.push("Your independence is a strength, but true intimacy requires showing up emotionally even when it feels uncomfortable. Start small and build your tolerance gradually without overwhelming yourself.");
      guidance.push("Practice staying present when your partner shares emotions. Resist the urge to problem-solve immediately - sometimes they just need to be heard and emotionally held by you.");
      guidance.push("Remember that emotional closeness doesn't threaten your autonomy - it can actually enhance your sense of self when approached consciously and with clear boundaries.");
      guidance.push("Challenge yourself to share one feeling or vulnerable thought each week. Notice that intimacy can coexist with independence and actually support your overall life satisfaction.");
      guidance.push("Explore the underlying fears that drive emotional withdrawal. Often these stem from early experiences that no longer serve your adult relationships.");
      guidance.push("Practice expressing appreciation and affection regularly, even in small ways. Your partner needs to feel emotionally nourished by you, not just practically supported.");
      guidance.push("Work on expanding your emotional vocabulary and awareness. Many avoidant individuals have rich inner emotional lives but lack practice in expressing them safely.");
      guidance.push("Consider that your capacity for consistency and reliability, when combined with emotional availability, creates an incredibly powerful foundation for lasting love.");
    } else if (patterns?.dominantPattern === 'dismissive') {
      guidance.push("Emotional connection isn't a weakness or distraction - it's a fundamental human need that, when honored, can actually support your other life goals and enhance your overall well-being.");
      guidance.push("Practice curiosity about emotions rather than judgment. Ask yourself: 'What might this feeling be trying to tell me or my partner?' Emotions carry important information for relationships.");
      guidance.push("Experiment with small acts of emotional availability and notice how they impact your relationship satisfaction over time. You might be surprised by the positive effects.");
      guidance.push("Consider that emotional intimacy can be approached intellectually at first. Study the benefits of emotional connection and treat it as a skill to develop rather than something to resist.");
      guidance.push("Challenge beliefs about emotional expression being unnecessary or burdensome. Healthy emotional sharing actually increases efficiency in relationships by preventing misunderstandings.");
      guidance.push("Practice empathetic listening without immediately offering solutions or logical analysis. Sometimes your partner needs emotional validation more than practical advice.");
    }

    // Comprehensive integration-level guidance
    if (integration?.integrationLevel === 'mastery') {
      guidance.push("Your advanced relationship consciousness positions you to be a catalyst for healing not just in your own relationships, but in your broader community. Consider how you might share your wisdom.");
      guidance.push("Focus on the subtle arts of relationship mastery: holding paradox, transmuting conflict energy, and creating space for miraculous transformation in your partnerships.");
      guidance.push("Explore how your relationship consciousness can serve the collective healing of relationship patterns in your family lineage and community systems.");
    } else if (integration?.integrationLevel === 'integrated') {
      guidance.push("Continue deepening your practice of conscious relationship skills and consider how you might share your insights with others who are earlier in their journey.");
      guidance.push("Focus on the integration of shadow aspects and the cultivation of what Carl Jung called 'individuation' within the context of intimate partnership.");
      guidance.push("Explore advanced relationship practices like tantric communication, nonviolent communication, or other modalities that support continued growth and evolution.");
    } else if (integration?.integrationLevel === 'developing') {
      guidance.push("You're building solid foundation skills - stay consistent with your growth practices and be patient with yourself as new patterns develop. Change takes time and repetition.");
      guidance.push("Focus on catching unhealthy patterns in real-time and making conscious choices about how to respond differently. This skill will transform all your relationships over time.");
      guidance.push("Consider working with a relationship therapist or coach who can support your continued development and help you navigate more complex relationship dynamics.");
    } else {
      guidance.push("Begin with basic emotional intelligence development: learning to identify, understand, and express your emotions in healthy ways. This is the foundation of all relationship skills.");
      guidance.push("Practice self-awareness through mindfulness, journaling, or therapy. The more you understand yourself, the more consciously you can show up in relationships.");
    }

    return guidance;
  };

  const generateIntegrationPractices = (integration: any, patterns: any) => {
    const practices = [];

    // Universal foundation practices that work for all attachment styles
    practices.push("Daily 10-minute mindfulness practice focused on emotional awareness and body sensations to build present-moment consciousness in relationships");
    practices.push("Weekly relationship reflection: journal about patterns, triggers, and growth moments to track your evolution and celebrate progress");
    practices.push("Practice the 'pause and breathe' technique before responding during emotional conversations to create space for conscious choice rather than reactive patterns");

    // Comprehensive attachment-specific practices
    if (patterns?.dominantPattern === 'anxious') {
      practices.push("Morning nervous system regulation: 10 minutes of deep breathing, progressive muscle relaxation, or gentle yoga to start each day from a centered place");
      practices.push("Create a comprehensive self-soothing toolkit: list 20+ activities that calm and center you without requiring partner involvement (music, nature, art, movement, reading, etc.)");
      practices.push("Practice the 24-hour rule: when relationship anxiety arises, wait 24 hours before addressing concerns to distinguish between genuine intuition and nervous system activation");
      practices.push("Develop and recite daily self-worth affirmations that remind you of your inherent value independent of relationship status or partner validation");
      practices.push("Build secure friendships and individual interests that provide emotional nourishment outside your romantic relationship to reduce pressure on your partner");
      practices.push("Practice uncertainty tolerance exercises: deliberately engage in low-stakes situations where you can't control outcomes to build your capacity for relationship uncertainty");
      practices.push("Develop a personal mission statement and goals that exist independently of your relationship to maintain strong individual identity while partnered");
      practices.push("Create boundaries around reassurance-seeking: limit yourself to one reassurance request per day and practice self-soothing for 20 minutes before asking for support");
    } else if (patterns?.dominantPattern === 'avoidant') {
      practices.push("Daily emotion check-in: ask yourself 'What am I feeling right now?' three times throughout the day and write down your answers to build emotional awareness");
      practices.push("Weekly vulnerability practice: share one authentic feeling, fear, or desire with your partner in a low-pressure setting to gradually build intimacy tolerance");
      practices.push("Presence practice: when your partner expresses emotion, count to 5 and take a deep breath before responding to resist immediate problem-solving or withdrawal");
      practices.push("Intimacy tolerance building: gradually increase time spent in emotionally connected activities (eye contact, physical affection, deep conversations) without overwhelming yourself");
      practices.push("Practice receiving care: allow your partner to do something kind for you each week and notice any discomfort that arises around receiving support");
      practices.push("Emotional expression homework: share one feeling or emotional experience with your partner each day, starting with positive emotions and gradually including more vulnerable ones");
      practices.push("Childhood exploration: journal about early experiences that may have taught you that emotional needs were burdensome or unsafe to express");
      practices.push("Physical affection practice: initiate one non-sexual physical connection (hug, hand-holding, gentle touch) daily to build comfort with intimate contact");
    } else if (patterns?.dominantPattern === 'dismissive') {
      practices.push("Curiosity cultivation: when emotions arise (yours or your partner's), ask 'What might this be trying to communicate?' instead of dismissing or minimizing feelings");
      practices.push("Empathy expansion exercise: spend 10 minutes daily imagining how situations feel from your partner's emotional perspective, not just their logical viewpoint");
      practices.push("Emotional vocabulary building: learn three new feeling words each week and practice using them in conversation to expand your emotional language");
      practices.push("Validation practice: when your partner shares emotions, practice reflecting back what you hear without offering solutions or logical alternatives");
      practices.push("Benefit analysis: research and list the concrete benefits of emotional intimacy for relationship satisfaction, health, and life fulfillment to motivate engagement");
      practices.push("Micro-dosing emotions: start with very brief (2-3 minute) emotional check-ins with your partner to build tolerance without overwhelming your system");
      practices.push("Connection ritual: establish one small daily practice that prioritizes emotional connection over practical efficiency (morning coffee together, evening gratitude sharing, etc.)");
    } else if (patterns?.dominantPattern === 'secure') {
      practices.push("Advanced communication practice: use reflective listening and emotional validation techniques to model healthy dialogue and support your partner's growth");
      practices.push("Relationship leadership: demonstrate healthy conflict resolution and emotional regulation to create safety for deeper exploration of difficult topics");
      practices.push("Depth exploration: regularly engage in activities that deepen intimacy and mutual understanding (values discussions, shared dreams, exploring each other's inner worlds)");
      practices.push("Support others: offer guidance and modeling to friends or family members who are developing their own relationship skills, using your secure foundation as a gift to your community");
      practices.push("Challenge seeking: because you have a strong foundation, consciously explore areas where you can continue growing (new communication skills, deeper vulnerability, creative expression in love)");
      practices.push("System healing: use your secure relationships to heal family patterns and create new templates for healthy love in your broader social network");
    }

    // Comprehensive integration-level specific practices
    if (integration?.integrationLevel === 'emerging') {
      practices.push("Basic communication skills practice: focus on using 'I' statements and active listening daily to build foundational relationship competencies");
      practices.push("Pattern recognition development: spend 5 minutes each evening naming the relationship patterns you noticed that day without judgment, simply building awareness");
      practices.push("Emotion identification practice: use an emotion wheel or feelings chart daily to expand your ability to identify and name your emotional experiences accurately");
      practices.push("Boundary setting practice: identify and communicate one boundary each week to build skills in self-advocacy and clarity about your needs and limits");
    } else if (integration?.integrationLevel === 'developing') {
      practices.push("Real-time pattern interruption: practice catching unhealthy patterns as they occur and consciously choosing different responses in the moment");
      practices.push("Conscious communication: use intentional dialogue techniques during important conversations, including paraphrasing, validation, and empathy before responding");
      practices.push("Trigger management: develop a personalized toolkit for managing your emotional triggers that includes breath work, reframing, and conscious response strategies");
      practices.push("Values alignment check: regularly assess whether your relationship behaviors align with your stated values and make adjustments where you notice gaps");
    } else if (integration?.integrationLevel === 'integrated') {
      practices.push("Conflict alchemy: transform disagreements into opportunities for deeper understanding and growth by staying curious about what each conflict is trying to teach you");
      practices.push("Shadow work practice: explore and integrate the unconscious patterns that emerge in close relationships through journaling, therapy, or conscious dialogue with your partner");
      practices.push("Paradox holding: practice being both independent and interdependent, strong and vulnerable, giving and receiving simultaneously without needing to choose sides");
      practices.push("Energy management: develop sophisticated awareness of how your emotional energy affects your partner and learn to regulate it consciously for the health of the relationship");
    } else if (integration?.integrationLevel === 'mastery') {
      practices.push("Relationship mentoring: share your wisdom and support others in their conscious relationship journey through formal or informal teaching, modeling, and guidance");
      practices.push("Advanced modality exploration: study and practice tantric communication, nonviolent communication, Imago dialogue, or other sophisticated relationship frameworks");
      practices.push("Collective healing work: use your relationship consciousness to heal family lineage patterns and contribute to the evolution of how love is expressed in your community");
      practices.push("Innovation in love: experiment with new ways of loving and being in relationship that push the boundaries of conventional partnership toward greater authenticity and consciousness");
    }

    // Universal growth practices that support all levels
    practices.push("Professional support: engage with a relationship therapist, coach, or counselor who specializes in conscious relationship development to accelerate your growth");
    practices.push("Couples growth activities: regularly engage in shared practices that build connection and mutual understanding (couple's retreats, workshops, shared learning, adventure, service)");
    practices.push("Community connection: actively spend time with other individuals and couples who model healthy relationship dynamics and can support your continued evolution");
    practices.push("Reading and learning: continuously educate yourself about relationship psychology, attachment theory, communication skills, and conscious partnership through books, podcasts, and courses");
    practices.push("Body-based practices: engage in somatic work, dance, massage, or other embodied practices that help you connect with your partner through physical presence and non-verbal communication");
    practices.push("Spiritual connection: explore shared spiritual or meaning-making practices that connect you to something larger than yourselves and provide perspective on your relationship journey");

    return practices;
  };

  const shareProfile = () => {
    const text = `I just completed my Comprehensive Relationship Profile! My dominant pattern is ${profileData?.dominantPattern} with ${profileData?.integrationLevel} integration level.`;
    if (navigator.share) {
      navigator.share({
        title: 'My Relationship Profile',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  const retakeJourney = () => {
    // Clear relationship test results
    const allResults = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const filteredResults = allResults.filter((r: TestResult) => 
      !['shadow-test', 'toxicity-compass', 'relationship-patterns', 'integration-guide'].includes(r.testId)
    );
    localStorage.setItem('psychTestResults', JSON.stringify(filteredResults));
    
    // Clear progress
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.shadowTest = false;
    progress.toxicityCompass = false;
    progress.relationshipPatterns = false;
    progress.integrationGuide = false;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    setLocation("/journey");
  };

  if (!profileData) {
    return (
      <div className="min-h-screen bg-[hsl(var(--deep-black))] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[hsl(var(--silver-glow))] mx-auto mb-4"></div>
          <p className="text-[hsl(var(--metallic-silver))]">Generating your comprehensive relationship profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      {/* Header */}
      <motion.header 
        className="relative z-20 p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/journey")}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey
            </Button>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 mb-2">
                <Heart className="h-6 w-6 text-red-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Relationship Complete Profile
                </h1>
                <Heart className="h-6 w-6 text-red-400" />
              </div>
              <p className="text-sm text-[hsl(var(--metallic-silver))]">
                Your Comprehensive Relationship Consciousness Analysis
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={shareProfile}
                className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={retakeJourney}
                className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retake
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        {/* Wellness Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl font-serif text-[hsl(var(--silver-glow))]">
                <Shield className="h-6 w-6 text-emerald-400" />
                <span>Relationship Wellness Overview</span>
                <Shield className="h-6 w-6 text-emerald-400" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[hsl(var(--silver-glow))]">
                    {profileData.overallWellness}/100
                  </div>
                  <Progress value={profileData.overallWellness} className="h-2" />
                  <p className="text-sm text-[hsl(var(--metallic-silver))]">Overall Wellness</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="text-lg px-4 py-2 capitalize">
                    {profileData.dominantPattern}
                  </Badge>
                  <p className="text-sm text-[hsl(var(--metallic-silver))]">Attachment Pattern</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge 
                    variant={profileData.toxicityRisk === 'green' ? 'default' : profileData.toxicityRisk === 'yellow' ? 'secondary' : 'destructive'} 
                    className="text-lg px-4 py-2 capitalize"
                  >
                    {profileData.toxicityRisk} Zone
                  </Badge>
                  <p className="text-sm text-[hsl(var(--metallic-silver))]">Toxicity Risk</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Insights - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-xl text-[hsl(var(--silver-glow))]">
                <Compass className="h-6 w-6 text-blue-400" />
                <span>Core Insights</span>
                <Compass className="h-6 w-6 text-blue-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {(profileData.coreInsights || []).slice(0, 4).map((insight: string, index: number) => (
                  <div key={index} className="p-4 bg-[hsl(var(--deep-black))] rounded-lg border border-[hsl(var(--border))]">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AdSense - After Core Insights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <AdSense 
            adSlot="4567890123"
            className="max-w-4xl mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Strengths & Gifts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[hsl(var(--silver-glow))]">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Strengths & Gifts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {(profileData.strengthsAndGifts && profileData.strengthsAndGifts.length > 0 ? profileData.strengthsAndGifts : [
                  "Exceptional ability to create psychological safety in relationships",
                  "Natural capacity for emotional attunement and empathy",
                  "Strong communication and conflict resolution skills",
                  "Ability to maintain healthy boundaries while remaining open",
                  "Resilience and commitment to relationship growth"
                ]).slice(0, 8).map((strength: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{strength}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))] h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[hsl(var(--silver-glow))]">
                  <Users className="h-5 w-5 text-emerald-400" />
                  <span>Growth Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {(profileData.growthOpportunities || []).slice(0, 8).map((opportunity: string, index: number) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-500/20">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed text-sm">{opportunity}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Relationship Guidance - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <Card className="bg-[hsl(var(--dark-gray))] border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-xl text-[hsl(var(--silver-glow))]">
                <Heart className="h-6 w-6 text-red-400" />
                <span>Relationship Guidance</span>
                <Heart className="h-6 w-6 text-red-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                {(profileData.relationshipGuidance || []).slice(0, 6).map((guidance: string, index: number) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed text-sm">{guidance}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Integration Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl font-serif text-[hsl(var(--silver-glow))]">
                <Compass className="h-6 w-6 text-purple-400" />
                <span>Personalized Integration Practices</span>
                <Compass className="h-6 w-6 text-purple-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {profileData.integrationPractices.map((practice: string, index: number) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">{practice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12 space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={shareProfile}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share My Profile
            </Button>
            <Button
              onClick={retakeJourney}
              variant="outline"
              className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Retake Journey
            </Button>
            <Button
              onClick={() => setLocation("/journey")}
              variant="outline"
              className="border-[hsl(var(--border))] hover:bg-[hsl(var(--dark-gray))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey
            </Button>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-[hsl(var(--metallic-silver))] max-w-2xl mx-auto">
              Your relationship consciousness is a journey, not a destination. Use these insights as a compass 
              for continued growth and deeper connection.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-[hsl(var(--metallic-silver))]">
              <button onClick={() => setLocation("/privacy-policy")} className="hover:text-[hsl(var(--silver-glow))] transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => setLocation("/terms-of-use")} className="hover:text-[hsl(var(--silver-glow))] transition-colors">
                Terms of Use
              </button>
              <button onClick={() => setLocation("/cookie-policy")} className="hover:text-[hsl(var(--silver-glow))] transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}