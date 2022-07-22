import {useEffect} from 'react'
import { NavBar } from "./components/main-navigation/NavBar"
import { Main } from "./components/main/Main"
import AOS from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(
    () => {
      AOS.init({
        delay: 220, 
        duration: 1700, 
        once: false, 
        mirror: false, 
      });
      AOS.refresh();
    },[]
  )

  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}

export default App
