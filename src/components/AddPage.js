import React from 'react'
import Add from './Add'
import Nav from './Nav'
import './AddPageStyle.css'
const AddPage = () => {
    
    return(
        <div className="AddPage">
            <div className="Nav"><Nav /></div>
            
            <div className="align">
                <div />
                <Add />
            </div>
            
        </div>
    )
}

export default AddPage