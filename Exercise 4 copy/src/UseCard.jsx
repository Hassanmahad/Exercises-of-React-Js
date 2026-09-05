import { useState } from "react";

const UseCard = () => {
  const [isVisible, setisVisible] = useState(true);

  const Fchange = () => {
    setisVisible(!isVisible);
  };

  return (
    <>
      <p>The Button is : {!isVisible ? "ON" : "OF"} </p>
      <button onClick={Fchange}>Turn : {isVisible ? "ON" : "OF"}</button>
    </>
  );
};

export default UseCard;
