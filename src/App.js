import {useEffect, useState} from "react";
import Arrows from "./components/Arrows";
import Buttons from "./components/Buttons";
import Modals from "./components/Modals";
import TextBox from "./components/TextBox";
import  axios from 'axios';

const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanaguage, setOutputLanguage] = useState("Nepali");
const [languages , setLanguaged] =useState(null)
  const getLanguages =  () =>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "English is hard, but detectably so");

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c8c0d36261msh6eb6442808b30d9p195331jsnd741c225a80f'
      },
      data: encodedParams
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setInputLanguage(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }
console.log(languages)
  useEffect(()=>{
    getLanguages()
  },[])
  const handleClick = () => {
    setInputLanguage(outputLanaguage);
    setOutputLanguage(inputLanguage);
  };
  return (
    <div className="App">
        {!showModal && <>
        <TextBox
          selectedLanguage={inputLanguage}
          style={"input"}
          setShowModal={setShowModal}
        />
        <div className="" onClick={handleClick}>
          <Arrows />
        </div>
        <TextBox
          selectedLanguage={outputLanaguage}
          style={"output"}
          setShowModal={setShowModal}
        />
      </>}
        {showModal && <Modals setShowModal={setShowModal}/>}

            </div>
  );
};

export default App;
