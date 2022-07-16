/* import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./screen/About";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import ErrorPage from "./screen/ErrorPage";
import SingleProfile from "./screen/SingleProfile";
import MyProfile from "./screen/MyProfile"; */
import {useRoutes} from 'react-router-dom';
import { routes } from './routes';

const Component = () => {
  let element = useRoutes(routes);
  return element
  
   /*  <Router>
      <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile/1">Profile1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/:id" element={<SingleProfile />} />
          <Route path="/profile/me" element={<MyProfile />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router> */
  
};

export default Component;
