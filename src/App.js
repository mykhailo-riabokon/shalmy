import React, { Component } from "react";
import Router from "./Router";
import { UserDataContext } from "./context";

class App extends Component {
  state = {
    userData: {}
  };

  updateData = data => {
    this.setState({ userData: data });
  };

  get userData() {
    return {
      userData: this.state.userData,
      udpateData: this.updateData
    };
  }

  render() {
    return (
      <UserDataContext.Provider value={this.userData}>
        <Router />
      </UserDataContext.Provider>
    );
  }
}

export default App;
