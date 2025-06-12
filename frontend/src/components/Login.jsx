import LoginImg from "../assets/login.png"

const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
          <div className="bg-white h-3/4 w-2/5 rounded-tl-2xl rounded-bl-2xl shadow-2xl flex flex-col gap-3 items-center">
            <div className="p-5 mt-6">
              <h1 className="text-[40px] font-extrabold text-[#4C35C4]">Welcome Back</h1>
              <h2 className="text-[15px] text-center font-medium">Please sign in to continue</h2>
            </div>
            <div className="flex flex-col w-4/5 items-center">
              <h1 className="self-start pl-12 font-medium">Email</h1>
              <input className="rounded-md pl-2 pt-1 pb-1 mb-4 border border-gray-400 w-4/5" type="email" placeholder="Enter your email"/>
              <h1 className="self-start pl-12 font-medium">Password</h1>
              <input className="rounded-md pl-2 pt-1 pb-1 border border-gray-400 w-4/5" type="password" placeholder="Enter your password"/>
            </div>

            <div className="flex justify-center gap-24 w-4/5  mb-3">
              <div>
                <input type="checkbox" name="Remember me" id="remeber" /> <span className="text-[15px] p-1 font-medium">Remember me</span>
              </div>
                <h2 className="text-[15px] font-medium">Forgot password?</h2>
            </div> 
            

            <div className="flex justify-center w-4/5">
              <button className="border border-solid border-black w-4/5 text-lg rounded-lg pt-1 pb-1 bg-[#4C35C4] text-white font-bold">Sign In</button>
            </div>

            <h1 className="mt-4 font-medium">Don't have an account? <span className="text-[#4E29BD] cursor-pointer">Sign Up</span></h1>

          </div>


          <div className="h-3/4 w-2/5 rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl">
            <img 
              src={LoginImg} 
              alt="side-img" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
    )
}

export default LoginPage;

