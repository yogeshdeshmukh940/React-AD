import React, { useRef, useState } from 'react'

function Hello() {
  const [data, setData] = useState(0);
  const count = useRef(0);
  const getvalue = useRef(null);

  function abc() {
    count.current = count.current + 1;
    setData(count.current); // Triggers re-render to update UI
    console.log("Count (useRef):", count.current);

    // Accessing DOM element through ref
    if (getvalue.current) {
      console.log("Div Text Content:", getvalue.current);
    }
  }

  return (
    <>
      <div ref={getvalue}>Hello {data}</div>
      <button onClick={abc}>Click me</button>
    </>
  );
}

export default Hello;
