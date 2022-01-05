import React from "react";
import '../styles/index.css'

const Buttons = ({ onClick ,show, setShow }) => {
    if(show === false) {
        return(
            <div className="buttonS">
                <button onClick={onClick} className='Systems_button'>SYSTEMS</button>
                <button onClick={onClick} className='Cabin_button'>CABIN</button>
            </div>
        )
    }
    else{
        return(
            <div className="buttonS">
                <button onClick={onClick} className='Cabin_button'>SYSTEMS</button>
                <button onClick={onClick} className='Systems_button'>CABIN</button>
            </div>
        )
    } 
}

export { Buttons }