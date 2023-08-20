import React, { useState } from "react";
import Form from "./Components/Form/Form";
import AlleEintrag from "./Components/AlleEintrag/AlleEintrag";
import Details from "./Components/Details/Details";
import Context from "./Context";

function App() {

  
  const [contentList, setContentList] = useState([{ todo: "mein todo", checked: false, id: 1 }]);
  let [counter, setCounter] = useState(0)

  return (
    <div className="mainContainer">
      <Context.Provider value={{ contentList, setContentList, counter, setCounter }}>
        <Details listLength={contentList.length}/>
        <p className="m-0 fs-5">
          Dies ist eine Todo-App. Hier kannst du deine Todo's verwalten.
          Wenn du eine Aufgabe erledigt hast, klicke bitte in das weiße Kästchen!
          Denn damit kannst du sehen welche und wie viele Aufgaben du noch zu erledigen hast.
        </p>
        <Form />
        <AlleEintrag />
      </Context.Provider>
    </div>
  );
}

export default App;
