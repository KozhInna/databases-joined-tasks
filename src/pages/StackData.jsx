import { useState } from "react";
import Header from "../Components/Header";
import styles from "./StackData.module.css";

function StackData() {
  const [arrValue, setArrValue] = useState([]);
  const [clickedMode, setClickedMode] = useState("");

  console.log(clickedMode);

  function handleAdd() {
    if (clickedMode !== "") setArrValue([...arrValue, arrValue.length + 1]);
  }
  console.log(arrValue);
  function handleDelete() {
    const tempArr = [...arrValue];
    if (clickedMode === "stack") {
      tempArr.splice(tempArr.length - 1, 1);
      setArrValue(tempArr);
    }
    if (clickedMode === "queue") {
      tempArr.splice(0, 1);
      setArrValue(tempArr);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.dataContainer}>
          <div className={styles.middleBox}>
            <div className={styles.choiceContainer}>
              <h2>Choose mode</h2>
              <div className={styles.btnContainer}>
                <div
                  className={styles.btn}
                  onClick={() => {
                    setClickedMode(clickedMode !== "stack" ? "stack" : "");
                    setArrValue([]);
                  }}
                  style={{
                    backgroundColor: clickedMode === "stack" && "#feb33b",
                    color: clickedMode === "stack" && "#444",
                  }}
                >
                  STACK
                </div>
                <div>/</div>
                <div
                  className={styles.btn}
                  onClick={() => {
                    setClickedMode(clickedMode !== "queue" ? "queue" : "");
                    setArrValue([]);
                  }}
                  style={{
                    backgroundColor: clickedMode === "queue" && "#feb33b",
                    color: clickedMode === "queue" && "#444",
                  }}
                >
                  QUEUE
                </div>
              </div>

              <h2>Choose action</h2>
              <div className={styles.btnContainer}>
                <div
                  className={styles.btn}
                  onClick={(value) => handleAdd(value)}
                >
                  ADD
                </div>
                <div>/</div>
                <div
                  className={styles.btn}
                  onClick={(value) => handleDelete(value)}
                >
                  DELETE
                </div>
              </div>
            </div>
            <div className={styles.illustration}>
              {arrValue.map((el) => (
                <div className={styles.stackqueueItem} key={el}>
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StackData;
