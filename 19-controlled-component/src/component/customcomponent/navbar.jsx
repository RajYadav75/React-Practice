import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`d-flex justify-content-between p-3 m-2 border border-1 ${props.theme}`}>
        <div className='fw-bold fs-4'>
          <img src={props.logo} width={"30"} alt='logo' height={"30"} />
          {props.title}
        </div>
        <div className='fs-5'>
          {
            props.menuItems.map(
              item=>
                <span key={item} className='mx-3'>
                  <a href="/">{item}</a>
                </span>
            )
          }
        </div>
        <div>
          <button className='btn btn-warning bi bi-person-fill'>
            SignIn
          </button>
        </div>
    </nav>
  )
}
