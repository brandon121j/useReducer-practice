import './App.css';
import React, { useReducer, useState } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  CHANGE_COUNT: 'change-count',
};

const countReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return (state = 0);
    case ACTIONS.CHANGE_COUNT:
      return (state = action.payload.amount);
    default:
      return state;
  }
};


function App() {
  const [changer, setChanger] = useState(0);
  const [state, dispatch] = useReducer(countReducer, 0);
	return (
		<div className="App">
			<div className="appContainer">
				<button onClick={() => dispatch({ type: ACTIONS.RESET })}>RESET</button>
				<button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
				<h1>{state}</h1>
				<button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
				<div className="changeCount">
        <button
					onClick={() =>
						dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { amount: changer } })
					}
				>
					Change Count
				</button>
        <input type="number" onChange={() => console.log(this)}/>
        </div>
			</div>
		</div>
	);
}

export default App;
