import React, { Component } from 'react'

 class EventBind extends Component {
     
    constructor(props) {
        super(props)
        this.state = {
            message : `hello`
        }
       // this.clickHandler = this.clickHandler.bind(this)
    }

//    clickHandler() {
//        this.setState({
//             message : `am here`
//        })
//        console.log(this)
//    }

  clickHandler = () =>{
      this.setState({
          message : `am react js `
      })
  }
  
    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click me</button> */}
                <button onClick = {this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
