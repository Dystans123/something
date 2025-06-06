import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie, Settings, Database, Eye } from "lucide-react";

export default function CookiePolicy() {
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
                <Cookie className="h-6 w-6 text-amber-400" />
                <h1 className="font-serif text-xl md:text-2xl font-bold text-[hsl(var(--silver-glow))]">
                  Cookie Policy
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
              <Cookie className="h-6 w-6 mr-3 text-amber-400" />
              About Cookies and Local Storage
            </h2>
            <p className="text-[hsl(var(--metallic-silver))] leading-relaxed mb-6">
              This Cookie Policy explains how Four Paths Psychology uses cookies, local storage, and similar technologies 
              to enhance your experience on our psychological assessment platform. We are committed to transparency about 
              how we use these technologies to provide and improve our services.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-blue-400" />
                What Are Cookies and Local Storage?
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Cookies</h4>
                  <p>
                    Cookies are small text files stored on your device by your web browser when you visit our website. 
                    They help us remember your preferences and provide a better user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Local Storage</h4>
                  <p>
                    Local storage is a web browser feature that allows websites to store data locally on your device. 
                    We primarily use local storage to save your assessment results and progress directly on your device.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Session Storage</h4>
                  <p>
                    Session storage temporarily stores information during your browsing session and is automatically 
                    cleared when you close your browser tab.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-emerald-400" />
                How We Use These Technologies
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Essential Functionality</h4>
                  <ul className="space-y-1 list-disc list-inside ml-4">
                    <li>Store your assessment progress and results locally on your device</li>
                    <li>Remember your journey type preference (Single or Relationship)</li>
                    <li>Maintain your session while navigating between assessment pages</li>
                    <li>Preserve your test answers during the assessment process</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Performance and Analytics</h4>
                  <ul className="space-y-1 list-disc list-inside ml-4">
                    <li>Monitor website performance and loading times</li>
                    <li>Understand how users interact with our assessments</li>
                    <li>Identify and fix technical issues</li>
                    <li>Improve the overall user experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Security</h4>
                  <ul className="space-y-1 list-disc list-inside ml-4">
                    <li>Protect against malicious activities</li>
                    <li>Ensure secure data transmission</li>
                    <li>Maintain the integrity of our assessment platform</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Types of Data Stored</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400 mb-2">Local Storage (Your Device)</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Assessment results and psychological profiles</li>
                    <li>Test completion progress</li>
                    <li>Journey type preferences</li>
                    <li>Personalized insights and recommendations</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="font-semibold text-blue-400 mb-2">Session Data (Temporary)</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Current assessment progress</li>
                    <li>Navigation state within tests</li>
                    <li>Temporary preference settings</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="font-semibold text-yellow-400 mb-2">Technical Cookies (Minimal)</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Basic functionality preferences</li>
                    <li>Security tokens for data protection</li>
                    <li>Performance monitoring data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-purple-400" />
                Third-Party Services
              </h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <p>
                  We may use third-party services to help us provide and improve our platform. These services may use their own cookies:
                </p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li><strong className="text-[hsl(var(--silver-glow))]">Analytics Services:</strong> To understand how our platform is used and identify areas for improvement</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Security Services:</strong> To protect against threats and ensure platform security</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Performance Monitoring:</strong> To ensure optimal loading times and functionality</li>
                </ul>
                <p>
                  These third-party services operate under their own privacy policies and cookie policies. We encourage you to review their policies as well.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Your Control and Choices</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Browser Settings</h4>
                  <p>
                    You can control cookies through your web browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-1 list-disc list-inside ml-4 mt-2">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies (may affect website functionality)</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--silver-glow))] mb-2">Local Storage Management</h4>
                  <p>
                    You can clear local storage data through your browser's developer tools or by clearing your browsing data. 
                    Note that clearing local storage will delete your saved assessment results.
                  </p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="font-semibold text-yellow-400 mb-2">Important Note</p>
                  <p>
                    Disabling cookies or clearing local storage may affect your ability to use our platform effectively. 
                    Your assessment results are stored locally, so clearing this data will remove your saved progress and results.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Data Retention</h3>
              <div className="space-y-4 text-[hsl(var(--metallic-silver))]">
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong className="text-[hsl(var(--silver-glow))]">Local Storage:</strong> Data persists until you clear it manually or clear your browser data</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Session Storage:</strong> Automatically cleared when you close your browser tab</li>
                  <li><strong className="text-[hsl(var(--silver-glow))]">Cookies:</strong> May have various expiration dates, typically ranging from session-only to several months</li>
                </ul>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Updates to This Policy</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  We may update this Cookie Policy to reflect changes in our practices or for legal reasons. 
                  We will notify users of significant changes by updating the effective date at the top of this policy.
                </p>
              </div>
            </section>

            <section className="bg-[hsl(var(--dark-gray))] rounded-2xl p-6 border border-[hsl(var(--border))]">
              <h3 className="font-serif text-xl font-bold text-[hsl(var(--silver-glow))] mb-4">Contact Us</h3>
              <div className="text-[hsl(var(--metallic-silver))]">
                <p>
                  If you have questions about our use of cookies or this Cookie Policy, please contact us through our website. 
                  We are committed to helping you understand how we use these technologies to provide our services.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}