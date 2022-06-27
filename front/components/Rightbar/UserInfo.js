import styles from '../../styles/RightbarUser.module.css'
import Link from 'next/link'
/*
==================================================
==============라이트 사이드바 유저 컴포넌트==============
==================================================
수정일자 : 2022. 06. 22
사용 페이지 : Rightbar.js
완 : UI 구현
미완: 이미지 삽입, data 받기
*/

export default function UserInfo() {

  return (
    <div className={styles.rightbarUserContainer}>
      <div className={styles.imgBox}>
        <Link href={'/'} >
          <img className={styles.rightbarUserImg} src='/Temp.png'></img>        
        </Link>        
      </div>
      <div>
        <div className={styles.textName}>
          JIMIN LEE
        </div>
        <div className={styles.textFollow}>
           124K Followers 
        </div>
        <div className={styles.textIntro}>
          자기 소개 dosghoaeiqnvpxlqnwqxlwvmnqwxlqnwlqxmwnsepqlbmwsxltmiswt
        </div>
      </div>

    </div>
  )
}
