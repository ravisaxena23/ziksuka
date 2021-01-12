import { React, Component } from "react";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      checkbox: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("cool");
    const form = {
      email: this.state.email,
      password: this.state.password,
      checkbox: this.state.checkbox,
    };
    console.log(form);
  };
  render() {
    return (
      <div className="content">
        <img
          src={logo}
          alt="logo"
          style={{ width: "160px", height: "160px" }}
        ></img>
        <h1 style={{ color: "#fafafa", padding: "20px" }}>PREMIER ACADEMY</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label for="floatingInput" style={{ color: "black" }}>
                    Email address
                  </label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label for="floatingPassword" style={{ color: "black" }}>
                    Password
                  </label>
                </div>
                <div class="form-check" style={{ margin: "10px" }}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    name="checkbox"
                    id="flexCheckDefault"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="flexCheckDefault"
                    style={{ float: "left" }}
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  onClick={(e) => this.onSubmit(e)}
                >
                  Login
                </button>
              </form>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
