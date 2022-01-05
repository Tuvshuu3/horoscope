import React from "react";
import "../styles/index.css";
import Arrow from "../assets/Arrow.svg";
const Zurhai = ({ onClick, sign, date, setSign, setDate }) => {

  const handleChange = (e) => {
    console.log(e.target.value);
    setSign(e.target.value)
  };

  const handleChange2 = (a) => {
    console.log(a.target.value)
    setDate(a.target.value)
  }

  return (
    <div className="Zurhai">
      <div className="Sign">
        <div className="Subtitle">SIGN</div>

        <select value={sign} className="Sign_select" onChange={handleChange}>
          <option>Aries</option>
          <option>Taurus</option>
          <option>Gemini</option>
          <option>Cancer</option>
          <option>Leo</option>
          <option>Virgo</option>
          <option>Libra</option>
          <option>Scorpius</option>
          <option>Ophiuchus</option>
          <option>Sagittarius</option>
          <option>Capricornus</option>
          <option>Aquarius</option>
          <option>Pisces</option>
        </select>
      </div>
      <div className="Sign">
        <div className="Subtitle">DATE</div>

        <select value={date} className="Sign_select" onChange={handleChange2}>
          <option>Today</option>
          <option>Yesterday</option>
          <option>Tomorrow</option>
        </select>
      </div>
      <button onClick={onClick} className="Arrow">
        <img src={Arrow}></img>
      </button>
    </div>
  );
};

export { Zurhai };
