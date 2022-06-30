import styles from '../../styles/Nav.module.css'
// import { useDispatch } from 'react-redux';
// import { changeLoginState } from '../../redux/actions';
import Link from "next/link"
/*
==================================================
===================Logout 컴포넌트==================
==================================================
수정일자 : 2022. 06. 24
사용 페이지 : Sidebar.js
완 : UI 구현
미완: 
*/

export default function Nav({ href, icon }) {

  return (
    <Link href={href}>
    <div className={styles.menuItems}>
      {icon}
    </div>
  </Link>
  )
}
