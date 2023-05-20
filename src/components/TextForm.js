import React, { useState } from "react";
// useState is a React Hook
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // Here, we are saying that:
  // Whatever the text that we are sending or taking from the useState("Enter Text Here:") will be saved in the text variable.
  // And whenever we want to update/change the value of the text variable we will use the setText function().
  // text- It is a state variable
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  // If we want to update/change the value of the text variable like this....
  // text = "This will take your text";
  // But this will give an error, hence....
  // We can change/update the text variable like this....
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // Here, when the button is clicked, it will call this function and then update/change the value of the text variable to the provided text.
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
    document.title = "TextUtils - Uppercase";
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
    document.title = "TextUtils - Lowercase";
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Currently Speaking....", "info");
    document.title = "TextUtils - Speaking";
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  const handleReplaceClick = () => {
    let findWordValue = fWord;
    let replaceWordValue = rWord;
    let newText = text.replaceAll(findWordValue, replaceWordValue);
    findWord("");
    replaceWord("");
    setText(newText);
    props.showAlert(`All occurences of ${fWord} replaced with ${rWord}`, "success");
    document.title = "TextUtils - Find and Replace";
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text Formatted", "success");
    document.title = "TextUtils - Format Text"
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  const handleClearClick = (event) => {
    setText(event.target.value);
    props.showAlert("Input Cleared", "danger");
    document.title = "TextUtils - Clear";
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  const handleCopyClick = () => {
    let toCopy = document.getElementById("myBox");
    toCopy.select();
    toCopy.setSelectionRange(0, 99999);
    try {
      navigator.clipboard.writeText(toCopy.value);
    } catch (error) {
      console.log(error);
    }
    props.showAlert("Text Copied to Clipboard", "info");
    document.title = "TextUtils - Copy Text";
    setTimeout(() => {
      document.title = "TextUtils - Home";
    }, 2000);
  };

  // We will pass the event that is generated when the value is changed in the element.
  const handleOnChange = (event) => {
    // To make the change to the element value, we will use the setText method and then set the value to the event that we are generating by giving the input, like this....
    setText(event.target.value);
  };

  const handleFindChange = (event) => {
    findWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    replaceWord(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="container float-start col-md-10">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            {/* <label for="myBox" className="form-label">
          Enter your text here:
        </label> */}
            <textarea
              className={`form-control bg-${props.mode} text-${(props.mode) === "light" ? "dark" : "light"}`}
              id="myBox"
              rows="18"
              onChange={handleOnChange}
              value={text}
              placeholder="Enter Text Here"
            ></textarea>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <button
                className="btn btn-primary me-md-1 my-2 col col-lg-3 col-xl-3 col-md-4 col-12 text-wrap"
                onClick={handleUpClick}
              >
                UpperCase
              </button>
              <button
                className="btn btn-primary mx-md-1 my-2 col col-lg-3 col-xl-3 col-md-4 col-12"
                onClick={handleLowClick}
              >
                LowerCase
              </button>
              <button
                className="btn btn-primary mx-md-1 my-2 col-lg-3 col-xl-3 col-md-4 col-12"
                onClick={handleSpeakClick}
              >
                Speak
              </button>
              <button
                className="btn btn-primary me-md-1 my-2 col-lg-3 col-xl-3 col-md-4 col-12"
                onClick={handleCopyClick}
              >
                Copy
              </button>
              <button
                className="btn btn-primary mx-md-1 my-2 col-lg-3 col-xl-3 col-md-4 col-12"
                onClick={handleExtraSpaces}
              >
                Format
              </button>
            </div>
            <div className="float-end col-md-6">
              <button
                className="btn btn-outline-danger float-md-end mx-md-1 my-2 col-lg-6 col-xl-6 col-md-6 col-12"
                id="clear-text"
                onClick={handleClearClick}
              >
                Clear Text
              </button>
            </div>
          </div>
          <hr className={`featurette border border-${(props.mode) === "light" ? "dark" : "light"}`} />
          <h2 className="my-2">Find &amp; Replace</h2>
          <label htmlFor="findBox" className="fw-bold my-3 me-md-1">
            Find Word:
          </label>
          &nbsp;&nbsp;
          <input
            type="text"
            id="findBox"
            className={`bg-${props.mode} border border-${(props.mode) === "light" ? "dark" : "light"} text-${(props.mode) === "light" ? "dark" : "light"}`}
            row="1"
            value={fWord}
            onChange={handleFindChange}
          />
          &nbsp;&nbsp;
          <div>
            <label htmlFor="replaceBox" className="fw-bold my-3 me-1">
              Replace With:
            </label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="replaceBox"
              className={`bg-${props.mode} border border-${(props.mode) === "light" ? "dark" : "light"} text-${(props.mode) === "light" ? "dark" : "light"}`}
              row="1"
              value={rWord}
              onChange={handleReplaceChange}
            />
          </div>
          <button
            className="btn btn-primary col-md-3 col-12"
            onClick={handleReplaceClick}
          >
            Find &amp; Replace
          </button>
        </div>
        <div className={`container float-end align-items-end my-3 col-md-2 border border-top-0 border-bottom-0 border-end-0 border-${(props.mode) === "light" ? "dark" : "light"}`}>
          <h1>Your text Summary</h1>
          <p>
            <span className="fw-semibold">No. of Words:</span>{" "}
            {(text === "") ? 0 : text.split(" ").filter(element => element !== "").length} <br />
            <span className="fw-semibold">No. of Characters:</span>{" "}
            {text.replace(/\s/g, "").length} <br />
            <span className="fw-semibold">Time to read:</span>{" "}
            {0.32 * ((text === "") ? 0 : text.split(" ").filter(element => element !== "").length)} Seconds
          </p>
          <h2>Preview</h2>
          <p className={`text-${(text === "") ? "secondary" : (props.mode === "light") ? "dark" : "light"}`}>{(text === "") ? "Enter Text To Preview" : text}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string,
};
