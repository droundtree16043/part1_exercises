import React from "react";
import ReactDOM from "react-dom";

const Headers = (props) => {
  return <h2>Course: {props.course}</h2>;
};

const Part = (props) => {
    return <h3>Name: {props.name}</h3>;
}

const Content = (props) => {
  return <div>
      <Part name = "Fundamentals of React"/> <sub>Number of exercises: {10}</sub>
      <p>
      <Part name = "Using props to pass data"/> <sub>Number of exercises: {7}</sub>
      </p>
      <p>
      <Part name = "State of a component"/> <sub>Number of exercises: {14}</sub>
      </p>
  </div>
};

const Total = (props) => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return <h4>Total Number of Exercise:{exercises1 + exercises2 + exercises3}</h4>
  
};

const App = () => {
  return (
    <div>
      <Headers course="Half Stack application development" />
      <p>
        <Content/>
      </p>
      <p>
          <Total/>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
