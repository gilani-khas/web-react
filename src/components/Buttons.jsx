import reset from "../images/reset.png";

function Buttons({ num, setNum }) {
  function plus() {
    setNum(num + 3);
  }
  function minus() {
    if (num > 1 ? setNum(num - 2) : setNum(0)) {
    }
  }
  function resets() {
    setNum(0);
  }

  return (
    <>
      <div className='btn'>
        <button className='addition' onClick={plus}>
          +
        </button>
        <button className='reset' onClick={resets}>
          <img src={reset} alt='' />
        </button>
        <button className='decrease' onClick={minus}>
          -
        </button>
      </div>
    </>
  );
}

export default Buttons;
