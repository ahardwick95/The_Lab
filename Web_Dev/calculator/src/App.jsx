import { useState } from 'react'
import { FaDivide } from "react-icons/fa6";
import { FaMinus,FaPlus } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";
import "./myCalculator.css"

// This web app will consist of 3 separate Components
// 1. keypad 
// 2. Screen
// 3. Board that holds keypad and screen
// screen and keypad will share data

 
const ClearButton = ({expression,setExpression}) => {
const clear = () =>{
  setExpression('')
}

return <button onClick={clear} className="clearScreen">C</button>

}

const KeyPad = ({expression,setExpression}) =>{

const num = [[7,8,9,"/"], [4,5,6,"X"] , [1,2,3,"-"]  ,[0,'.',"+","="]  ]; 

const keyPress = (e) => {
  const val = e.target.textContent;

  switch(val){
		
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
  case '8':
  case '9':
  case '0':
  case '.':
  case '/':
  case '+':
  case '-':
    setExpression(prev=>prev+val)
  break;
	 
  case 'X':
    setExpression(prev=>prev+'*')
  break;
  case '=':
    const result = eval(expression)
    setExpression(result.toString())
  break;
  default:
    setExpression('0')
    break;
		
}
}
return(
<div className="theGrid">
     {num.map((row, i) =>
        row.map((col, j) => (
          <button className="buttonKeys" onClick={keyPress} key={`${i}-${j}`}>{col}</button>)))}
</div>
)
}

  //Logic for screen component
const Screen = ({expression,setExpression}) =>{

 return <div className="theScreen">{expression}</div>

};

const Board = () => {
  return <h1 className="calBoard"> Calculator </h1>
}

function App() {
  const [expression,setExpression] = useState('') 


  return (
    
    <>
     <Board/>
     <Screen expression={expression} setExpression={setExpression}/>
     <ClearButton expression={expression} setExpression={setExpression}/>
     <KeyPad  expression={expression} setExpression={setExpression}/>
    
    </>
    
  )
}

export default App
