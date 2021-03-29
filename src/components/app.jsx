import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [],
      selectedGifId: "f6VfCFyOL5KmiICskp"
    }
  }

  search = (query) => {
    // implement API call

  }

  render() {
    const gifs = [
      // objects containing an id
      // define the gifs
      { id: "f6VfCFyOL5KmiICskp" },
      { id: "dXKiD8XysOuhFAJB1f" },
      { id: "7SKWbnycqb2Pze62Zk"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
