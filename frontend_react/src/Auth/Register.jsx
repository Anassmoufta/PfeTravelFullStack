import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [image, setimage] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [cin, setCin] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("phone", phone);
    formdata.append("cin", cin);
    formdata.append("image", image);
    axios
      .post("register", formdata)
      .then((res) => {
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data.message);
          navigate("/login");
        }
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  console.log(image);
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/40/Mamamoo_Travel_logo.png"
                    className="mr-3 h-28"
                    alt="FlowBite Logo"
                  />
                </div>
                <label className="ml-32 text-xl font-bold"></label>
                <h1
                  style={{ color: "black" }}
                  className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                >
                  create account
                </h1>
                <form
                  onSubmit={register}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="image"
                      style={{ color: "black" }}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your image :
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={(e) => setimage(e.target.files[0])}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      style={{ color: "black" }}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name :
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{ color: "black" }}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email :
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
                      style={{ color: "black" }}
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
                  <div>
                    <label
                      htmlFor="cin"
                      style={{ color: "black" }}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your cin :
                    </label>
                    <input
                      type="text"
                      name="cin"
                      id="cin"
                      onChange={(e) => setCin(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{ color: "black" }}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your phone :
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    valid
                  </button>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default Register;
