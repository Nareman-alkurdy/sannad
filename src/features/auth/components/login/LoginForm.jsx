// import React from "react";
// import { Link } from "react-router-dom";

// const LoginForm = () => {
//   return (
//     <div className="w-full max-w-[380px] text-left">
//       <h2 className="text-[36px] leading-[30px] tracking-[0.5px] font-medium font-inter mb-2">
//         Log in to Exclusive
//       </h2>
//       <p className="text-[16px] leading-[24px] font-normal font-poppins text-gray-500 mb-6">
//         Enter your details below
//       </p>

//       <input
//         type="text"
//         placeholder="Email or Phone Number"
//         className="mb-4 w-full px-0 py-2 border-b border-gray-400 focus:outline-none focus:border-black bg-white"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         className="mb-4 w-full px-0 py-2 border-b border-gray-400 focus:outline-none focus:border-black bg-white"
//       />

//       <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm mb-2">
//         Log In
//       </button>



//       <div className="flex justify-between items-center mt-4 mb-6 text-sm">
//   <Link
//     to="/signup"
//     className="border border-red bg-red-500 text-white px-4 py-1 rounded text-black  hover:text-white transition  rounded hover:bg-red-600"
//   >
//     Log in
//   </Link>

//   <Link
//     to="/forgot-password"
//     className="text-red-500 underline"
//   >
//     Forgot Password?
//   </Link>
// </div>


      
       
    
//     </div>
//   );
// };

// export default LoginForm;


// import { Link } from "react-router-dom";

// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "axios";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const schema = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Password must be strong"
//     )
//     .required("Password is required"),
// });

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const next = searchParams.get("next");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post("https://fakeapi.platzi.com/en/rest/auth/login", data);
//       localStorage.setItem("user", JSON.stringify(res.data));
//       toast.success("Welcome back!");
//       navigate(next || "/");
//     } catch (err) {
//       toast.error("Invalid credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <h2 className="text-[36px] font-medium">Log in to Exclusive</h2>
//       <p className="text-gray-500">Enter your details below</p>

//       <input
//         type="email"
//         placeholder="Email"
//         {...register("email")}
//         className="w-full border-b border-gray-400 py-2 focus:outline-none"
//       />
//       {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

//       <input
//         type="password"
//         placeholder="Password"
//         {...register("password")}
//         className="w-full border-b border-gray-400 py-2 focus:outline-none"
//       />
//       {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

//       <button
//         type="submit"
//         className="w-full border border-black px-6 py-3 text-black text-base rounded-none hover:bg-black hover:text-white transition"
//       >
//         Log In
//       </button>

//       <div className="flex justify-between items-center mt-4 text-sm">
//         <Link
//           to="/signup"
//           className="border border-black px-4 py-1 rounded-none text-black hover:bg-black hover:text-white transition"
//         >
//           Sign Up
//         </Link>
//         <Link to="/forgot-password" className="text-red-500 underline">
//           Forgot Password?
//         </Link>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;


import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be strong"
    )
    .required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://fakeapi.platzi.com/en/rest/auth/login", data);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Welcome back!");
      navigate(next || "/");
    } catch (err) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[380px] text-left">
      <h2 className="text-[36px] leading-[30px] tracking-[0.5px] font-medium font-inter mb-2">
        Log in to Exclusive
      </h2>
      <p className="text-[16px] leading-[24px] font-normal font-poppins text-gray-500 mb-6">
        Enter your details below
      </p>

      <input
        type="email"
        placeholder="Email or Phone Number"
        {...register("email")}
        className="mb-4 w-full px-0 py-2 border-b border-gray-400 focus:outline-none focus:border-black bg-white"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="mb-4 w-full px-0 py-2 border-b border-gray-400 focus:outline-none focus:border-black bg-white"
      />
      {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

      

      <div className="flex justify-between items-center mt-4 mb-6 text-sm">
        <button
        type="submit"
        className="border border-red bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Log In
      </button>
        <Link to="/forgot-password" className="text-red-500 underline">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
