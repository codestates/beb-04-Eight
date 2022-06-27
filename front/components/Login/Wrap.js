import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import styles from '../../styles/Wrap.module.css'
import { useDispatch } from 'react-redux';
import { changeModalState } from "../../redux/actions/index.js"
/*
==================================================
============로그인, 회원가입 페이지 컴포넌트==============
==================================================
수정일자 : 2022. 06. 21
완 : 모달 구현, 배경 클릭시 종료
미완:
*/

export default function Wrap() {
  const dispatch = useDispatch();
  const [pageState, setPageState] = useState("Register");
 
  const changePage = () => {
    if(pageState === "Register"){
      setPageState("Login")
    }
    else{
      setPageState("Register")
    }    
  }

  const closeModal = () => {
    dispatch(changeModalState());
  }

  return (   
    <div> 
      <div onClick={closeModal} className={styles.modalContainer}></div>
      <div className={styles.wrapContainer}>
        {pageState === "Login" ? <Register changePage={changePage}/> : <Login/>}
        <div>
          {pageState === "Login" ? "Already have an account?" : "No account?"}
          <button className={styles.wrapButton} onClick={changePage}>{pageState}</button>
        </div>
      </div>    
    </div>  
  )
}
