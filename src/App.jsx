import { useEffect, useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCheckOnline } from "./useCheckOnline";
import { useToggle } from "./useTogggle";
import { useDirectionCheck } from "./useDirectionCheck";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  // custom hooks declaration-----start
  let isOnline = useCheckOnline();
  const direction = useDirectionCheck();
  const [toggle, clickHandler] = useToggle();
  const [setData, getData] = useLocalStorage();
  // custom hooks declaration -----end

  const [inputValue, setInputValue] = useState();
  const [localData, setLocalData] = useState();
  const [localDataShow, setLocalDataShow] = useState(false);

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const saveButtonHandler = () => {
    setData("DATA", inputValue);
    toast("Data saved");
    setInputValue("");
  };

  const displayDataFromLocal = () => {
    let dataFromLocal = getData("DATA");
    setLocalData(dataFromLocal);
  };

  const showDataHandler = () => {
    setLocalDataShow(true);
    displayDataFromLocal();
  };

  const closeButtonHandler = () => {
    setLocalDataShow(false);
  };
  useEffect(() => {
    displayDataFromLocal();
  }, [inputValue]);
  return (
    <div>
      <h4>Website Direction is :{direction}</h4>
      <h3>{isOnline ? `you are online` : `you are offline`}</h3>
      <h1>{toggle ? `ON` : "OFF"}</h1>
      <button onClick={clickHandler}>Click me toggle Text</button> <br />
      <br />
      <input
        value={inputValue}
        type="text"
        placeholder="Enter text to store local storage"
        onChange={changeInputHandler}
      />
      <ToastContainer />
      {inputValue && <button onClick={saveButtonHandler}>Save data</button>}
      <br />
      <br />
      <button onClick={showDataHandler}>Click to show localStorage</button>
      {localDataShow && (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h1>Data from local storage is: {localData}</h1>
          <h1
            style={{
              borderRadius: "50%",
              border: "1px solid red",
              backgroundColor: "red",
              cursor: "pointer",
            }}
            onClick={closeButtonHandler}
          >
            X
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
