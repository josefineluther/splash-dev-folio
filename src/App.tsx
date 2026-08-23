import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { getDirection } from '@/lib/motion'
import AmbientGradient from '@/components/AmbientGradient'
import Index from './pages/Index'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

// Nyckeln är pathname, inte location.key — då räknas /project/bronte -> /project/unity-fitness
// som ett sidbyte trots att det är samma route och samma komponent.
const AnimatedRoutes = () => {
  const location = useLocation()

  // Den utgående sidan renderas inte om, så dess egna props sitter kvar från
  // förra navigeringen. AnimatePresence `custom` är vägen in med den FÄRSKA
  // riktningen — utan den skulle ett svep bakåt direkt efter ett svep framåt
  // få den gamla sidan att åka ut åt fel håll.
  const direction = getDirection(location.state)

  return (
    <AnimatePresence mode='wait' initial={false} custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Index />} />
        {/* :slug tar även emot de gamla sifferlänkarna — se findProject i data/projects. */}
        <Route path='/project/:slug' element={<ProjectDetail />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => (
  <MotionConfig reducedMotion='user'>
    {/* Utanför AnimatePresence: annars monteras gradientlagret om vid varje
        sidbyte och driften börjar om från noll. */}
    <AmbientGradient />
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </MotionConfig>
)

export default App
