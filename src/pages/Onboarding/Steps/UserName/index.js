import React from "react";
import { Form, Input, Button } from "antd";

class UserName extends React.Component {
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
        <Form.Item label="What is your name?">
          {this.props.form.getFieldDecorator("name", {
            rules: [{ required: true }]
          })(<Input placeholder="Your name" />)}
          <Button type="primary" onClick={this.onSubmit}>
            Done
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const UserNameForm = Form.create()(UserName);

UserNameForm.title = "Your name";

export default UserNameForm;
