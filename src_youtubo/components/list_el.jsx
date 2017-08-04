import React from 'react';

export default class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {video: this.props.video};
  }
  //{this.state.video.id.videoId }
  //{this.state.video.snippet.description}
  //<h5 style={{maxWidth: '200px'}}>{this.state.video.snippet.description}</h5>
  render(){
    return (
      <div className="col-xs-12" >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h6 style={{maxWidth: '128px'}}>{this.state.video.snippet.title}</h6>

          <img src={ this.state.video.snippet.thumbnails.default.url } style={{cursor: 'pointer'}}
            onClick={(e) => this.props.selectVideo(this.state.video)} width="128"/>
        </div>
        <hr/>
      </div>
    )
  }
}
