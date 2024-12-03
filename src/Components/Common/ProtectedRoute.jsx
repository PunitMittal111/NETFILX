import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = Cookies.get("Token");
  const userId = Cookies.get("UserId");

  if (!accessToken || !userId) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
export default ProtectedRoute;
