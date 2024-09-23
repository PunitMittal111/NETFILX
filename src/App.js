import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home.jsx";
import NewPopular from "./Pages/New&Popular/NewPopular.jsx";
import TvShows from "./Pages/TvShows/TvShows.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import MyList from "./Pages/MyList/MyList.jsx";
import Notifications from "./Pages/Notifiactions/Notifications.jsx";
import MoviesDetails from "./Pages/Movies/Moviesdetails.jsx";
import TvShowsDetails from "./Pages/TvShows/TvShowsDetails.jsx";
import Search from "./Pages/Search/Search.jsx";

function App() {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <SideBar />
      <div className="flex-1 border border-black w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new&Popular" element={<NewPopular />} />
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/TvShowsDetails/:id" element={<TvShowsDetails />} />
          <Route path="/tvshows/:id" element={<TvShowsDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesdetails/:id" element={<MoviesDetails />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/myList" element={<MyList />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
