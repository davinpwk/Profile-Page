import { useState } from 'react'
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [buttonClasses, setButtonClasses] = useState({
    btn1: 'active',
    btn2: '',
  })

  function changePage(destination){
    setCurrentPage(destination);
    setButtonClasses((prevClasses) => {
      return destination === 'home'
      ? {btn1: 'active', btn2: ''}
      : {btn1: '', btn2: 'active'}
    })
  }

  function renderPage() {
    if(currentPage == 'home'){
      return <HomePage />
    } else if (currentPage == 'resume'){
      return <ResumePage />
    }
  }

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-logo-container">
            <h1 className='logo'>davinpwk.com</h1>
          </div>
          <div className="nav-btn-container">
            <button className={buttonClasses.btn1} onClick={() => changePage("home")}>Home</button>
            <button className={buttonClasses.btn2} onClick={() => changePage("resume")}>Resume</button>
          </div>
        </div>
      </nav>
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
