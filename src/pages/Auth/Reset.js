import { React, useState } from "react";
import ResetImage from "../../assets/forgot.png";
import styles from "./auth.module.scss";

import { Link } from "react-router-dom";
import Card from "./../../components/Card/card";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/loader";

const Reset = () => {
  //  const [resetPassword, setResetPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success(" Password reset email sent!");
        setEmail("");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={ResetImage} alt="reset password" width="400px" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>

            <form onSubmit={resetPassword}>
              <input
                type="text"
                placeholder="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
            </form>

            <span className={styles.reset}>
              <p>
                <Link to="/login">-login</Link>
              </p>
              <p>
                <Link to="/register">-Register</Link>
              </p>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
