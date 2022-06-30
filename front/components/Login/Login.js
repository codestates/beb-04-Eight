import styles from '../../styles/Login.module.css'
import loginAPI from '../../pages/api/login';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeModalState, changeAccessToken } from "../../redux/actions/index.js"

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
    const cId = (e.target.value).replace(/[ ~!@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\,\[\]?|{}]/gi, "");
    e.target.value = cId
    setUserId(cId);
    
  }
  const changePw = (e) =>{
    const cPw = (e.target.value).replace(/ /gi, "");
    e.target.value = cPw
    setuserPassword(cPw);
  }

  const login = async () => {
    const param = {
      "userId": userId,
      "password": userPassword
    }

    await loginAPI(param)    
    .then((res)=>{
      if(res.message === "login success"){
        alert("login complete!");
        return res.data;
      }else{
        alert("check your ID or PW!")
        return false;
      }
    })
    .then((res)=>{
      res ? dispatch(changeModalState()) : null
      res ? dispatch(changeAccessToken(res)) : null
    })
  }

  return (
    <div className={styles.loginContainer}>
      <h3 className={styles.loginTitle}>Login Page</h3>
      id:
      <input onChange={changeId} type='text' maxLength="8"/>
      pw:
      <input onChange={changePw} type='password' maxLength="12"/>
      <button onClick={login} className={styles.loginButton}>Login</button>
    </div>
  )
}
