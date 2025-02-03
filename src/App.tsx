import NavBar from './components/navbar/navbar'
import SearchBar from './components/search_bar/search_bar'
import Banner from './components/banner/banner'
import Popup from './components/popup/popup'
import FadeIn from './components/fadein/fadein'
import './App.css'
import {useState} from 'react'
type PopupData = {
  id: number; // Unique ID for each popup
  text: string; // Text to display in the popup
}

function App() {
  const [popUps, setPopUps] = useState<PopupData[]>([])

  function search(text:string){
    const newPopup: PopupData = {
      id: Date.now(), // Use a timestamp as a unique ID
      text,
    };
    setPopUps((prevPopups) => [...prevPopups, newPopup]);
  }

  function closePopup(id: number){
    setPopUps((prevPopups) => prevPopups.filter((popup) => popup.id !== id)); // Remove the popup with the matching ID
  };

  return (
    <>
    <header>
      Small library V2!
    </header>
    <main>
      <h1>Compound Components</h1>
      <p>I learned about compound components and I made this website as an excuse to practice this new topic. Compound components in React are very useful to avoid what is called "prop drilling". Without further explanation, let's start.</p>
    </main>
    <section className="components-showcase">
      <article>
        <h2>Navigation bar</h2>
        <div className="showcase">
        <NavBar>
          <NavBar.Link href="#" description='Home'hoverBackgroundColor='antiquewhite'>Home</NavBar.Link>
          <NavBar.Link href="#about" description='About' hoverBackgroundColor='antiquewhite'>About</NavBar.Link>
          <NavBar.Link href="#services" description='Services' hoverBackgroundColor='antiquewhite'>Services</NavBar.Link>
          <NavBar.Link href="#contact" description='Contact' hoverBackgroundColor='antiquewhite'>Contact</NavBar.Link>
        </NavBar>
        </div>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`NavBar`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#" </span><span className='input'>hoverBackgroundColor</span>=<span className='value'>'antiquewhite'</span><span className='dash'>{`>`}</span>Home<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#about" </span><span className='input'>hoverBackgroundColor</span>=<span className='value'>'antiquewhite'</span><span className='dash'>{`>`}</span>About<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#services" </span><span className='input'>hoverBackgroundColor</span>=<span className='value'>'antiquewhite'</span><span className='dash'>{`>`}</span>Services<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#contact" </span><span className='input'>hoverBackgroundColor</span>=<span className='value'>'antiquewhite'</span><span className='dash'>{`>`}</span>Contact<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`NavBar`}</span><span className='dash'>{`>`}</span><br></br>
        </p>
      </article>
      <article>
        <h2>Search Bar</h2>
        <div className="showcase">
          <SearchBar handleSearch={(e) => search(e)}/>
        </div>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`SearchBar`}</span> <span className='input'>handleSearch</span>=<span className='value'>{`{(e) => search(e)}`}</span><span className='dash'>{`/>`}</span><br></br>
        </p>
      </article>
      <article>
        <h2>Search Bar</h2>
        <div className="showcase">
          <Banner type="success">
            <Banner.Topic>Succes</Banner.Topic>
            <Banner.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Banner.Text>
          </Banner>
        </div>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`Banner`}</span> <span className='input'>type</span>=<span className='value'>"success" </span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`Banner.Topic `}</span><span className='dash'>{`>`}</span>Success<span className='dash'>{`</`}</span><span className='component'>{`Banner.Topic`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`Banner.Text `}</span><span className='dash'>{`>`}</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<span className='dash'>{`</`}</span><span className='component'>{`Banner.Text`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`Banner`}</span><span className='dash'>{`>`}</span><br></br>
        </p>
      </article>
      <article>
        <h2>Fade In</h2>
        <div className="showcase">
          <FadeIn>
            <p>Fade in</p>
          </FadeIn>
        </div>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`FadeIn`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`p`}</span><span className='dash'>{`>`}</span>Fade in<span className='dash'>{`</`}</span><span className='component'>{`p`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`NavBar`}</span><span className='dash'>{`>`}</span><br></br>
        </p>
      </article>
    </section>
    </>
  )
}

export default App
