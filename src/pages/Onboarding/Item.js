import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      question: 'What is your main drive to exercise?',
      answers: [
        'I want to be healthy',
        'I want to lose weight as I’m getting fat',
        'I want to find people to exercise with',
        ]
    }
  }
  
  render() {
    const { currentItem, totalItems } = this.props;
    const answers = this.state.answers.map((answer) => {
      return <li className="answerOption">{answer}</li>
    });

    return (
      <div>
        <div className="Item">
          <div className="Item-text">
            Question {currentItem} of {totalItems}
          </div>
          <div className="Question">
            {this.state.question}
          </div>
          <div className="Answers">
            <ul className="Answers-list">
              {answers}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
