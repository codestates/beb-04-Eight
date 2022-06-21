import styles from '../../styles/Content_comp.module.css'
import Link from 'next/link'

/*
==================================================
===============블로그 리스트 컴포넌트==================
==================================================
수정일자 : 2022. 06. 21
사용 페이지 : /index.js
완 : UI 구현, 링크 구현
미완: 세부 디자인
*/

export default function Content({ id, title, content, writer, create_date } ) {
  return (
    <Link href={'/content/'+id} >
      <a className={styles.content_containcer}>
      <div className={styles.content_txtSide}>
        <div className={styles.content_writer}>{writer}</div>
        <div className={styles.content_title}>{title}</div>
        <div className={styles.content_text}>{content.slice(0,100)}</div>
        <div className={styles.content_date}>{create_date}</div>
      </div>
      <div className={styles.content_imgSide}>
        <img className={styles.img} src='/Temp.png'></img>
      </div>
      </a>
    </Link>
  )
}
