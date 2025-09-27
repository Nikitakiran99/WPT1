import React, { Component } from 'react';

class TextTransform extends Component {
  constructor(props) {
    // Mounting Phase: Initialize state
    super(props);
    this.state = {
      inputText: '',
      transformType: 'uppercase', // Default radio button selection
    };
    console.log('Mounting: constructor - Initialize state');
  }

  componentDidMount() {
    // Mounting Phase: Runs after component is added to DOM
    console.log('Mounting: componentDidMount - Setup complete');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Updating Phase: Control re-rendering
    console.log('Updating: shouldComponentUpdate - Check if update is needed');
    return (
      nextState.inputText !== this.state.inputText ||
      nextState.transformType !== this.state.transformType
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Updating Phase: Runs after DOM updates
    console.log(
      `Updating: componentDidUpdate - Text: ${prevState.inputText} -> ${this.state.inputText}, Transform: ${prevState.transformType} -> ${this.state.transformType}`
    );
  }

  componentWillUnmount() {
    // Unmounting Phase: Cleanup
    console.log('Unmounting: componentWillUnmount - Cleanup');
  }

  // Handle text input change
  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  // Handle radio button change
  handleRadioChange = (event) => {
    this.setState({ transformType: event.target.value });
  };

  // Transform text based on selected radio button
  transformText = () => {
    const { inputText, transformType } = this.state;
    switch (transformType) {
      case 'uppercase':
        return inputText.toUpperCase();
      case 'lowercase':
        return inputText.toLowerCase();
      case 'titlecase':
        return inputText
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      default:
        return inputText;
    }
  };

  render() {
    // Mounting & Updating Phase: Render UI
    console.log('Mounting/Updating: render - Generate UI');
    const { inputText, transformType } = this.state;
    const transformedText = this.transformText();

    return (
      <div >
        <h1>Q.3-Text Transform Demo</h1>
        {/* Text Input */}
        <div>
          <label>Enter Text: </label>
          <input
            type="text"
            value={inputText}
            onChange={this.handleInputChange}
            placeholder="Type something..."
          />
        </div>
        {/* Radio Buttons */}
        <div>
          <label>
            <input
              type="radio"
              value="uppercase"
              checked={transformType === 'uppercase'}
              onChange={this.handleRadioChange}
            />
            Uppercase
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              value="lowercase"
              checked={transformType === 'lowercase'}
              onChange={this.handleRadioChange}
            />
            Lowercase
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              value="titlecase"
              checked={transformType === 'titlecase'}
              onChange={this.handleRadioChange}
            />
            Title Case
          </label>
        </div>
        {/* Output */}
        <div style={{ marginTop: '20px' }}>
          <h3>Transformed Text:</h3>
          <p>{transformedText || 'No text entered'}</p>
        </div>
      </div>
    );
  }
}

export default TextTransform;