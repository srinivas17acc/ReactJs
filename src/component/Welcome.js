import React,{Component} from 'react'

class Welcome extends Component {
    render() {
        const {name,age} = this.props
        return (
        <h4>name {name} age : {age}</h4>
        )
    }
}
export default Welcome;