import { useState } from 'react'
import "./colorBlock.css"

//were going to make a button that generates random rgb values for us
const ColorButton = ({myColor,setMyColor}) => {

  //this function produces random values from 0-255
const randomColorGen = () => {

  const rgb_values = []

  for(let i=0;i<3;i++){
    rgb_values.push(Math.floor(Math.random() * 256))
  }
  //had to use template literals because there is not built in rgb()
  setMyColor(`rgb(${rgb_values[0]},${rgb_values[1]},${rgb_values[2]})`)

};

  return <button className='ranColorButton' onClick={randomColorGen} > Click Me!</button>

};


function App() {

  const [myColor,setMyColor] = useState('rgb(255, 0, 0)')

  return (
    <>
    
    <div className="colorB" style={{ color: myColor }}>Text box</div>
    <ColorButton myColor={myColor} setMyColor={setMyColor}/>
    
    </>
   
     )
}

export default App
