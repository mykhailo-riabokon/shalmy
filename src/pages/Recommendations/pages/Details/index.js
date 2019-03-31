import React from "react";
import { Empty, Spin, Icon } from "antd";

import "./index.css";

class Details extends React.Component {
  state = {
    data: null,
    isLoading: false,
    isLoaded: false
  };

  onLoaded = res => {
    const data = res.data();

    this.setState({ data, isLoading: false, isLoaded: true });
  };

  showDetails = () => {
    const {
      title,
      imageUrl,
      description,
      duration,
      videoUrl
    } = this.state.data;

    return (
      <div className="details-container">
        <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="info">
          <div className="title">{title}</div>
          <div className="duration">Duration: {duration}</div>
          {videoUrl && (
            <a className="youtube" href={videoUrl} target="_blank">
              Watch on <Icon type="youtube" /> YouTube
            </a>
          )}
          <div className="description">{description}</div>
        </div>
      </div>
    );
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    window.firestore
      .collection("exercises")
      .doc(this.props.match.params.id)
      .get()
      .then(this.onLoaded);
  }

  get results() {
    if (this.state.isLoaded) {
      return this.state.data ? this.showDetails() : <Empty />;
    } else {
      return <Spin />;
    }
  }

  render() {
    let className = "results";

    if (this.state.isLoaded && this.state.data) {
      className += " results__not-empty";
    }

    return (
      <div className="page-container recommendations-container detils-container">
        <div className={className}>{this.results}</div>
      </div>
    );
  }
}

export default Details;
