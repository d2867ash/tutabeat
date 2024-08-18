'use client'

import React, { useState } from 'react'


export default function Texteditor() {
  const [text, settext] = useState('');
  
const handlerOnChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{

  settext(event.target.value);
}
const handlerOnUpClick=()=>{
  let newtext = text.toUpperCase();
  settext(newtext); 
}
const handlerOnLowClick=()=>{
  let newtext = text.toLowerCase();
  settext(newtext); 
}

  function handlerOnClearClick() {
    let newtext = "";
    settext(newtext);
  }
const handlerOnCopyClick=()=>{
  navigator.clipboard.writeText(text);
}
const handlerOnRemoveExtraSpaceClick=()=>{
  let newtext =  text.split(/[ ]+/);
  
  settext(newtext.join(" "));
}
  return (
    <div className='container mb-3'>
        
              <h1>Enter the text to analyze below</h1>

              <div className="container mb-3">
                   <textarea className="form-control"
                    id="exampleFormControlTextarea1" value={text} onChange={handlerOnChange} rows={12}></textarea>
               </div>
              <div className="container">
                      <button  type="button" className="btn btn-primary mx-2" onClick={handlerOnUpClick}> Convert to Upper case</button>
                      <button  type="button" className="btn btn-primary mx-2" onClick={handlerOnLowClick}> Convert Lower case</button>
                      <button  type="button" className="btn btn-primary mx-2" onClick={handlerOnClearClick}>  Clear Text!</button>
                      <button  type="button" className="btn btn-primary mx-2" onClick={handlerOnCopyClick}>  Copy clip board</button>
                      <button  type="button" className="btn btn-primary mx-2" onClick={handlerOnRemoveExtraSpaceClick}>  Remove Extra spaces</button>
              </div>
              <div className="container">
                 <h1>Your text Summary</h1>
                  <p>{text.split(" ").length} words and {text.length} characters</p>
                  <p>{0.008 * text.split(" ").length} Minutes read</p>
                  <h2>Preview</h2>
                  <p>{text}</p>
              </div>



    </div>
  )
}
