import { useEffect, useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(true);

  let clickHandler = () => {
    setToggle(!toggle);
  };
  return [toggle, clickHandler];
};
