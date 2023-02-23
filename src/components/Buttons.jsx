import reset from "../images/reset.png";
function Buttons() {
  return (
    <>
      <div className='btn'>
        <button className='addition'>+</button>
        <button className='reset'>
          <img src={reset} alt='' />
        </button>
        <button className='decrease'>-</button>
      </div>
    </>
  );
}

export default Buttons;
