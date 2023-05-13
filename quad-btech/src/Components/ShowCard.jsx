import React from "react";
import {Link,useNavigate } from "react-router-dom";
import "../Styles/showcard.css";
const ShowCard = (props) => {
  const navigate = useNavigate();
  const goToBookingPage = () =>{
    navigate(`show/${props.showInfo.show.id}`,{state:props.showInfo.show});
  }
  return (
    <div className="ShowCard">
      <div className="card-top">
        <img
          src={
            props.showInfo.show.image
              ? props.showInfo.show.image.medium
              : "https://www.shutterstock.com/image-illustration/profile-picture-600w-404137684.jpg"
          }
          alt="image of the show"
        />
      </div>
      <div className="card-bottom">
        <h3>{props.showInfo.show.name}</h3>
        <p>{props.showInfo.show.language}</p>
        <p>{props.showInfo.show.genres[0]}</p>
        <p>
          Rating&nbsp;&nbsp;
          {props.showInfo.show.rating.average == null
            ? "0"
            : props.showInfo.show.rating.average}
        </p>
        <button className="card-btn" onClick={goToBookingPage} >more</button>
      </div>
    </div>
  );
};

export default ShowCard;
