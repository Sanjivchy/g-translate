import React from "react";
import SelectDropDown from "./SelectDropDown";

const TextBox = ({ style, selectedLanguage }) => {
  return (
    <div className={style}>
      <SelectDropDown selectedLanguage={selectedLanguage} />
      <textarea
        placeholder={style === "input" ? "enter text" : "translate"}
        disabled={style === "output"}
      />
    </div>
  );
};

export default TextBox;
