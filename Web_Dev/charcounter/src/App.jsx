import { useState } from 'react'
import "./myInput.css"
/* THe problem i originally had was that i put the Input counter inside the APP function, which made the user
repeatedly click in and out of the inout boox to enter new charaacters
 By putting it outside the user can now type repeatedly
 
 THis happened because im repeatedly creating the input container every render*/


const InputCounter = ({message,setMessage}) =>{

  // this is how we use the value we got form the input box and use it to change the state variable 'message' 
 const myMessage = (e) =>{
      setMessage(e.target.value)
 }

 /* value is how you grab the data the user is typing in */
 return <textarea className="inputB"  value={message} onChange={myMessage} placeholder='please type in stuff'/>

};

function App() {
  const [message, setMessage] = useState('') // default state is an empty string
  // This component holds the count
const TheCount = () =>{
  return <h1  className="mesL" >The message has {message.length} characters</h1>
}

  return (
    <>
      <InputCounter  message={message} setMessage={setMessage} />
      <TheCount/>
     
    
    
    </>
  )
}

export default App
