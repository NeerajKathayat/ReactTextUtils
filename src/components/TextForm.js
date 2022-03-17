import React, {useState} from 'react'   //This is React Function Based Component

//Declaring a new state variable,which we'll call "Text"

 
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uper case was clicked ",text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick=()=>{
        console.log("lower case was clicked ",text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    
    const handleOnChange=(e)=>{
        console.log("On change")
        setText(e.target.value);

    }
    const handleFiCick=()=>{
        let words=text.split(" ")
        console.log(words)
        let uppercaseword=''
        words.forEach(e=>{
            uppercaseword+=e.charAt(0).toUpperCase()+e.slice(1)+" "
        })
        setText(uppercaseword)
        props.showAlert("All First Character SuccessFully Capitalized","success")

    }


    const copyText=()=>{
        let text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied","success")

    }
   
    //hooks
    const[text,setText]=useState('');//'usestate' is a function which return an array with two items const[text,settext] (first is 'current data',second is 'updated data') and usestate("initial data")
  
    return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-3 " onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-3" onClick={handleFiCick}>Convert CapitalFirstLetter</button>
         <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
         
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.length>0?text.trim().replace(/\s{2,}/g,' ').split(" ").length:0} words and {text.replace(/\s/g, "").length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textBox to Preview here"}</p>
    </div>
    </>
  )
}
 