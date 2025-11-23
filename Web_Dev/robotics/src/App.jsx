import React from "react";
import { motion } from "framer-motion";
import { GoGear } from "react-icons/go";
import { BsRobot } from "react-icons/bs";
import "./Robotics.css"
import './App.css'


const Signal = () => {
return( <span className="signal-pulse_Robot "> o </span>)
}




function App() {
  return (
    <>
  <motion.span style={{color:'black',display: 'inline-block' , fontSize:'41px', padding:"9px"}} >  <Signal/> <BsRobot /> </motion.span>
   <motion.span style={{display: 'inline-block', fontSize:'clamp(1.5rem, 4vw, 3rem)'}}  whileHover={{ color: 'Black' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> R </motion.span>
   <motion.span style={{display: 'inline-block', fontSize:'clamp(1.5rem, 4vw, 3rem)' }}  whileHover={{ color: 'cyan' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> o </motion.span>
   <motion.span style={{display: 'inline-block' , fontSize:'clamp(1.5rem, 4vw, 3rem)'}}  whileHover={{ color: 'Black' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> B </motion.span>
   <motion.span style={{color:'cyan',display: 'inline-block' , fontSize:'41px', padding:"1px"}} whileHover={{ color: 'Black' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}} animate={{rotate:360}} transition={{duration:2.1,repeat:Infinity, ease:"linear" }}><GoGear /></motion.span>
   <motion.span style={{display: 'inline-block' , fontSize:'clamp(1.5rem, 4vw, 3rem)'}}  whileHover={{ color: 'Black' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> T </motion.span>
   <motion.span style={{display: 'inline-block' , fontSize:'clamp(1.5rem, 4vw, 3rem)'}}  whileHover={{ color: 'cyan' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> i </motion.span>
   <motion.span style={{display: 'inline-block' , fontSize:'clamp(1.5rem, 4vw, 3rem)'}}  whileHover={{ color: 'Black' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> c </motion.span>
   <motion.span style={{display: 'inline-block' , fontSize:'clamp(1.5rem, 4vw, 3rem)'}}  whileHover={{ color: 'cyan' ,rotate: 5,scale: 1.5,transition: { type: "spring", stiffness: 300 }}}> s </motion.span>
   <motion.span style={{color:'black',display: 'inline-block' , fontSize:'41px', padding:"0px"}} > <Signal/> <BsRobot /></motion.span>
   </>
  );
}

export default App;