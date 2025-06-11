import LoginImg from "../assets/ballon.jpg"

const LoginPage = () => {
    return (
        <div className="flex h-screen">
          <div className="border-solid border-8 border-red-600 h-full w-3/5"></div>
          <div className="border-solid border-8 border-blue-600 h-full w-2/5 relative">
            <img 
              src={LoginImg} 
              alt="side-img" 
              className="h-full w-full"
            />
          </div>
        </div>
    )
}

export default LoginPage;

