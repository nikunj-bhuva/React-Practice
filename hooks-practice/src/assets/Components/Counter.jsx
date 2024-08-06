import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => {
    setCount(count + 1);
  };

  const handlerDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handlerDecrement}
        className="btn btn-dark mx-3"
      >
        Decrement
      </button>
      <span className="fs-3">{count}</span>
      <button
        type="button"
        onClick={handlerIncrement}
        className="btn btn-dark mx-3"
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
