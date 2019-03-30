import React from "react";
import { Empty, Spin, Card, Icon } from "antd";
import { Link } from "react-router-dom";

import "./index.css";

class Recommendations extends React.Component {
  state = {
    list: [],
    isLoading: false,
    isLoaded: false
  };

  onLoaded = res => {
    const list = res.docs.map(item => ({
      ...item.data(),
      id: item.id
    }));

    this.setState({ list, isLoading: false, isLoaded: true });
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    window.firestore
      .collection("exercises")
      .get()
      .then(this.onLoaded);
  }

  createResults = () => {
    return this.state.list.map((item, index) => {
      const actions = [<Icon type="caret-right" />];

      if (item.videoUrl) {
        actions.push(<Icon type="youtube" />);
      }

      return (
        <Link
          key={index}
          to={`/recommendations/${item.id}`}
          className="list-item--container"
        >
          <Card
            className="list-item"
            hoverable
            style={{ width: 300 }}
            cover={
              <div
                className="img"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
            }
            actions={actions}
          >
            <Card.Meta title={item.title} description={item.duration} />
          </Card>
        </Link>
      );
    });
  };

  get results() {
    if (this.state.isLoaded) {
      return this.state.list.length > 0 ? this.createResults() : <Empty />;
    } else {
      return <Spin />;
    }
  }

  render() {
    let className = "results";

    if (this.state.isLoaded && this.state.list.length > 0) {
      className += " results__not-empty";
    }

    return (
      <div className="page-container recommendations-container">
        <div className="page__title">Personalize recommendations:</div>
        <div className={className}>{this.results}</div>
      </div>
    );
  }
}

export default Recommendations;
