import React,{Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super()
        this.state = {
            count : 0
        }
    }
    increment() {
    //    this.setState ({
    //        count : this.state.count + 1
    //    },()=>{console.log(`count values : ${this.state.count}`)}
    //    )
     
     this.setState((prevState,props) => ({
         count : prevState.count + 1 + parseInt(props.value)
     }))

       console.log(this.state.count)
    }

    incrementFiveTime () {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        console.log(`rendering ... `)
        return (
            <div>
                <h2>Count {this.state.count}</h2>
                <button onClick = {() => this.incrementFiveTime()}>Increment</button>
            </div>
        )
    }
}
export default Counter;