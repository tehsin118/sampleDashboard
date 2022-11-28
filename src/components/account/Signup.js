import React from "react";
import { Link } from "react-router-dom";

import "./signup.scss";

function Signup() {
  return (
    <div>
      <section className="signup">
        <div className="signup-card">
          <h4 className="heading">SIGN UP</h4>

          <div className="input-wrapper">
            <h6>Name</h6>
            <input type="text" name="" id="" placeholder="Your Name" required />
          </div>

          <div className="input-wrapper">
            <h6>Email</h6>
            <input
              pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
              type="email"
              name=""
              id=""
              placeholder="abc@gmail.com"
              required
            />
          </div>

          <div className="input-wrapper">
            <h6>Password</h6>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
          </div>

          <div className="input-wrapper">
            <h6>Confirm Password</h6>
            <input
              type="Password"
              name=""
              id=""
              placeholder="Confirm Password"
              required
            />
          </div>
          <button className="btn1" type="submit">
            Sign up
          </button>
          <div className="login">
            <p>Alread have an Account ?</p>
            <Link to="/login"> LogIn</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
