import Number from "./Number";
import Buttons from "./Buttons";
import { useState } from "react";

function MainCounter() {
  const [num, setNum] = useState(0);

  return (
    <main className='main'>
      <Number num={num} />
      <Buttons num={num} setNum={setNum} />
    </main>
  );
}

export default MainCounter;
