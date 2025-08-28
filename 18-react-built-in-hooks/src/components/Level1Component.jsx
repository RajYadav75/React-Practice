import React, { createContext, useContext } from 'react'
import { Level2Component } from './Level2Component';
let UserContext = createContext(null);
export default function Level1Component() {
    let context = useContext(UserContext);
  return (
    <div className='m-4 p-4 bg-danger text-white'>
        <h2>Level 1 Component</h2>
        {context}
        <Level2Component/>
    </div>
  )
}


