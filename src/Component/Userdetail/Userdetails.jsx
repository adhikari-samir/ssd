import React, { useEffect, useState } from "react";
import "./user.css";
import Image from "../Image/hyyyy.jpg";
import axios from "axios";

const Userdetails = () => {
  const [userData, setUserData] = useState([]);
  const [searchLetter, setSearchLetter] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUserData(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchLetter(event.target.value.toLowerCase());
  };

  const filteredUsers = userData.filter((user) => {
    return user.firstName.toLowerCase().startsWith(searchLetter);
  });

  return (
    <div className="ui-container">
      <div>
        <label htmlFor="search">Search by First Letter:</label>
        <input
          type="text"
          id="search"
          value={searchLetter}
          onChange={handleSearchChange}
        />
      </div>
      {filteredUsers.map((user) => (
        <div key={user.id} className="user-card">
          <h1 className="heading">User Details</h1>
          <img src={Image} alt="MESSI" className="immg" />
          <div className="txt">Name: {user.firstName}</div>
          <div className="txt">Email: {user.email}</div>
          <div className="txt">Address: {user.address.city}</div>
          <div className="txt">Phone: {user.phone}</div>
        </div>
      ))}
    </div>
  );
};

export default Userdetails;
