import React from "react";

function Details({data}) {
  return (
    <>
      <div className="details">
        <img src={data.avatar} alt="avatar" />
        <h2>{data.name}</h2>
        <p>City: {data.details.city}</p>
        <p>Company: {data.details.company}</p>
        <p>Position: {data.details.position}</p>
      </div>
    </>
  )
}

export default Details;