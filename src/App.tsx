import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import UpholsteryCleaning from "./pages/UpholsteryCleaning";
import Franchise from "./pages/Franchise";
import ClinPro from "./pages/ClinPro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/residencial" element={<Residential />} />
          <Route path="/comercial" element={<Commercial />} />
          <Route path="/higienizacao-estofados" element={<UpholsteryCleaning />} />
          <Route path="/franquia" element={<Franchise />} />
          <Route path="/app" element={<Index />} />
          <Route path="/clin-pro" element={<ClinPro />} />
          <Route path="/sobre" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
