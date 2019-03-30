import React from "react";
import { Form, Input, Select, Button, message } from "antd";

const objects = [
  "Broom",
  "Towel",
  "Bathrobe tie",
  "Bags of oranges or fruits (at least 2)",
  "Cans of soup or beans (at least 2)",
  "Paper towel roll",
  "Stairs",
  "Basketball or soccer ball",
  "Another human",
  "Television",
  "Bed",
  "Chair",
  "Wall",
  "Floor",
  "Paper plate",
  "Pack of potatoes",
  "Bag of onions",
  "Your baby",
  "Music speaker"
];

class Backoffice extends React.Component {
  state = {
    isAdding: false
  };

  validate = () => {
    return new Promise(resolve => {
      this.props.form.validateFields((errors, values) => {
        resolve({ errors, values });
      });
    });
  };

  onItemAdded = () => {
    message.success("Item was added");

    this.setState({ isAdding: false });
  };

  onItemError = () => {
    message.error("Something went wrong");

    this.setState({ isAdding: false });
  };

  submit = async () => {
    const { errors, values } = await this.validate();

    if (!errors && "firestore" in window) {
      this.setState({ isAdding: true });

      const data = {
        ...values,
        videoUrl: values.videoUrl || ""
      };

      window.firestore
        .collection("exercises")
        .add(data)
        .then(this.onItemAdded)
        .catch(this.onItemError);
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="page-container">
        <h1>Backoffice</h1>
        <div className="new-exercice">
          <h3>Add new exercice</h3>
          <Form onSubmit={e => e.preventDefault()}>
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [{ required: true }]
              })(<Input placeholder="Title" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [{ required: true }]
              })(<Input.TextArea placeholder="Description" />)}
            </Form.Item>
            <Form.Item label="Image URL">
              {getFieldDecorator("imageUrl", {
                rules: [{ required: true }]
              })(<Input placeholder="Image url" />)}
            </Form.Item>
            <Form.Item label="Video URL">
              {getFieldDecorator("videoUrl")(<Input placeholder="Video url" />)}
            </Form.Item>
            <Form.Item label="Duration">
              {getFieldDecorator("duration", {
                rules: [{ required: true }]
              })(<Input placeholder="Duration" />)}
            </Form.Item>
            <Form.Item label="Objects">
              {getFieldDecorator("objects", {
                rules: [{ required: true }]
              })(
                <Select mode="multiple">
                  {objects.map((obj, index) => (
                    <Select.Option key={index} value={obj}>
                      {obj}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Button
              type="primary"
              onClick={this.submit}
              loading={this.state.isAdding}
            >
              Add new exercice
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Backoffice);
