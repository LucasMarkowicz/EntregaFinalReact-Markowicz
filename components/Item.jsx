import React from "react";
import { Link } from "react-router-dom";

export default function Item({ info }) {
  return (
    <div className="col">
      <div className="card">
        <img src={info.image} alt="" className="imagen-card" />
        <div className="card-body">
          <h5 className="card-title">{info.name}</h5>
          <p className="card-text">USD ${info.price}</p>
          <Link to={`/data/${info.id}`}>
                <a> <button className='btn btn-primary' >
                View product
            </button></a>
            </Link>
        </div>
      </div>
    </div>
  );
}