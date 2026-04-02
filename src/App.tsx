import './App.css'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import NavBar from './components/NavBar'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'
function App() {

  return (
    <main>
      <NavBar />
      <div className="section-wrapper" id="home">
        <HomeSection />
      </div>
      <div className="section-wrapper" id="about">
        <AboutSection />
      </div>
      <div className="section-wrapper" id="education">
        <EducationSection />
      </div>
      <div className="section-wrapper" id="experience">
        <ExperienceSection />
      </div>
      <div className="section-wrapper" id="contact">
        <ContactSection />
      </div>
    </main>
  )
}

export default App
