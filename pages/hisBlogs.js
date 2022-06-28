
import styles from '../styles/hisBlogs.module.css'
import { useEffect, useState } from "react";
import Content from '../components/Home/Content'

import axios from "axios"; // 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 axios 사용

export default function hisBlogs() {

  const [blogs, setBlogs] = useState([]);
	  


 /* const FindhisdummyPosts = async () => {
   
  useEffect(()=> {
    await axios       //서버로 id 전달하면 해당하는 id로 작성된 글 목록들 가져오기

      .post('http://localhost:8080//board/boardList', {  userId : userId })

      .then((res) => { setBlogs(res.data);}) // post보내고 받은 데이터로 blogs 상태 변경 ( json화 필요 ) ( 받아올 데이터 name, title, text)

      .catch((err) => { if (err) { console.log(err.res.data); } });

  }, [])

  };  */


  return (
    <div className={styles.hisBlogscontainer}>
      <div className={styles.hisBlogs}> Id </div>

      <div className={styles.imgcontainer}>   
      <img className={styles.profileimg} src='/r.jpg'></img>
      </div>
      <div className={styles.follower }> follwer :  </div>
      <div className={styles.name }> name :  </div>
      <div className={styles.description }> description :  </div>
      
          <div className={styles.blogs}>
        
 {/*  const blogsdata = blogs.map((data, index) => {
   return (
    <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.writer} create_date={data.create_date}/>
   )
  }) */}
          </div>
        </div>
   
  )
}