import styles from '../styles/Rightbar.module.css'

export default function Rightbar() {
  const trends = [
    {
      text: "Real Performance Paradox",
    },
    {
      text: "The Email Scam That Nearly Worked On Me",
    },
    {
      text: "The forgotten benefits of “low tech” user interfaces",
    },
    {
      text: "Become a Web3 Developer with just simple JS...",
    },
  ];

  return (
    <div className={styles.rightbarContent}>
      <input type='text'></input>
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
    </div>
  );
}
