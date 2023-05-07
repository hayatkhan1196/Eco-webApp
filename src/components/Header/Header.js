import { React, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./../Loader/loader";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USERS,
} from "../../redux/autSlice/authSlice";
import ShowOnLogin from "../Hidden_links/hidden_links";
import { ShowOnLogOut } from "./../Hidden_links/hidden_links";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e <span>Shop</span> .
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const ActiveMenu = ({ isActive }) => {
  return isActive ? `${styles.active}` : "";
};
//monitor currently user sign in

const Header = () => {
  const [displayName, setDisplayName] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const uName = user.email.substring(0, user.email.indexOf("@"));
          const userName = uName.charAt(0).toUpperCase() + uName.slice(1);
          setDisplayName(userName);
        } else {
          setDisplayName(user.displayName);
        }

        disptach(
          SET_ACTIVE_USERS({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        disptach(REMOVE_ACTIVE_USER());
      }
    });
  }, [displayName]);
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful");
        setIsLoading(false);

        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {" "}
      {isLoading && <Loader />}
      <header>
        <div className={styles.header}>
          {logo}
          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }>
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}></div>
            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <RxCross2 color="#ffff" onClick={hideMenu} />
              </li>

              <li>
                <NavLink to="/" className={ActiveMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className={ActiveMenu}>
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <ShowOnLogOut>
                  <NavLink to="/login" className={ActiveMenu}>
                    Login
                  </NavLink>
                </ShowOnLogOut>
                <ShowOnLogin>
                  <a href="#home" style={{ color: "#ff7722" }}>
                    <FaUserCircle size={16} />
                    Hi,{displayName}
                  </a>
                </ShowOnLogin>
                {/* <NavLink to="/register" className={ActiveMenu}>
                    Register
                  </NavLink> */}
                <ShowOnLogin>
                  <NavLink to="/order-history" className={ActiveMenu}>
                    My Oerders
                  </NavLink>
                </ShowOnLogin>
                <ShowOnLogin>
                  <NavLink to="/" onClick={LogOut}>
                    Logout
                  </NavLink>
                </ShowOnLogin>
              </span>
              {cart}
            </div>

            {/* </div> */}
          </nav>

          <div className={styles["menu-icon"]}>
            {cart}
            <AiOutlineMenu
              size={28}
              onClick={toggleMenu}
              className={styles.MenuIcon}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
