import {CHANGE_ACCESS_TOKEN} from '../actions'

const initialState = {
  accessToken : ""
}
const reducer = (state=initialState, action) =>{
  switch(action.type){
    case CHANGE_ACCESS_TOKEN:
      return{
        accessToken: action.payload.accessToken
      }
    default: return state
  }
}

export default reducer;