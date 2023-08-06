// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/FooterDiv/Footer'
import Jobs from './components/JobDiv/Jobs'
import NavBar from './components/Navbar/NavBar'
import Search from './components/SearchDiv/Search'
import Value from './components/ValueDiv/Value'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-[95%] md:w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
      </div>
  )
}

export default App
