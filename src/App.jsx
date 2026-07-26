import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
<div className='bg-slate-900 min-h-screen'>
 <Navbar/>
 <Hero/>
 <About/>
 <Skill/>
 <Project/>
 <Contact/>
 <Footer/>
</div>

  
  )
}

export default App
