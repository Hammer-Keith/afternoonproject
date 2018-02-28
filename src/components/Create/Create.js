import React, {Component} from 'react';

import axios from "axios";


export default class create extends Component{
    constructor(props){
        super(props)
        this.state ={
            Title:"",
            Body:""
        }
    }

    updateTitle(input){
        this.setState({
            Title: input
        })
    }
    updateBody(input){
        this.setState({
            Body: input
        })
    }

    createItem(Title, Body){
        console.log(this.state)
        axios.post("http://localhost:3001/api/newTodo", this.state).then(response => {
            window.location.href = "/";
    })
}


    render(){
        return(
        <div>
            <h1>Create Todo</h1>
          <input
            name="Title"
            className="enterInput"
            onChange={e => {
              this.updateTitle(e.target.value);
            }}
          />
            <input
            name="Body"
            className="enterInput"
            onChange={e => {
              this.updateBody(e.target.value);
            }}
          />
          <button
            name="enter username"
            className="enterButton"
            onClick={() => {
              this.createItem(this.state.Title, this.state.Body);
            }}
          >
            enter
          </button>
            </div>
        )
    }
}