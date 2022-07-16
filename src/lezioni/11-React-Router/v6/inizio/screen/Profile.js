import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Sono la pagine dei profili</h1>
      <nav className="d-flex flex-row gap-2 justify-content-center">
        <Link to="me">Il mio profilo</Link>
        <Link to="/profile/2">Profilo 2</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
