import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

function Navbar() {
    return (
        <div className='navigation'>
            <div className="navbar">
                <div className="left">Dazzling Demo</div>
                <div className="right">
                    <ul className='pages'><li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/addpages"}>Add Pages</NavLink></li>
                        <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Languages</NavLink></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar