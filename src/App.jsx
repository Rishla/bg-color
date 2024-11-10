
import { useState } from 'react'
import './App.css'

function App() {

  const[bgColor,setBgColor]=useState()

  const changeBackground = (color) => {
    setBgColor(color);}


  return (
    <>
      

{/* <div  style={{ backgroundColor: bgColor, height: '100vh' }}>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <h1 className=" mb-5 mt-5">Change Background Color</h1>
        <div className=" d-flex gap-3 mb-5 ">
          <button
            onClick={() => changeBackground('grey')}
            className="btn btn-secondary btn-lg rounded-circle"
          >
            Grey
          </button>
          <button
            onClick={() => changeBackground('Red')}
            className="btn btn-danger btn-lg rounded-circle"
          >
            Red
          </button>
          <button
            onClick={() => changeBackground('blue')}
            className="btn btn-primary btn-lg rounded-circle"
          >
            Blue
          </button>
        </div>
      </div>
    </div>  */}

<div
      className="App d-flex flex-column align-items-center"
      style={{ background: `linear-gradient(135deg, ${bgColor} 0%, #ffffff 100%)`, height: '100vh', transition: 'background 0.5s ease' }}
    >
      {/* Header */}
      <h1 className="mt-4 ">Background Color Changer</h1>
      <div className='d-flex justify-content-center align-items-center ' style={{color:"brown"}}>
        <p className=" mb-4 fw-bold mt-3 me-3">Click a button to change the background color</p>
        <i class="fa-solid fa-paint-roller"></i>
  
      </div>
      {/* Centered Buttons */}
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 gap-3">
        <button
          onClick={() => changeBackground('red')}
          className="btn btn-danger btn-lg custom-btn"
        >
          Red
        </button>
        <button
          onClick={() => changeBackground('grey')}
          className="btn btn-secondary btn-lg custom-btn"
        >
          Grey
        </button>
        <button
          onClick={() => changeBackground('blue')}
          className="btn btn-primary btn-lg custom-btn"
        >
          Blue
        </button>
      </div>
    </div>
  
    </>
  )
}

export default App
