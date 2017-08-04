import $ from 'jquery';

export default class APIService {
  static api = 'http://api.tvmaze.com/search/shows?q=';
  constructor(){}

  static get(params){
    return new Promise( (resolve, reject) => {
      $.get((this.api + params.query).split(' ').join('+'), (resp) => {
        resolve(resp);
      })
    })
  }
}
