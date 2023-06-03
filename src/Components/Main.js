import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
// import { useSpeechRecognition } from 'react-speech-kit';
import { useState } from 'react';
import '../App.css'
const Main = (props) => {
        const [value, setValue] = useState('');
        const {speak} =useSpeechSynthesis();
        const handleClick=()=>{
            let value='';
            setValue(value);
        }
  return (
    <>
    <div className='heading'><center><h1 id='headingid'>{props.heading}</h1></center></div>
      <div className="divbox">
      <textarea className='textbox' type="text" size="50" name="txtarea" maxlength="1000000"
        value={value}
        // inside value the text is being added.
        onChange={(event) => setValue(event.target.value)}/>
       <div className='divbuttons'>
      <button className='btn btn-success' onClick={() => 
      speak({ text: value })}>
        Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleClick}>clear text</button>
        </div>
      </div>
    </>
  )
}
export default Main