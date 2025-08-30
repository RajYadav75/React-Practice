import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [signed, setsigned] = useState(false);

    function handleSignIn(){
        setsigned(true);
    }
    function handleSignout(){
        setsigned(false)
    }

  return (
    <div className='container-fluid'>
        <nav className="d-flex justify-content-between p-2 mt-3">
            <div className="fs-5 fw-bold">Shopper</div>
            {
                (signed===true)?
                <div className='fs-5'>
                    <span className='mx-3'>Home</span>
                    <span className='mx-3'>Shop</span>
                    <span className='mx-3'>Pages</span>
                    <span className='mx-3'>Blog</span>
                </div>
                : <div></div>
            }
            <div>
                {
                    (signed===true)?
                    <button className="btn btn-danger" onClick={handleSignout}>SignOut</button>:
                    <button className="btn btn-primary" onClick={handleSignIn}>SignIn</button>
                }
            </div>
        </nav>
    </div>
  )
}
