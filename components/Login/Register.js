import styles from '../../styles/Register.module.css'

/*
==================================================
=================회원가입 컴포넌트=====================
==================================================
수정일자 : 2022. 06. 21
완 : 
미완: 회원가입 UI 구현, 서버 통신
*/

export default function Register() {
  return (
    <div className={styles.registerContainer}>
      <h3 className={styles.registerTitle}>Register Page</h3>
      id:
      <input type='text'></input>
      pw:
      <input type='password'></input>
      name:
      <input type='text'></input>
      phone:
      <input type='text'></input>
      <button className={styles.registerButton}>Register</button>
    </div>
  )
}
