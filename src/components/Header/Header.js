import { React, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { signOut, getAuth } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./../Loader/loader";

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

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

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
              <div className={styles["header-right"]} onClick={hideMenu}>
                <span className={styles.links}>
                  <NavLink to="/login" className={ActiveMenu}>
                    Login
                  </NavLink>
                  <NavLink to="/register" className={ActiveMenu}>
                    Register
                  </NavLink>
                  <NavLink to="/order-history" className={ActiveMenu}>
                    My Oerders
                  </NavLink>
                  <NavLink to="/" onClick={LogOut}>
                    Logout
                  </NavLink>
                </span>
                {cart}
              </div>
            </ul>

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
