import { useState } from 'react'
import { CiCirclePlus,CiCircleMinus} from "react-icons/ci";
import './Counter.css'

function App() {
  const [count, setCount] = useState(0)

const AddButton = ({count,setCount}) => {
const addOne = () => {
  setCount(count+1)
}

  return <button  onClick = {addOne} className ="addB"><CiCirclePlus/></button>
}

const SubButton = ({count,setCount}) => {
  const minusOne = () => {
    if( count > 0){
      setCount(count-1)
    }
     
}

  return <button onClick={minusOne} className="minusB"> <CiCircleMinus/></button>
}

const TheCount = () => {
return <div className="myCount"> {count}</div>

}

  return (
    <>
    <div className="block">Counter App</div>
    <TheCount />
     <AddButton count={count} setCount={setCount}/>
     <SubButton count={count} setCount={setCount}/>
     
    </>
  )
}

export default App
