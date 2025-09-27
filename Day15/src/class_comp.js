import React, { Component } from "react";

export class TextCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleButtonClick = (e) => {
    const action = e.target.value;

    if (action === 'LowerToUpper') {
      const upper = this.state.text.toUpperCase();
      console.log(upper);
      this.setState({ text: upper });
    } else if (action === 'UpperToLower') {
      const lower = this.state.text.toLowerCase();
      console.log(lower);
      this.setState({ text: lower });
    }
  };

  render() {
    return (
      <>
        <h1>From Class Component</h1>
        Enter text: <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          placeholder="Type something"
        />
        <br /><br />
        <button value="LowerToUpper" onClick={this.handleButtonClick}>
          Lower To Upper
        </button>
        <button value="UpperToLower" onClick={this.handleButtonClick}>
          Upper To Lower
        </button>
        <br /><br />
        <p>Output: {this.state.text}</p>
      </>
    );
  }
}
