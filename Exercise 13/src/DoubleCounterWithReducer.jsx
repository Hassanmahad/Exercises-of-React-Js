import { useReducer } from 'react';

const initialState = { 
    counterA: 0 ,
    counterB: 0 ,
 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementA':
      return { ...state, counterA: state.counterA + 1 };
    case 'decrementA':
      return {...state, counterA: state.counterA > 0 ? state.counterA - 1 : 0,};
    case 'incrementB':
      return { ...state, counterB: state.counterB + 1 };
    case 'decrementB':
      return {...state, counterB: state.counterB > 0 ? state.counterB - 1 : 0,};
    case 'reset':
      return initialState;
    default:
      return state;
  }
};


const DoubleCounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>

    <div>
      <h2>counterA: {state.counterA}</h2>
      <button onClick={() => dispatch({ type: 'decrementA' })} disabled={state.counterA === 0}>-A</button>
      <button onClick={() => dispatch({ type: 'incrementA' })}>+A</button>
     
      <h2>counterB: {state.counterB}</h2>
      <button onClick={() => dispatch({ type: 'decrementB' })} disabled={state.counterB === 0}>-B </button>
      <button onClick={() => dispatch({ type: 'incrementB' })}>+B</button> <br />
          </div>
<div>
        <button onClick={() => dispatch({ type: 'reset' })}> ResetBoth </button>

</div>
    
    </>
  );
};

export default DoubleCounterWithReducer;
