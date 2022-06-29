import { useState, useRef } from 'react'
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
  const targetRef = useRef();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [confirmPw, setConfirmPw] = useState(false);

  const register = async () => {
    if(cPw){
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
    else{
      alert('비밀번호를 확인해주세요')
    }
  }

  const changeId = (e) =>{
    const cId = (e.target.value).replace(/[ ~!@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\,\[\]?|{}]/gi, "");
    e.target.value = cId
    setUserId(cId);
  }
  const changePw = (e) =>{
    const cPw = (e.target.value).replace(/ /gi, "");
    e.target.value = cPw
    setUserPw(cPw);
  }
  const changeCPw = (e) =>{
    const cCPw = (e.target.value).replace(/ /gi, "");
    e.target.value = cCPw
    if(userPw === cCPw){
      setConfirmPw(true);
      targetRef.current.textContent = "비밀번호가 일치합니다."
    }else{
      setConfirmPw(false);
      targetRef.current.textContent = "비밀번호가 일치하지 않습니다."
    }
  }
  const changeName = (e) =>{
    const cName = (e.target.value).replace(/[ ~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]/gi, "");
    e.target.value = cName
    setUserName(cName);
  }
  const changePhone = (e) =>{
    const cPhone = (e.target.value).replace(/[ ~!@\#$%^&*\()\-=+_'\;<>a-z\/.\`:\"\\,\[\]?|{}]/gi, "");
    e.target.value = cPhone
    setUserPhone(cPhone);
  }

  return (
    <div className={styles.registerContainer}>
      <h3 className={styles.registerTitle}>Register Page</h3>
      id:
      <input onChange={changeId} type='text' maxLength="8"/>
      pw:
      <input onChange={changePw} type='password' maxLength="12"/>
      confirm pw:
      <input onChange={changeCPw} type='password' maxLength="12"/>
      <div className={styles.confirmPwTxt} ref={targetRef}/>
      name:
      <input onChange={changeName} type='text' maxLength="10"/>
      phone:
      <input onChange={changePhone} type='text' maxLength="11"></input>
      <button onClick={register} className={styles.registerButton}>Register</button>
    </div>
  )
}
