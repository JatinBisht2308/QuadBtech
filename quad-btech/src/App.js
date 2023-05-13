import './App.css';
import {Routes,Route} from 'react-router-dom';
import AllShows from './Pages/AllShowsPage';
import ShowBookingPage from './Pages/ShowBookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllShows />} />
      <Route path="/show/:showId" element={<ShowBookingPage />} />
    </Routes>
  );
}

export default App;
