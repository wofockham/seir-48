import React, { useState } from 'react';

const Clickr = () => {
  const [clicks, setClicks] = useState(0); // array destructuring

  return (
    <button onClick={ () => setClicks(clicks + 1) }>{ clicks } clicks so far</button>
  );
};

// class Clickr extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clicks: 0
//     };
//     this._incrementCount = this._incrementCount.bind(this);
//   }
//
//   _incrementCount() {
//     this.setState({clicks: this.state.clicks + 1})
//   }
//
//   render() {
//     return (
//       <button onClick={ this._incrementCount }>{ this.state.clicks } clicks so far</button>
//     );
//   }
// }

export default Clickr;
