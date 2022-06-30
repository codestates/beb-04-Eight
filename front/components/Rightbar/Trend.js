import styles from '../../styles/Trend.module.css'

/*
==================================================
=================Trend list 컴포넌트================
==================================================
수정일자 : 2022. 06. 23
사용 페이지 : Rightbar.js
완 : UI 구현
미완: 
*/
const trends = [
  {
    "text": "Real Performance Paradox"
  },
  {
    "text": "The Email Scam That Nearly Worked On Me"
  },
  {
    "text": "The forgotten benefits of “low tech” user interfaces"
  },
  {
    "text": "Become a Web3 Developer with just simple JS..."
  }
]

export default function Trend() {


  return (
    <div className={styles.trends}>
        What are we reading Today
        {trends.map((e, i) => {
          return (
            <div key={i} className={styles.trend}>
              <div className={styles.trendText}>{e.text}</div>
            </div>
          );
        })}
      </div>      
  )
}
