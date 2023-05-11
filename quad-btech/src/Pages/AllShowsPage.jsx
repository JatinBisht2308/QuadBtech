import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowCard from "../Components/ShowCard";
import '../Styles/allShowsPages.css';

const AllShowsPage = () => {
  const [shows, setShows] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setShows(res.data);
    } catch (err) {
      alert("There is an error in fetching the data.");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="AllShows">
      {shows.map((show) => {
        return <ShowCard showInfo={show} />;
      })}
    </div>
  );
};

export default AllShowsPage;
