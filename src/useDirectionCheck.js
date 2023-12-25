import { useEffect, useState } from "react";

export const useDirectionCheck = () => {
  const [direction, setDirection] = useState("");
  const getDirection = () => {
    let currentDirection = document.documentElement.dir;

    if (currentDirection === "rtl") {
      setDirection("RIGHT TO LEFT");
    } else if (currentDirection === "ltr") {
      setDirection("LEFT TO RIGHT");
    } else setDirection("DIRECTION NOT SPECIFIED");

    console.log(direction, "ttttttttttttttttttttttttt");
   
  };

  useEffect(() => {
    getDirection();
  }, []);

  return direction;
};
