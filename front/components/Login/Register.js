import { useState } from 'react'
import styles from '../../styles/Register.module.css'
import registerAPI from '../../pages/api/register';

/*
==================================================
=================회원가입 컴포넌트=====================
==================================================
수정일자 : 2022. 06. 23
완 : 회원가입 UI 구현, 서버 통신
미완: API 변경
*/

export default function Register({changePage}) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const register = async () => {
    const param = {
      "userId": userId,
      "userName": userName,
      "password": userPw,
      "phone": userPhone
    }
    
    await registerAPI(param)
    .then((res)=>{
      if(res === "success"){
        alert("register complete!");
        return true;        
      }else{
        alert("check your input")
        return false;
      }
    })
    .then((res)=>{
      res ? changePage() : null
    })
  }

  const changeId = (e) =>{
    setUserId(e.target.value);
  }
  const changePw = (e) =>{
    setUserPw(e.target.value);
  }
  const changeName = (e) =>{
    setUserName(e.target.value);
  }
  const changePhone = (e) =>{
    setUserPhone(e.target.value);
  }

  return (
    <div className={styles.registerContainer}>
      <h3 className={styles.registerTitle}>Register Page</h3>
      id:
      <input onChange={changeId} type='text'></input>
      pw:
      <input onChange={changePw} type='password'></input>
      name:
      <input onChange={changeName} type='text'></input>
      phone:
      <input onChange={changePhone} type='text'></input>
      <button onClick={register} className={styles.registerButton}>Register</button>
    </div>
  )
}
