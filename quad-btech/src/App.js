import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import AllShows from './Pages/AllShowsPage';
function App() {
  return (
    <div className="App">
      <AllShows  />
    </div>
  );
}

export default App;
