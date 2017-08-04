var React = require('react');
import '../style/card.scss';
import $ from 'jquery';

export default class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      /*<div className="listItem" onClick={(e) => this.props.detail(this.props.video) }>
        <img className="img-rounded" src={this.props.video.show.image && this.props.video.show.image.original}
          alt="no img" width="64" height="64"/>
        <p>{this.props.video.show.name}</p>
        <p>{this.props.video.show.language} </p>
      </div>*/

    <div className="card card--big">
      <div className="card__image" style={{backgroundImage: `url( "${this.props.video.show.image.original}" )` }} ></div>
      <h2 className="card__title">{this.props.video.show.name}</h2><span className="card__subtitle">By Mattia Astorino</span>
      <p className="card__text">{$(this.props.video.show.summary).text().substring(0, 80)} ...</p>
      <div className="card__action-bar">
        <button className="card__button">DETAIL</button>
      </div>
    </div>
    )
  }

}
