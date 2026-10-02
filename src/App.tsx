import { MotionConfig } from 'motion/react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScrollManager } from './components/layout/ScrollManager'
import Home from './pages/Home'

// Las páginas secundarias se cargan recién cuando se visitan
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    // reducedMotion="user": si la persona pidió reducir el movimiento, Motion desactiva los desplazamientos
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <Suspense fallback={<div className="min-h-screen bg-paper" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MotionConfig>
  )
}
