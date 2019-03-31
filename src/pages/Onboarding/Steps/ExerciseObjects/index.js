import React from "react";
import { Form, Checkbox, Button } from "antd";
import "./index.css";

const options = [
  "Broom",
  "Towel",
  "Bathrobe tie",
  "Bags of oranges or fruits (at least 2)",
  "Cans of soup or beans (at least 2)",
  "Paper towel roll",
  "Stairs",
  "Basketball or soccer ball",
  "Another adult",
  "Television",
  "Bed",
  "Chair",
  "Wall",
  "Floor",
  "Plastic plate",
  "Pack of potatoes",
  "Bag of onions",
  "Your baby",
  "Music speaker"
];

class ExerciseObjects extends React.Component {
  validate = () => {
    return new Promise(resolve => {
      this.props.form.validateFields((errors, values) => {
        resolve({ errors, values });
      });
    });
  };

  onSubmit = async () => {
    const { errors, values } = await this.validate();

    if (!errors) {
      this.props.onSubmit(values);
    }
  };

  render() {
    return (
      <Form>
        <Form.Item label="What would you like to exercise with?">
          {this.props.form.getFieldDecorator("objects", {
            rules: [{ required: true }]
          })(<Checkbox.Group options={options} />)}
          <br />
          <Button type="primary" onClick={this.onSubmit}>
            Next
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const ExerciseObjectsForm = Form.create()(ExerciseObjects);

ExerciseObjectsForm.title = "Select some objects";

export default ExerciseObjectsForm;
