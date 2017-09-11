export const MY_ACTION = 'MY_ACTION';

export function DetailAction(data){
  return {
    type: 'GO_TO_DETAIL',
    payload: data
  }
}
