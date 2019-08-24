import React, {Component} from 'react'

class Message extends Component {

   constructor() {
       super()
       this.state = {
           message : `Hi am message js file `
       }
   }
    changeMessage() {
        this.setState({
            message : `thank you`
        })
    }
 
    render() {
        console.log('rendering ...')
            return (
            <div>
              <h1>{this.state.message}</h1>   
              <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
            )  
    }
}
export default Message;