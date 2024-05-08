// Example of useEffect

import { useEffect, useState } from "react";

const SideEffect = () =>{

  const [count, setCount] = useState(0);

  // useEffect which shows side effect 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);

  return(
    <>
    <p>Hell this is side Effect {count}</p>
    </>
  );
}

export default SideEffect;