import styles from '../styles/Home.module.css'
import Content from '../components/Home/Content'
import contentListAPI from './api/contentList';
import { useEffect, useState, useRef } from 'react';

/*
==================================================
======================홈 페이지=====================
==================================================
수정일자 : 2022. 06. 21
완 : 더미 데이터 구현
미완: 세부 디자인
*/

export default function Home({result}) {
  const targetRef = useRef();
  const [blogData, SetblogData] = useState([]);
  const [loading, SetLoading] = useState(false);

  const option = {
    root : null,
    rootMargin: '0px',
    threshold: 1,
    delay: 1000,
  }
  console.log()
  useEffect(()=>{
    async function listingNew(){      
      if(targetRef){
        const param = {"num": String(blogData.length)}
        SetLoading(true);
        const result = await contentListAPI(param)
        const observer = new IntersectionObserver((entries) =>{
          entries.forEach(entry =>{
            if(entry.isIntersecting){
              SetblogData([...blogData, ...result.data.data]);              
            }
          })
        } ,option)
        observer.observe(targetRef.current);
      }
      SetLoading(false);      
    }
    listingNew()
  },[blogData])



  return (
    <div className={styles.homeAuth_container}>
      <div className={styles.homeAuth_header}>Blogs List</div>
      <div className={styles.homeAuth_blogs}>
        {blogData.map((data, i) => {            
            return (
              <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.User.userId} create_date={data.createdAt}/>
            );
          })}
        {loading ? <img src='https://i.stack.imgur.com/kOnzy.gif'  width={"200px"} height={"200px"}/> : null}
        <div ref={targetRef}/>
      </div>
    </div>
  )
}

// export const getStaticProps = async()=>{  
//   const result = await contentListAPI();
//   return {
//     props: {
//       result
//     }
//   }
// }