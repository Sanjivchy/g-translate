import React, {useState} from "react";

const Modals = ({setShowModal}) => {
  let searchedLanguage, setSearchedLanguage;
  [searchedLanguage, setSearchedLanguage] = useState('');
  const handleChange=(e)=>{
    setSearchedLanguage(e.target.value)
  }
  console.log(searchedLanguage)

  return <div className="option-list">
    <div className='search-bar'>
      <input value={searchedLanguage} onChange={handleChange}/>
      <div className="close-button" onClick={() => setShowModal(null)}>x</div>
    </div>
    <div className="option-container">
      <ul>

      </ul>
    </div>
  </div>;
};

export default Modals;
