import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EffectUsage, { Timer } from './Components/Effects';

function App() {
  let countnumber  = 0;
  let deccountnumber = 100;
  let [count, setCount] = useState(0)
  let [decCount, decCountSet] = useState(100)


  function setCountValue()
  {    
    countnumber = 100;
    alert(countnumber);
    countnumber = 200;
    alert(countnumber);
  }

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  const [buttonStyle, setButtonStyle] = useState(myStyle);
  

  const myNewStyle = {
    color: "black",
    backgroundColor: "lightBlue",
    padding: "15px",
    fontFamily: "Times New Roman"
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div style={buttonStyle}>count is {count}</div>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1); setButtonStyle(myNewStyle);  }}>
          Increment
        </button>        
        <button onClick={() => {setCount((count) => count - 1); setButtonStyle(myStyle);}}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FavoriteColor />
      <PropsEg />      
      <div>New Counter Variable {countnumber}</div>
      <button onClick={() => setCountValue()} >Set Value to 100</button>
      <EffectUsage></EffectUsage>
      <Timer></Timer>
    </>
  )
}

function FavoriteColor() {
  const [color, setColor] = useState("Red");

  return (
    <>
  <h1>My favorite color is {color}!</h1> 
  <button
        type="button"
        onClick={() => setColor("blue") }
      >Blue</button>
  
  </>
  )
}


function PropsEg()
{
  const myElement = <Car brand="Ford"  color='black' />;
  
  return myElement;
}

function Car(props: { brand: string, color: string }) {
  return <h2>I am a { props.brand } in  {props.color} color!</h2>;
}

export default App

export {FavoriteColor, PropsEg}
