import React, { Component } from "react";

class MyForm extends Component {
  state = {
    name: "",
    email: "",
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.name === "") {
      alert("Please enter a name to validate.");
      return;
    }
    if (this.state.email === "") {
      alert("Please enter an email to validate.");
      return;
    }

    alert(
      `Name: ${this.state.name} and Email: ${this.state.email} has been validated Successfully.`
    );

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  render() {
    return (
      <form action="" onSubmit={this.handleFormSubmit}>
        <div className="row mb-3">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.handleName}
              id="name"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleEmail}
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div className="d-grid col-5 justify-content-md-start">
          <input
            type="submit"
            className="btn btn-primary"
            value="Validate Data!"
          />
        </div>
      </form>
    );
  }
}

export default MyForm;
