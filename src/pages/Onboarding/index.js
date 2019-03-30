import React from "react";
import { Steps } from "antd";
import ExerciseReasonStep from "./Steps/ExerciseReason";
import ExerciseObjectsStep from "./Steps/ExerciseObjects";
import ExerciseLocationStep from "./Steps/ExerciseLocation";
import ExercisePlaceStep from "./Steps/ExercisePlace";
import UserNameStep from "./Steps/UserName";

import "./index.css";

class Onboarding extends React.Component {
  state = {
    currentStep: 0,
    data: {}
  };

  handlePaginationClick(direction) {
    let nextItem = this.state.currentItem;

    // Increment nextPage if direction variable is next, otherwise decrement it
    nextItem = direction === "next" ? nextItem + 1 : nextItem - 1;

    // Call function inside setState's callback
    // Because we have to make sure first page state is updated
    this.setState({ currentItem: nextItem });
  }

  nextStep = data => {
    const nextStep = this.state.currentStep + 1;

    if (nextStep === this.steps.length) {
      this.props.history.push("/recommendations");
    } else {
      this.setState({
        currentStep: nextStep,
        data: {
          ...this.state.data,
          data
        }
      });
    }
  };

  get steps() {
    return [
      <ExerciseReasonStep onSubmit={this.nextStep} />,
      <ExercisePlaceStep onSubmit={this.nextStep} />,
      <ExerciseObjectsStep onSubmit={this.nextStep} />,
      <ExerciseLocationStep onSubmit={this.nextStep} />,
      <UserNameStep onSubmit={this.nextStep} />
    ];
  }

  render() {
    return (
      <div className="onboarding-page">
        <Steps className="steps" size="small" current={this.state.currentStep}>
          {this.steps.map((step, index) => (
            <Steps.Step key={index} title={step.title} />
          ))}
        </Steps>
        {this.steps[this.state.currentStep]}
      </div>
    );
  }
}

export default Onboarding;
