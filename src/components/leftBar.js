import React from "react";
import { CheckText, Toggle } from '.';
import '../styles/index.css';

const LeftBar = () => {
    return <div className='leftBar'>
        <div>
            <CheckText bigText='ALL SYSTEM CHECK' smallText='Normal' />
            <CheckText bigText='RENDEZVOUS BURN SLOW' smallText='Normal'/>
            <CheckText  bigText='PREPARE RENDEZVOUS BURN' smallText='Normal'/>
            <CheckText iconColor={"#40C110"} bigText='THERMAL SHIELD' smallText='Applied'/>
            <CheckText  bigText='BURN GO/NO-GO' smallText='Normal'/>
            <CheckText iconColor={"#EA7B15"} bigText='POWER COMPLETION' smallText='Awaiting'/>
            <CheckText  bigText='STATION DECK CHECK' smallText='Normal'/>
        </div>
    </div>

    
}

export { LeftBar }