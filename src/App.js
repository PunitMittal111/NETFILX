import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home.jsx";
import NewPopular from "./Pages/New&Popular/NewPopular.jsx";
import TvShows from "./Pages/TvShows/TvShows.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import MyList from "./Pages/MyList/MyList.jsx";
import MoviesDetails from "./Pages/Movies/Moviesdetails.jsx";
import TvShowsDetails from "./Pages/TvShows/TvShowsDetails.jsx";
import Search from "./Pages/Search/Search.jsx";
import CategoryResults from "./Pages/Categories/CategoryResult.jsx";
import ProtectedRoute from "./Components/Common/ProtectedRoute.jsx";
import UnauthorizedModal from "./Components/Common/UnauthorizedModal.jsx";

function App() {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <SideBar />
      <div className="flex-1 border border-black w-full h-screen">
        <Routes>
          <Route path="/unauthorized" element={<UnauthorizedModal />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path="/new&Popular"
            element={
              <ProtectedRoute>
                <NewPopular />
              </ProtectedRoute>
            }
          />
          <Route path="/tvShows" element={<TvShows />} />
          <Route
            path="/TvShowsDetails/:id"
            element={
              <ProtectedRoute>
                <TvShowsDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tvshows/:id"
            element={
              <ProtectedRoute>
                <TvShowsDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/moviesdetails/:id"
            element={
              <ProtectedRoute>
                <MoviesDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <ProtectedRoute>
                <MoviesDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categoryresults/:type"
            element={
              <ProtectedRoute>
                <CategoryResults />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myList"
            element={
              <ProtectedRoute>
                <MyList />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
