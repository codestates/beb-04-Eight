// import styles from '../../styles/Logout.module.css'
import {BiExit} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { changeAccessToken } from '../../redux/actions';
import logoutAPI from '../../pages/api/logout';
import axios from 'axios';
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
  const {accessToken} = useSelector(state => state.loginReducer)
  const logout = async() =>{
    const param = {
      accessToken: accessToken.accessToken
    }
    await logoutAPI(param)
    .then((res)=>{
        console.log(res)
        if(res === "로그아웃 성공"){
          dispatch(changeAccessToken());
          alert(res);          
        }
        else{
          alert("로그아웃 실패");
        }
    })
  }
  return (
    <div onClick={logout}>
      <BiExit/>
    </div>
  )
}
