import React from "react";
import { Form, Input, Button } from "antd";

class ExerciseLocation extends React.Component {
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
        <Form.Item label="Location">
          {this.props.form.getFieldDecorator("location", {
            rules: [{ required: true }]
          })(<Input placeholder="location" />)}
          <Button type="primary" onClick={this.onSubmit}>
            Next
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(ExerciseLocation);
