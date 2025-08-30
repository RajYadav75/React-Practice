import React, { useEffect, useState } from 'react'

export default function Storage() {
    const [user, setuser] = useState("");
    function handleIdChange(e){
        setuser(e.target.value);
    }
    function removeSession(){
        alert("Your session expired");
        sessionStorage.removeItem("userid");
        window.location.reload();
    }
    useEffect(()=>{
        setTimeout(removeSession,10000);
    },[])
    function handleLogin(){
        sessionStorage.setItem("userid",user);
        alert("Your Id Saved");
        setTimeout(removeSession,10000);
    }

  return (
    <div>
        <h2>Storage</h2>
        <input type="text" onChange={handleIdChange} placeholder='UserId' />
        <button className="btn btn-danger" onClick={handleLogin}>Login</button>
        <p className='fw-bold mt-4'>{sessionStorage.getItem("userid")} logged in</p>
    </div>
  )
}
