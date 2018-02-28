import React, { Component } from "react";

const Card = props => (
  <div>
    <h1>{props.todo.title}</h1>
    <p>{props.todo.body}</p>
    <div />
  </div>
);

export default Card;
