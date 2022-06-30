export const CHANGE_MODAL_STATE = "CHANGE_MODAL_STATE";
export const CHANGE_ACCESS_TOKEN = "CHANGE_ACCESS_TOKEN";
export const CHANGE_WRITER = "CHANGE_WRITER"
export const EMPTY_WRITER = "EMPTY_WRITER"
export const SEARCH_BLOG = "SEARCH_BLOG"
export const SET_ID = "SET_ID"

// 모달 여닫는 액션
export const changeModalState = () =>{
  return {    
    type: CHANGE_MODAL_STATE,    
  }
}

// 로그인 여부 액션
export const changeAccessToken = (_accessToken) =>{
  return {
    type: CHANGE_ACCESS_TOKEN,
    payload: {
      accessToken: _accessToken
    }
  }
}

// 디테일 페이지 작성자 변경 액션
export const changeWriter = (_writer) =>{
  return {
    type: CHANGE_WRITER,
    payload: {
      writer: _writer
    }
  }
}

// 디테일 페이지 작성자 삭제 액션
// Rightbar에 작성자 정보 띄우는데 사용 
export const emptyWriter = () =>{
  return {
    type: EMPTY_WRITER
  }
}

// 검색 키워드 변경 액션
export const searchBlog = (_keyword) =>{
  return {
    type: SET_ID,
    payload: {
      keyword: _keyword
    }
  }
}

// 검색 키워드 변경 액션
export const setId = (_id) =>{
  return {
    type: SEARCH_BLOG,
    payload: {
      id: _id
    }
  }
}