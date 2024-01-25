import React, { useState } from "react";

const MyForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Email validation with a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    // Password validation with a simple regular expression
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one digit, one lowercase letter, and one uppercase letter"
      );
      return;
    } else {
      setPasswordError("");
    }

    // If validation passes, you can proceed with form submission or other actions
    console.log("Form submitted successfully!");
  };

  return (
    <div>
      <h1>Form Validation Example in React</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span style={{ color: "red" }}>{emailError}</span>
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span style={{ color: "red" }}>{passwordError}</span>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyForm;
