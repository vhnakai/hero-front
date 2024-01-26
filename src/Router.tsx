import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Hero } from './pages/Hero'
import { Superpower } from './pages/Superpower'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/superpower" element={<Superpower />} />

      </Route>
    </Routes>
  )
}