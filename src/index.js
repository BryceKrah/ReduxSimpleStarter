'use strict'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

// downward data flow = most parent component should be the one doing data fetching

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null

    };

    this.videoSearch('steph curry')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSeachTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
