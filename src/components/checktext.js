import React, {useState} from "react";
import "../styles/index.css";
import "../styles/index.css";

import CheckIcon from "./checkIcon";

const CheckText = ({ iconColor, bigText, smallText }) => {
    const [color, setColor] = useState(iconColor)
    const changeColor = () => {

        if(color == "#40C110") {
            setColor("#EA7B15")
        }
        if(color == iconColor){
        setColor("#40C110")
        }
        if(color == "#EA7B15"){
            setColor(iconColor)
        }
    }
  return (
    <div className="checkTextCon" onClick={changeColor}>
        <CheckIcon color={color}/>
      <div className="textCon">
        <div className="bigText">{bigText}</div>
        <div className="smallText">{smallText}</div>
      </div>
    </div>
  );
};

export { CheckText };
