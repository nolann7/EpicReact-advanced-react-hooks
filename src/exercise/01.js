// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import {useReducer} from 'react'

function Counter({initialCount = 0, step = 1}) {
  // const [count, setCount] = useReducer(
  //   (prevState, newState) => prevState + newState,
  //   initialCount,
  // )
  // const [count, dispatchCount] = useReducer(reducer, initialCount)
  // 2-3 extra
  // function countReducer(prevState, newState) {
  //   return typeof newState === 'function' ? newState(prevState) : newState
  // }

  // const [state, setState] = useReducer(countReducer, {count: initialCount})
  // const {count} = state
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))
  // return <button onClick={increment}>{count}</button>

  // const increment = () => setCount(step)
  // return <button onClick={increment}>{count}</button>
  // return (
  //   <button onClick={() => dispatchCount({type: 'increment'})}>{count}</button>
  // )
  // 4 extra
  function countReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT': {
        return {count: state.count + action.step}
      }
      default:
        throw Error('Unknown action: ' + action.type)
    }
  }
  const [state, dispatch] = useReducer(countReducer, {count: initialCount})
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
