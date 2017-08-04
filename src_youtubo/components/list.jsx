import React from 'react';
import ListItem from './list_el';

export default class List extends React.Component {


  constructor(props){
    super(props);
    this.state = {};
  }

  getList(){
    return this.props.videos
      .filter(el => el.id && el.id.videoId)
      .map( (vid) => {
      return (
        <ListItem key={vid.id.videoId} video={vid} selectVideo={this.props.selectVideo}></ListItem>
      )
    })
  }

  render(){
    return (
      <div className="row">
        { this.getList() }
      </div>
    )
  }
}
