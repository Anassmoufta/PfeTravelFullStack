import React from "react";
import AllUsers from "./user/AllUsers";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alltravels from "./travel/Alltravels";
import NavSide from "../layouts/NavSide";
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [users,setUsers] = useState([]);
  const [travels,setTravels] = useState([])
  const [admins,setAdmins] = useState([])
  useEffect(() => {
    if(!(localStorage.getItem("isLogin")) && !(localStorage.getItem("isAdmin"))){
      navigate("/login")
    }else{
      axios.get("user/info")
      .then((res) => setUser(res.data.user));
      axios.get("users")
      .then((res) => setUsers(res.data.users));
      axios.get("all/admin")
      .then((res) => setAdmins(res.data.admin));
      axios.get("travels")
      .then((res) => setTravels(res.data.travels));
    }
      
  }, [ navigate]);
  return (
    <div>
      <div>
         {/*side-bare and nav-bar*/}
         <NavSide/>
        <div className="sm:ml-64">
          <div className="p-4 border-2 border-gray-200 rounded-lg mt-14">
            <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded shadow-lg bg-gray-50 dark:bg-gray-800">
            <p className="mr-6 text-2xl ">{users.length} Clients</p>
            <p className="text-2xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          </svg>
            </p>
          </div>
              <div className="flex items-center justify-center h-24 rounded shadow-lg bg-gray-50 dark:bg-gray-800">
                <p className="mr-6 text-2xl ">{travels.length} Travels</p>
                <p className="text-2xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    className="bi bi-bus-front-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A43.608 43.608 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1v2ZM3.552 3.22A43.306 43.306 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44.304 44.304 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994ZM8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.304 44.304 0 0 0 8 4Zm-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z" />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded shadow-lg bg-gray-50 dark:bg-gray-800">
                <p className="mr-6 text-2xl ">{admins.length} Admins</p>
                <p className="text-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/>
              </svg>
                </p>
              </div>
            </div>
            <br />
            <AllUsers />
            <br/><br/>
            <Alltravels/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
