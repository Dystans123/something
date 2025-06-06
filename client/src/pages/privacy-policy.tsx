import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPolicy() {
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
                <Shield className="h-6 w-6 text-blue-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Privacy Policy
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
          className="prose prose-invert max-w-none"
        >
          <div className="bg-gradient-to-br from-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] rounded-3xl p-8 md:p-12 border border-[hsl(var(--border))] mb-8">
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--silver-glow))] mb-6 flex items-center">
              <Eye className="h-6 w-6 mr-3 text-blue-400" />
              Our Privacy Commitment
            </h2>
            <p className="text-[hsl(var(--metallic-silver))] leading-relaxed mb-6">
              At Four Paths Psychology, we are deeply committed to protecting your privacy and ensuring the confidentiality 
              of your psychological assessment data. This privacy policy explains how we collect, use, and safeguard your 
              personal information when you use our psychological assessment platform.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-emerald-400" />
                Information We Collect
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Assessment Data</h4>
                  <p>We collect your responses to psychological assessments, including your answers to questions about personality traits, relationship patterns, attachment styles, and cognitive preferences.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Technical Information</h4>
                  <p>We may collect device information, browser type, IP address, and usage patterns to improve our service and ensure security.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Optional Information</h4>
                  <p>Any additional information you choose to provide when sharing results or contacting us for support.</p>
                </div>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-yellow-400" />
                How We Use Your Information
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <ul className="space-y-2 list-disc list-inside">
                  <li>To provide personalized psychological assessments and generate your results</li>
                  <li>To improve our assessment algorithms and add new features</li>
                  <li>To ensure the security and proper functioning of our platform</li>
                  <li>To provide customer support when requested</li>
                  <li>To conduct research on psychological patterns (in anonymized, aggregated form only)</li>
                </ul>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Data Storage and Security</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>
                  <strong className="text-[hsl(var(--silver-glow))]">Local Storage:</strong> Your assessment results are primarily stored locally on your device using browser storage technologies. This means your data remains under your control.
                </p>
                <p>
                  <strong className="text-[hsl(var(--silver-glow))]">Encryption:</strong> All data transmission is encrypted using industry-standard SSL/TLS protocols.
                </p>
                <p>
                  <strong className="text-[hsl(var(--silver-glow))]">No Account Required:</strong> We do not require you to create an account, reducing the personal information we collect.
                </p>
                <p>
                  <strong className="text-[hsl(var(--silver-glow))]">Data Minimization:</strong> We only collect information necessary to provide our psychological assessment services.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Information Sharing</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>
                  <strong className="text-[hsl(var(--silver-glow))]">We do not sell your personal information.</strong> Your psychological assessment data is private and confidential.
                </p>
                <p>We may share anonymized, aggregated data for research purposes to advance the field of psychology, but this data cannot be traced back to you individually.</p>
                <p>We may disclose information only when required by law or to protect the safety of our users or others.</p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Your Rights</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong className="text-[hsl(var(--silver-glow))]">Access:</strong> You can access your data at any time through your browser's local storage</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Deletion:</strong> You can delete your data by clearing your browser's local storage</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Portability:</strong> You can export your results and data at any time</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Control:</strong> You maintain full control over your assessment data</li>
                </ul>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Contact Information</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>If you have questions about this privacy policy or our privacy practices, please contact us through our website.</p>
                <p className="mt-4">
                  <strong className="text-[hsl(var(--silver-glow))]">Note:</strong> This service is for educational and self-discovery purposes only and is not a substitute for professional psychological therapy or medical advice.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Updates to This Policy</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>We may update this privacy policy from time to time. We will notify users of significant changes by updating the effective date at the top of this policy.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}