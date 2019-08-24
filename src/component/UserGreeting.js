import React , {Component} from 'react'

class UserGreeting extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn : true
        }
    }

    render() {
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = `am logged in already`
        // }else {
        //     message = `Not present`
        // }
        // return <div>{message}</div>
       return (
        this.state.isLoggedIn ? <div>User is present</div> : <div>User NOT present</div>
       ) 
    }
}

export default UserGreeting