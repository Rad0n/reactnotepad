import React from 'react'
import './InnerNavStyle.css'
import { Link } from 'react-router-dom'


const InnerNav = () => {
    return(
        <div className="navbar">
            <div></div>
            <div className="logo">
                <h1>Notepad</h1>
            </div>
            <div className="ulbox">
                <ul className="ulstyle">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to="/add">
                        <li>Add</li>
                    </Link>
                </ul>

            </div>
            
        </div>
    )
}

export default InnerNav