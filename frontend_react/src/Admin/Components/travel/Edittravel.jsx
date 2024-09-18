import React from "react";
import {  useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../css/admin.css";
import axios from "axios";
import Swal from "sweetalert2";
import NavSide from "../../layouts/NavSide";
const Edittravel = () => {
  const { id } = useParams();
  const [image,setImage] = useState()
  const [imageData,setImageData] = useState()
  const [destination,setdestination] = useState("") ;
  const [description,setdescription] = useState("") ;
  const [start_date,setStartDate] = useState("")
  const [end_date,setEndDate] = useState("")
  const [ticket_price,setPrice] = useState("")
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!(localStorage.getItem("isLogin")) && !(localStorage.getItem("isAdmin"))){
      navigate("/login")
  }else{
    axios
      .get(`travel/${id}`)
      .then((response) => {
        setImageData(response.data.image)
        setdestination(response.data.destination);
        setdescription(response.data.description);
        setStartDate(response.data.start_date);
        setEndDate(response.data.end_date);
        setPrice(response.data.ticket_price);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    
  }, [id,navigate]);
  const updateTravel = (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append("image",image)
    formdata.append("destination",destination)
    formdata.append("description",description)
    formdata.append("start_date",start_date)
    formdata.append("end_date",end_date)
    formdata.append("ticket_price",ticket_price)
    axios.post(`travel/${id}`,formdata).then((res)=>{
      Swal.fire({
        title: res.data.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500
        });
        navigate("/dashboard"); 
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
          <div className="p-4 bg-white rounded-lg mt-14">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Edit Travel
                  </h1>
                  <form
                    onSubmit={updateTravel}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                  <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        image
                      </label>
                      <input
                        type="file"
                        name="email"
                        id="image"
                        onChange={(e)=>setImage(e.target.files[0])}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <br/>
                      <img style={{height:"150px"}}  src={`http://127.0.0.1:8000/storage/${imageData}`} alt="" />
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
                        id="email"
                        onChange={(e)=>setdestination(e.target.value)}
                        value={destination}
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
                        description
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e)=>setdescription(e.target.value)}
                        value={description}
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
                        start date
                      </label>
                      <input
                        type="date"
                        name="email"
                        id="email"
                        onChange={(e)=>setStartDate(e.target.value)}
                        value={start_date}
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
                        end date
                      </label>
                      <input
                        type="date"
                        name="email"
                        id="email"
                        onChange={(e)=>setEndDate(e.target.value)}
                        value={end_date}
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
                        ticket price
                      </label>
                      <input
                        type="number"
                        name="email"
                        id="email"
                        onChange={(e)=>setPrice(e.target.value)}
                        value={ticket_price}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      update
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

export default Edittravel;
