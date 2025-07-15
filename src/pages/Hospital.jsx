import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch ,  faHospital , faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Hospital() {

const [location , setLocation] = useState("");
const [places, setPlaces] = useState([]);
const [ loading , setLoading] = useState(false);
const [ error , setError] = useState('');

const handleSearch = async () => {
  if (!location.trim()) {
      setError('Please enter a location');
      return;
    }

  try {
    setLoading(true);
    setError('');
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/search?location=${encodeURIComponent(location)}`);
    setPlaces(res.data);

  } catch (error) {
    setError('could not fetch places . Try again');
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
};

 const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
   handleSearch();
  }
}; 


    return(
<div>

<div className ="font-semibold text-2xl text-gray-600 hover:underline ">Find Nearby Help</div>

<div className ="search bar mt-6 rounded-[25px] border-b-2 border-red-500 shadow-sm w-full h-10 flex items-center pl-3 hover:ring-1 hover:ring-gray-500 transition-all duration-300">
<button className ="" onClick ={handleSearch}><FontAwesomeIcon icon = { faSearch} className ="text-red-500 text-xl hover:text-slate-600 active:text-2xl"/></button>    
<input type="text" placeholder ="Enter the location" className = "w-3/4 ml-5 focus:outline-none"
value = {location} onChange = {(e) => setLocation(e.target.value)} onKeyDown={handleKeyPress}></input>
</div>

<div className = "flex justify-center items-center mt-10">
{loading && <p className="text-blue-500 ">Loading nearby centers...</p>}
{error && <p className="text-red-500">{error}</p>}
</div>

{/* blood centers */}
<style>{`
  .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;     /* Firefox */
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    
  `}</style>

<div className ="mt-10 space-y-4 h-screen overflow-y-auto pb-28 max-h-[calc(100vh-100px)] scrollbar-hide">
{places.map((center , idx) => (
    <div key ={idx} className ="group w-full flex items-center min-h-[120px] rounded-md shadow-lg hover:bg-red-500  hover:text-white">

{/* left info */}
<div className ="flex h-[100px] pl-3 w-3/4 gap-7">
    <div className ="bg-slate-50 w-[100px] h-[100px] flex justify-center items-center rounded-full border-[1px] border-gray-300 ">
    <FontAwesomeIcon icon = { faHospital } className = "text-red-500 text-4xl"/>
    </div>

<div className ="info flex flex-col items-start hover:text-white ">
    <div className =" font-semibold text-xl ">{center.name}</div> 
    <div className ="text-md  max-w-[500px] ">{center.description}</div>
</div>


</div>






    </div>
))}    

</div>





</div>
    );
}

export default Hospital;
