import React, {useState} from 'react'; // 

function Donorform() {
    const [ formData , setFormData ] = useState({ 
        name: '', 
        address: '',
        bloodGroup: '', 
        phone: '',
        email: '',
        weight: '',
        age: '',
        diseases:'',

    });

    const handleChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value });

    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Donor Data:" , formData);

        try{
            const res = await fetch(`${process.env.REACT_APP_API_URL}/donors`,{
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            alert(data.message); // Show server response
        

        }
        catch(error){
            console.error('Submit error:',error);
        }
    };


    return(
        
            <form onSubmit = { handleSubmit } className = "flex justify-center space-x-10" >

               <div className ="flex flex-col w-[400px] h-[500px] ml-10 shadow-md pl-6 pt-4 " ><h1 className ="font-bold text-xl text-blue-950 ">Donor</h1>
               <label className ="mb-10 mt-5">Name <br></br>
                <input className= "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px] " type ="text" name = "name" onChange ={handleChange} placeholder = "Username"></input></label> 
               <label className ="mb-10">Address <br></br>
                <input className ="focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px]"type ="text" name = "address" onChange = {handleChange} placeholder ="Address"></input></label>
               <label className ="mb-10">Blood Group <br></br>
               <select className = "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px] rounded-none"type ="text" name = "bloodGroup" onChange = {handleChange}>
                <option value="" className ="text-gray-500">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A−</option>
                <option value="B+">B+</option>
                <option value="B-">B−</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB−</option>
                <option value="O+">O+</option>
                <option value="O-">O−</option>
                </select></label>
               <label className ="mb-10">Mobile No. <br></br>
               <input className = "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px]" type ="text" name = "phone" onChange = {handleChange} placeholder ="Mobile no/Landline"></input></label>
               <label className ="mb-10">Email <br></br>
               <input className ="focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px]"type ="text" name = "email" onChange = {handleChange} placeholder ="Email"></input></label>
               </div>

               <div className = "flex flex-col w-[400px] h-[500px] ml-10 shadow-md pl-6 pt-8 ">
               <label className ="mb-3 mt-6">Weight <br></br>
               <input className= "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px] "type ="Number" name = "weight" onChange = {handleChange} placeholder ="Weight"></input></label>
               <label className ="mb-3 mt-5">Age <br></br>
               <input className= "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px] "type ="Number" name = "age" onChange = {handleChange} placeholder ="Enter Your Age"></input></label>
               <label className ="mb-10 mt-5">Diseases <br></br>
               <input className= "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px] "type ="text" name = "diseases" onChange = {handleChange} placeholder ="Enter Disease"></input></label>
               <button type = "submit" className = "bg-[rgb(42,49,81)] text-white w-[250px] h-[30px] hover:bg-[rgba(42,49,81,0.85)]">Submit</button>
               </div>

               
            </form>
       
    );

}

export default Donorform;
