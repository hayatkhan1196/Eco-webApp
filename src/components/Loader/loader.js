import React from "react";
import styles from "./loader.module.scss";
import loadeImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loadeImg} alt="loaderImage" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
