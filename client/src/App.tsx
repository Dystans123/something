import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import Test from "@/pages/test";
import Results from "@/pages/results";
import Archetypes from "@/pages/archetypes";
import ToxicityCompass from "@/pages/toxicity-compass";
import ToxicityResults from "@/pages/toxicity-results";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/test" component={Test} />
      <Route path="/results" component={Results} />
      <Route path="/archetypes" component={Archetypes} />
      <Route path="/toxicity-compass" component={ToxicityCompass} />
      <Route path="/toxicity-results" component={ToxicityResults} />
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
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
