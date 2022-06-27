import styles from '../styles/Rightbar.module.css'
import ModalWrap from './Login/Wrap'
import UserInfo from './Rightbar/UserInfo'
import Search from './Rightbar/Search'
import Trend from './Rightbar/Trend'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { changeModalState } from "../redux/actions/index.js"

/*
==================================================
===============우측 사이드바 컴포넌트==================
==================================================
수정일자 : 2022. 06. 24
사용 페이지 : Layout.js
완 : UI 구현, 사용자 정보 케이스 추가, 로그인 버튼 이벤트
미완: 검색 창 이벤트, 추천 블로그 링크
*/

export default function Rightbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const modalState = useSelector(state => state.modalReducer);
  const loginState = useSelector(state => state.loginReducer);
  
  const modalOnOff = () =>{
    dispatch(changeModalState());
  }

  return (
    <div className={styles.rightbarContent}>
      {loginState.login ? null : <button className={styles.login} onClick={modalOnOff}>Sign In</button>}
      <Search/>
      {router.route === "/content/[id]" ? <UserInfo/> : null}
      <Trend/>   
      {modalState.currentState ? <ModalWrap /> : null}
    </div>
  );
}
