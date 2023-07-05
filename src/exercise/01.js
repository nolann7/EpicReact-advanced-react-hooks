// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import {useReducer} from 'react'

function Counter({initialCount = 0, step = 1}) {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': {
        return state + step
      }
      default:
        throw Error('Unknown action: ' + action.type)
    }
    // if (action.type === 'increment') {
    //   let newState = state + step
    //   return newState
    // }
  }

  // const [count, setCount] = useReducer(
  //   (prevState, newState) => newState,
  //   initialCount,
  // )
  const [count, dispatchCount] = useReducer(reducer, initialCount)

  // const increment = () => setCount(count + step)
  // return <button onClick={increment}>{count}</button>
  return (
    <button onClick={() => dispatchCount({type: 'increment'})}>{count}</button>
  )
}

function App() {
  return <Counter />
}

export default App
