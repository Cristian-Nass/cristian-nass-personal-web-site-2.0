import './App.css'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'

function App() {

  return (
    <main>
      <div className="section-wrapper">
        <HomeSection />
      </div>
      <div className="section-wrapper">
        <AboutSection />
      </div>
    </main>
  )
}

export default App
