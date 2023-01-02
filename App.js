import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userName: "",
    mobileNo: "",
    email: "",
    password: "",
    shortBio: "",
    userNameError: "",
    mobileNoError: "",
    emailError: "",
    passwordError: "",
    shortBioError: "",
    error: false,
  };

  onChanges = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let userNameError: "";
    let mobileNoError: "";
    let emailError: "";
    let passwordError: "";
    let shortBioError: "";

    if (!this.state.mobileNo) {
      mobileNoError = "*Mobile number is required";
    }

    if (!this.state.userName) {
      userNameError = "*Name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "*Email required";
    }

    if (!this.state.password) {
      passwordError = "*Enter password";
    } else if (this.state.password.length < 5) {
      passwordError = "*password must be more than five character";
    }

    if (!this.state.shortBio) {
      shortBioError = "*Bio should not be empty";
    } else if (this.state.shortBio.length < 20) {
      shortBioError = "*Minimum 10 words required";
    }

    if (
      emailError ||
      userNameError ||
      mobileNoError ||
      passwordError ||
      shortBioError
    ) {
      this.setState({
        emailError,
        userNameError,
        mobileNoError,
        passwordError,
        shortBioError,
      });
      return false;
    }
    return true;
  };

  submitButton = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState({
        userName: "",
        mobileNo: "",
        email: "",
        password: "",
        shortBio: "",
        userNameError: "",
        mobileNoError: "",
        emailError: "",
        passwordError: "",
        shortBioError: "",
        error: false,
      });
      alert("Successfully Submitted!");
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const {
      userName,
      mobileNo,
      email,
      password,
      shortBio,
      userNameError,
      mobileNoError,
      emailError,
      passwordError,
      shortBioError,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 bg-container p-4">
            <div className="form-container d-flex flex-column justify-content-center  m-4 p-4">
              <h1 className="heading">Registration Form</h1>
              <form onSubmit={this.submitButton}>
                <div className="d-flex flex-column">
                  <label className="mt-2">Name</label>
                  <input
                    className="mb-3"
                    type="text"
                    placeholder="Enter Name"
                    onChange={this.onChanges}
                    name="userName"
                    value={userName}
                  />
                  <div className="error-message">{userNameError}</div>
                </div>
                <div className="d-flex flex-column">
                  <label className="mt-2">Mobile No</label>
                  <input
                    className="mb-3"
                    type="tel"
                    placeholder="Enter Mobile No"
                    onChange={this.onChanges}
                    name="mobileNo"
                    value={mobileNo}
                  />
                  <div className="error-message">{mobileNoError}</div>
                </div>
                <div className="d-flex flex-column">
                  <label className="mt-2">Email</label>
                  <input
                    className="mb-3"
                    type="text"
                    placeholder="Enter Email Address"
                    onChange={this.onChanges}
                    name="email"
                    value={email}
                  />
                  <div className="error-message">{emailError}</div>
                </div>
                <div className="d-flex flex-column">
                  <label className="mt-2">Password</label>
                  <input
                    className="mb-3"
                    type="password"
                    placeholder="Enter password"
                    onChange={this.onChanges}
                    name="password"
                    value={password}
                  />
                  <div className="error-message">{passwordError}</div>
                </div>
                <div className="d-flex flex-column">
                  <label className="mt-2">Short Bio</label>
                  <textarea
                    className="mb-3"
                    rows="6"
                    cols="50"
                    onChange={this.onChanges}
                    name="shortBio"
                    value={shortBio}
                  ></textarea>
                  <div className="error-message">{shortBioError}</div>
                </div>
                <button
                  type="button submit"
                  className="btn btn-outline-info mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;