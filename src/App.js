import { useReducer } from "react";
import Button from "./Button";
import {
  Decrementkarobhai,
  Incrementkarobhai,
  Reducer
} from "./Componenets/ReduceFunction";
import "./styles.css";

export default function App() {
  const [state, disaptch] = useReducer(Reducer, { count: 0, payload: 1000 });

  return (
    <div className="App">
      <h1>COunt:{state.count}</h1>
      <Button
        handlekaro={() => {
          disaptch(Incrementkarobhai);
        }}
      >
        ADD
      </Button>
      {/* <button onClick={()=>{disaptch(Incrementkarobhai)}}>ADDKARO</button> */}

      <Button
        handlekaro={() => {
          disaptch(Decrementkarobhai);
        }}
      >
        Reduce
      </Button>
    </div>
  );
}
