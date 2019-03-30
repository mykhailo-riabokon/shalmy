import React from "react";
import { Card } from "antd";

const createDescription = exercise => {
  return (
    <div className="exercise-description">
      <p className="duration">Duration: {exercise.duration || ""}</p>
      <p className="description">{exercise.description || ""}</p>
    </div>
  );
};

class Exercise extends React.Component {
  render() {
    const { data } = this.props;
    const cover = data.imageUrl ? (
      <img alt={data.title} src={data.imageUrl} />
    ) : (
      <p>No image provided</p>
    );

    return (
      <Card style={{ width: 240 }} cover={cover}>
        <Card.Meta title={data.title} description={createDescription(data)} />
      </Card>
    );
  }
}

export default Exercise;
