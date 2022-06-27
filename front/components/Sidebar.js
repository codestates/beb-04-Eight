import styles from '../styles/Sidebar.module.css'
import Logout from './Sidebar/Logout'
import Nav from './Sidebar/Nav'
import {AiFillHome} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import {IoMdBookmarks} from 'react-icons/io'
import { useSelector } from 'react-redux'
/*
==================================================
===============좌측 사이드바 컴포넌트==================
==================================================
수정일자 : 2022. 06. 24
사용 페이지 : Layout.js
완 : 로고, 로그인 상태 아이콘, 네비게이션 버튼
미완: 
*/
export default function Sidebar() {
  const loginState = useSelector(state => state.loginReducer);

  return (
    <div className={styles.siderContent}>
      <img className={styles.logo} src="/Temp.png"></img>
      <div className={styles.menu}>
        <Nav href={"/"} icon={<AiFillHome />}/>
        {loginState.login ? <Nav href={"/myBlogs"} icon={<IoMdBookmarks />}/> : null}
        {loginState.login ? <Nav href={"/newStory"} icon={<MdRateReview />}/> : null}
      </div>
      <div className={styles.logout}>{loginState.login ? <Logout /> : <></>}</div>
    </div>
  );
}
