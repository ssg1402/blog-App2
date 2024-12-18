import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {InputBox} from "../components/InputBox"
import {SubHeading} from "../components/SubHeading"

export const Signin= () =>{
    return (
        <div className="min-h-screen w-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #750b5b, #1c759e)' }}>
        
    <div className=" relative w-80 rounded-lg p-6 text-center shadow-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #db6910, #43084e' }}>
      {/* Shiny Effect Overlay */}
      <div className=" absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-white/60 to-transparent animate-spin-slow"></div>
  
      {/* Content stays above overlay */}
      <div className="relative z-10">
        <Heading label={"Sign-In"} />
        <SubHeading label={"Enter your credentials"} />
        <InputBox 
          onChange={(e) => setname(e.target.value)} 
          placeholder="Email/UserName" 
         
        />
        <InputBox 
          onChange={(e) => setpassword(e.target.value)} 
          placeholder="Password" 
          label={""} 
        />

        <div className="pt-4">
          <Button 
            onClick={async () => {
              const response = await axios.post("http://localhost:2000/api/v1/user/signin", {
                email,
                password
              });
              localStorage.setItem("token", response.data.token);
              navigate("/Dashboard");
            }} 
            label={"Sign-Up"} 
            
          />
          <SubHeading label={"Don't Have an Account"} />
        </div>
      </div>
    </div>
  </div>
)}