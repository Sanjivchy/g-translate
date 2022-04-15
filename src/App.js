import { useState } from "react";
import Arrows from "./components/Arrows";
import Buttons from "./components/Buttons";
import Modals from "./components/Modals";
import TextBox from "./components/TextBox";

const App = () => {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanaguage, setOutputLanguage] = useState("Nepali");

  const handleClick = () => {
    setInputLanguage(outputLanaguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="App">
      <TextBox selectedLanguage={inputLanguage} style={"input"} />
      <div className="" onClick={handleClick}>
        <Arrows />
      </div>
      <TextBox selectedLanguage={outputLanaguage} style={"output"} />
    </div>
  );
};

export default App;
