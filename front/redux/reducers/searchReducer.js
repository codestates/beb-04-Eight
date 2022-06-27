import {SEARCH_BLOG} from '../actions'

const initialState = {
  keyword : ''
}
const reducer = (state=initialState, action) =>{
  switch(action.type){
    case SEARCH_BLOG:
      return{        
        keyword: action.payload.keyword
      }
    default: return state
  }
}

export default reducer;