import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom";

export function MobileDetails({ mobile }) {
    const { id } = useParams();
    const mobiles = mobile[id];
    const history=useHistory();

    return (
        <BaseApp
            title={"Mobile Details"}
        >
            <div className="mobile-content">
                <div className="mobile-card">
                    <h1>{mobiles.mobileName}</h1>
                    <img src={mobiles.image} className="image-size"></img>
                    <p>Model:{mobiles.model}</p>
                    <p>price : RS {mobiles.price}</p>
                    <p>Ram : {mobiles.Ram}Gb</p>
                    <p>storage : {mobiles.storage}Gb</p>
                    <p><button className="btn view-btn"
                        onClick={() => history.push("/")}>
                        Home</button></p>
                </div>
            </div>
        </BaseApp>
    )
}