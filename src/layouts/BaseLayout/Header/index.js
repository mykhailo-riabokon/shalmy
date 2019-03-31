import React from "react";
import { Modal, Input } from "antd";
import { UserDataContext } from "../../../context";

class Header extends React.Component {
  static contextType = UserDataContext;

  state = {
    isOpen: false
  };

  render() {
    const { name } = this.context.userData;
    const close = () => this.setState({ isOpen: false });

    return (
      <div className="header">
        <div className="logo">
          <div className="icon" />
          <div className="text">shalmy</div>
        </div>
        {name && (
          <div
            className="feedback"
            onClick={() => this.setState({ isOpen: true })}
          >
            Leave your feeback
          </div>
        )}
        <Modal
          width={500}
          visible={this.state.isOpen}
          closable={false}
          onOk={close}
          onCancel={close}
        >
          <h3>Your feedback</h3>
          <Input.TextArea />
        </Modal>
      </div>
    );
  }
}

export default Header;
