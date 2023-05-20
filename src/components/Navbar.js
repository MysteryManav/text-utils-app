import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// props - They can be passed to the component like we pass an argument to the function
export default function Navbar(props) {
  const setMode = () => {
    localStorage.setItem('mode', ((props.mode === "dark") ? "light" : "dark"));
    props.toggleMode();
  };
  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}
      id="navBar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* This is how we can use the props that are passed */}
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              checked={(props.mode === "light") ? false : true}
              onChange={setMode}
            />
            <label className={`form-check-label text-${(props.mode) === "light" ? "dark" : "light"}`} htmlFor="darkModeSwitch">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// This is how we declare the type of the prop that we want to pass, here we are passing the string type for the props.
Navbar.propTypes = {
  // If we also pass the isRequired property, then we will have to pass the value of the prop to the component, otherwise it will generate an error.
  title: PropTypes.string.isRequired,
  // The value becomes required when we pass the isRequired property, we can avoid the error, by using the default value for props.
  aboutText: PropTypes.string,
  mode: PropTypes.string,
};

// We can also set default values for the props, in case they are not set/passed to the component.
// like this....
Navbar.defaultProps = {
  title: "Set-Title-Here",
  aboutText: "About-Text-Here",
};
// Now, if we do not pass the prop value to the component then react will use the default values that we have used here.
