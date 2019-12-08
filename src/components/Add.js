import React, { Component } from 'react'

import './AddStyle.css'
import axios from 'axios'
class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formSubmitted: false,
            title: '',
            body: ''

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            axios.post('/api/' , this.state)
                .then(
                    this.setState({
                        formSubmitted: true
                    })
                )
    
        } catch (e) {
            console.log(e)
        }
        
        
    }

    render () {

        const { title, body, formSubmitted } = this.state
        

        let formsData = 
            <div>
                <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange}/>
                <input type="textarea" name="body" placeholder="Body" value={body} onChange={this.handleChange} />
                <input type="submit" value="Send" />
            </div>
        
        if(formSubmitted){
            
            formsData = <div>
                <br />
                <h1>Data Submitted</h1>
            </div>

        }
         
        return(
            
            <div className="form-style-6">

                <h1>Add Data</h1>
                <form onSubmit={this.handleSubmit}>

                    {formsData}
                    <br />
 
                    <a href="/">
                        <input type="button" value="Go Back"/>
                    </a>
                </form>
            </div>
            
        )
        
    }
}

export default Add