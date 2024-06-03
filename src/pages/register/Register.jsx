import React, { useState } from "react";
import { registerUserApi } from "../../apis/Api";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // Conding Section

  //Make a state variables - 5 state
  // Format (variableName, Changing VarName) = State

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Statw for error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Make a function to save the state
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  //Validation
  var validate = () => {
    var isValid = true;
    if (firstName.trim() === "") {
      setFirstNameError("Please enter firstname");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLastNameError("Please enter lastname");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Please enter email");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Please enter password");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Please enter Confirm Password");
      isValid = false;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError("password did not match");
      isValid = false;
    }
    return isValid;
  };

  //For button
  const handleSubmit = (e) => {
    e.preventDefault();
    var isValid = validate();
    if (!isValid) {
      return; //Stop the process
    }
    //Make Api Request
    //Making json object of registered data
    const data = {
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "password" : password


    }
    registerUserApi(data).then((res) =>{
      
      //Success : true/false, Message
      if(res.data.success === false){
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }
    })


  };

  return (
    // <div>
    //   <h1>Its Register</h1>
    // </div>
    <>
      <div className="m-3">
        <h1>Create an account</h1>

        <form className="w-50">
          <label>Firstname:{firstName}</label>
          <input
            onChange={handleFirstname}
            type="text"
            className="form-control"
            placeholder="Enter your fistname"
          />
          {firstNameError && (
            <p className="text-danger">{firstNameError}</p> //<small>
          )}

          <label className="mt-2">Lastname:{lastName}</label>
          <input
            onChange={handleLastname}
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
          />
          {lastNameError && (
            <p className="text-danger">{lastNameError}</p> //<small>
          )}
          <label className="mt-2">Email Address: {email}</label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            placeholder="Enter your Email Address"
          />
          {emailError && (
            <p className="text-danger">{emailError}</p> //<small>
          )}
          <label className="mt-2">Password:{password}</label>
          <input
            onChange={handlePassword}
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />
          {passwordError && (
            <p className="text-danger">{passwordError}</p> //<small>
          )}
          <label className="mt-2">Confirm Password: {confirmPassword}</label>
          <input
            onChange={handleConfirmPassword}
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />
          {confirmPasswordError && (
            <p className="text-danger">{confirmPasswordError}</p> //<small>
          )}
          <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

//Make UI complete
// Make a Variable to save value if each input temporarily
// Change everytime we write something
// submit