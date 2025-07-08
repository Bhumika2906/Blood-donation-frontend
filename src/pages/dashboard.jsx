import React from 'react';
import { useEffect , useState} from 'react';
import Donorlist from '../components/Donorlist';


function Dashboard() {
    const [donorStats , setDonorStats] = useState({total:0});
    const [receiverStats , setReceiverStats] = useState({ total:0 });

useEffect(() => {
    fetchStats();
}, []);

const fetchStats = async () => {
    try {
        const donorRes = await fetch('http://localhost:5000/stats/donors');
        const donorData = await donorRes.json();
        setDonorStats(donorData);

        const receiverRes = await fetch('http://localhost:5000/stats/receivers');
        const receiverData = await receiverRes.json();
        setReceiverStats(receiverData);
    } catch (error) {
        console.error("Error fetching stats:", error);
    }
};


    return(
    <div>


    {/* // Card stats */}
    <div className="cardstats flex justify-center space-x-20">
        <div className="box1 w-[400px] h-[200px] rounded-[30px] pl-7 pt-5 font-semibold text-2xl bg-[rgb(245,180,192)] text-[rgba(131,8,61,0.88)]">
            Requested

        
           <div className ="boxes text-lg flex font-medium   text-white w-[220px] ml-[150px] mt-1">

            <div className ="w-12 h-19 bg-[rgb(222,100,122)] flex flex-col items-center justify-center rounded-[10px] mr-2 ">O+
                <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-pink-700 flex items-center justify-center" >O-</div>
            </div>
            <div className ="w-12 h-19 bg-[rgb(222,100,122)] flex flex-col items-center justify-center rounded-[10px] mr-2">A+
                 <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-pink-700 flex items-center justify-center" >A-</div>
            </div>
            <div className ="w-12 h-19 bg-[rgb(222,100,122)] flex flex-col items-center justify-center rounded-[10px] mr-2">B+
                <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-pink-700 flex items-center justify-center" >B-</div>
            </div>
            <div className ="w-12 h-19 bg-[rgb(222,100,122)] flex flex-col items-center justify-center rounded-[10px] mr-2 ">AB+
                <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-pink-700 flex items-center justify-center" >AB-</div>
            </div>

           </div>

           <div className ="total w-20  ">
                <div className ="text-sm  ml-2">Total</div>
                <div className ="text-5xl font-normal">{receiverStats.total}</div>
            </div>

        </div>

        

        <div className="box1 w-[400px] h-[200px]  rounded-[30px] pl-7 pt-5 font-semibold text-2xl bg-[rgb(153,244,184)] text-[rgb(13,98,26)]">
            In Stock

            <div className ="boxes text-lg flex font-medium   text-white w-[220px] ml-[150px] mt-1">

            <div className ="w-12 h-19 bg-[rgb(102,184,107)] flex flex-col items-center justify-center rounded-[10px] mr-2 ">O+
                <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-green-700 flex items-center justify-center" >O-</div>
            </div>
            <div className ="w-12 h-19 bg-[rgb(102,184,107)] flex flex-col items-center justify-center rounded-[10px] mr-2">A+
                 <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-green-700 flex items-center justify-center" >A-</div>
            </div>
            <div className ="w-12 h-19 bg-[rgb(102,184,107)] flex flex-col items-center justify-center rounded-[10px] mr-2">B+
                <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-green-700 flex items-center justify-center" >B-</div>
            </div>
            <div className ="w-12 h-19 bg-[rgb(102,184,107)] flex flex-col items-center justify-center rounded-[10px] mr-2 ">AB+
                <div className ="w-12 h-11 rounded-[10px] bg-pink-50 text-green-700 flex items-center justify-center" >AB-</div>
            </div>

           </div>

           <div className ="total w-20  ">
                <div className ="text-sm  ml-2">Total</div>
                <div className ="text-5xl font-normal">{donorStats.total}</div>
            </div>

        </div>
    </div>

{/* //Donorlist */}
<div className ="">
    <Donorlist/>

</div>

    

</div>
    );
}

export default Dashboard;