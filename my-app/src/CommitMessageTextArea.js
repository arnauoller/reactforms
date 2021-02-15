import React, { Component } from "react";
import { Input } from "antd";
import { Progress } from 'antd';
const { TextArea } = Input;


class CommitMessageTextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commitMessage: "",
    };
  }

  handleCommitMessageChange = (event) => {
    this.setState({
      commitMessage: event.target.value,
    });
  };

  render() {
    return (
        <div className="CommitMessageTextArea">
          <TextArea
            style={{ width: 600, height:0 }}
            size = "large"
            placeholder="Enter your commit message here"
            showCount
            placeholder="Controlled autosize"
            autoSize={{ minRows: 1, maxRows: 6 }}
            value={this.state.commitMessage}
            onChange={this.handleCommitMessageChange}
          />
        </div>      
    );
  }
}

export default CommitMessageTextArea;
