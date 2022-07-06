import { useReducer, useState } from "react";
import Button from "./Button";
import {
  Decrementkarobhai,
  Incrementkarobhai,
  Reducer
} from "./Componenets/ReduceFunction";
import "./styles.css";

export default function App() {
  const [state, disaptch] = useReducer(Reducer, { count: 0, payload: 1000 });
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value)
    setText([
      ...text,
      {
        value: e.target.value
      }
    ]);
  };
  // console.log(text[0].value)

  return (
    <div className="App">
      <h1>COunt:{state.count}</h1>
      <Button
        handlekaro={() => {
          disaptch(Incrementkarobhai);
        }}
      >
        {" "}
        ADD{" "}
      </Button>
      <Button
        handlekaro={() => {
          disaptch(Decrementkarobhai);
        }}
      >
        Reduce{" "}
      </Button>
      <input
        placeholder="write here"
        onChange={handleChange}
        value={text.value}
      />
      {text.map((elem) => (
        <div>{elem.value}</div>
      ))}
      {}
    </div>
  );
}
