import React, { Component } from 'react'
//import fetch from 'node-fetch'
import Card from './Card'
import './CardHolderStyle.css'
import { Link } from 'react-router-dom'



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

        let listData = <div className="listParent">
                            <div />
                            <div className="listEmpty">
                                <h1>List empty</h1>
                                <Link to="/add">Click here</Link> to add data  
                            </div>
                            
                        </div>

        if(posts.length !== 0 ){
            listData = <div>
                                {
                                    posts.map(x => <Card key={x.id} id={x.id} title={x.title} body={x.body} />)
                                }
                        </div>
            
        }
        return (
            <div>{listData}</div>
            
        )
    }
}

export default CardHolder