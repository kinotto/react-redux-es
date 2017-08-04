var React = require('react');
var ReactDOM = require('react-dom');
import SearchBar from './components/searchBar';
import List from './components/list';
import Player from './components/player';
import $ from 'jquery';

var api_key = 'AIzaSyC__x-jXi1qHiQkgVlJeOZg_gPFIFKuqeo';
var API = 'https://www.googleapis.com/youtube/v3/search?key=' + api_key;


function selectVideoCb(vid){
  this.setState({selectedVideo: vid});
}
function fetchVideos(query){
  let self = this;
  return new Promise(function(resolve, reject){
    $.ajax({
      url: API,
      type: 'GET',
      data: {
        part: 'snippet',
        q: query || '',
        maxResults: 25
      },
      success: function(resp){
        self.setState({videos: resp.items});
        resolve(resp);
      },
      error: function(err){
        reject(err);
      }
    })
  });
}


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {videos: [], selectedVideo: null};
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <SearchBar search={fetchVideos.bind(this)}></SearchBar>
          </div>
          <hr/>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <List videos={this.state.videos} selectVideo={selectVideoCb.bind(this)}></List>
          </div>
          <div className="col-xs-6">
            <Player selectedVideo={this.state.selectedVideo}></Player>
          </div>
        </div>
      </div>
    )
  }

}
