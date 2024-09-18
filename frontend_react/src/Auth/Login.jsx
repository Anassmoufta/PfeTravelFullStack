import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post("login", {
      email ,
      password
    }).then((res)=>{
          if(res.data.status === 200){
            localStorage.setItem("isLogin",true)
            if(res.data.type === "admin"){
              localStorage.setItem("isAdmin",true)
              Swal.fire({
                position: "center",
                icon: "success",
                text: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard")
            }else{
              Swal.fire({
                position: "center",
                icon: "success",
                text: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/")
            }
          }else{
            Swal.fire({
              position: "center",
              icon: "error",
              text: "Password or email not exist",
              showConfirmButton: false,
              timer: 1500,
              });
          }
    })
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center">
              <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/40/Mamamoo_Travel_logo.png"
                    className="mr-3 h-28"
                    alt="FlowBite Logo"
                  />
              </div>
              <label className="ml-32 text-xl font-bold"></label>
              <br/>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    style={{color:"black"}}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    style={{color:"black"}}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Log-in
                </button>
                <center><Link to={"/register"}>create new account</Link></center>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
