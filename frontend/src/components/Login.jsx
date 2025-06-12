import { useState } from "react";
import LoginImg from "../assets/loginn.png"
import SignUpImg from "../assets/moon.jpeg"

const LoginPage = () => {

  const [isSignIn,setIsSignIn] = useState(true);
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
          <div className="bg-white h-3/4 w-2/5 rounded-tl-2xl rounded-bl-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col gap-3 items-center">
            
            <div className="p-3 mt-8">
              <h1 className="text-[40px] font-extrabold text-red-500">{isSignIn?"Welcome Back":"Welcome"}</h1>
              <h2 className="text-[15px] text-center font-medium text-gray-800">{isSignIn?"Please sign in to continue":"Let's an create account"}</h2>
            </div>

            <div className="flex flex-col w-4/5 items-center">
              {
                !isSignIn && (
                  <>
                    <h1 className="self-start pl-12 font-medium">Name</h1>
                    <input className="rounded-md pl-2 pt-1 pb-1 mb-4 border border-gray-400 w-4/5" type="name" placeholder="Enter your name"/>
                  </>
                )
              }
              <h1 className="self-start pl-12 font-medium">Email</h1>
              <input className="rounded-md pl-2 pt-1 pb-1 mb-4 border border-gray-400 w-4/5" type="email" placeholder="Enter your email"/>
              <h1 className="self-start pl-12 font-medium">Password</h1>
              <input className="rounded-md pl-2 pt-1 pb-1 border border-gray-400 w-4/5" type="password" placeholder="Enter your password"/>
            </div>

            <div className="flex justify-center gap-24 w-4/5  mb-3">
              <div>
                <input type="checkbox" name="Remember me" id="remeber" /> <span className="text-[15px] p-1 font-medium">{isSignIn?"Remember me":"I agree to Privacy & Policy"}</span>
              </div>
              {
                isSignIn && <h2 className="text-[15px] font-medium">Forgot password?</h2>
              }
            </div> 
            

            <div className="flex justify-center w-4/5">
              <button className="border border-solid border-black w-4/5 text-lg rounded-lg pt-1 pb-1 bg-black text-white font-bold">Sign In</button>
            </div>

            <h1 className="mt-2 font-medium">{isSignIn?"Don't have an account?":"Already have an account?"} <span className="text-[#52228c] cursor-pointer" onClick={()=>{
              setIsSignIn(!isSignIn);
            }}>{isSignIn?"Sign Up":"Sign In"}</span></h1>

          </div>


          <div className="h-3/4 w-2/5  rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-gray-200">
            <img 
              src={isSignIn?LoginImg:SignUpImg} 
              alt="side-img" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
    )
}

export default LoginPage;

