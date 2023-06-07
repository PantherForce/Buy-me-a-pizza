import React from 'react'


const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand'>Resturant</a>
            <button className='btn btn-primary'>
                orders <span className='badge badge-light'></span>
            </button>
        </nav>
    </div>
  )
}

export default Header