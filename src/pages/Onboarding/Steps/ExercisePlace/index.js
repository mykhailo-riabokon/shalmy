import React from "react";
import { Form, Radio, Button } from "antd";

class ExercisePlace extends React.Component {
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
        <Form.Item label="Where would you like to exercise?">
          {this.props.form.getFieldDecorator("place", {
            rules: [{ required: true }]
          })(
            <Radio.Group>
              <Radio value={1}>At home</Radio>
              <Radio value={2}>Indoor sports halls</Radio>
              <Radio value={3}>Anywhere outdoors</Radio>
              <Radio value={4}>Does not really matter</Radio>
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

const ExercisePlaceForm = Form.create()(ExercisePlace);

ExercisePlaceForm.title = "Place preference";

export default ExercisePlaceForm;
