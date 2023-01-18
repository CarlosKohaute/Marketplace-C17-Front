import { useState } from "react";
export function Home() {
  const [number, setNumber] = useState(0);

  function add() {
    setNumber((state) => state + 1);
    console.log(number);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}
