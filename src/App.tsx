import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { getDirection } from "@/lib/motion";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Nyckeln är pathname, inte location.key — då räknas /project/3 -> /project/4
// som ett sidbyte trots att det är samma route och samma komponent.
const AnimatedRoutes = () => {
  const location = useLocation();

  // Den utgående sidan renderas inte om, så dess egna props sitter kvar från
  // förra navigeringen. AnimatePresence `custom` är vägen in med den FÄRSKA
  // riktningen — utan den skulle ett svep bakåt direkt efter ett svep framåt
  // få den gamla sidan att åka ut åt fel håll.
  const direction = getDirection(location.state);

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
