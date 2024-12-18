import {useState, userState} from "react"
import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {InputBox} from "../components/InputBox"
import {SubHeading} from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup=()=>{
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [bio,setbio]=useState("");
    const [role,setrole]=useState("");
    const navigate=useNavigate();

    return <div className="min-h-screen w-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #750b5b, #1c759e)' }}>
        
    <div className=" relative w-300 rounded-lg p-6 text-center shadow-lg overflow-hidden" style={{ background: 'linear-gradient(135deg,rgb(255, 151, 71),rgb(215, 74, 240)' }}>
      {/* Shiny Effect Overlay */}
      <div className=" absolute top-[-50%] left-[-50%] w-[100%] h-[200%] bg-gradient-radial from-white/60 to-transparent animate-spin-slow"></div>
  
      {/* Content stays above overlay */}
      <div className="relative z-10">
        <Heading label={"Sign-Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox 
          onChange={(e) => setname(e.target.value)} 
          placeholder="First Name" 
         
        />
        <InputBox 
          onChange={(e) => setemail(e.target.value)} 
          placeholder="example@gmail.com" 
          label={""} 
        />
        <InputBox 
          onChange={(e) => setpassword(e.target.value)} 
          placeholder="Password" 
          label={""} 
        />
        <InputBox 
          onChange={(e) => setbio(e.target.value)} 
          placeholder="Status" 
          label={""} 
        />
        <InputBox 
          onChange={(e) => setrole(e.target.value)} 
          placeholder="Role" 
          label={""} 
        />
        <div className="pt-4">
          <Button 
            onClick={async () => {
              const response = await axios.post("http://localhost:2000/api/v1/user/signup", {
                name,
                email,
                password,
                bio,
                role
              });
              localStorage.setItem("token", response.data.token);
              navigate("/Dashboard");
            }} 
            label={"Sign-Up"} 
          />
        </div>
      </div>
    </div>
  </div>
}  