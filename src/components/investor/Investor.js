import React from "react";
import "./inverstor.scss";
import { Link } from "react-router-dom";

function Investor() {
  return (
    <div>
      <section className="invester">
        <h1>I am Investor</h1>
        <Link to="/dash" target="kk">
          Go to Dashboard
        </Link>

        <Link to="/detail" target="kk">
          <div className="in-card">
            <div className="card img">
              <img
                src="\img\chihuahuaDog.png"
                alt="hy img"
                className="img-fluid"
              />
            </div>
            <div className="p-name">Property Name</div>
            <div className="detail">
              <h6 className="in-name">Invester</h6>
              <h6 className="price">
                600 <span>$</span>
              </h6>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Investor;
