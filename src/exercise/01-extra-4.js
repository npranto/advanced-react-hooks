// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT': {
        return {
          ...state,
          count: state.count + action.step,
        }
      }
      default: {
        return state
      }
    }
  }
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

// Implementation of useState hook with useReducer hook
// function useStateHook(initialState) {
//   function useStateReducer(state, action) {
//     if (typeof action === 'function') {
//       return action(state)
//     }
//     return action
//   }
//   return React.useReducer(useStateReducer, initialState, (initialArg) =>
//     typeof initialState === 'function' ? initialState() : initialState,
//   )
// }

// function Counter() {
//   const [count, setCount] = useStateHook(14)
//   return (
//     <div className="Counter">
//       <h1>Count: {count}</h1>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         +
//       </button>
//       <button
//         type="button"
//         onClick={() => setCount(prevState => prevState - 3)}
//       >
//         -
//       </button>
//       <button type="button" onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   )
// }
