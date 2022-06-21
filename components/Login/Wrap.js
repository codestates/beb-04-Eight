import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import styles from '../../styles/Wrap.module.css'

/*
==================================================
============로그인, 회원가입 페이지 컴포넌트==============
==================================================
수정일자 : 2022. 06. 21
완 : 
미완: 상황에 맞는 페이지 구현
*/

export default function Wrap() {

  const [pageState, setPageState] = useState("Register");

  const changePage = () => {
    if(pageState === "Register"){
      setPageState("Login")
    }
    else{
      setPageState("Register")
    }
    
  }

  return (
    <div className={styles.wrapContainer}>
      {pageState === "Login" ? <Register/> : <Login/>}
      <div>
        {pageState === "Login" ? "Already have an account?" : "No account?"}
        <button onClick={changePage}>{pageState}</button>
      </div>
    </div>
  )
}
