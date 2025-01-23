import NavBar from './components/navbar/navbar'
import './App.css'

function App() {

  return (
    <>
    <NavBar>
      <NavBar.Link href="#">Home</NavBar.Link>
      <NavBar.Link href="#about">About</NavBar.Link>
      <NavBar.Link href="#services">Services</NavBar.Link>
      <NavBar.Link href="#contact">Contact</NavBar.Link>
    </NavBar>
    </>
  )
}

export default App
