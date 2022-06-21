import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'
import {AiFillHome} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import {IoMdBookmarks} from 'react-icons/io'


export default function Sidebar() {
  return (
    <div className={styles.siderContent}>
      <img className={styles.logo} src={"/Logo.png"}></img>
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
