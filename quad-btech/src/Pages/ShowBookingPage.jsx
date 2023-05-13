import React from 'react'
import {useLocation} from 'react-router-dom';

const ShowBookingPage = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>Id is {location.state.id}</h1>
      <h2>Name is: {location.state.name}</h2>
      <h2>Language is: {location.state.language}</h2>
      <h2>Genres is: {location.state.genres.average}</h2>
      <h2>Rating is: {location.state.rating.average}</h2>
      <h2>Summary is: {location.state.summary}</h2>
    </div>
  )
}

export default ShowBookingPage
