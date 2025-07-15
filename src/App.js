
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital,faHandHoldingDroplet,faGripVertical,faHeart,faHeartPulse,faGear
  }from '@fortawesome/free-solid-svg-icons';
import Donorform from './components/Donorform';
import {BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Receiver from './pages/Receiver';
import Hospital from './pages/Hospital';


function App() {
  return (
<Router>

   <div className = "homepage flex h-screen overflow-hidden">
  <div className="nav flex flex-col justify-between w-[300px] h-screen bg-slate-50 ">

  <div className="logo flex item-centre gap-4" >
{/* logo */}<FontAwesomeIcon icon={faHandHoldingDroplet} className="text-red-500 size-10 ml-6 mt-3 " />
<div className = "mt-5">
<span className = "text-2xl  text-red-500 font-bold">
  Blood
  </span>
  <span className = " text-2xl text-gray-600">line</span>
</div>
  </div>


<Link to = "/" className = "elements mt-[18px] gap-4" >
<FontAwesomeIcon icon ={faGripVertical}></FontAwesomeIcon>Dashboard</Link>
<Link to ="/donor" className ="elements gap-4">
<FontAwesomeIcon icon ={faHeart}></FontAwesomeIcon>Donors</Link>
<Link to = "/receiver" className ="elements gap-4">
<FontAwesomeIcon icon ={faHeartPulse}></FontAwesomeIcon>Receiver</Link>
<Link to= "/hospital" className ="elements gap-4">
<FontAwesomeIcon icon ={faHospital}></FontAwesomeIcon>Hospitals</Link>
<Link className ="elements gap-4">
<FontAwesomeIcon icon ={faGear}></FontAwesomeIcon>Settings</Link>
<div className = "quote img w-[230px] h-[170px] mt-[10px] text-white text-center pt-2 pl-1 ml-1.5 mb-1 font-semibold rounded-xl text-sm bg-[rgba(231,46,86,0.89)]">
  
 "Donate your blood for a reason,<br></br>
let the reason to be life"
</div>


  </div>  {/* nav */}





  <div className ="remaining  w-full h-screen">
  <div className="main-content flex-1 p-10">
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/donor" element={<Donorform />} />
              <Route path ="/receiver" element ={<Receiver />} />
              <Route path = "/hospital" element ={<Hospital/>} />
        </Routes>
      </div>  
  </div>

   </div>
   </Router>
  );
}

export default App;
