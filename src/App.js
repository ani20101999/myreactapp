import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let[width,setWidth] = useState(0);
  let[color,setColor] = useState("#ffffff");

 let widthChange = (e)=>{
  setWidth(e.target.value)
 }
 let colorChange = (e)=>{
  setColor(e.target.value)
 }

  return (
    <div className="App">
      {/* <form action="#" method="POST"> */}
      <div>
       width: <input type="number" onChange={widthChange} value={width}></input>
      </div>
      <div>
        color: <input type="color" onChange={colorChange} value={color}></input>
      </div>
      {/* </form> */}
      <div id="rectangle" style={{width:width + "px",backgroundColor:color}}></div>
    </div>
  );
}

export default App;

