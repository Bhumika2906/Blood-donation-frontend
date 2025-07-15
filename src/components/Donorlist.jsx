import React , {useEffect , useState} from 'react';
import { faTrash}from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Donorlist (){
   const [donors , setDonors] = useState([]);
   



   //function to get donors from backend
   const fetchDonors = async() =>
   {
    try {
        const response = await fetch('https://blood-donation-backend-ryvp.onrender.com/donors');
        const data = await response.json();
        setDonors(data);

    }

    catch(error) {
        console.log('error fetching donors:',error);
    }
   };

   useEffect(() => {
    console.log('=== DEBUG INFO ===');
    console.log('API URL being used:', process.env.REACT_APP_API_URL);
    console.log('Full URL:', `${process.env.REACT_APP_API_URL}/donors`);
    console.log('==================');
    
    
    fetchDonors();
   },[]);

//function to delete donor
   const handleDelete = async (donorID) => {
   if(window.confirm('Are you sure you want to delete this donor?')){
    try{
        await fetch(`${process.env.REACT_APP_API_URL}/donors/${donorID}` ,{
            method: 'Delete'
        });
        //refresh the list after delete
        fetchDonors();
    } catch (error) {
        console.log('error deleting donor:',error);
    }
   }
   };
   
    // name , address , blood Group , status , delete

    return(
<div >
    <div className ="heading flex item-centre justify-center mt-5 mb-2 bg-[rgba(31,40,91,0.84)] h-8 text-white text-lg font-semibold w-full">Donors List</div>

    <table className ="list w-full h-screen overflow-y-auto">
       <thead className ="">
       
        <tr className =" bg-[rgba(101,111,216,0.28)]">
            <th className ="w-[200px] ">Name</th>
            <th className ="w-[250px]">Address</th>
            <th className ="w-[200px]">MobileNo.</th>
            <th className ="w-[150px]">BloodGroup</th>
            <th className ="w-[150px]">Status</th>
            <th className ="w-[100px]"></th>
        </tr>
        
        </thead>

       <tbody>
        {donors.map((donor) => (
            <tr key={donor._id} className = "hover:bg-[rgba(201,210,252,0.44)] " >
                <td className="text-center h-10">{donor.name}</td>
                <td className ="text-center ">{donor.address}</td>
                <td className ="text-center ">{donor.phone}</td>
                <td className ="text-center ">{donor.bloodGroup}</td>
                <td className ="">
                    <div className ={`w-[50px] text-center ml-11 rounded-md ${donor.status === 'fit' ? 'bg-[rgba(0,255,0,0.35)]' : 'bg-[rgba(255,177,191,0.92)]'}` }>{donor.status}</div>
                </td>
                <td>
                    <FontAwesomeIcon onClick = {() => handleDelete(donor._id)} icon={faTrash} className="text-red-600 cursor-pointer ml-6 hover:text-red-400 active:text-red-800 "></FontAwesomeIcon>
                </td>
            </tr>
        )

    )}
        <tr>

        </tr>
       </tbody> 
    </table>


    {donors.length === 0 && (
        <p>No donors found</p>
    )}
</div>

    );
}

export default Donorlist;