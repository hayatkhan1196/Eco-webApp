import { React, useState } from "react";
import styles from "./auth.module.scss";
import RegisterImage from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import Card from "./../../components/Card/card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/config";
import Loader from "./../../components/Loader/loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();
  const registerUser = (e) => {
    e.preventDefault();
    if (password != resetPassword) {
      toast.error("password do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("🚀 ~ file: Register.js:28 ~ .then ~ user:", user);
        setIsLoading(false);
        toast.success("Registration Successfull...");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error(error.message);
        setIsLoading(false);

        // ..
      });
    // console.log("................>>>", email, password, resetPassword);
  };

  return (
    <>
      {/* <ToastContainer /> */}
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="ConfirmPassword"
                required
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
            </form>

            <span className={styles.register}>
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={RegisterImage} alt="login" width="400px" />
        </div>
      </section>
    </>
  );
};

export default Register;
