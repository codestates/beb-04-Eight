import {CHANGE_MODAL_STATE} from '../actions'

const initialState = {
  currentState : false
}
const reducer = (state=initialState, action) =>{
  switch(action.type){
    case CHANGE_MODAL_STATE:
      return{
        currentState: !state.currentState
      }
    default: return state
  }
}

export default reducer;