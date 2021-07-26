import style from "./stylesheets/signup.module.css";
import { FaGoogle } from "react-icons/fa";


// library.add(faGoogle)

const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.first}>
        <div className={style.image}>
          <img className={style.img} src="/assets/Hamburger-SignUp.jpg" />
          <div className={style.logo}>
            <p>foodine</p>
          </div>
        </div>
      </div>
      <div className={style.second}>
        <img className={style.restaurant} src="/assets/restaurant.png" />
        <img className={style.restaurant2} src="/assets/restaurant.png" />
        <div className={style.details}>
          <div className={style.h5}>
            <h5>CREATE AN ACCOUNT</h5>
          </div>
          <div className={style.form}>
            <form action="/">
              <div className={style.googlebutton}>
                <button type="button" className={style.btn}>
                  <div className={style.FaGoogle}>
                    <FaGoogle/>
                  </div>  
                  Sign up with google
                </button>
              </div>
              <div className={style.section0}>
                <label className={style.name}>Your name</label>
                <input
                  className={style.inputName}
                  type="text"
                  id="yourname"
                  name="name"
                  placeholder="name"
                />
              </div>
              <div className={style.section1}>
                <label className={style.email}>Your email</label>
                <input
                  className={style.inputEmail}
                  type="text"
                  id="mail"
                  name="email"
                  placeholder="stuff@gmail.com.."
                />
              </div>
              <div className={style.section2}>
                <label className={style.password}>Your password</label>
                <input
                  type="password"
                  id="pword"
                  name="password"
                  placeholder="password"
                  className={style.inputPassword}
                />
              </div>
              <div className={style.section3}>
                <label className={style.confirmPassword}>Confirm password</label>
                <input
                  type="password"
                  id="Cpword"
                  name="ConfirmPassword"
                  placeholder="password"
                  className={style.inputConfirmPassword}
                />
              </div>
              <div className={style.section4}>
                <button type="button" className={style.btn2}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//Don't forget to wrap the code inside the return statement in parentheses.