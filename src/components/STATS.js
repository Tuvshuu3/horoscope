import React from "react";
import { Stat } from "./Stat";
import "../styles/index.css";
import Arrow from "../assets/Arrow.svg";

const STATS = ({ yes, onClick }) => {
  return (
    <div className="EVERYTHING">
      <div className="STATS">
        <Stat
          className="kotae"
          style={{ color: yes.color }}
          title="COLOR"
          kotae={yes.color}
        />
        <Stat
          className="kotae green"
          title="LUCKY TIME"
          kotae={yes.lucky_time}
        />
        <Stat
          className="kotae brown"
          title="LUCKY NUMBER"
          kotae={yes.lucky_number}
        />
        <Stat className="kotae lime" title="MOOD" kotae={yes.mood} />
        <Stat
          className="kotae red"
          title="COMPATIBILITY"
          kotae={yes.compatibility}
        />
      </div>
      
      <button onClick={onClick} className="Arrow arrow_place reverse">
        <img src={Arrow}></img>
      </button>

      <div className='motivation'>
        {yes.description}
      </div>
    </div>
  );
};

export { STATS };
