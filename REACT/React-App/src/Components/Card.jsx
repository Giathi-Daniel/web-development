import React from "react";

// { coverImg, rating, location, reviewCount, price, openSpots }
function Card(props) {
  return (
    <div className="card">
      <div className="left">
        <img src={`../images/${props.img}`} alt="" />
      </div>
      <div className="right">
        <span className="location">{props.location}</span>
        <p className="title">{props.artifact}</p>
        <p className="date">{props.date}</p> {/* DATE*/}
        <p className="desc">{props.description}</p> {/* DESCRIPTION*/}
      </div>
    </div>
  );
}

export default Card;

// AIRBNB
// let badgeText;
// if (props.openSpots === 0) {
//   badgeText = "SOLD OUT";
// } else if (props.location === "Online") {
// badgeText = "ONLINE";
// }

// {badgeText && <div className="card--badge">{badgeText}</div>}
// <img src={`../images/${props.coverImg}`} className="card--image" />
// <div className="card--stats">
//   <img src="../images/star.png" className="card--star" />
//   <span>{props.stats.rating}</span>
//   <span className="gray">({props.stats.reviewCount}) • </span>
//   <span className="gray">{props.location}</span>
// </div>
// <p className="card--title">{props.title}</p>
// <p className="card--price">
//   <span className="bold">From ${props.price}</span>
// </p>
