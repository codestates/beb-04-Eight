import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'
import {AiFillHome} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import {IoMdBookmarks} from 'react-icons/io'
/*
==================================================
===============좌측 사이드바 컴포넌트==================
==================================================
수정일자 : 2022. 06. 21
사용 페이지 : Layout.js
완 : 로고
미완: 네비게이션 버튼, 로그인 상태 아이콘
*/
export default function Sidebar() {
  return (
    <div className={styles.siderContent}>
      <img className={styles.logo} src="/Temp.png"></img>
      <div className={styles.menu}>
        <Link href="/" className={styles.link}>
          <div className={styles.menuItems}>
            <AiFillHome />
          </div>
        </Link>
        <Link href="/myBlogs">
          <div className={styles.menuItems}>
            <IoMdBookmarks />
          </div>
        </Link>
        <Link href="/newStory">
          <div className={styles.menuItems}>
            <MdRateReview />
          </div>
        </Link>
      </div>
      <div className={styles.logout}>{/* <Logout /> */}</div>
    </div>
  );
}
