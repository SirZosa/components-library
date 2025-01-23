import NavBar from './components/navbar/navbar'
import './App.css'

function App() {

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
          <NavBar.Link href="#">Home</NavBar.Link>
          <NavBar.Link href="#about">About</NavBar.Link>
          <NavBar.Link href="#services">Services</NavBar.Link>
          <NavBar.Link href="#contact">Contact</NavBar.Link>
        </NavBar>
        </div>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`NavBar`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#"</span><span className='dash'>{`>`}</span>Home<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#about"</span><span className='dash'>{`>`}</span>About<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#services"</span><span className='dash'>{`>`}</span>Services<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          &emsp;<span className='dash'>{`<`}</span><span className='component'>{`NavBar.Link `}</span><span className='input'>href</span>=<span className='value'>"#contact"</span><span className='dash'>{`>`}</span>Contact<span className='dash'>{`</`}</span><span className='component'>{`NavBar.Link`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`NavBar`}</span><span className='dash'>{`>`}</span><br></br>
        </p>
      </article>
    </section>
    </>
  )
}

export default App
