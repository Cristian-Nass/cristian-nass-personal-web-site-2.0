import './App.css'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import NavBar from './components/NavBar'
function App() {

  return (
    <main>
      <NavBar />
      <div className="section-wrapper">
        <HomeSection />
      </div>
      <div className="section-wrapper">
        <AboutSection />
      </div>
      <div className="section-wrapper">
        <EducationSection />
      </div>
    </main>
  )
}

export default App
