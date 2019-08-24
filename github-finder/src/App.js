import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false });
  // }

  // Search GitHub users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />

        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            setAlert={this.setAlert}
            showClear={this.state.users.length > 0 ? true : false}
          >
            {" "}
          </Search>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
