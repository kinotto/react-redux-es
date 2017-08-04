export default function Detail(state = {}, action){
  switch(action.type){
    case 'GO_TO_DETAIL':
      return {'newstate': 'ciao'};
    default:
      return state;
  }
}
