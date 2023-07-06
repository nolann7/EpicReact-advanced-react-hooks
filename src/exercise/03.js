// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()
function CountContextProvider({children}) {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}
// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider
function useCount() {
  const countCtx = React.useContext(CountContext)
  if (countCtx === undefined)
    throw new Error(
      'useCount may only be used from within a (child of a) CountProvider',
    )
  const {count, setCount} = countCtx
  return [count, setCount]
}
function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count, setCount] = useCount()
  // const {count} = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  // const {setCount} = React.useContext(CountContext)
  const [count, setCount] = useCount()

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountContextProvider>
        <CountDisplay />
        <Counter />
      </CountContextProvider>
    </div>
  )
}

export default App
