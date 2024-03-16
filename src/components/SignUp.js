import React, { useState } from "react";
import "./Signup.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] =
    useState(false);

  const validateEmail = (input) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(pattern.test(input));
  };

  const validatePassword = (input) => {
    setPasswordValidated(input.length >= 8);
  };

  const validateConfirmPassword = (input) => {
    setConfirmPasswordValidated(input === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <b>Email:</b>
          </label>{" "}
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            style={{
              border: emailValidated ? "2px solid green" : "2px solid red",
            }}
            required
          />
          <br />
          {!emailValidated && (
            <span style={{ color: "red" }}>Invalid email format</span>
          )}
        </div>
        <div className="form-group">
          <label>
            <b>Password:</b>
          </label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            style={{
              border: passwordValidated ? "2px solid green" : "2px solid red",
            }}
            required
          />
          <br />
          {!passwordValidated && (
            <span style={{ color: "red" }}>
              Password must be at least 8 characters long
            </span>
          )}
        </div>
        <div className="form-group">
          <label>
            <b>Confirm Password:</b>
          </label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
            style={{
              border: confirmPasswordValidated
                ? "2px solid green"
                : "2px solid red",
            }}
            required
          />
          <br />
          {!confirmPasswordValidated && (
            <span style={{ color: "red" }}>Passwords do not match</span>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
