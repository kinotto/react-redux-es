var React = require('react');

export default class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="listItem" onClick={(e) => this.props.detail(this.props.video) }>
        <img className="img-rounded" src={this.props.video.show.image && this.props.video.show.image.original}
          alt="no img" width="64" height="64"/>
        <p>{this.props.video.show.name}</p>
        <p>{this.props.video.show.language} </p>
      </div>
    )
  }

}
