import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const AllReservation = () => {
  const [travels, setTravel] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("travels").then((res) => {
      setTravel(res.data.travels);
      setLoading(false);
    });
    axios.get("user/info").then((res) => {
      setUser(res.data.user);
    });
  }, [navigate]);
  const filteredtravel = travels.filter((travel) =>
    travel.destination.toLowerCase().includes(search.toLowerCase())
  );
  const addresevation = (travel_id) => {
    const user_id = user.id;
    axios
      .post("add/reservation", {
        user_id,
        travel_id,
      })
      .then((res) => {
        if (res.data.status === 400) {
          Swal.fire({
            position: "center",
            icon: "error",
            text: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (res.data.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4 mr-20 mt-9">
          <div>
            {/*section*/}
            <strong>
              <h1 style={{ fontSize: "19px", marginLeft: "60px" }}>
                All Travels available
              </h1>
            </strong>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              style={{ color: "black" }}
              onChange={(e) => setSearch(e.target.value)}
              className="block p-2 pl-10 text-sm bg-white border border-gray-300 rounded-lg shadow-md w-80 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>

        {loading ? (
          <>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div role="status" className="flex items-center justify-center">
          <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </>
        ) : (
          <div className="grid grid-cols-1 gap-4 m-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredtravel.map((travel) => {
              return (
                <div>
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                    <Link href="#">
                      <img
                        className="rounded-t-lg"
                        src={`http://127.0.0.1:8000/storage/${travel.image}`}
                        alt=""
                      />
                    </Link>
                    <br />
                    <div className="px-5 pb-5">
                    <Link href="#">
                        <h5 style={{ color: "blue", fontSize:"x-large" }} className="text-xl font-semibold tracking-tight text-gray-900">
                          {travel.destination}
                        </h5>
                      </Link>
                      <br/>
                      <Link href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                          {travel.description}
                        </h5>
                      </Link>
                      <br />
                      <div className="flex items-center justify-between">
                        <span
                          style={{ color: "indigo" }}
                          className="text-3xl font-bold text-gray-900"
                        >
                          {travel.ticket_price} Dhs
                        </span>
                        <button
                          type="button"
                          onClick={() => addresevation(travel.id)}
                          class="text-white flex bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                          Book Now
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReservation;
