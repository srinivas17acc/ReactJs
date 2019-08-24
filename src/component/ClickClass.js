import React, { Component } from 'react'

 class ClickClass extends Component {
    clickHandler() {
            console.log('Clicked button ')
    }
    render() {
        return (
            <div>
                <button onClick ={this.clickHandler}>ClassButton</button>
            </div>
        )
    }

}

export default ClickClass
