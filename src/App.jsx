import { Hero, About, Skills, Skill, Projects, Experience, Audio, Contact } from "./components"

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <Hero />
      <About />
      <Skill />
      {/* <Skills /> */}
      <Projects />
      <Experience />
      <Contact />      
      <Audio />
    </div>
  )
}

export default App
