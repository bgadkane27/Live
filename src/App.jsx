import { Hero, About, Skill, Projects, Experience, Audio, Contact, Tech } from "./components"
import Main from "./components/Main"

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      {/* <Hero /> */}
      <Main />
      <About />
      <Skill />
      <Tech />      
      <Projects />
      <Experience />
      <Contact />
      <Audio />
    </div>
  )
}

export default App
