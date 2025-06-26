import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleUser = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);
  return (
    <div>
      <h1>single user</h1>
      <p>{user?.name}</p>
    </div>
  );
};

export default SingleUser;
