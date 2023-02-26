import resets from "../images/reset.png";

function Buttons({ num, setCounter }) {
  function plus() {
    setCounter(num + 3);
  }
  function minus() {
    if (num > 1 ? setCounter(num - 2) : setCounter(0)) {
    }
  }
  function reset() {
    setCounter(0);
  }

  return (
    <>
      <div className='btn'>
        <button className='addition' onClick={plus}>
          +
        </button>
        <button className='reset' onClick={reset}>
          <img src={resets} alt='' />
        </button>
        <button className='decrease' onClick={minus}>
          -
        </button>
      </div>
    </>
  );
}

export default Buttons;
