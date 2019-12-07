import React, { Component } from 'react'
import './CardStyle.css'
import axios from 'axios'

class Card extends Component {

    constructor (props) {
        super(props)

        this.state = {
            dis: ''
        }

    }

    changedis = async () => {
        this.setState({
            dis: 'nope'
        })


        
        let reply = await axios.delete(`/api/${this.props.id}`)
        
        
    }

    render () {

        const {title,body} = this.props
        const {dis} = this.state
        return (
            <div className = {`${dis} card`}>
                <div className="titleStyle">{title}</div>
                
                <div className="bodyStyle">{body}</div>
                <div>
                    
                <i onClick={this.changedis} className="fa fa-times delet" aria-hidden="true"></i>
                   
                </div>
            </div>
        )
    }
    
}

export default Card