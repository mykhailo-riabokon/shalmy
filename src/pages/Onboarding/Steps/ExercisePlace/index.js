import React from "react";
import { Form, Radio, Button } from "antd";
import "./index.css";

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
      <Form layout="vertical">
        <Form.Item label="Where would you like to exercise?">
          {this.props.form.getFieldDecorator("place", {
            rules: [{ required: true }]
          })(
            <Radio.Group>
              <div className="radio-list">
                <Radio className="list-item" value={1}>
                  At home
                </Radio>
                <Radio className="list-item" value={2}>
                  Indoor sports halls
                </Radio>
                <Radio className="list-item" value={3}>
                  Anywhere outdoors
                </Radio>
                <Radio className="list-item" value={4}>
                  Does not really matter
                </Radio>
              </div>
            </Radio.Group>
          )}
          <br />
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
