import './App.css'
import Newbar from './Newbar.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App() {
    return (
        <div className='bg-zinc-950'>
            <Newbar/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}


export default App