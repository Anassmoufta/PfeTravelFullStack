import React from "react";
import NavbarC from "../layouts/NavbarC";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Reviews() {
  const [Allreviews, setAllreviews] = useState([]);
  const [search, setsearch] = useState("");
  const [myreviews, setmyreviews] = useState([]);
  const [ismyreviews, setismyreviews] = useState(false);
  const [isallreviews, setisallreviews] = useState(true);
  const [review, setReview] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/login");
    } else {
      axios.get("reviews").then((res) => {
        setAllreviews(res.data.reviews);
        setLoading(false);
      });
      axios.get("review/user").then((res) => {
        setmyreviews(res.data.review);
        setLoading(false);
      });
    }
  }, [navigate]);
  useEffect(() => {
    if (review === "myreview") {
      setisallreviews(false);
      setismyreviews(true);
    } else if (review === "allReviews") {
      setisallreviews(true);
      setismyreviews(false);
    }
  }, [review]);
  const filteredAllreviews = Allreviews.filter((review) => {
    return review.name.toLowerCase().includes(search.toLowerCase());
  });
  const filteredmyreviews = myreviews.filter((review) => {
    return review.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <NavbarC />
      <div className="mr-16 sm:ml-16">
        <div className="border-gray-200 rounded-lg mt-14">
          {loading ? (
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div role="status" className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class="inline w-10 h-10 mr-2 text-gray-200 animate-spin  fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          ) : (
            <>
              <center>
                <h1 className="mb-10 text-3xl font-bold ">
                  All Reviews For All Users
                </h1>
              </center>
              <br />
              {/*start */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <br />
                <div className="flex items-center justify-between pb-4 bg-white">
                  <h1
                    style={{ color: "black" }}
                    className="ml-6 text-2xl font-bold"
                  >
                    All Reviews
                  </h1>
                  <select
                    id="rating"
                    name="rating"
                    onChange={(e) => setReview(e.target.value)}
                    className="block w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="allReviews">All Reviews</option>
                    <option value="myreview">My Reviews</option>
                  </select>
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
                      onChange={(e) => {
                        setsearch(e.target.value);
                      }}
                      id="table-search-users"
                      className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for user or Destination"
                    />
                  </div>
                </div>
                <br />
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Destination
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Commant
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Stars
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isallreviews ? (
                      filteredAllreviews.map((review, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <th
                              scope="row"
                              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <img
                                className="w-10 h-10 rounded-full"
                                src={`http://127.0.0.1:8000/storage/${review.image}`}
                                alt=""
                              />
                              <div className="pl-3">
                                <div className="text-base font-semibold">
                                  {review.name}
                                </div>
                                {/*
                                <div className="font-normal text-gray-500">
                                  {review.email}
                                </div>
                                */}
                              </div>
                            </th>
                            <td className="px-6 py-4">
                              <div
                                style={{ color: "white" }}
                                className="text-base font-semibold"
                              >
                                {review.destination}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                                {review.comment}
                              </div>
                            </td>
                            <td className="flex px-6 py-4">
                              {review.stars}/5
                              <svg
                                className="w-6 h-6 mr-2 text-yellow-500 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 3.786l3.094 6.578 6.906 1.066-5 4.867 1.188 6.875L12 18.22l-6.188 3.152 1.188-6.875-5-4.867 6.906-1.066L12 3.786z" />
                              </svg>
                            </td>
                          </tr>
                        );
                      })
                    ) : ismyreviews ? (
                      filteredmyreviews.map((review, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <th
                              scope="row"
                              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <img
                                className="w-10 h-10 rounded-full"
                                src={`http://127.0.0.1:8000/storage/${review.image}`}
                                alt=""
                              />
                              <div className="pl-3">
                                <div className="text-base font-semibold">
                                  {review.name}
                                </div>
                                <div className="font-normal text-gray-500">
                                  {review.email}
                                </div>
                              </div>
                            </th>
                            <td className="px-6 py-4">
                              <div
                                style={{ color: "white" }}
                                className="text-base font-semibold"
                              >
                                {review.destination}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                                {review.comment}
                              </div>
                            </td>
                            <td className="flex px-6 py-4">
                              {review.stars}/5
                              <svg
                                className="w-6 h-6 mr-2 text-yellow-500 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 3.786l3.094 6.578 6.906 1.066-5 4.867 1.188 6.875L12 18.22l-6.188 3.152 1.188-6.875-5-4.867 6.906-1.066L12 3.786z" />
                              </svg>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <div
                        className="px-4 py-3 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md"
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="w-6 h-6 mr-4 text-teal-500 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">
                              Our privacy policy has changed
                            </p>
                            <p className="text-sm">
                              Make sure you know how these changes affect you.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              <br />
            </>
          )}
          {/*end */}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
