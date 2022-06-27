import styles from '../../styles/Login.module.css'
import loginAPI from '../../pages/api/login';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeModalState, changeLoginState } from "../../redux/actions/index.js"

/*
==================================================
==================로그인 컴포넌트=====================
==================================================
수정일자 : 2022. 06. 23
완 : 로그인 UI 구현, 서버 통신
미완: API 변경
*/

export default function Login() {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const changeId = (e) =>{
    setUserId(e.target.value);
  }
  const changePw = (e) =>{
    setuserPassword(e.target.value);
  }

  const login = async () => {
    const param = {
      "userName": userId,
      "password": userPassword
    }

    await loginAPI(param)    
    .then((res)=>{
      if(res === "success"){
        alert("login complete!");
        return true;
      }else{
        alert("check your ID or PW!")
        return false;
      }
    })
    .then((res)=>{
      res ? dispatch(changeModalState()) : null
      res ? dispatch(changeLoginState()) : null
    })
  }

  return (
    <div className={styles.loginContainer}>
      <h3 className={styles.loginTitle}>Login Page</h3>
      id:
      <input onChange={changeId} type='text'></input>
      pw:
      <input onChange={changePw} type='password'></input>
      <button onClick={login} className={styles.loginButton}>Login</button>
    </div>
  )
}
