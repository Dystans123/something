import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertTriangle, Users, Scale } from "lucide-react";

export default function TermsOfUse() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--deep-black))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))]" />
      
      <motion.header 
        className="relative z-20 p-6 border-b border-[hsl(var(--border))]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/")}
              className="text-[hsl(var(--metallic-silver))] hover:text-[hsl(var(--silver-glow))]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 mb-2">
                <FileText className="h-6 w-6 text-emerald-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Terms of Use
                </h1>
              </div>
              <p className="text-sm text-[hsl(var(--metallic-silver))]">
                Effective Date: December 2024
              </p>
            </div>
            
            <div className="w-24"></div>
          </div>
        </div>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--border))] mb-8">
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-emerald-400" />
              Agreement to Terms
            </h2>
            <p className="text-[hsl(var(--metallic-silver))] leading-relaxed mb-6">
              By accessing and using Four Paths Psychology's psychological assessment platform, you agree to be bound by these Terms of Use. 
              Please read these terms carefully before using our services. If you do not agree to these terms, please do not use our platform.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-400" />
                Service Description
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>
                  Four Paths Psychology provides online psychological assessments designed for self-discovery and personal growth. 
                  Our platform offers eight comprehensive assessment tools based on established psychological research and Jungian psychology principles.
                </p>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Our Assessments Include:</h4>
                  <ul className="space-y-1 list-disc list-inside ml-4">
                    <li>Shadow Archetype Test</li>
                    <li>Toxicity Compass</li>
                    <li>Relationship Patterns Analysis</li>
                    <li>Integration Guide</li>
                    <li>Intelligence Map</li>
                    <li>Attachment Style Audit</li>
                    <li>Identity Compass</li>
                    <li>Inner Driver Matrix</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                Important Disclaimers
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="font-semibold text-yellow-400 mb-2">Educational Purpose Only</p>
                  <p>
                    Our assessments are designed for educational and self-discovery purposes only. They are not intended to diagnose, 
                    treat, cure, or prevent any psychological condition or mental health disorder.
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="font-semibold text-red-400 mb-2">Not a Substitute for Professional Care</p>
                  <p>
                    Our services do not replace professional psychological therapy, counseling, or medical advice. 
                    If you are experiencing mental health concerns, please consult with a qualified mental health professional.
                  </p>
                </div>
                <p>
                  The results provided by our assessments are based on your self-reported responses and should be considered 
                  as one perspective among many in understanding yourself.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                User Responsibilities
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>By using our platform, you agree to:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Provide honest and accurate responses to assessment questions</li>
                  <li>Use the service for personal, non-commercial purposes only</li>
                  <li>Not attempt to reverse-engineer or copy our assessment algorithms</li>
                  <li>Not use our platform in any way that could harm or interfere with our services</li>
                  <li>Respect the intellectual property rights of our content and assessments</li>
                  <li>Take responsibility for your own mental health and seek professional help when needed</li>
                </ul>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Age Restrictions</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  Our services are intended for individuals aged 18 and older. If you are under 18, you may only use our platform 
                  with the consent and supervision of a parent or guardian.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Intellectual Property</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>
                  All content on our platform, including assessment questions, algorithms, results interpretations, and design elements, 
                  are protected by copyright and other intellectual property laws.
                </p>
                <p>
                  You may use our services for personal purposes and may share your individual results, but you may not reproduce, 
                  distribute, or create derivative works from our assessment content without written permission.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Limitation of Liability</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>
                  Four Paths Psychology provides our services "as is" without warranties of any kind. We do not guarantee the 
                  accuracy, completeness, or usefulness of any assessment results.
                </p>
                <p>
                  To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services.
                </p>
                <p>
                  You acknowledge that psychological self-assessment involves inherent uncertainties and that results may vary 
                  based on numerous factors including your current state of mind, life circumstances, and personal growth over time.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Service Availability</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  We strive to maintain continuous service availability but cannot guarantee uninterrupted access. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Governing Law</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  These terms shall be governed by and construed in accordance with applicable laws. 
                  Any disputes arising from these terms or your use of our services will be resolved through appropriate legal channels.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Changes to Terms</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  We may update these Terms of Use from time to time. Continued use of our services after any such changes 
                  constitutes your acceptance of the new terms. We encourage you to review these terms periodically.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Contact Information</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  If you have questions about these Terms of Use, please contact us through our website. 
                  We are committed to addressing your concerns and providing clarity about our terms and services.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}