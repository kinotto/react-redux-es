import React from 'react';

export default class Player extends React.Component {
  constructor(props){
    super(props);
  }
  getSrc(){
    return 'https://www.youtube.com/embed/' + this.props.selectedVideo.id.videoId
  }
  render(){
    return this.props.selectedVideo ? (
      /*<video width="400" controls>
        <source src={this.getSrc()} type="video/mp4"/>
        <source src={this.getSrc()} type="video/ogg"/>
        Your browser does not support HTML5 video.
      </video>*/
      <iframe type="text/html"
          width="100%"
          height="385"
          src={this.getSrc()}
          frameBorder="0"
          allowFullScreen
          style={{padding: '15px'}}>
      </iframe>

    ) : null

  }
}
