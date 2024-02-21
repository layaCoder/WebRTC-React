import React,{useRef} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const videoRef = useRef()
  console.log(videoRef,777)


  //  get local camera media stream
  const start = () => {
    const constraints = {audio:false,video:true}

    navigator.getUserMedia(
      constraints,
      (stream)=>{
      videoRef.current.srcObject = stream
    },
      (error)=>{
      console.log(error,19)
      }
    )
  }

  const stop = () => {
    console.log('stop')
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={start}>start recording</button>
        <button onClick={stop}>stop recording</button>
        <video autoPlay controls id="stream" ref={videoRef}></video>
      </header>
    </div>
  );
}

export default App;
