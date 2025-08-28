import React, { createContext, useState } from 'react'
import Level1Component from './Level1Component';
export default function Context() {
    const [msg, setmsg] = useState();

    function handleNameChange(e){
        setmsg(e.target.value)
    }
  return (
    <div className='container-fluid bg-dark text-white p-4'>
        <UserContext.Provider value={msg}>
            <h1>
                Parent- 
                <input type="text" onChange={handleNameChange}  />
            </h1>
            <Level1Component />
        </UserContext.Provider>
    </div>
  )
}
