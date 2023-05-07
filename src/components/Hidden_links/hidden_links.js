import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/autSlice/authSlice";

const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogOut = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
