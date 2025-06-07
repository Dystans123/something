import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdSense } from "@/components/ui/adsense";
import { ArrowRight, Brain, Shield, Users, Lightbulb, Clock, CheckCircle, Target, Heart, Eye, Compass, Zap } from "lucide-react";

interface ToolCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  features: string[];
  buttonText: string;
  route: string;
  duration: string;
}

const tools: ToolCard[] = [
  {
    id: "shadow-test",
    title: "Shadow Archetype Test",
    subtitle: "Core Assessment",
    description: "Discover your dominant shadow archetype through 20 psychological projection questions. Uncover the hidden aspects of your personality that influence your decisions, relationships, and life patterns in ways you never realized.",
    icon: <Brain className="h-6 w-6" />,
    color: "text-purple-400",
    bgGradient: "from-purple-500/20 to-indigo-500/20",
    features: [
      "20 deep psychological questions",
      "8 Jungian shadow archetypes",
      "Personalized archetype analysis"
    ],
    buttonText: "Begin Shadow Test",
    route: "/test",
    duration: "10-15 minutes"
  },
  {
    id: "toxicity-compass",
    title: "Toxicity Compass",
    subtitle: "Relationship Health",
    description: "Assess the psychological impact of toxic relationships on your identity and well-being. Understand how harmful patterns have shaped your emotional landscape and receive personalized insights for healing and recovery.",
    icon: <Shield className="h-6 w-6" />,
    color: "text-red-400",
    bgGradient: "from-red-500/20 to-orange-500/20",
    features: [
      "Comprehensive toxicity assessment",
      "Three-zone impact analysis",
      "Recovery guidance and resources"
    ],
    buttonText: "Take Toxicity Compass",
    route: "/toxicity-compass",
    duration: "5-8 minutes"
  },
  {
    id: "relationship-patterns",
    title: "Relationship Patterns",
    subtitle: "Behavioral Analysis",
    description: "Identify your dominant relationship patterns and understand how they influence your connections with others. Discover recurring themes in your relationships and learn strategies for building healthier bonds.",
    icon: <Users className="h-6 w-6" />,
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    features: [
      "Pattern identification system",
      "Relationship behavior analysis",
      "Connection improvement strategies"
    ],
    buttonText: "Explore Patterns",
    route: "/relationship-patterns",
    duration: "7-10 minutes"
  },
  {
    id: "integration-guide",
    title: "Integration Guide",
    subtitle: "Personal Growth",
    description: "Receive personalized guidance for integrating your shadow aspects into conscious awareness. Learn practical strategies for emotional healing, authentic self-expression, and psychological wholeness.",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "text-amber-400",
    bgGradient: "from-amber-500/20 to-yellow-500/20",
    features: [
      "Personal integration assessment",
      "Customized growth strategies",
      "Practical healing techniques"
    ],
    buttonText: "Start Integration",
    route: "/integration-guide",
    duration: "8-12 minutes"
  },
  {
    id: "intelligence-map",
    title: "Intelligence Map",
    subtitle: "Mind Analysis",
    description: "Discover your dominant intelligence type and how you naturally process the world around you. Understand your cognitive strengths and optimize your learning and problem-solving approaches.",
    icon: <Brain className="h-6 w-6" />,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    features: [
      "Multiple intelligence assessment",
      "Cognitive strength analysis",
      "Personalized learning strategies"
    ],
    buttonText: "Map Your Intelligence",
    route: "/intelligence-map",
    duration: "8-12 minutes"
  },
  {
    id: "attachment-style",
    title: "Attachment Style Audit",
    subtitle: "Connection Patterns",
    description: "Explore your attachment style and how you build relationships, even when single. Understand your emotional patterns in connections and develop healthier relationship dynamics.",
    icon: <Heart className="h-6 w-6" />,
    color: "text-pink-400",
    bgGradient: "from-pink-500/20 to-rose-500/20",
    features: [
      "Attachment style identification",
      "Emotional pattern analysis",
      "Relationship guidance"
    ],
    buttonText: "Audit Your Style",
    route: "/attachment-style",
    duration: "6-10 minutes"
  },
  {
    id: "identity-compass",
    title: "Identity Compass",
    subtitle: "Core Identity",
    description: "Reveal the dominant forces that shape your decisions, values, and life direction. Discover your authentic self and align your choices with your true identity.",
    icon: <Compass className="h-6 w-6" />,
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    features: [
      "Core identity exploration",
      "Value system analysis",
      "Authentic self-discovery"
    ],
    buttonText: "Find Your Identity",
    route: "/identity-compass",
    duration: "7-11 minutes"
  },
  {
    id: "inner-driver",
    title: "Inner Driver Matrix",
    subtitle: "Motivation Engine",
    description: "Uncover what truly drives and motivates you to take action in your life. Understand your psychological motivators and harness them for personal success and fulfillment.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-400",
    bgGradient: "from-yellow-500/20 to-amber-500/20",
    features: [
      "Motivation pattern analysis",
      "Drive identification system",
      "Performance optimization"
    ],
    buttonText: "Discover Your Drivers",
    route: "/inner-driver",
    duration: "8-12 minutes"
  }
];

export default function Landing() {
  const [, setLocation] = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      {/* Navigation */}
      <motion.nav 
        className="relative z-20 flex justify-between items-center p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          
        </div>
        <h1 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))]">
          Eight Paths to Self-Discovery
        </h1>
        <div className="w-50"></div> {/* Spacer for centering */}
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Transform Your Life
            </span>
            <br />
            <span className="text-[hsl(var(--silver-glow))]">
              Through Self-Discovery
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[hsl(var(--metallic-silver))] max-w-5xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unlock the hidden patterns that shape your relationships, decisions, and life trajectory. 
            Our comprehensive psychological assessment suite reveals the unconscious forces that influence 
            your behavior and provides actionable insights for profound personal transformation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={() => setLocation("/journey")}
              size="lg"
              className="px-10 py-6 text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 transition-all duration-300 hover:scale-105 shadow-glow"
            >
              Begin Your Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-[hsl(var(--metallic-silver))] mb-1">Join 50,000+ people who discovered their authentic self</p>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                ))}
                <span className="ml-2 text-sm text-[hsl(var(--metallic-silver))]">4.9/5 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Psychology Quote */}
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-2xl p-8 border border-[hsl(var(--border))]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <blockquote className="text-lg md:text-xl italic text-[hsl(var(--metallic-silver))] mb-4 leading-relaxed">
              "Everything that irritates us about others can lead us to an understanding of ourselves. 
              The most terrifying thing is to accept oneself completely."
            </blockquote>
            <cite className="text-[hsl(var(--silver-glow))] font-semibold">— Carl Jung, Founder of Analytical Psychology</cite>
          </motion.div>
        </motion.div>

        {/* Two Paths Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-6">
              Choose Your Path to Self-Discovery
            </h2>
            <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed mb-8">
              You have two ways to explore your psychological landscape. Choose the path that best fits your needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Individual Tests Path */}
            <motion.div 
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-[hsl(var(--border))] hover:border-blue-400/50 transition-all duration-300 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-3">
                  Individual Tests
                </h3>
                <p className="text-[hsl(var(--metallic-silver))] mb-6">
                  Take any single test to gain specific insights into one aspect of your personality. 
                  Perfect for targeted self-discovery and immediate actionable results.
                </p>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Choose any of the eight tests
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Get immediate personalized results
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Focus on specific areas of growth
                  </span>
                </div>
                {/* Spacer to match the height of the other card */}
                <div className="flex items-center space-x-3 opacity-0">
                  <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Hidden spacer item
                  </span>
                </div>
              </div>
              
              <div className="text-center mt-auto">
                <p className="text-sm text-blue-400 font-semibold mb-3">Best for: Quick insights & targeted discovery</p>
                <Button
                  onClick={() => {
                    const toolsSection = document.querySelector('[data-section="tools"]');
                    if (toolsSection) {
                      toolsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                >
                  Start Individual Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Complete Journey Path */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-2xl p-8 border border-[hsl(var(--border))] hover:border-emerald-400/50 transition-all duration-300 relative flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white border-0 px-4 py-1">
                  RECOMMENDED
                </Badge>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-3">
                  Complete Journey
                </h3>
                <p className="text-[hsl(var(--metallic-silver))] mb-6">
                  Take two assessments in a guided sequence to unlock a comprehensive psychological profile 
                  with deep insights and personalized integration strategies.
                </p>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Complete assessments
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Unlock comprehensive summary report
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Get personalized action plan
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[hsl(var(--metallic-silver))] text-sm">
                    Access detailed growth roadmap
                  </span>
                </div>
              </div>
              
              <div className="text-center mt-auto">
                <p className="text-sm text-emerald-400 font-semibold mb-3">Best for: Deep transformation & holistic growth</p>
                <Button
                  onClick={() => setLocation("/journey")}
                  className="w-full bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white border-0"
                >
                  Begin Complete Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* AdSense - After Hero Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AdSense 
            adSlot="1234567890"
            className="max-w-4xl mx-auto"
          />
        </motion.section>

        {/* Why Self-Discovery Matters Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-6">
              Why Understanding Yourself Changes Everything
            </h2>
            <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
              Research shows that self-awareness is the foundation of emotional intelligence, healthier relationships, 
              and professional success. Our assessments reveal the hidden patterns that shape your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Better Decision Making</h3>
              <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                Understanding your unconscious patterns helps you make choices aligned with your authentic self
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Healthier Relationships</h3>
              <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                Recognize toxic patterns and develop deeper, more meaningful connections with others
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Personal Growth</h3>
              <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                Transform limiting beliefs and unlock your full potential for success and fulfillment
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tools Grid */}
        <motion.section 
          className="mb-20"
          data-section="tools"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-6">
              Eight Scientifically-Backed Assessment Tools
            </h2>
            <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
              Each tool reveals different aspects of your psychological landscape, providing a comprehensive 
              understanding of your inner world and practical strategies for transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br ${tool.bgGradient} border-[hsl(var(--border))] hover:border-[hsl(var(--metallic-silver)/0.5)] transition-all duration-300 hover:shadow-glow`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tool.bgGradient} flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                        {tool.icon}
                      </div>
                      <Badge variant="outline" className={`${tool.color} border-current`}>
                        {tool.subtitle}
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-2">
                      {tool.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-[hsl(var(--metallic-silver))] leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <div className="space-y-3">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`h-4 w-4 ${tool.color} flex-shrink-0`} />
                          <span className="text-[hsl(var(--metallic-silver))] text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--border))]">
                      <div className="flex items-center space-x-2 text-[hsl(var(--metallic-silver))] text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{tool.duration}</span>
                      </div>
                      
                      <Button
                        onClick={() => setLocation(tool.route)}
                        className={`bg-gradient-to-r ${tool.bgGradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-300`}
                      >
                        {tool.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-6">
              Transform Your Life Like They Did
            </h2>
            <p className="text-lg text-[hsl(var(--metallic-silver))] max-w-4xl mx-auto leading-relaxed">
              Discover how thousands of people have used our assessments to break free from destructive patterns 
              and create more authentic, fulfilling lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <blockquote className="text-[hsl(var(--metallic-silver))] mb-4 leading-relaxed">
                  "The Shadow Test revealed patterns I never recognized. Understanding my 'Controller' archetype 
                  helped me transform my relationships and approach to leadership."
                </blockquote>
                <div>
                  <cite className="text-[hsl(var(--silver-glow))] font-semibold">Sarah M.</cite>
                  <p className="text-[hsl(var(--metallic-silver))] text-sm">Executive Coach</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <blockquote className="text-[hsl(var(--metallic-silver))] mb-4 leading-relaxed">
                  "The Toxicity Compass helped me recognize the damage from past relationships. The recovery 
                  guidance literally saved my emotional well-being."
                </blockquote>
                <div>
                  <cite className="text-[hsl(var(--silver-glow))] font-semibold">Michael R.</cite>
                  <p className="text-[hsl(var(--metallic-silver))] text-sm">Therapist</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] border-[hsl(var(--border))]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <blockquote className="text-[hsl(var(--metallic-silver))] mb-4 leading-relaxed">
                  "Taking all four assessments gave me a complete picture of my psychology. The insights 
                  transformed my career and personal relationships."
                </blockquote>
                <div>
                  <cite className="text-[hsl(var(--silver-glow))] font-semibold">Emma K.</cite>
                  <p className="text-[hsl(var(--metallic-silver))] text-sm">Marketing Director</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Psychology Insights Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--border))]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-6">
                  The Science Behind Self-Discovery
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Eye className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Unconscious Mind Research</h3>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Studies show that 95% of our decisions are made unconsciously. Understanding these patterns 
                        is crucial for personal transformation and authentic living.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Neuroplasticity & Change</h3>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Your brain can form new neural pathways throughout life. Self-awareness is the first step 
                        in rewiring destructive patterns and creating positive change.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Emotional Intelligence Impact</h3>
                      <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed">
                        Research indicates that emotional intelligence accounts for 58% of job performance across all fields. 
                        Self-awareness is its foundation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <blockquote className="text-xl italic text-[hsl(var(--metallic-silver))] leading-relaxed border-l-4 border-purple-400 pl-6">
                  "The privilege of a lifetime is to become who you truly are."
                </blockquote>
                <cite className="text-[hsl(var(--silver-glow))] font-semibold">— Carl Jung</cite>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">50,000+</div>
                    <p className="text-[hsl(var(--metallic-silver))] text-sm">Lives Transformed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">4.9/5</div>
                    <p className="text-[hsl(var(--metallic-silver))] text-sm">Average Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">94%</div>
                    <p className="text-[hsl(var(--metallic-silver))] text-sm">Report Positive Change</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2">15 min</div>
                    <p className="text-[hsl(var(--metallic-silver))] text-sm">Average Completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--border))] max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(var(--silver-glow))] mb-6">
              Your Journey to Authentic Self Begins Today
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--metallic-silver))] mb-8 leading-relaxed max-w-3xl mx-auto">
              Don't let another day pass living unconsciously. Take the first step toward understanding your 
              true self and unlocking your full potential for meaningful relationships and personal fulfillment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                onClick={() => setLocation("/journey")}
                size="lg"
                className="px-10 py-6 text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 transition-all duration-300 hover:scale-105 shadow-glow"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-[hsl(var(--metallic-silver))] mb-1">Free • No signup required • Instant results</p>
                <p className="text-xs text-[hsl(var(--metallic-silver))]/70"></p>
              </div>
            </div>

            <div className="text-center text-sm text-[hsl(var(--metallic-silver))]/70">
              All assessments are based on established psychological research and clinical practice
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="relative z-20 border-t border-[hsl(var(--border))] mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-serif text-lg font-bold text-[hsl(var(--silver-glow))] mb-3">
                Four Paths to Self-Discovery
              </h3>
              <p className="text-[hsl(var(--metallic-silver))] text-sm leading-relaxed mb-4">
                Comprehensive psychological assessments designed to reveal your unconscious patterns, 
                relationship dynamics, and authentic self through evidence-based methodologies.
              </p>
              <div className="flex items-center space-x-1">
                <div className="text-sm text-[hsl(var(--metallic-silver))]">Trusted by</div>
                <div className="font-semibold text-[hsl(var(--silver-glow))]">50,000+</div>
                <div className="text-sm text-[hsl(var(--metallic-silver))]">individuals</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">Kontakt</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:districteleven.pl@gmail.com"
                  className="block text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))] text-sm transition-colors"
                >
                  districteleven.pl@gmail.com
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">Legal & Privacy</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setLocation("/privacy-policy")}
                  className="block text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))] text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setLocation("/terms-of-use")}
                  className="block text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))] text-sm transition-colors"
                >
                  Terms of Use
                </button>
                <button 
                  onClick={() => setLocation("/cookie-policy")}
                  className="block text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))] text-sm transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>

            {/* Contact & Info */}
            <div>
              <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-3">About Our Assessments</h4>
              <div className="space-y-2 text-sm text-[hsl(var(--metallic-silver))]">
                <p>• Based on Jungian psychology principles</p>
                <p>• Validated through clinical research</p>
                <p>• Anonymous and confidential</p>
                <p>• Results stored locally on your device</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[hsl(var(--border))] mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-[hsl(var(--metallic-silver))] mb-4 md:mb-0">
                © 2024 Four Paths Psychology. All rights reserved. | Data processed securely and never shared.
              </div>
              <div className="text-xs text-[hsl(var(--metallic-silver))]/70">
                For educational and self-discovery purposes. Not a substitute for professional therapy.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}