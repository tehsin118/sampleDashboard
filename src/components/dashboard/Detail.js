import React from "react";
import "./dashboard.scss";
function Detail() {
  return (
    <div>
      <section className="dashoard">
        <h1>Dashboard</h1>

        <div className="project-detail">
          <h2>
            Project Detail <span className="property-type">Property/type</span>
          </h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, sed,
            ipsam perspiciatis vero tempore esse similique accusamus, excepturi
            eligendi inventore corrupti quod quae ad laborum laudantium culpa.
            Adipisci, eveniet dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat libero error omnis quo quos esse minus
            eius maxime repudiandae, asperiores distinctio dolore, reprehenderit
            dolorem tempora saepe facilis! Libero, obcaecati sapiente! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Cum, sed, ipsam
            perspiciatis vero tempore esse similique accusamus, excepturi
            eligendi inventore corrupti quod quae ad laborum laudantium culpa.
            Adipisci, eveniet dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat libero error omnis quo quos esse minus
            eius maxime repudiandae, asperiores distinctio dolore, reprehenderit
            dolorem tempora saepe facilis! Libero, obcaecati sapiente! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Cum, sed, ipsam
            perspiciatis vero tempore esse similique accusamus, excepturi
            eligendi inventore corrupti quod quae ad laborum laudantium culpa.
            Adipisci, eveniet dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat libero error omnis quo quos esse minus
            eius maxime repudiandae, asperiores distinctio dolore, reprehenderit
            dolorem tempora saepe facilis! Libero, obcaecati sapiente!
          </p>
          <div className="p-img">
            <img src="\img\chihuahuaDog.png" alt="" />
            <img src="\img\chihuahuaDog.png" alt="" />
            <img src="\img\chihuahuaDog.png" alt="" />
          </div>
          <div className="addres">
            <h4>Address:</h4>
            <p>
              Beverly Centre, Jinnah Ave, F 6/1 Blue Area, Islamabad, Islamabad
              Capital Territory 44000
            </p>
          </div>

          <div className="price">
            <h2>
              <span>Price only</span> 6000 <span>$</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
