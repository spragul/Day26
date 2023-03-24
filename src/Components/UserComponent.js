import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export default function UserComponent({ mobile, setMobile }) {
  const history = useHistory();
  //Delet functionality 
  const deletemobile = (idx) => {
    const alterList = mobile.filter((mob) => mob.id !== idx);
    setMobile(alterList)
  }

  return (
    <BaseApp
      title="Ragul Mobile Shop">
      <div className="mobile-content">
        {mobile.map((mobiles, idx) => (
          <div key={idx} className="mobile-card">
            <h1>{mobiles.mobileName}</h1>
            <img src={mobiles.image}  className="image-size"></img>
            <p>Model:{mobiles.model}</p>
            <p>price : RS {mobiles.price}</p>
            <p>Ram : {mobiles.Ram}Gb</p>
            <p>storage : {mobiles.storage}Gb</p>

            <div className="btn-group">

              <button
                onClick={() => history.push(`/edit/mobile/${mobiles.id}`)}
                className="btn edit-btn">
                Edit Mobile</button>

              <button
                className="btn view-btn"
                onClick={() => history.push(`/mobile/${idx}`)}
              >View Mobile</button>

              <button
                className="btn del-btn"
                onClick={() => deletemobile(mobiles.id)}
              >Delete Mobile</button>

            </div>

          </div>
        ))}
      </div>
    </BaseApp>
  )
}