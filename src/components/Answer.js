import React, { useEffect } from "react";
import "../styles/index.css";
import axios from "axios";
import { STATS } from ".";
import { useState } from "react/cjs/react.development";
import { Loading } from "./Loading";

const Answer = ({ sign, date, onClick, loading, setLoading }) => {
  const [yes, setYes] = useState();

  useEffect(() => {
    var options = {
      method: "POST",
      url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
      params: { sign: `${sign}`, day: `${date}` },
      headers: {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "1ab065fffamsh757d3b8f79db0cbp15d17djsn9d0982d27708",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setYes(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (!yes) {
    return <Loading />;
  }
  return (
    <div className="Position center">
      <STATS yes={yes} onClick={onClick} />
    </div>
  );
};

export { Answer };
