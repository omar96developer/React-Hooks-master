import React from "react";
import { useParams } from "react-router-dom";

function SingleProfile() {
    const {id} = useParams();
  return <div>sono un singole profilo con id: {id}</div>;
}

export default SingleProfile;
