import NavBar from './components/navbar/navbar'
import SearchBar from './components/search_bar/search_bar'
import './App.css'

function App() {
  function search(s:string){
    console.log(s)
  }
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
      <SearchBar handleSearch={(e) => search(e)}/>
    </section>
    </>
  )
}

export default App
