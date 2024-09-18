import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Admin/Components/Dashboard';
import EditUser from './Admin/Components/user/EditUser';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Edittravel from './Admin/Components/travel/Edittravel';
import Addtravel from './Admin/Components/travel/Addtravel';
import AddUser from './Admin/Components/user/AddUser';
import ReservByUser from './Admin/Components/Resevation/ReservByUser';
import AddReservation from './Admin/Components/Resevation/AddReservation';
import AllReview from './Admin/Components/Reviews/AllReview';
import Home from './Client/Components/Home';
import MyReservation from './Client/Components/Reservation/MyReservation';
import AddReview from './Client/Components/Review/AddReview';
import ChooseTravel from './Client/Components/Review/ChooseTravel';
import Reviews from './Client/Components/Review/Reviews';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/edit/user/:id' element={<EditUser/>}/>
        <Route path='/edit/travel/:id' element={<Edittravel/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/add/travel' element={<Addtravel/>} />
        <Route path='/add/user' element={<AddUser/>} />
        <Route path='/reservation/user/:id' element={<ReservByUser/>} />
        <Route path='/add/reservation' element={<AddReservation/>} />
        <Route path='/all/reviews' element={<AllReview/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/my-reservation' element={<MyReservation/>} />
        <Route path='/add/review/:id' element={<AddReview/>} />
        <Route path='/choose/review' element={<ChooseTravel/>} />
        <Route path='/reviews' element={<Reviews/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
