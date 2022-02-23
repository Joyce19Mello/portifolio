import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Studies from './components/Studies/Studies'
import Experiences from './components/Experiences/Experiences'
import Skills from './components/Skills/Skills'

import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
        <Header />
        <main>
            <About />
            <Studies />
            <Experiences />
            <Skills />
        </main>
        <ScrollToTop />
        <Footer />
    </div>
  )
}

export default App
