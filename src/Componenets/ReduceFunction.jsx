export function Reducer(state, action) {
  // console.log(state)
  console.log(action.type);
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + state.payload
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - state.payload
      };
    }
    default:
      return state;
  }
}

export const Incrementkarobhai = { type: "INCREMENT" };
export const Decrementkarobhai = { type: "DECREMENT" };
