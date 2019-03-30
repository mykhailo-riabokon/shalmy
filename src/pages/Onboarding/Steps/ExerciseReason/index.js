import React from "react";
import { Form, Radio, Button } from "antd";

class ExerciseReason extends React.Component {
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
        <Form.Item label="What is your main drive to exercise?">
          {this.props.form.getFieldDecorator("reason", {
            rules: [{ required: true }]
          })(
            <Radio.Group>
              <Radio value={1}>I want to be healthy</Radio>
              <Radio value={2}>I want to lose weight as I’m getting fat</Radio>
              <Radio value={3}>I want to find people to exercise with</Radio>
            </Radio.Group>
          )}
          <Button type="primary" onClick={this.onSubmit}>
            Next
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const ExerciseReasonForm = Form.create()(ExerciseReason);

ExerciseReasonForm.title = "Reason to exercise";

export default ExerciseReasonForm;
