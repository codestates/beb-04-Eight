import {CHANGE_WRITER, EMPTY_WRITER} from '../actions'

const initialState = {
  writer : ''
}
const reducer = (state=initialState, action) =>{
  switch(action.type){
    case CHANGE_WRITER:
      return{
        writer: action.payload.writer
      }
    case EMPTY_WRITER:
      return{
        writer: ''
      }
    default: return state
  }
}

export default reducer;