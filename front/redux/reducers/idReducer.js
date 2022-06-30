import {SET_ID} from '../actions'

const initialState = {
  id : ""
}
const reducer = (state=initialState, action) =>{
  switch(action.type){
    case SET_ID:
      return{
        id: action.payload.id
      }
    default: return state
  }
}

export default reducer;