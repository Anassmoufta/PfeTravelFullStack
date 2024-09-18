import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavSide from "../../layouts/NavSide";
import "../../css/admin.css";
import axios from "axios";
import Swal from "sweetalert2";
const EditUser = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState();
  const [cin, setcin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(!(localStorage.getItem("isLogin")) && !(localStorage.getItem("isAdmin"))){
      navigate("/login")
  }else{
    axios
      .get(`user/${id}`)
      .then((response) => {
        setname(response.data.user.name);
        setemail(response.data.user.email);
        setphone(response.data.user.phone);
        setcin(response.data.user.cin);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    
  }, [id,navigate]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const updateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("cin", cin);
    if (image !== null) {
      formData.append("image", image);
    }

    axios
      .post(`user/${id}`, formData)
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
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <div>
        {/*side-bare and nav-bar*/}
        <NavSide />

        <div
          className="sm:ml-64"
          style={{ position: "relative", bottom: "30px" }}
        >
          <div className="p-4 bg-white border-2 border-gray-200 border-dashed rounded-lg mt-14">
            <br />
            <br />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Edit User
                  </h1>
                  <form
                    onSubmit={updateUser}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your image :
                      </label>
                      <input
                        type="file"
                        name="name"
                        id="name"
                        onChange={handleImageChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your name :
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email :
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your cin :
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="cin"
                        value={cin}
                        onChange={(e) => setcin(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your phone :
                      </label>
                      <input
                        type="number"
                        name="email"
                        id="phone"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Edit User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
