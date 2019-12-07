import React, { Component } from 'react'
//import fetch from 'node-fetch'
import Card from './Card'
import './CardHolderStyle.css'



class CardHolder extends Component {
    constructor (props) {
        super(props)
        this.state = {
            posts: []
        }

    }

    componentDidMount = async () => {
        let dataReceived = await fetch('/api/')
        
        dataReceived = await dataReceived.json()
        
        this.setState({posts: dataReceived})
    }

    

    render () {
        const { posts } = this.state
        return (
            <div >
            

                <div>
                    {
                        posts.map(x => <Card key={x.id} id={x.id} title={x.title} body={x.body} />)
                    }
                </div>
            </div>
        )
    }
}

export default CardHolder