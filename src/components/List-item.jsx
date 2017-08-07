var React = require('react');
import '../style/card.scss';
import $ from 'jquery';

export default class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="card card--big" onClick={ this.props.onClick }>
        <div className="card__image" style={{backgroundImage: `url( "${this.props.media.show.image && this.props.media.show.image.original}" )` }} ></div>
        <h2 className="card__title">{this.props.media.show.name}</h2><span className="card__subtitle">By Mattia Astorino</span>
        <p className="card__text">{$(this.props.media.show.summary).text().substring(0, 60)} ...</p>
        <div className="card__action-bar">
          <button className="card__button">DETAIL</button>
        </div>
      </div>
    )
  }

}
