import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

function WelcomePerson(props) {
  console.log(props);
  return (
    <div>
      <p>First Name: {props.person.firstName}</p>
      <p>Last Name: {props.person.lastName}</p>
      <p>Email: {props.person.email}</p>
    </div>
  );
}

WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
