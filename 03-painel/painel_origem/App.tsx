import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Resultado from "./pages/Resultado";
import Proposta from "./pages/Proposta";
import Seguro from "./pages/Seguro";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Transparencia from "./pages/Transparencia";
import Admin from "./pages/Admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resultado" component={Resultado} />
      <Route path="/proposta" component={Proposta} />
      <Route path="/seguro" component={Seguro} />
      <Route path="/privacidade" component={Privacidade} />
      <Route path="/termos" component={Termos} />
      <Route path="/transparencia" component={Transparencia} />
      <Route path="/admin" component={Admin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
