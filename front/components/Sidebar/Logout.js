// import styles from '../../styles/Logout.module.css'
import {BiExit} from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { changeLoginState } from '../../redux/actions';
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

  const logout = async() =>{
    
    await logoutAPI()
    .then((res)=>{
        console.log(res)
        if(res === "로그아웃 성공"){
          alert(res);
          dispatch(changeLoginState());
        }
        else{
          alert("logout fail");
        }
    })
  }
  return (
    <div onClick={logout}>
      <BiExit/>
    </div>
  )
}
