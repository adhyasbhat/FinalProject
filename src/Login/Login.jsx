import "../Login/Login.css";
import { Outlet, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useRef } from "react";
import axios from "axios";
// import userEvent from '@testing-library/user-event';
// const { defualt:axios} = require('axios');
// import {useState, useEffect} from "react";
const TextExample = () => {
  // const initialValues = { username: "", email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.username) {
  //     errors.username = "Username is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };
  //   function loginUrl(email,password){
  //     const login_url="http://54.226.10.196:5050/user/login"
  //     axios.post(login_url,{'email':email,'password':password})
  //     .then((response)=>{
  //         console.log(response.data)
  //     })
  //     .catch((err)=>{
  //         console.log(err)

  //     })
  // }
  const user = useRef(null);
  const password = useRef(null);
  
  function loginValue() {
    const userId = user.current.value;
    const pass = password.current.value;
    const login_url="http://54.226.10.196:5050/user/login"
    console.log(userId)
    console.log(pass)
    axios.post(login_url,{'email':userId,'password':pass})
    const list = axios.get("http://54.226.10.196:5050/user/list")
        console.log(list)
    .then((response)=>{
        console.log(response.data)
        
        // .then((res) =>{
        //   console.log(res)
        // }) 
    })
    .catch((err)=>{
        console.log(err)

    })
    
  }
  return (
    <>
      <Navigation />
      <div className=" wrapper d-flex align-items-center justify-content-center">
        <div className="login  mx-3 p-4">
          <h2 className="m-1 mt-4 heading">WELCOME BACK</h2>
          <h5 className="heading mb-5 sub">Login to Continue</h5>

          <div className="form mb-2 mt-4">
            <input
              type="email"
              ref={user}
              id="username"
              name=""
              placeholder=""
              className="textbox"
            />
            <label className="loginLabel" for="">
              Username
            </label>
          </div>

          <div className="form mb-2 mt-5 mb-5">
            <input
              type="password"
              ref={password}
              id="password"
              name=""
              placeholder=""
              className="textbox"
            />
            <label className="loginLabel" for="">
              Password
            </label>
          </div>
          <div className="col-12 mt-4">
            <button className="logbtn mt-2 mb-3" onClick={loginValue}>
              <Link to="../Home">Login</Link>
            </button>
            <p className="create mt-4 ">
              Dont have an account?{" "}
              <Link to="../Signup">Create an account here</Link>
            </p>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextExample;
