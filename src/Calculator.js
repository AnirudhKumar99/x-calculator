import { useState } from "react";

export const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    let button = e.target.innerText;
    if (button === "C") {
      setExpression("");
      setResult("");
    } else if (button === "=") {
      let value = eval(expression);
      if (value === undefined) {
        setResult("Error");
      } else {
        setResult(value);
      }
      //   try {
      //     setResult(eval(expression));
      //   } catch (error) {
      //     setResult("Error");
      //   }
    } else {
      setExpression(expression + button);
    }
  };
  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1> React Calculator</h1>
      <input
        style={{ marginTop: "15px", marginBottom: "15px" }}
        type="text"
        value={expression}
      />
      {result !== "" && (
        <div style={{ color: "gray", marginBottom: "15px", fontSize: "20px" }}>
          {result}{" "}
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          fontStyle: "bold",
        }}
      >
        {buttons.map((button, index) => {
          return (
            <button
              style={{
                width: "2.5em",
                height: "2.5em",
                border: "2px solid black",
                borderRadius: "10px",
                fontSize: "1.5em",
              }}
              key={button}
              onClick={handleClick}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};
