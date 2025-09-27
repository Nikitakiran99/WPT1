
//2:

import React from 'react';
import LifecycleDemo from './LifecycleDemo';
import TextTransform from './TextTransform';
import UserDetailsForm from './UserDetailsForm';
import { Factorial, Calculator, SingleOperationCalculator } from './Components';

function App() {
  return (
    <div className="App">
      <h1>Q.2-React Lifecycle Demo</h1>

      <LifecycleDemo />
      <TextTransform />
      <UserDetailsForm  />


      <h1>Q.1-React Calculator</h1>
      <Factorial initialNumber={5} />
      <Calculator num1={10} num2={5} />
      <SingleOperationCalculator num1={10} num2={5} operation="add"/>


    </div>

  );
}

export default App;

//----------------------------------------------------------


// Unmount2:

// import React, { Component } from 'react';
// import LifecycleDemo from './LifecycleDemo';

// class App extends Component {
//   state = { show: true };

//   toggleShow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>React Lifecycle Demo</h1>
//         <button onClick={this.toggleShow}>
//           {this.state.show ? 'Hide' : 'Show'} Component
//         </button>
//         {this.state.show && <LifecycleDemo />}
//       </div>
//     );
//   }
// }

// export default App;
//--------------------------------------------------------

//3.

// import React from 'react';
// import TextTransform from './TextTransform';

// function App() {
//   return (
//     <div className="App">
//       <TextTransform />
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------------------

//Unmounting3:

// import React, { Component } from 'react';
// import TextTransform from './TextTransform';

// class App extends Component {
//   state = { show: true };

//   toggleShow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.toggleShow}>
//           {this.state.show ? 'Hide' : 'Show'} Component
//         </button>
//         {this.state.show && <TextTransform />}
//       </div>
//     );
//   }
// }

// export default App;

//-----------------------------------------------------------------

// Unmounting4:

// import React, { Component } from 'react';
// import UserDetailsForm from './UserDetailsForm';

// class App extends Component {
//   state = { show: true };

//   toggleShow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.toggleShow}>
//           {this.state.show ? 'Hide' : 'Show'} Form
//         </button>
//         {this.state.show && <UserDetailsForm />}
//       </div>
//     );
//   }
// }

// export default App;