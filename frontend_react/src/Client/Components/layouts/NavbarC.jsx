import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const NavbarC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  console.log(isLogin);
  useEffect(() => {
    if (isLogin) {
      axios.get("user/info").then((res) => {
        setUser(res.data.user);
      });
    }
  }, [isLogin]);
  const checkIsLogin = () => {
    setIsLogin(localStorage.getItem("isLogin"));
  };
  const handleLogout = () => {
    axios.post("logout").then((res) => {
      localStorage.removeItem("isLogin");
      Swal.fire({
        position: "center",
        icon: "success",
        text: res.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      checkIsLogin();
    });
  };
  return (
    <div>
      <nav style={{ background: "rgb(240,255,255)" }} className="bg-black border-gray-200 dark:black">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Mamamoo_Travel_logo.png"
              className="h-12 mr-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-black">
              
            </span>
          </Link>
          {isLogin ? (
            <>
              <div className="flex items-center md:order-2 w-36 ">
                <button
                  style={{ background: "rgb(240,255,255)"}}
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={`http://127.0.0.1:8000/storage/${user.image}`}
                    alt=""
                  />
                  <h3 className="ml-3" style={{ color: "black" }}>
                    {user.name}
                  </h3>
                </button>
              </div>
              <div
                style={{ background: "rgb(240,255,255)",color: "black" }}
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul style={{ background: "rgb(240,255,255)" }}
                className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to={"/"}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                      style={{ color: "black" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/my-reservation"}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      style={{ color: "black" }}
                    >
                      My reservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/choose/review"}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      style={{ color: "black" }}
                    >
                      Add Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/reviews"}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      style={{ color: "black" }}
                    >
                      All Reviews
                    </Link>
                  </li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center md:order-2 w-36 ">
                
                  <span className="sr-only">Open user menu</span>

                  <Link to={"/login"} >
                  <h3 className="ml-3" style={{ color: "white" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </h3>
                  </Link>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul style={{ background: "rgb(240,255,255)" }}
                className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to={"/"}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                      style={{ color: "black" }}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/reviews"}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      style={{ color: "black" }}
                    >
                      All Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarC;
