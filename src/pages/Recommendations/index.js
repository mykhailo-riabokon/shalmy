import React from "react";
import { Card } from "antd";
import "./index.css";

// title
// description
// image / gif
// benefits:
// duration
// object

const cards = Array.from(Array(10), (_, index) => ({
  id: index,
  title: `title ${index}`,
  description: `desciption ${index}`,
  image: "",
  benefits: ["a", "b", "c"],
  duration: 123,
  objects: ["object 1", "object 2"]
}));

const createDescription = card => {
  return (
    <div className="card-description">
      <p className="description">{card.description}</p>
      <p className="benefits">Benefits: {card.benefits.join(", ")}</p>
      <p className="duration">Duration (in minutes): {card.duration}</p>
    </div>
  );
};

class Recommendations extends React.Component {
  render() {
    return (
      <div className="recommendations-container">
        <h1>Recommendations</h1>
        <div className="results">
          {cards.map(card => (
            <Card
              key={card.id}
              style={{ width: 240 }}
              cover={
                <img
                  alt={card.title}
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Card.Meta
                title={card.title}
                description={createDescription(card)}
              />
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Recommendations;
