import { Navbar } from '../components/layout/Navbar'
import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Metrics } from '../components/sections/Metrics'
import { Process } from '../components/sections/Process'
import { Projects } from '../components/sections/Projects'
import { Stack } from '../components/sections/Stack'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Projects />
        <Process />
        <Stack />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
