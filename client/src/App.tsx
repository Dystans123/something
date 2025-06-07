import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieBanner } from "@/components/cookie-banner";
import Landing from "@/pages/landing";
import Journey from "@/pages/journey";
import ComprehensiveSummary from "@/pages/comprehensive-summary";
import RelationshipComprehensiveSummary from "@/pages/relationship-comprehensive-summary";
import Test from "@/pages/test";
import Results from "@/pages/results";
import Archetypes from "@/pages/archetypes";
import ToxicityCompass from "@/pages/toxicity-compass";
import ToxicityResults from "@/pages/toxicity-results";
import RelationshipPatterns from "@/pages/relationship-patterns";
import RelationshipPatternResults from "@/pages/relationship-pattern-results";
import IntegrationGuide from "@/pages/integration-guide";
import IntegrationGuideResults from "@/pages/integration-guide-results";
import IntelligenceMap from "@/pages/intelligence-map";
import IntelligenceMapResults from "@/pages/intelligence-map-results";
import AttachmentStyle from "@/pages/attachment-style";
import AttachmentStyleResults from "@/pages/attachment-style-results";
import IdentityCompass from "@/pages/identity-compass";
import IdentityCompassResults from "@/pages/identity-compass-results";
import InnerDriver from "@/pages/inner-driver";
import InnerDriverResults from "@/pages/inner-driver-results";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfUse from "@/pages/terms-of-use";
import CookiePolicy from "@/pages/cookie-policy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/journey" component={Journey} />
      <Route path="/comprehensive-summary" component={ComprehensiveSummary} />
      <Route path="/relationship-comprehensive-summary" component={RelationshipComprehensiveSummary} />
      <Route path="/test" component={Test} />
      <Route path="/results" component={Results} />
      <Route path="/archetypes" component={Archetypes} />
      <Route path="/toxicity-compass" component={ToxicityCompass} />
      <Route path="/toxicity-results" component={ToxicityResults} />
      <Route path="/relationship-patterns" component={RelationshipPatterns} />
      <Route path="/relationship-pattern-results" component={RelationshipPatternResults} />
      <Route path="/integration-guide" component={IntegrationGuide} />
      <Route path="/integration-guide-results" component={IntegrationGuideResults} />
      <Route path="/intelligence-map" component={IntelligenceMap} />
      <Route path="/intelligence-map-results" component={IntelligenceMapResults} />
      <Route path="/attachment-style" component={AttachmentStyle} />
      <Route path="/attachment-style-results" component={AttachmentStyleResults} />
      <Route path="/identity-compass" component={IdentityCompass} />
      <Route path="/identity-compass-results" component={IdentityCompassResults} />
      <Route path="/inner-driver" component={InnerDriver} />
      <Route path="/inner-driver-results" component={InnerDriverResults} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      <Route path="/cookie-policy" component={CookiePolicy} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--dark-gray))] to-[hsl(var(--deep-black))] text-[hsl(var(--foreground))] overflow-x-hidden">
          <Toaster />
          <Router />
          <CookieBanner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
