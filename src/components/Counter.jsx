import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log({ count });
  };

  return (
    <>
      <p>Count: {count}</p>
      <p>
        <button onClick={handleClick}>Increasement</button>
      </p>
    </>
  );
};
export default Counter;
