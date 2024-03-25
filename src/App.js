
import Alert from './components/Alert';

import './components/App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'




export default function App() {
const[mode, setMode] = useState("light")
const[alert, setAlert] = useState(null)

const showAlert =(message, type ) => {

  setAlert({
msg: message,
type: type

  })
setTimeout(() => {
  setAlert(null);
}, 2500);


}




const toggleMode= () => {
  if (mode === "light"){
    setMode ('dark');
    document.body.style.backgroundColor= '#073454';
    showAlert("Enjoy Dark Mode is Enabled ", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("LIGHT Mode is Enabled", "success");
 

  }
}

  return (
    
    <>
 
 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
       
      


         <Textform heading="Maniplate your Text" showAlert={showAlert} />
      
      </div>
    
    </>
  )
}
















































// // function App() {

// // return(


// // )


// //   );
// // }
// // const [show, setSHow] = useState(true)
// // const toggleState = () =>{
// //   setSHow(!show)
// // }

// // useEffect(()=>{

// // console.log('Use Effect Run')
// // },[show])



// // const [notes , setNotes] = useState([
// //   {
// //     name : 'Naeem',
// //     age : '18',
// //   },
// //   {
// //     name : 'Bilal',
// //     age : '18',
// //   },
// //   {
// //     name : 'Ahmad',
// //     age : '18',
// //   },
// //   {
// //     name : 'Kaleem',
// //     age : '18',
// //   },
// // ])



// // const [name , setName] = useState('')
// // const [age , setAge ] = useState('')

// // const [search , setSearch ] = useState('')
// // const [ searchNotes, setSearchNotes] = useState([])



// // const AddNote = () => {
// //   const newNote = [...notes,{name , age}]
// //   setNotes(newNote)
// //   console.log("🚀 ~ AddNote ~ newNote:", newNote)
// // }
// // const [num1, setNum1] = useState(0)
// // const [num2, setNum2] = useState(0)
// // const [ result ,setResult ] = useState(0)
// // const AddNumber = () => {
// //   const add =  parseInt(num1) + parseInt(num2);
// //   setResult(add)
// // }
// // const Delete = (name) => {
// // console.log("🚀 ~ Delete ~ name:", name)
// // const updateNotes = notes.filter(val=>val.name != name)
// // console.log("🚀 ~ Delete ~ updateNotes:", updateNotes)
// // setNotes(updateNotes)
// // }
// // const Search = () => {
// //   const updateNotes = notes.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));

// //   console.log("🚀 ~ Search ~ updateNotes:", updateNotes)

// //   const updateNotes = notes.filter(val=>val.name == search)

// //   setSearchNotes(updateNotes)
// //   }


// // if(age>18) {
// //   console.log('pass')
// // }
// // else{
// //   console.log('Fail')
// // }


// // age > 18 ? console.log('pass') : console.log('fail') //Ternary Operator
// //   return (
// // <> 

// // <div>
// // <input type='text' onChange={(val)=>setSearch(val.target.value)}/>
// // <button onClick={Search}>Search</button>

// // <input type='text' onChange={(val)=>setName(val.target.value)}/>
// // <input type='text' onChange={(val)=>setAge(val.target.value)}/>
// // <button onClick={AddNote}>Save</button>
// // </div>

// // <input type='text' onChange={(val)=>setNum1(val.target.value)}/>
// // <input type='text' onChange={(val)=>setNum2(val.target.value)}/>
// // <button onClick={AddNumber}/>
// // <h1 className='leads'>{result}</h1>
// {/* <p className='leads'> {notes[2].name}</p> */ }
// {/* <h1>SEARCHED NOTES</h1>

// {searchNotes.length  > 0 ?searchNotes.map((item,index)=>{
//   return(
//  <div>
//   <p>{item.name}</p>
//   <p>{item.age}</p>
//  </div>
//   )
// })
//  :
//  <h6>No Notes Found</h6>
// }
// <h1>NOTES</h1>
// {notes.map((item,index)=>{
//   return(
//  <div>
//   <p>{item.name}</p>
//   <p>{item.age}</p>
//     <button onClick={()=>Delete(item.name)}>Delete</button>
//  </div>
//   )
// })}
// {}
// {show ? 
// <h1>Heading Shown</h1>
// :
// <h2>Heading Hidden</h2>
// }


// <button title='Pressed' onClick={toggleState}/> */}





// import React, { useState } from 'react'
// // import CustomButton from './components/CustomButton'
// import MyComponent from './components/MyComponent'


// const App = () => {
//   const [input , setInput] = useState('')
//   const handlePress = ( ) =>{
//     console.log('Pressed')
//   }
//   return (

//     <div>
//             {/* <h1>My React App</h1>
 
//     <CustomButton action={handlePress} title={'SignUp'}/>
//     <CustomButton action={handlePress} title={'Login'} bgColor={'blue'}/>
//     <input type='text' style={{borderWidth:1,borderRadius:10}} placeholder='Enter Name' value={input} onChange={(val)=>setInput(val.target.value)}/> */}
//     <MyComponent/>
//     </div>
  


   
//   )
// }

// export default App
