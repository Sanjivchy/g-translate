import React from "react";
import SelectDropDown from "./SelectDropDown";

const TextBox = ({ style, selectedLanguage, setShowModal }) => {
  return (
    <div className={style}>
      <SelectDropDown
        selectedLanguage={selectedLanguage}
        style={style}
        setShowModal={setShowModal}
      />
      <textarea
        placeholder={style === "input" ? "enter text" : "translate"}
        disabled={style === "output"}
      />

    </div>
  );
};

export default TextBox;
