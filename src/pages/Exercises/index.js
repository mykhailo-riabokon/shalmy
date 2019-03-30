import React from "react";
import { Spin } from "antd";
import Exercise from "../../components/Exercise";

import "./index.css";

class Exercises extends React.Component {
  state = {
    list: [],
    isLoading: false
  };

  onLoaded = res => {
    const list = res.docs.map(item => item.data());

    this.setState({ list, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    window.firestore
      .collection("exercises")
      .get()
      .then(this.onLoaded);
  }

  render() {
    return (
      <div className="page-container exercises">
        <h1>List of all exercises</h1>
        <Spin spinning={this.state.isLoading} />
        <div className="list">
          {this.state.list.map((item, index) => (
            <Exercise key={index} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Exercises;
