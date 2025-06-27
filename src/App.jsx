import { Hero, About, Skill, Projects, Experience, Audio, Contact, Tech } from "./components"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <Hero />
      <About />
      <Skill />
      <Tech />
      <Projects />
      <Experience />
      <Contact />
      <Audio />
      <Footer />
    </div>
  )
}

export default App
