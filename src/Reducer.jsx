import { useReducer } from 'react';

const INITIALSTATE = 0

const ACTIONTYPE = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
} 

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return action.payload;
  }
};

export default function Reducer() {
  const [count, dispatch] = useReducer(reducerFn, INITIALSTATE);

  const handleAction = (action, payload) => {
    dispatch({
      type: action,
      payload: payload
    });
  };

  return (
    <>
      <div>Counter : {count}</div>
      <button type="button" onClick={() => handleAction('INCREMENT', 1)}>
        Increment
      </button>
      <button type="button" onClick={() => handleAction('DECREMENT', 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => handleAction('', INITIALSTATE)}>
        Reset
      </button>
    </>
  );
}
