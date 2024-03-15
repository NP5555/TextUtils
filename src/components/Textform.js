import React, { useState } from 'react'
import './App.css';



export default function Textform(props) {

  const handleUpClick = () => {
    //  console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");


  }

  const handleLoClick = () => {
    //  console.log("Uppercase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");


  }

  const handleClearClick = () => {
    //  console.log("Uppercase was clicked" + Text);
    let newText = ("");
    setText(newText)
    props.showAlert("Text Cleared", "warning");


  }

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value)

  }

  const handleCopy = () => {
    //  console.log("Uppercase was clicked" + Text);
    let Text = document.getElementById("Textform");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Text Coppied", "success");


  }






  const handleExtraSpaces = () => {
    // console.log("on Change");
    let newText= Text.split(/[  ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces removed", "danger");

  }

  const handleWordCount = () => {
    let words = Text.split(/\s+/); // Split by whitespace characters
    words = words.filter(word => word !== ''); // Remove empty strings
    return words.length;
  }



  const [Text, setText] = useState('Enter text here');

  // setText=("Darker Changed text")

  return (
    <>
      <div className='container mt-3  mb-3  text-center'
      
      style={{backgroundColor:props.mode === 'dark'?'#073454':'white'}}>
        <div>
          <h1 className="leads"  
          
          
          
          style={{backgroundColor:props.mode === 'dark'?'#073454':'white', color:props.mode === 'dark'?'#073454':'black'}} 
          
          
          > 
          
          
          {props.heading}
    
          
          
          
          
          
          </h1>


          {/* textarea */}
          <textarea className="form-control" value={Text} onChange={handleOnChange} 


          style={{backgroundColor:props.mode === 'dark'?'#6c757d':'gray', color:props.mode === 'dark'?'white':'white'}} 
          
          
          id="Textform" rows="10" >



          </textarea>
        </div>





        {/* buttons div */}
        <div className=' buttontext container col my-3'>
        <button className='buttontext btn btn-danger btn-lg mx-2 '
          onClick={handleUpClick} >Convert to Uppercase</button>

        <button className='buttontext btn btn-danger btn-lg my-2 mx-2'
          onClick={handleLoClick} >Convert to Lowercase</button>

        <button className=' buttontext btn btn-danger btn-lg my-2 mx-2'
          onClick={handleClearClick} >Clear Text</button>

        <button className=' buttontext btn btn-danger btn-lg my-2 mx-2'
          onClick={handleCopy} >Copy Text</button>

        <button className='buttontext btn btn-danger btn-lg my-2 mx-2'
        onClick={handleExtraSpaces} >Remove Spaces</button>
        


        </div>


      </div>
      <div  style={{backgroundColor:props.mode === 'dark'?'#073454':'white', color:props.mode === 'dark'?'#073454':'#073454'}} 
           >


      
      <div className='container my-3 border-radius' >
        <h1>
          Word Count:
        </h1>
        <p className='leads'>{Text.length} chracters</p>
      </div>
      <div className='container my-3'>
        <h1>
         Words:
        </h1>
        <p className=' leads'>{handleWordCount()} words</p>      </div>
      
  
      
      <div className='container my-3' >
        <h1>
          Preview
        </h1>
        <p className='leads'>{Text.length>0?Text:"Type somethin to preview here..."}</p>
      </div>
      </div>
    </>
  )
}
