import React from "react";

const ShowCard = (props) => {
  return (
    <div className="ShowCard">
      <img
        src={
          props.showInfo.show.image
            ? props.showInfo.show.image.medium
            : "https://www.shutterstock.com/image-illustration/profile-picture-600w-404137684.jpg"
        }
        alt="image of the show"
      />
      <h1>{props.showInfo.show.name}</h1>
      <h2>{props.showInfo.show.language}</h2>
      <h2>{props.showInfo.show.weight}</h2>
    </div>
  );
};

export default ShowCard;
