import { useState } from "react";
import Output from './Output';

const Greeting = () => {
  const [chandText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World !</h2>
      {!chandText && <Output>Its good to see you here</Output>}
      {chandText && <Output>Text Changed</Output>}
      <button onClick={changeTextHandler}>Click Test!</button>
    </div>
  );
};

export default Greeting;
