import React ,{useEffect, useState} from "react";
import { Route, Routes, useNavigate ,useSearchParams } from "react-router-dom";
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
import { fetchUserById } from "./redux/profileSlice/profileSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

function App() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") || Cookies.get("userId") ;
  const token = searchParams.get("token") || Cookies.get("token");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // console.log(userId ,token )
  Cookies.set("userId", userId)
  Cookies.set("token", token)

  
  // const { profileData } = useSelector((state) => state.profile);
  // console.log(profileData)



  useEffect(() => {
    if (userId && token) {
      localStorage.setItem("token", token);
      dispatch(fetchUserById({userId,token}));
    }
  }, [userId, token, dispatch]);

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
          <Route path="/tvShows" element={<ProtectedRoute><TvShows /></ProtectedRoute>} />
          <Route
  path="/tvShowsDetails"
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
  
    
        </Routes>
      </div>
    </div>
  );
}
export default App;
