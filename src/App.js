import React, { Component } from 'react';
import Carousel from './components/Carousel';
import images from './components/Constant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel images={images} intervalTime = {1000} autoplay = {true} isDotWork = {true} isArrowWork = {true} />
      </div>
    );
  }
}
export default App;
