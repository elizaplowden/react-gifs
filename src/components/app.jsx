import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const gifs = [
      // objects containing an id
      // define the gifs
      { id: "f6VfCFyOL5KmiICskp" },
      { id: "dXKiD8XysOuhFAJB1f" },
      { id: "dXKiD8XysOuhFAJB1f"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="f6VfCFyOL5KmiICskp"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
