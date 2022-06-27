import styles from '../styles/Home.module.css'
import Content from '../components/Home/Content'
import contentListAPI from './api/contentList';

/*
==================================================
======================홈 페이지=====================
==================================================
수정일자 : 2022. 06. 21
완 : 더미 데이터 구현
미완: 세부 디자인
*/

export default function Home({result}) {
  return (
    <div className={styles.homeAuth_container}>
      <div className={styles.homeAuth_header}>Blogs List</div>
      <div className={styles.homeAuth_blogs}>
        {result.map((data, i) => {            
            return (
              <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.writer} create_date={data.create_date}/>
            );
          })}
      </div>
    </div>
  )
}

export const getStaticProps = async()=>{  
  const result = await contentListAPI();
  return {
    props: {
      result
    }
  }
}