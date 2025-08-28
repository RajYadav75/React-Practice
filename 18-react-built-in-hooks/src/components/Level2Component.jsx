import React, { createContext, useContext } from 'react'
let userContext = createContext(null);
export function Level2Component() {
    let context = useContext(UserContext);
  return (
    <div className='m-4 p-4 bg-warning text-dark'>
        <h2>Level-2 Component</h2>
        <p>{context}</p>
    </div>
  )
}
