import React from "react";
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../css/admin.css";
import axios from "axios";
import Swal from "sweetalert2";
import NavSide from "../../layouts/NavSide";
const Addtravel = () => {
  const [image,setImage] = useState();
  const [destination,setdestination] = useState("") ;
  const [description,setDescription] = useState("") ;
  const [start_date,setStartDate] = useState("")
  const [end_date,setEndDate] = useState("")
  const [ticket_price,setPrice] = useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    if(!(localStorage.getItem("isLogin")) && !(localStorage.getItem("isAdmin"))){
      navigate("/login")
  }
  },[navigate])
  const AddTravel = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("destination", destination);
    formData.append("description", description);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    formData.append("ticket_price", ticket_price);
    axios.post("travel",formData).then((res)=>{
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500
        });
        navigate("/dashboard")
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div>
      <div>
         {/*side-bare and nav-bar*/}
         <NavSide/>
        <div
          className="sm:ml-64"
          style={{ position: "relative", bottom: "30px" }}
        >
          <div className="p-4 bg-white border-2 border-gray-200 border-dashed rounded-lg mt-14">
          <br/><br/>  <br/><br/>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Travel
                  </h1>
                  <form
                    onSubmit={AddTravel}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                  <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        name="email"
                        id="image"
                        onChange={(e)=>setImage(e.target.files[0])}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        destination
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="destination"
                        onChange={(e)=>setdestination(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        description
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="description"
                        onChange={(e)=>setDescription(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="description"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        start date
                      </label>
                      <input
                        type="date"
                        name="email"
                        id="date"
                        onChange={(e)=>setStartDate(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        end date
                      </label>
                      <input
                        type="date"
                        name="email"
                        id="end"
                        onChange={(e)=>setEndDate(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ticket price
                      </label>
                      <input
                        type="number"
                        name="email"
                        id="price"
                        onChange={(e)=>setPrice(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Add
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

export default Addtravel;
