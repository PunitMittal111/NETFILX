import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  const userId = Cookies.get("userId");
// console.log(token)
// console.log(userId)
  if (!token || !userId) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
export default ProtectedRoute;
