import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share, RotateCcw, Brain, Target, Lightbulb, TrendingUp, BookOpen } from "lucide-react";
import { archetypes } from "@/data/archetypes";
import { shareResult } from "@/lib/test-logic";

export default function Results() {
  const [, setLocation] = useLocation();
  const [archetypeName, setArchetypeName] = useState<string>("Avenger");

  // Get archetype from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const archetype = urlParams.get('archetype');
    if (archetype && archetypes[archetype]) {
      setArchetypeName(archetype);
    }
  }, []);

  const archetype = archetypes[archetypeName];

  if (!archetype) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[hsl(var(--metallic-silver))] mb-4">No results found</p>
          <Button onClick={() => setLocation("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    shareResult(archetype.name);
  };

  const retakeTest = () => {
    setLocation("/test");
  };

  const getArchetypeDeepDescription = (archetypeName: string) => {
    const deepDescriptions = {
      "Avenger": "The Avenger archetype represents the warrior aspect of the psyche that seeks justice and fights against perceived wrongs. This shadow aspect often emerges when you feel powerless or victimized, manifesting as righteous anger and the drive to correct imbalances.",
      "Creator": "The Creator archetype embodies the divine spark of imagination and artistic expression. In shadow form, it can manifest as destructive creativity, perfectionism that prevents completion, or the urge to control and shape reality according to personal vision.",
      "Innocent": "The Innocent archetype represents purity, optimism, and the desire for paradise. Its shadow emerges as naive denial of reality, victim consciousness, or the projection of evil onto others while maintaining personal righteousness.",
      "Explorer": "The Explorer archetype drives the quest for freedom, adventure, and self-discovery. In shadow, it can manifest as restless escapism, inability to commit, or the compulsive need to reject anything that feels confining.",
      "Sage": "The Sage archetype seeks truth, wisdom, and understanding. Its shadow can emerge as intellectual arrogance, analysis paralysis, or the use of knowledge as a weapon to maintain superiority over others.",
      "Hero": "The Hero archetype represents courage, determination, and the drive to prove worth through achievement. In shadow, it manifests as ego inflation, the need to be needed, or destructive competition.",
      "Magician": "The Magician archetype embodies transformation, vision, and the ability to make dreams reality. Its shadow includes manipulation, the misuse of power, or becoming lost in illusion and fantasy.",
      "Everyman": "The Everyman archetype represents belonging, common sense, and down-to-earth values. In shadow, it can manifest as conformity pressure, fear of standing out, or resentment toward those who are different.",
      "Lover": "The Lover archetype embodies passion, intimacy, and the drive for connection. Its shadow includes obsession, codependency, jealousy, or the use of seduction to manipulate others.",
      "Jester": "The Jester archetype brings joy, humor, and the ability to see life's absurdities. In shadow, it can manifest as cruel mockery, inappropriate humor, or the inability to take anything seriously.",
      "Caregiver": "The Caregiver archetype represents compassion, generosity, and the drive to help others. Its shadow includes martyrdom, enabling behavior, or manipulation through guilt and emotional dependency.",
      "Ruler": "The Ruler archetype embodies leadership, responsibility, and the drive to create order. In shadow, it manifests as authoritarianism, control obsession, or the abuse of power for personal gain."
    };
    return deepDescriptions[archetypeName as keyof typeof deepDescriptions] || "This archetype represents a fundamental pattern in the human psyche that influences behavior, motivation, and life choices.";
  };

  const getArchetypeGuidance = (archetypeName: string) => {
    const guidanceMap = {
      "Avenger": [
        { title: "Channel Your Righteous Anger", content: "Use your sense of justice constructively by advocating for causes you believe in, rather than seeking personal revenge." },
        { title: "Practice Forgiveness", content: "Work on releasing resentment and anger that may be holding you back from personal growth and happiness." },
        { title: "Develop Healthy Boundaries", content: "Learn to protect yourself without becoming aggressive or defensive toward others." }
      ],
      "Creator": [
        { title: "Embrace Imperfection", content: "Allow yourself to create without demanding perfection, understanding that creation is a process of discovery." },
        { title: "Balance Vision with Reality", content: "Ground your creative visions in practical steps while maintaining your imaginative spark." },
        { title: "Share Your Gifts", content: "Don't hoard your creativity - share it with the world and inspire others through your unique perspective." }
      ],
      "Innocent": [
        { title: "Acknowledge Shadow Reality", content: "Develop the ability to see and accept life's difficulties without losing your essential optimism." },
        { title: "Take Responsibility", content: "Move beyond victim consciousness by recognizing your power to influence your circumstances." },
        { title: "Maintain Hope Wisely", content: "Keep your positive outlook while developing realistic expectations and practical wisdom." }
      ],
      "Explorer": [
        { title: "Find Freedom in Commitment", content: "Discover that true freedom can exist within chosen commitments and relationships." },
        { title: "Explore Inner Landscapes", content: "Turn your exploratory nature inward to discover the vast territories of your own psyche." },
        { title: "Create Stability", content: "Build a secure base from which you can safely venture into new experiences." }
      ],
      "Sage": [
        { title: "Wisdom in Service", content: "Use your knowledge to serve others rather than to establish superiority or control." },
        { title: "Embrace Not Knowing", content: "Cultivate humility by acknowledging the limits of your knowledge and remaining open to learning." },
        { title: "Bridge Theory and Practice", content: "Apply your wisdom in practical ways that benefit your daily life and relationships." }
      ],
      "Hero": [
        { title: "Define True Victory", content: "Understand that the greatest victories are often internal conquests over fear, ego, and limitation." },
        { title: "Serve Something Greater", content: "Channel your heroic energy toward causes that benefit others, not just personal achievement." },
        { title: "Accept Vulnerability", content: "Recognize that true strength includes the courage to be vulnerable and ask for help." }
      ]
    };
    
    const defaultGuidance = [
      { title: "Self-Awareness Practice", content: "Develop daily practices that increase your understanding of this archetype's influence in your life." },
      { title: "Integration Work", content: "Work on integrating both the light and shadow aspects of this archetype for greater wholeness." },
      { title: "Conscious Expression", content: "Find healthy ways to express this archetype's energy in your relationships and work." }
    ];
    
    return guidanceMap[archetypeName as keyof typeof guidanceMap] || defaultGuidance;
  };

  const continueJourney = () => {
    // Mark shadow test as completed and redirect to journey
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress.shadowTest = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Store result for comprehensive summary
    const results = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const existingIndex = results.findIndex((r: any) => r.testId === 'shadow-test');
    const newResult = {
      testId: 'shadow-test',
      result: { archetype: archetypeName },
      completedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      results[existingIndex] = newResult;
    } else {
      results.push(newResult);
    }
    localStorage.setItem('psychTestResults', JSON.stringify(results));
    
    setLocation("/journey?type=relationship");
  };

  const backToJourney = () => {
    setLocation("/journey?type=relationship");
  };

  // Format description into sections
  const formatDescription = (text: string) => {
    const sections = text.split('\n\n');
    return sections.map((section, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {section}
      </p>
    ));
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--dark-gray))] via-[hsl(var(--deep-black))] to-[hsl(var(--deep-black))]" />
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-3xl md:text-5xl font-bold text-[hsl(var(--silver-glow))] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your Shadow Archetype
            </motion.h1>
            
            <motion.div 
              className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--metallic-silver)/0.2)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Archetype Icon */}
              <motion.div 
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[hsl(var(--metallic-silver))] to-[hsl(var(--silver-glow))] rounded-full flex items-center justify-center animate-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              >
                <div className="text-4xl text-[hsl(var(--deep-black))]">🎭</div>
              </motion.div>
              
              <motion.h2 
                className="font-serif text-4xl md:text-5xl font-bold text-[hsl(var(--metallic-silver))] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {archetype.name}
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[hsl(var(--silver-glow))] mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {archetype.subtitle}
              </motion.p>
              
              <motion.div 
                className="text-left space-y-6 text-[hsl(var(--silver-glow))] leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {formatDescription(archetype.description)}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Button
                onClick={continueJourney}
                size="lg"
                className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                Continue Journey
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <Share className="mr-2 h-5 w-5" />
                Share Result
              </Button>
              
              <Button
                variant="outline"
                onClick={retakeTest}
                className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--metallic-silver))] text-[hsl(var(--metallic-silver))] font-semibold rounded-lg transition-all duration-300 hover:bg-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--deep-black))]"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Retake Test
              </Button>
            </motion.div>

            {/* Archetype Deep Dive */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-[hsl(var(--deep-black))] border-purple-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400">
                    <Brain className="mr-2 h-4 w-4" />
                    Understanding Your Shadow Archetype
                  </Badge>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/10 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-2">The {archetypeName} Archetype</h4>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        {getArchetypeDeepDescription(archetypeName)}
                      </p>
                    </div>
                    <div className="p-4 bg-purple-900/10 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-2">Shadow Integration Process</h4>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Your shadow represents the unconscious aspects of your personality that you may have rejected or suppressed. 
                        Understanding and integrating these aspects leads to greater wholeness and authentic self-expression.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shadow Work Practices */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-indigo-900/20 to-[hsl(var(--deep-black))] border-indigo-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-indigo-400 border-indigo-400">
                    <Target className="mr-2 h-4 w-4" />
                    Shadow Work Practices for {archetypeName}
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-900/10 rounded-lg">
                      <h4 className="font-semibold text-indigo-300 mb-3">Daily Reflection</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Notice emotional triggers and reactions</li>
                        <li>• Journal about rejected aspects of yourself</li>
                        <li>• Practice self-compassion with difficult emotions</li>
                        <li>• Observe projection in relationships</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-indigo-900/10 rounded-lg">
                      <h4 className="font-semibold text-indigo-300 mb-3">Active Integration</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Dialogue with your inner critic</li>
                        <li>• Express suppressed emotions safely</li>
                        <li>• Explore creative and artistic outlets</li>
                        <li>• Practice mindful self-observation</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-indigo-900/10 rounded-lg">
                      <h4 className="font-semibold text-indigo-300 mb-3">Dream Work</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Keep a dream journal</li>
                        <li>• Analyze recurring dream themes</li>
                        <li>• Practice active imagination</li>
                        <li>• Work with dream symbols and metaphors</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-indigo-900/10 rounded-lg">
                      <h4 className="font-semibold text-indigo-300 mb-3">Relationship Awareness</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Identify patterns in conflicts</li>
                        <li>• Notice what you judge in others</li>
                        <li>• Practice taking back projections</li>
                        <li>• Communicate authentically about feelings</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Archetype-Specific Guidance */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/20 to-[hsl(var(--deep-black))] border-emerald-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-emerald-400 border-emerald-400">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Personalized Guidance for {archetypeName}
                  </Badge>
                  <div className="space-y-4">
                    {getArchetypeGuidance(archetypeName).map((guidance, index) => (
                      <div key={index} className="p-4 bg-emerald-900/10 rounded-lg">
                        <h4 className="font-semibold text-emerald-300 mb-2">{guidance.title}</h4>
                        <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                          {guidance.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Integration Timeline */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-amber-900/20 to-[hsl(var(--deep-black))] border-amber-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-amber-400 border-amber-400">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    30-Day Shadow Integration Journey
                  </Badge>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-3">Week 1-2: Recognition</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Identify your shadow triggers</li>
                        <li>• Begin daily self-observation</li>
                        <li>• Start dream journaling</li>
                        <li>• Notice projection patterns</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-3">Week 3-4: Integration</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Practice dialoguing with shadow aspects</li>
                        <li>• Express suppressed emotions safely</li>
                        <li>• Work with creative expression</li>
                        <li>• Develop self-compassion practices</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-amber-900/10 rounded-lg">
                      <h4 className="font-semibold text-amber-300 mb-3">Ongoing: Mastery</h4>
                      <ul className="space-y-1 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Maintain conscious awareness</li>
                        <li>• Continue therapeutic work</li>
                        <li>• Share insights with trusted others</li>
                        <li>• Embrace wholeness and authenticity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resources & Further Reading */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/20 to-[hsl(var(--deep-black))] border-cyan-500/20">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Shadow Work Resources
                  </Badge>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-3">Essential Reading</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• "Meeting the Shadow" - Connie Zweig & Jeremiah Abrams</li>
                        <li>• "The Dark Side of the Light Chasers" - Debbie Ford</li>
                        <li>• "Owning Your Own Shadow" - Robert A. Johnson</li>
                        <li>• "The Archetypes and the Collective Unconscious" - Carl Jung</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-3">Professional Support</h4>
                      <ul className="space-y-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <li>• Jungian analysts and depth therapists</li>
                        <li>• Shadow work facilitators and groups</li>
                        <li>• Dream analysis specialists</li>
                        <li>• Art and expressive therapy practitioners</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-cyan-900/10 rounded-lg">
                    <p className="text-[hsl(var(--metallic-silver))] text-sm text-center">
                      <strong className="text-cyan-300">Remember:</strong> Shadow work is a lifelong journey of self-discovery. 
                      Be patient and compassionate with yourself as you explore the hidden aspects of your psyche.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}
