import { Hero, About, Skils, Work, Audio } from "./components"

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <Hero />
      <About />
      <Skils />
      <Work />      
      <Audio />
    </div>
  )
}

export default App
