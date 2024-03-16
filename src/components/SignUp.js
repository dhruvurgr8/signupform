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
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const validateEmail = (input) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(input === "" || pattern.test(input));
  };

  const validatePassword = (input) => {
    setPasswordValidated(input === "" || input.length >= 8);
  };

  const validateConfirmPassword = (input) => {
    setConfirmPasswordValidated(input === "" || input === password);
  };

  const handleSubmit = (e) => {
    console.log(email, password, confirmPassword);
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
            onBlur={() => setEmailTouched(true)}
            style={{
              border:
                emailTouched && !emailValidated
                  ? "2px solid red"
                  : emailValidated
                  ? "2px solid green"
                  : "",
            }}
            required
          />
          <br />
          {emailTouched && !emailValidated && (
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
            onBlur={() => setPasswordTouched(true)}
            style={{
              border:
                passwordTouched && !passwordValidated
                  ? "2px solid red"
                  : passwordValidated
                  ? "2px solid green"
                  : "",
            }}
            required
          />
          <br />
          {passwordTouched && !passwordValidated && (
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
            onBlur={() => setConfirmPasswordTouched(true)}
            style={{
              border:
                confirmPasswordTouched && !confirmPasswordValidated
                  ? "2px solid red"
                  : confirmPasswordValidated
                  ? "2px solid green"
                  : "",
            }}
            required
          />
          <br />
          {confirmPasswordTouched && !confirmPasswordValidated && (
            <span style={{ color: "red" }}>Passwords do not match</span>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
