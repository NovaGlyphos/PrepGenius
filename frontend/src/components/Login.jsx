import LoginImg from "../assets/login.png"

const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
          <div className="bg-white h-3/4 w-2/5 rounded-tl-2xl rounded-bl-2xl shadow-2xl flex flex-col gap-3 items-center">
            <div className="p-7">
              <h1 className="text-[30px] font-extrabold text-purple-600">Welcome Back</h1>
              <h2 className="text-[13px] text-center font-medium">Please sign in to continue</h2>
            </div>
            <div className="flex flex-col w-4/5 items-center">
              <input className="rounded-md pl-2 pt-1 pb-1 mb-4 border border-gray-400 w-4/5" type="email" placeholder="Enter your email"/>
              <input className="rounded-md pl-2 pt-1 pb-1 border border-gray-400 w-4/5" type="password" placeholder="Enter your password"/>
            </div>
            <div className="flex justify-between w-4/5">
            <div>
              <input type="checkbox" name="Remember me" id="remeber" /> <span  className="text-[15px] p-1">Remember me</span></div>
              <h2>Forgot password?</h2>
            </div>  

            <button>Sign In</button>
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

