import React, {useState} from 'react'; // 

function Receiverform({onSubmit}) {
    const [ formData , setFormData ] = useState({ 
        name: '', 
        address: '',
        bloodGroup: '', 
        phone: '',
        email: '',
        

    });

    const handleChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value });

    }; 

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page from reloading
        console.log("Receiver Data:" , formData);
        if( onSubmit ){
        onSubmit(formData); //pass from data to parent(receiver.jsx)
        
        }
        

        try{
            //send POST req to backend with receiver data
            const res = await fetch(`${process.env.REACT_APP_API_URL}/receivers`,{
                method: "POST",
                headers: {"Content-type": "application/json"}, //tell server its json
                body: JSON.stringify(formData) // convert formdata into json string
            });

            const data = await res.json(); // Parsse server's json response
             // only show success after server responds
            alert(data.message); // Show server response(if any returned from server)
        

        }
        catch(error){
            // if there's a network or seerver error show it in console
            console.error('Submit error:',error);
        }
    };


    return(
        
            <form onSubmit = { handleSubmit } className = "flex justify-center space-x-10" >


               <div className ="flex  w-[700px] h-[400px] ml-10 shadow-md pl-6 pt-4 " >
                <div className = "left pl-6 pt-4 flex flex-col ">
                <h1 className ="font-bold text-xl text-blue-950 ">Receiver</h1>
               <label className ="mb-16 mt-9">Name <br></br>
                <input className= "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px] " type ="text" name = "name" onChange ={handleChange} placeholder = "Username"></input></label> 
               <label className ="mb-16">Address <br></br>
                <input className ="focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px]"type ="text" name = "address" onChange = {handleChange} placeholder ="Address"></input></label>
               <label className ="mb-16">Blood Group <br></br>
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
                
</div>

<div className ="flex flex-col mt-20 pl-20">          
               <label className ="mb-16">Mobile No. <br></br>
               <input className = "focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px]" type ="text" name = "phone" onChange = {handleChange} placeholder ="Mobile no/Landline"></input></label>
               <label className ="mb-16">Email <br></br>
               <input className ="focus:outline-none focus:ring-0 border-b-2 border-blue-950 w-[250px]"type ="text" name = "email" onChange = {handleChange} placeholder ="Email"></input></label>
               <button type = "submit" className = "bg-[rgb(42,49,81)] text-white w-[250px] h-[30px] hover:bg-[rgba(42,49,81,0.85)] ">Submit</button>
</div>

               </div>

               
            </form>
       
    );

}

export default Receiverform;