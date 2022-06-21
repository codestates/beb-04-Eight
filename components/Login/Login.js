import styles from '../../styles/Login.module.css'

/*
==================================================
==================로그인 컴포넌트=====================
==================================================
수정일자 : 2022. 06. 21
완 : 
미완: 로그인 UI 구현, 서버 통신
*/

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h3 className={styles.loginTitle}>Login Page</h3>
      id:
      <input type='text'></input>
      pw:
      <input type='password'></input>
      <button className={styles.loginButton}>Login</button>
    </div>
  )
}
