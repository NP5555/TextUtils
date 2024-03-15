// const [show, setSHow] = useState(true)
// const toggleState = () =>{
//   setSHow(!show)




//   // useEffect(()=>{
  
// // console.log('Use Effect Run')
// // },[show])



// const [notes , setNotes] = useState([
//   {
//     name : 'Naeem',
//     age : '18',
//   },
//   {
//     name : 'Bilal',
//     age : '18',
//   },
//   {
//     name : 'Ahmad',
//     age : '18',
//   },
//   {
//     name : 'Kaleem',
//     age : '18',
//   },
// ])



// const [name , setName] = useState('')
// const [age , setAge ] = useState('')

// const [search , setSearch ] = useState('')
// const [ searchNotes, setSearchNotes] = useState([])



// const AddNote = () => {
//   const newNote = [...notes,{name , age}]
//   setNotes(newNote)
//   console.log("🚀 ~ AddNote ~ newNote:", newNote)
// }
// const [num1, setNum1] = useState(0)
// const [num2, setNum2] = useState(0)
// const [ result ,setResult ] = useState(0)
// const AddNumber = () => {
//   const add =  parseInt(num1) + parseInt(num2);
//   setResult(add)
// }
// const Delete = (name) => {
// console.log("🚀 ~ Delete ~ name:", name)
// const updateNotes = notes.filter(val=>val.name != name)
// console.log("🚀 ~ Delete ~ updateNotes:", updateNotes)
// setNotes(updateNotes)
// }
// const Search = () => {
//   const updateNotes = notes.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));

//   console.log("🚀 ~ Search ~ updateNotes:", updateNotes)
  
//   // const updateNotes = notes.filter(val=>val.name == search)
  
//   setSearchNotes(updateNotes)
//   }


// // if(age>18) {
// //   console.log('pass')
// // }
// // else{
// //   console.log('Fail')
// // }


// // age > 18 ? console.log('pass') : console.log('fail') //Ternary Operator
//   return(
// <>
// <div>
// <input type='text' onChange={(val)=>setSearch(val.target.value)}/>
// <button onClick={Search}>Search</button>

// <input type='text' onChange={(val)=>setName(val.target.value)}/>
// <input type='text' onChange={(val)=>setAge(val.target.value)}/>
// <button onClick={AddNote}>Save</button>
// </div>

// <input type='text' onChange={(val)=>setNum1(val.target.value)}/>
// <input type='text' onChange={(val)=>setNum2(val.target.value)}/>
// <button onClick={AddNumber}/>
// <h1 className='leads'>{result}</h1>
// {/* <p className='leads'> {notes[2].name}</p> */}
// <h1>SEARCHED NOTES</h1>

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
// <button title='Pressed' onClick={toggleState}/>

// </>