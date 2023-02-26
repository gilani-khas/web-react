import Number from "./Number";
import Buttons from "./Buttons";
import { useState } from "react";

function MainCounter() {
  const [num, setCounter] = useState(0);

  return (
    <main className='main'>
      <Number num={num} />
      <Buttons num={num} setCounter={setCounter} />
    </main>
  );
}

export default MainCounter;
