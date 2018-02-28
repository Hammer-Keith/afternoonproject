import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      Title: "",
      Body: ""
    };
  }
  componentDidMount(req, res, next) {
    axios.get("http://localhost:3001/api/todos").then(response => {
      this.setState({
        todos: response.data
      });
    });
  }
  updateTitle(input) {
    this.setState({
      Title: input
    });
  }
  updateBody(input) {
    this.setState({
      Body: input
    });
  }
  updateTodo(id) {
    axios
      .put("http://localhost:3001/api/editTodo", {
        id: id,
        Title: this.state.Title,
        Body: this.state.Body
      })
      .then(response => {
        console.log(response);
        window.location.href = "/";
      });
  }
  deleteTodo(id) {
    axios
      .delete(`http://localhost:3001/api/deleteTodo/${id.toString()}`)
      .then(response => {
        axios.get("http://localhost:3001/api/todos").then(response => {
          console.log(response);
          this.setState({
            todos: response.data
          });
        });
      });
  }

  render() {
    return (
      <div className="content">
        <p>Home</p>

        {this.state.todos.map((val, i) => (
          <div>
            {console.log(val)}
            <Card todo={val} />
            <input
              name="editTitle"
              className="enterInput"
              onChange={e => {
                this.updateTitle(e.target.value);
              }}
            />
            <input
              name="editBody"
              className="enterInput"
              onChange={e => {
                this.updateBody(e.target.value);
              }}
            />
            <button
              name="enter username"
              className="enterButton"
              onClick={() => {
                this.updateTodo(val.id);
              }}
            >
              Update
            </button>
            <button
              name="enter username"
              className="enterButton"
              onClick={this.deleteTodo.bind(this, val.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default Home;
