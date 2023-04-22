import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(fullName, email, password);
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1>Sign up</h1>
      <hr />
      <form className="form-group" autoComplete="off" onSubmit={handleSignup}>
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <div className="btn-box">
          <span>
            Already have an account Login
            <Link to="login" class="link">
              Here
            </Link>
          </span>
          <button type="submit" className="btn btn-success btn-md">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};
