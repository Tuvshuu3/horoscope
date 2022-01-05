import React from "react";
import "../styles/index.css";

const Stat = ({ title, kotae, style,  className }) => {
  return (
    <div className="box">
      <div className="circle">
        <div className="content">
          <div className='title_circle'>{title}</div>
          <div style={style} className={className}>{kotae}</div>
        </div>
      </div>
    </div>
  );
};

export { Stat };
