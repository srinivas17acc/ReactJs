import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic : 'react'
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handlerTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }
   
    handleSubmit = (event) => {
       alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
       event.preventDefault();
    }


    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>UserName : </label>
                    <input type="text" value={this.state.username} onChange={this.handlerUsernameChange}></input>
                </div>

                <div>
                     <label>Comments</label>
                     <textarea value = {this.state.comments} onChange = {this.handlerCommentsChange}></textarea>

                </div>

                <div>
                     <label>Topic</label>
                     <select value = {this.state.topic} onChange = {this.handlerTopicChange}>
                        <option value = "react">ReactJs</option>
                        <option value = "java">Java</option>
                        <option value = "python">Python</option>

                     </select>
                </div>
               <button type="submit">Submit</button>
            </form>
        )
    }
}
