import "./styles/index.css";
import { CheckText, LeftBar, Buttons, Puujin, Zurhai, Answer } from "./components";
import { useState } from "react";
import { Loading } from './components/Loading'

function App() {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState(true);

  const [customColor, setColor] = useState("blue");

  const [sign, setSign] = useState("aries");
  const [date, setDate] = useState("today")

  const toggle = () => {
    setShow(!show);
  };

  const SaveFunction = () => {
    setSearch(!search)
  }

  return (
    <div className="Body">
      <div className="Title">HOROSCOPE</div>
      <div className="Sides">
        <div className="LeftSide">
          {show ? <LeftBar show={show} setShow={setShow} /> : <Puujin />}

          <div className="Button_position">
            <Buttons onClick={toggle} show={show} />
          </div>
        </div>
        <div className="ZurhaiSide">
          {search ? <Zurhai onClick={SaveFunction} sign={sign} date={date} setSign={setSign} setDate={setDate} /> : <Answer loading={loading} setLoading={setLoading} onClick={SaveFunction} sign={sign} date={date} />}
        </div>
      </div>
    </div>
  );
}
export default App;
