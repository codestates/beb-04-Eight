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
  const [blogData, SetblogData] = useState(result);
  const [loading, SetLoading] = useState(false);

  const option = {
    root : null,
    rootMargin: '0px',
    threshold: 1,
  }
  console.log()
  useEffect(()=>{
    async function listingNew(){
      if(targetRef){
        SetLoading(true);
        const result = await contentListAPI()
        const observer = new IntersectionObserver((entries, observer) =>{
          entries.forEach(entry =>{
            if(entry.isIntersecting){
              result ? SetblogData([...blogData, ...result]) : SetblogData([...blogData]);              
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
              <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.writer} create_date={data.create_date}/>
            );
          })}
        {loading ? <img src='https://i.stack.imgur.com/kOnzy.gif'  width={"200px"} height={"200px"}/> : null}
        <div ref={targetRef}/>
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