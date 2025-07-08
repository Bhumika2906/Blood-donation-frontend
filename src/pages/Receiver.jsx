import React , {useState} from 'react';
import Receiverform from '../components/Receiverform';


function Receiver() {

    const [matchedDonors , setMatchedDonors] = useState([]); // to store matching donors
    const[bloodGroup , setBloodGroup] = useState(''); // store bloodgroup entered by receiver
    const[showform , setshowform] = useState(false); // to show or hide the req form (toggle on button click)


        //called when receiver from submitted
    const handleFormSubmit = async (formData) =>{
       try {
       //fetch matching donors from DB
       const response = await fetch(`http://localhost:5000/receivers/match?bloodGroup=${encodeURIComponent(formData.bloodGroup)}`);
       const data = await response.json();
       console.log("Matched donor data received:", data);

       setMatchedDonors(data); //update matcheddonors state with the filtered donor list
       setshowform(false); // hide req form after submission
       setBloodGroup(formData.bloodGroup); // store the submittedd blood group
       console.log("bloodGroup being sent:", formData.bloodGroup);

       console.log("Receiver data submitted:",formData);
       }catch (error){
        console.error("Error fetching donors:",error);
       }
    };





return(
    <div>
    
    <div>
        <button type ="button"
        className =" mb-3 w-40 h-10 bg-[rgba(33,33,67,0.94)] hover:bg-[rgba(35,35,86,0.88)] text-white "
        onClick ={() => setshowform(!showform)}
        > {showform ? 'Hide Request Form ' : 'New Request'}</button>

         {showform && <Receiverform onSubmit = {handleFormSubmit} />}
        
    </div>
    

{!showform && matchedDonors.length > 0 && (
    <div>
    <div className ="heading flex item-centre justify-center mt-5 mb-2 bg-[rgba(31,40,91,0.84)] h-8 text-white text-lg font-semibold">Matching Donor Results</div>

    <table className ="list table-fixed">
       <thead className ="">
       
        <tr className =" bg-[rgba(101,111,216,0.28)] ">
            <th className ="w-[200px] ">Name</th>
            <th className ="w-[250px]">Address</th>
            <th className ="w-[200px]">MobileNo.</th>
            <th className ="w-[150px]">BloodGroup</th>
            <th className ="w-[150px]">Status</th>
            <th className ="w-[100px]"></th>
        </tr>
        
        </thead>

       <tbody>
        {matchedDonors.map((donor) => (
            <tr key={donor._id} className = "hover:bg-[rgba(201,210,252,0.44)] " >
                <td className="text-center h-10">{donor.name}</td>
                <td className ="text-center ">{donor.address}</td>
                <td className ="text-center ">{donor.phone}</td>
                <td className ="text-center ">{donor.bloodGroup}</td>
                <td className ="">
                    <div className ={`w-[50px] text-center ml-11 rounded-md ${donor.status === 'fit' ? 'bg-[rgba(0,255,0,0.35)]' : 'bg-[rgba(255,177,191,0.92)]'}` }>{donor.status}</div>
                </td>
                
            </tr>
        ))}
        
       </tbody> 
    </table>
    </div>
)}
    

    


    

    {!showform && matchedDonors.length === 0 && (
    <p className ="flex justify-center items-center font-semibold text-2xl text-pink-700 mt-10 ">Fill the form to request a matching donor</p>
    )}

    {matchedDonors.length === 0 && bloodGroup && (
        <p className = "flex justify-center text-lg text-green-700 cursor-pointer mt-6 hover:underline ">No matching donors found</p>
    )}
    


</div>

    );
}

export default Receiver;
