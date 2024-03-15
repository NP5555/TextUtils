import './App.css';
import { CiLocationOn } from "react-icons/ci";
import Textform from './Textform';

function App() {

  return (
    <>
    <div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src="https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather03-1024.png" height={50}></img>
        <span 
        className="navbrand text-light  ">WeatherMe</span>
      </a>
    
     
<div className='row nav'>
      <ul id='items' className="nav nav-pill">
        <li className="nav-item"><a href="/" className="nav-link text-light">Today</a></li>
        <li className="nav-item"><a href="/" className="nav-link text-light" >tommorow</a></li>
        <li  className="nav-item"><a href="/" className="nav-link text-light">Monthly_Forcast</a></li>
      </ul>
      </div>
      <div className='container mb-5'>
      <div className='  text-center'>
      <input className='searchbar text-center'
       type='text' placeholder='ENTER YOUR CITY' />
    
        

      </div>
      </div>
      </header>


       <div className='container mb-5'>
       <h6 className="card-subtitle mb-2 text-center text-light">Check Weather in your Area</h6>
        <div className='row'>
          <div className='col'>
       <div  className=" card">
  <div className="card-body">
    <span><p className='leads justify-content-start text-start'>Punjab <CiLocationOn/> </p></span>

    <h2 className="title text-center m-3">21°C<img src="https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather03-1024.png" height={90}></img></h2>

    <span><p className=' justify-content-start text-start mx-2 py-2'><u className='date '>27/Oct/2023</u></p></span>
   

<div className='container'>
  <div>
    <ul className='ul-list'>
<li type="none"><span className='ul-list'>HUMIDITY</span> </li>
<li type="none"><span className='ul-list'>VISIBILITY</span> </li>
<li type="none"><span className='ul-list'>AIR PRESSURE</span> </li>
<li type="none"><span className='ul-list'>WIND</span> </li>


    </ul>
    <ul className='ul-list2 text-center'>
<li type="none"><span className='ul-list2'>99%</span> </li>
<li type="none"><span className='ul-list2'>8Km</span> </li>
<li type="none"><span className='ul-list2'>1005hPa</span> </li>
<li type="none"><span className='ul-list2'>2mph</span> </li>


    </ul>
    </div> 

</div>
    

     

  </div>
</div>
</div>
</div>
       </div>




 </div>
 </>


  );
}

export default App;
