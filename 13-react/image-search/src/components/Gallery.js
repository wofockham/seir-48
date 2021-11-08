import React from 'react';

// Functional components: good when you don't need state.
// Think of it as just the render method.
// No `this`.

const Gallery = (props) => {
  return (
    <div>
      { props.images.map((url) => <img src={ url } key={ url } alt="Copyright Flickr probably" />)}
    </div>
  );
};

// class Gallery extends Component {
//   render() {
//     return (
//       <div>
//         { this.props.images.map((url) => <img src={ url } />)}
//       </div>
//     );
//   }
// }

export default Gallery;
