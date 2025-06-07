import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie, Shield, BarChart3 } from 'lucide-react';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      // User previously accepted all cookies, update gtag
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });
      }
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    
    // Enable Google Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
    
    // Disable Google Analytics if user only accepts essential cookies
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    
    // Disable all tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Cookie className="h-4 w-4 text-amber-600" />
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                We use cookies
              </h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>

          {!showDetails ? (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                We use cookies to improve your experience and analyze website traffic. 
                By clicking "Accept All", you consent to cookies and data processing.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptAll} className="bg-blue-600 hover:bg-blue-700">
                  Accept All
                </Button>
                <Button 
                  variant="outline" 
                  onClick={acceptEssential}
                  className="border-gray-300 dark:border-gray-600"
                >
                  Essential Only
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowDetails(true)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Customize
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                      Essential Cookies & Data Processing
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Required for basic website functionality, security, and user preferences. 
                      We process minimal data necessary for website operation. These cannot be disabled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                      Analytics Cookies & Personal Data Processing
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We collect and process personal data (IP address, device info, usage patterns) 
                      via Google Analytics to understand website performance. Data is anonymized where possible 
                      and processed lawfully under GDPR Article 6(1)(a) based on your consent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                <strong>Your Rights:</strong> You have the right to access, rectify, erase, restrict processing, 
                data portability, and object to processing of your personal data. You can withdraw consent at any time. 
                For more information about how we process your data and your rights under GDPR, please see our{' '}
                <a href="/privacy-policy" className="underline hover:text-gray-700 dark:hover:text-gray-300">
                  Privacy Policy
                </a>
                . You can change your preferences at any time.
              </div>

              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptAll} className="bg-blue-600 hover:bg-blue-700">
                  Accept All
                </Button>
                <Button 
                  variant="outline" 
                  onClick={acceptEssential}
                  className="border-gray-300 dark:border-gray-600"
                >
                  Essential Only
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={rejectAll}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  Reject All
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowDetails(false)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}