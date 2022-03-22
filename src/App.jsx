import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import About from './components/About'

import './styles/App.css'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import useLocoScroll from './hooks/useLocoScroll'

function App() {
  
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);


  const [timer, setTimer] = useState(1);
  const id = useRef(null)
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() => {
    id.current = window.setInterval(()=>{
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer])

  return (
    <>
    {preloader 
    ? 
    <div className="loader-wrapper absolute">
     <h1>Modern Design</h1> 
    <h2>Los Angeles</h2>
    </div>
    :  (
    <div className="main-container" id="main-container" data-scroll-container>
     {/* <Navbar /> */}
     <Header />
     <Featured />
     <About />
     <Gallery />
     <Footer />
    </div>
    )}
    </>
  )
}

export default App
