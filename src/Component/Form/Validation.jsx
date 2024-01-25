import React, { useState } from "react";

const Validation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handlechange = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }
  };

  return (
    <>
      <h1>Form validation</h1>
      <form onClick={handlechange}>
        <div>
          email
          <br></br>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <span style={{ color: "red" }}>{emailError}</span>
        </div>
        <div>
          password:
          <br></br>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <input type="submit"></input>
      </form>
    </>
  );
};
export default Validation;
