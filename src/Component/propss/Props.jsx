import React, { useEffect, useState } from "react";
import "./props.css";
import Notification from "./Notification";
import axios from "axios";

const Props = ({ firstname, lastname }) => {
  const [num, setNum] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        // Assuming the data is in response.data
        console.log("Data from API:", response.data);
        setUserData(response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts
  console.log(typeof userData);

  const incrementingnumber = () => {
    if (num < 10) {
      setNum(num + 1);
    } else {
      setShowNotification(true);
    }
  };

  const decremetingnumber = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setErrorMessage(true);
    }
  };

  const notificationdismiss = () => {
    setShowNotification(false);
    setErrorMessage(false);
  };

  return (
    <>
      {/* <Notification title="Success" paragraph="Another Success" /> */}
      {showNotification && (
        <Notification
          onclick={notificationdismiss}
          title="Success"
          paragraph="Another Success"
        />
      )}
      {errorMessage && (
        <Notification
          onclick={notificationdismiss}
          title="Error"
          paragraph="lah fuck fuck fuck"
        />
      )}
      <div>
        hyyyyy {firstname}
        {lastname}
      </div>
      <h1 className="text">{num}</h1>
      <div className="flexing_btn">
        <button
          className="btn"
          onClick={incrementingnumber}
          style={{ backgroundColor: "blue", fontSize: "20px" }}
        >
          Increment
        </button>
        <button
          onClick={decremetingnumber}
          className="btn"
          style={{ backgroundColor: "red", fontSize: "20px" }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Props;
