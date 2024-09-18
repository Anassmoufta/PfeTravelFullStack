import { useEffect, useState } from "react";
import NavSide from "./../../layouts/NavSide";
import { React } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddReservation = () => {
  const [user_id, setUserID] = useState();
  const [travel_id, setTravelId] = useState();
  const [travels, setTravels] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!(localStorage.getItem("isLogin")) && !(localStorage.getItem("isAdmin"))){
      navigate("/login")
  }else{
    axios.get("users").then((res)=>{
        setUsers(res.data.users)
    }).catch((err)=>{
        console.log(err)
    })
    axios.get("travels").then((res)=>{
        setTravels(res.data.travels)
    }).catch((err)=>{
        console.log(err);
    })
  }
  },[navigate])
  const addresevation = (e) => {
    e.preventDefault();
    axios.post("add/reservation",{
        user_id,
        travel_id
    }).then((res)=>{
        if (res.data.status === 400) {
            Swal.fire({
                position: "center",
                icon: "error",
                text: res.data.message,
                showConfirmButton: false,
                timer: 1500,
                });
        }
        if (res.data.status === 401) {
            Swal.fire({
              position: "center",
              icon: "error",
              text: "Please check inputs",
              showConfirmButton: false,
              timer: 1500,
            });
        }
        if (res.data.status === 200){
            Swal.fire({
                position: "center",
                icon: "success",
                text: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard");
        }
    }).catch((err)=>{
        console.log(err);
    })

  }
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
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Reservation
                  </h1>
                  <form onSubmit={addresevation} className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        destination
                      </label>
                      <select className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={(e)=>setUserID(e.target.value)}>
                      <option value="" selected disabled>Select an user</option>
                        {users.map((user,index)=>{
                            return (
                                <option value={user.id} key={index}>{user.name}</option>
                            )
                        })}
                      </select>

                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        destination
                      </label>
                      <select className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={(e)=>setTravelId(e.target.value)}>
                      <option value="" selected disabled>Select Travel</option>
                        {travels.map((tra,index)=>{
                            return (
                                <option value={tra.id} key={index}>{tra.destination}</option>
                            )
                        })}
                      </select>
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

export default AddReservation;
