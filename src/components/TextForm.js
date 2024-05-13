import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success")
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success")
  };

  const handleTextOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Text Cleared","success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success")
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleTextOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Clear Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} chars
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in textbox to preview"}</p>
      </div>
    </>
  );
}
