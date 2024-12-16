import {useState, userState} from "react"
import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {InputBox} from "../components/InputBox"
import {SubHeading} from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const signup=()=>{
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [bio,setbio]=useState("");
    const [role,setrole]=useState("");
    const navigate=useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div  className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign-Up"}/>
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox onchange={e=>{
                    setname(e.target.value)
                }} placeholder="Ayush" label={"Name"}/>
                <InputBox onchange={e=>{
                    setemail(e.target.value)
                }} placeholder="ayush0293445@gmail.com" label={"Email"}/>
                <InputBox onchange={e=>{
                    setpassword(e.target.value)
                }} placeholder="**********" label={"Password"}/>
                <InputBox onchange={e=>{
                    setbio(e.target.value)
                }} placeholder="i am currently active" label={"Bio"}/>
                <InputBox onchange={e=>{
                    setrole(e.target.value)
                }} placeholder="Assistant Professor" label={"Role"}/>

                <div className="pt-4">
                    <Button onClick={async ()=>{
                        const response= await axios.post("http://localhost:2000/api/v1/user/signup",{
                            name,
                            email,
                            password,
                            bio,
                            role
                        });
                        loacalStorage.setItem("token",response.data.token)
                        navigate("/Dashboard")
                    }} label={"Sign-Up"}/>
                
                </div>
                
            </div>
        </div>
    </div>
    
}