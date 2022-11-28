import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className="signup">
        <div className="signup-card">
          <h4 className="heading">Login</h4>

          <div className="input-wrapper">
            <h6>Email</h6>
            <input
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

          {/* <button className="btn1" type="submit">
            Login
          </button> */}
          <Link to="/invest">Login</Link>

          <div className="login">
            <p>Do not have an Account ?</p>
            <Link to="/"> SignUp</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
