import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import { useState } from "react";

const Main = (props) => {
  const [value, setValue] = useState("");

  const { speak} = useSpeechSynthesis();
  const handleClick = () => {
    let value = "";
    setValue(value);
  };
  return (
    <>
      <div className="main-page">
        <div className="heading">
          <center>
            <h1 id="headingid">{props.heading}</h1>
          </center>
        </div>
        <div className="divbox">
          <textarea
            className="textbox"
            type="text"
            size="50"
            name="textarea"
            maxlength="1000000"
            value={value}
            // inside value the text is being added.
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <div className="divbuttons ">
          <button
            className="btn  "
            id="btn-listen"
            onClick={() => speak({ text: value })}
          >
            Please speak
          </button>
          <button className="btn  mx-2" id="btn-clear" onClick={handleClick}>
            clear text
          </button>
        </div>
      </div>
    </>
  );
};
export default Main;
