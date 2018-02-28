import React, {Component} from "react";

export default class Card extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.todo.title}</h1>
                <p>{this.props.todo.body}</p>
                <div>

                </div>
            </div>
        )
    }
}