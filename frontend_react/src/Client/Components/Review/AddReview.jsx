import React, { useEffect } from "react";
import NavbarC from "../layouts/NavbarC";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
const AddReview = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [comment, setComment] = useState("");
    const [stars, setStar] = useState("");
    const [user,setUser] = useState([])
    useEffect(()=>{
      if(!(localStorage.getItem("isLogin"))){
        navigate("/login")
    }else{
      axios.get("user/info").then((res)=>{
        setUser(res.data.user)
      })
    }
    },[navigate])
    const addComment = (e) =>{
        e.preventDefault();
        const travel_id = id
        const user_id = user.id
        axios.post("review",{
          comment,
          stars,
          travel_id,
          user_id
        }).then((res)=>{
            Swal.fire({
                title: "Success",
                text: "Comment Successfully Added",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
                })
                navigate("/home")
        })
    }
  return (
    <div>
      <NavbarC />
      <div className="max-w-sm p-6 mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow">
        <form onSubmit={addComment} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block mb-2 font-bold text-gray-700"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              onChange={(e)=>setComment(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your comment here..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block mb-2 font-bold text-gray-700"
            >
              Rating
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6 ml-1 text-yellow-400 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.785l-4.093 2.276.782-4.566L2.45 7.214l4.54-.658L10 2.68l2.01 4.876 4.54.658-3.24 2.281.783 4.566z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <select
              id="rating"
              name="rating"
              onChange={(e)=>setStar(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">1 star</option>
              <option value="2">2 star</option>
              <option value="3">3 star</option>
              <option value="4">4 star</option>
              <option value="5">5 star</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
