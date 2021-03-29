import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  // define function here
  renderList = () => {
    // one line
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  render() {
    return (
      // render function
      <div className="gif-list">
        {this.renderList()};
      </div>
    );
  }
}

export default GifList;
