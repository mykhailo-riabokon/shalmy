import React from "react";
import { Empty, Spin, Card, Icon } from "antd";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../context";

import "./index.css";

class Recommendations extends React.Component {
  static contextType = UserDataContext;

  state = {
    list: [],
    isLoading: false,
    isLoaded: false
  };

  onLoaded = responses => {
    const allItems = responses.reduce((memo, item) => {
      return memo.concat(
        item.docs.map(item => ({
          ...item.data(),
          id: item.id
        }))
      );
    }, []);
    const uniqueItems = allItems.reduce((memo, item) => {
      const inList = memo.find(memoItem => memoItem.id === item.id);

      if (!inList) {
        memo.push(item);
      }

      return memo;
    }, []);

    this.setState({ list: uniqueItems, isLoading: false, isLoaded: true });
  };

  createQueries = () => {
    return this.context.userData.objects.map(object => {
      return window.firestore
        .collection("exercises")
        .where("objects", "array-contains", object)
        .get();
    });
  };

  componentDidMount() {
    if (this.context.userData.objects) {
      this.setState({ isLoading: true });

      Promise.all(this.createQueries()).then(this.onLoaded);
    } else {
      this.props.history.push("/");
    }
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
