import React from "react";
import LoginForm from "../components/login/LoginForm";
import loginVisual from "/src/assets/SideImage.png"; // الصورة الجانبية

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[0px]  px-4 gap-12 relative top-[-70px]">


      {/* يسار: الصورة */}
      {/* <div className="lg:w-1/2 flex items-start justify-start p-8">
        <img src={loginVisual} alt="Login Visual" className="w-[450px] h-auto" />
      </div> */}

      <div className="flex-1 flex justify-start"> 
  <img
    src={loginVisual}
    alt="Login Visual"
    className="w-full h-auto object-cover"
  />
</div>

      {/* يمين: النموذج */}
      {/* <div className="lg:w-1/2 flex items-center justify-center p-8">
        <LoginForm />
      </div>
     */}

    <div className="flex-1 flex items-center justify-center">
  <div className="w-full max-w-[400px]">
    <LoginForm />
  </div>
</div>
</div>
  );
};

export default Login;
