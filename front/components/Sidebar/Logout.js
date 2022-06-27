// import styles from '../../styles/Logout.module.css'
import {BiExit} from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { changeLoginState } from '../../redux/actions';
/*
==================================================
===================Logout 컴포넌트==================
==================================================
수정일자 : 2022. 06. 23
사용 페이지 : Sidebar.js
완 : UI 구현
미완: 
*/

export default function Logout() {
  const dispatch = useDispatch();

  const logout = () =>{
    dispatch(changeLoginState());
  }
  return (
    <div onClick={logout}>
      <BiExit/>
    </div>
  )
}
