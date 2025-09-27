import React, { Component } from 'react';

// Sub-component for Graduate
class GraduateComponent extends Component {
  render() {
    return (
      <div>
        <h3>Graduate Details</h3>
        <label>
          Degree:
          <input
            type="text"
            name="degree"
            value={this.props.details.degree}
            onChange={this.props.onChange}
            placeholder="e.g., B.Sc."
            style={{ margin: '5px', padding: '5px' }}

          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={this.props.details.year}
            onChange={this.props.onChange}
            placeholder="e.g., 2020"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
        <label>
          Final Year Score:
          <input
            type="number"
            name="finalYearScore"
            value={this.props.details.finalYearScore}
            onChange={this.props.onChange}
            placeholder="e.g., 85.5"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
        <label>
          University:
          <input
            type="text"
            name="university"
            value={this.props.details.university}
            onChange={this.props.onChange}
            placeholder="e.g., XYZ University"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
      </div>
    );
  }
}

// Sub-component for PG
class PGComponent extends Component {
  render() {
    return (
      <div>
        <h3>Postgraduate Details</h3>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={this.props.details.year}
            onChange={this.props.onChange}
            placeholder="e.g., 2022"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
        <label>
          Thesis Subject:
          <input
            type="text"
            name="thesisSubject"
            value={this.props.details.thesisSubject}
            onChange={this.props.onChange}
            placeholder="e.g., Machine Learning"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
      </div>
    );
  }
}

// Sub-component for UnderGrad
class UnderGradComponent extends Component {
  render() {
    return (
      <div>
        <h3>Undergraduate Details</h3>
        <label>
          SSC Score:
          <input
            type="number"
            name="ssc"
            value={this.props.details.ssc}
            onChange={this.props.onChange}
            placeholder="e.g., 90"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
        <label>
          HSC Score:
          <input
            type="number"
            name="hsc"
            value={this.props.details.hsc}
            onChange={this.props.onChange}
            placeholder="e.g., 85"
            style={{ margin: '5px', padding: '5px' }}
          />
        </label>
      </div>
    );
  }
}

class UserDetailsForm extends Component {
  constructor(props) {
    // Mounting Phase: Initialize state
    super(props);
    this.state = {
      name: '',
      email: '',
      educationLevel: 'Graduate', // Default dropdown selection
      graduateDetails: { degree: '', year: '', finalYearScore: '', university: '' },
      pgDetails: { year: '', thesisSubject: '' },
      underGradDetails: { ssc: '', hsc: '' },
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
      nextState.name !== this.state.name ||
      nextState.email !== this.state.email ||
      nextState.educationLevel !== this.state.educationLevel ||
      nextState.graduateDetails !== this.state.graduateDetails ||
      nextState.pgDetails !== this.state.pgDetails ||
      nextState.underGradDetails !== this.state.underGradDetails
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Updating Phase: Runs after DOM updates
    console.log(
      `Updating: componentDidUpdate - Education Level: ${prevState.educationLevel} -> ${this.state.educationLevel}`
    );
  }

  componentWillUnmount() {
    // Unmounting Phase: Cleanup
    console.log('Unmounting: componentWillUnmount - Cleanup');
  }

  // Handle input changes for name and email
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle dropdown change
  handleEducationChange = (event) => {
    this.setState({ educationLevel: event.target.value });
  };

  // Handle changes in sub-component fields
  handleDetailChange = (event, detailType) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [detailType]: {
        ...prevState[detailType],
        [name]: value,
      },
    }));
  };

  // Conditional rendering based on education level
  renderEducationDetails = () => {
    const { educationLevel, graduateDetails, pgDetails, underGradDetails } = this.state;
    switch (educationLevel) {
      case 'Graduate':
        return (
          <GraduateComponent
            details={graduateDetails}
            onChange={(e) => this.handleDetailChange(e, 'graduateDetails')}
          />
        );
      case 'PG':
        return (
          <PGComponent
            details={pgDetails}
            onChange={(e) => this.handleDetailChange(e, 'pgDetails')}
          />
        );
      case 'UnderGrad':
        return (
          <UnderGradComponent
            details={underGradDetails}
            onChange={(e) => this.handleDetailChange(e, 'underGradDetails')}
          />
        );
      default:
        return null;
    }
  };

  render() {
    // Mounting & Updating Phase: Render UI
    console.log('Mounting/Updating: render - Generate UI');
    const { name, email, educationLevel } = this.state;

    return (
      <div>
        <h1>Q.4-User Details Form</h1>
        {/* Name and Email Inputs */}
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Enter your name"
              style={{ margin: '5px', padding: '5px', width: '200px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Enter your email"
              style={{ margin: '5px', padding: '5px', width: '200px' }}
            />
          </label>
        </div>
        {/* Education Level Dropdown */}
        <div>
          <label>
            Education Level:
            <select
              name="educationLevel"
              value={educationLevel}
              onChange={this.handleEducationChange}
              style={{ margin: '5px', padding: '5px' }}
            >
              <option value="Graduate">Graduate</option>
              <option value="PG">Postgraduate</option>
              <option value="UnderGrad">Undergraduate</option>
            </select>
          </label>
        </div>
        {/* Conditionally Rendered Component */}
        <div style={{ marginTop: '20px' }}>
          {this.renderEducationDetails()}
        </div>
      </div>
    );
  }
}

export default UserDetailsForm;