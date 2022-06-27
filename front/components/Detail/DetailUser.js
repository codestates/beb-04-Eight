import styles from '../../styles/DetailUser.module.css'
import Link from 'next/link'
import {FaTwitter, FaFacebook, FaLinkedin, FaLink} from 'react-icons/fa'
/*
==================================================
===============디테일 페이지 유저 컴포넌트===============
==================================================
수정일자 : 2022. 06. 23
사용 페이지 : /content[id]
완 : 각종 링크 구현
미완: 이미지 삽입
*/

export default function DetailUser({writer}) {

  return (
    <div className={styles.detailUserContainer}>
      <div className={styles.detailUserLeft}>
      <Link href={'/'} >
        <img src='/Temp.png'></img>
      </Link>
      {writer}
      </div>
      <div className={styles.detailUserRight}>
        <a href="https://twitter.com" target="_black"><FaTwitter /></a>
        <a href="https://www.facebook.com" target="_black"><FaFacebook /></a>
        <a href="https://kr.linkedin.com" target="_black"><FaLinkedin /></a>
        <a href="https://urclass.codestates.com/" target="_black"><FaLink /></a>
      </div>
    </div>
  )
}
