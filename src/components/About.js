import React from "react";
import PropTypes from "prop-types";

export default function About(props) {
  // To change the CSS Style directly from the JS Component, we will use the camel-case like backgroundColor instead of the '-' name like background-color.
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [modeText, setModeText] = useState("Enable Dark Mode");

  // const toggleDarkMode = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#222",
  //     });
  //     setModeText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setModeText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container-fluid" id="aboutText">
      <h1 className="mt-5">Documentation:</h1>
      <div className={`accordion bg-${props.mode}`} id="accordionExample">
        <div className={`accordion-item`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button fw-bold bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              UpperCase
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will convert all the input text to Uppercase style.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed fw-bold bg-${
                props.mode
              } text-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              LowerCase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will convert all the input text to Lowercase style.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed fw-bold bg-${
                props.mode
              } text-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Speak
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will use the built-in functionality of the browser
              to "read" the text that is entered.
            </div>
          </div>
        </div>
        {/* <button className="btn btn-dark my-2" onClick={toggleDarkMode}>
        {modeText}
      </button> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed fw-bold bg-${
                props.mode
              } text-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Copy
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will copy the "new" and "formatted" text to
              Clipboard.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed fw-bold bg-${
                props.mode
              } text-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Format
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will remove all the extra whitespaces from the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed fw-bold bg-${
                props.mode
              } text-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Clear Text
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will remove all the text in the text box.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed fw-bold bg-${
                props.mode
              } text-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Find &amp; Replace
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              This function will find all the similar instances of the word and
              replace it with the new word provided.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string,
};
