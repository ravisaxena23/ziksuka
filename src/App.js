import { React, Component } from "react";
import "./App.css";
import logo from "./logo.png";

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
        <p style={{ color: "#fafafa",fontFamily:"monospace",fontSize:"64px" }}>PREMIER ACADEMY</p>
        <div class="container">
          <div class="row">
            <div class="col-sm col-md-4"></div>
            <div class="col-sm col-md-4">
              <form>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}
                  />
                  <label for="floatingInputGrid" style={{ color: "#0d6efd",padding:"0.6rem 0.5rem" }}>
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
                    style={{borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"}}
                  />
                  <label for="floatingPassword" style={{ color: "#0d6efd",padding:"0.6rem 0.5rem" }}>
                    Password
                  </label>
                </div>
                <div class="form-check" style={{ margin: "10px" }}>
                <label
                    class="form-check-label"
                    for="flexCheckDefault"
                    style={{ float: "left" }}
                  >
                  Remember Login?      
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                    name="checkbox"
                    id="flexCheckDefault"
                    onChange={(e) => this.handleChange(e)}
                    style={{marginLeft:"20px"}}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  onClick={(e) => this.onSubmit(e)}
                  style={{minWidth:"100%"}}
                >
                  Login
                </button>
              </form>
            </div>
            <div class="col-sm col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
