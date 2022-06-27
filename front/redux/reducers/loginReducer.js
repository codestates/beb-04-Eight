import {CHANGE_LOGIN_STATE} from '../actions'

const initialState = {
  login : false
}
const reducer = (state=initialState, action) =>{
  switch(action.type){
    case CHANGE_LOGIN_STATE:
      return{
        login: !(state.login)
      }
    default: return state
  }
}

export default reducer;