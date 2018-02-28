
import React, { Component } from 'react';
//import axios from "axios";
import './App.css';
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
   };
 }


 componentDidMount(){
  //this.props.retrieveUser()

//    axios
//      .get('/api/test')
//      .then(response => this.setState({ test: response.data }))
//      .catch(console.log);

 }
 render() {
   return (
     <div className="App">
       <header className="App-header">
       <Link to="/">
       <button className="headerbutton">Home</button>
       </Link>
       <Link to="/create">
       <button className="headerbutton">Create</button>
       </Link>
       
       </header>
       {routes}
     </div>
   );
 }
}

export default App;