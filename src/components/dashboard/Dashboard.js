import React from "react";
import "./dashboard.scss";
function Dashboard() {
  return (
    <>
      <div className="dash">
        <h1>I am Dashbaord</h1>

        <form action="#" className="propertyform">
          <div className="input-wrapper">
            <h6>Property Name</h6>
            <input type="text" name="" id="" placeholder="Property name" />
          </div>
          <div className="input-wrapper">
            <h6>Property Card Img </h6>
            <input type="file" name="" id="" placeholder="" />
          </div>
          <div className="input-wrapper">
            <h6>Other Images</h6>
            <input type="file" name="" id="" placeholder="" multiple />
          </div>
          <div className="input-wrapper">
            <h6>Property Price</h6>
            <input type="number" name="" id="" placeholder="" />
          </div>
          <div className="input-wrapper">
            <h6>Property Price</h6>
            <select id="property Type">
              <option value="volvo">Rent</option>
              <option value="saab">Sell</option>
            </select>
          </div>

          <div className="input-wrapper">
            <h6>Property Detail</h6>
            <textarea
              type=""
              name=""
              id=""
              placeholder="Enter Property Detail "
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
