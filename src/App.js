import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


export default function App() {
  const[mode,setMode]=useState('light'); //Whether dark mode is enabled or not
   const[alert,setAlert]=useState(null)

   const showAlert=(message,type)=>{
          setAlert({
            msg:message,
            type:type
          })
          setTimeout(() => {
            setAlert(null);
          }, 2000);
   }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    {/* Here we are passing props and it will render props in the component */}
     {/* <Navbar /> */ }
   {/* <Navbar title="TextUtils2" /> */}
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} /> 
  <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>
   {/* <About/> */}
   </div>
   </>
  
 );
}

 
