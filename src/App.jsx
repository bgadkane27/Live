import { Hero, About, Skils, Projects, Experience, Audio } from "./components"

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <Hero />
      <About />
      <Skils />
      <Projects />
      <Experience />      
      <Audio />
    </div>
  )
}

export default App
