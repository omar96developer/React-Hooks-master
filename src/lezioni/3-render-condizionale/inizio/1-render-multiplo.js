import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("defaul tuser");

  const getData = async () => {
    setisLoading(false);
    setisLoading(true);

    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setisError(true);
    }

    setisLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="card d-flex align-items-center p-5 shadow mt-5">
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "80px", height: "80px" }}
        className="rounded-circle my-4 shadow"
      />
      <h2>{user.login}</h2>
    </div>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h2>Error.....</h2>
    </div>
  );
};
export default ConditionalCompining;
