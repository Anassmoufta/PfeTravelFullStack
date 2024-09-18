import React from "react";
import NavSide from "../../layouts/NavSide";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../../css/admin.css";
const ReservByUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(()=>{
    if(!(localStorage.getItem("isLogin")) && !(localStorage.getItem("isAdmin"))){
      navigate("/login")
  }
  },[navigate])
  useEffect(() => {
    axios
      .get(`reservation/${id}`)
      .then((res) => {
        setReservation(res.data.reservations[0].travel);
        setUser(res.data.reservations[0]);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const deleteReservation = (travel_id) => {
    const user_id = user.id;
    const isConfirm = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      axios
        .post("reservation", {
          user_id,
          travel_id,
        })
        .then((res) => {
          axios
            .get(`reservation/${id}`)
            .then((res) => {
              setReservation(res.data.reservations[0].travel);
              setUser(res.data.reservations[0]);
              setloading(false);
            });
        });
    }
  };
  return (
    <div>
      <div>
        {/*side-bare and nav-bar*/}
        <NavSide />
        <div className="sm:ml-64">
          <br />
          <br />
          <br />
          <h1 className="ml-6 text-3xl font-bold">
            All Reservation For {user.name}
          </h1>
          <div className="p-4 border-gray-200 rounded-lg mt-14">
            <div className="grid ">
              {loading ? (
                <>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div role="status" className="flex items-center justify-center">
          <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
  
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </>
              ) : (
                reservation.map((reserv) => {
                  return (
                    <div>
                      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
                        <div className="md:flex">
                          <div className="md:shrink-0">
                            <img
                              className="object-cover w-full h-48 md:h-full md:w-48"
                              src={`http://127.0.0.1:8000/storage/${reserv.image}`}
                              alt="Modern building architecture"
                            />
                          </div>
                          <div className="p-5">
                            <h2
                              style={{ color: "black" }}
                              className="text-2xl font-bold"
                            >
                              {reserv.destination}
                            </h2>
                            <p className="mt-2 text-slate-500">
                              {reserv.description}
                            </p>
                          </div>
                          <div className="px-6 pt-4 pb-2">
                            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                              <div className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-clock-history"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                {reserv.start_date}
                              </div>
                            </span>
                            <span className="inline-block w-32 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                              <div className="flex ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-clock-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                </svg>
                                {reserv.end_date}
                              </div>
                            </span>
                            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full ">
                              <div className="flex">
                                {reserv.ticket_price} Dhs
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-currency-dollar"
                                  viewBox="0 0 16 16"
                                >
                                </svg>
                              </div>
                            </span>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 rounded-full ">
                              <div className="flex">
                                <button
                                  onClick={() => deleteReservation(reserv.id)}
                                  type="button"
                                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trash-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </button>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservByUser;
