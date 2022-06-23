
import styles from '../styles/MyBlogs.module.css'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Content from '../components/Home/Content'
import blogsContent from '../dumi/contentData.json'

import axios from "axios"; // 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 axios 사용

export default function myBlogs() {

  const [blogs, setBlogs] = useState([]);
	  
  /* // 1. 로그인 상태인지 체크
    useEffect(() => { // 로컬 함수 이외의 외부 함수 ( 서버 ) 로부터 데이터 받아와서 동기화 시키는 것이므로 side effect 발생하기에 useEffect 사용
      axios.post('http://localhost:8080/users/login').then((res) => {
        if(res.status === 201 && res.data) { // 로그인 상태라면 터미널에 출력하고 페이지 접근 허용
          console.log(res.data); 
        }
        else {
         useRouter.push("/login"); // 비로그인 상태라면 로그인 페이지로 이동시킴
        }
      })
    }, []); */  
    


 /* const FindMydummyPosts = async () => {
   
  useEffect(()=> {
    await axios       //서버로 id 전달하면 해당하는 id로 작성된 글 목록들 가져오기

      .post('http://localhost:8080//board/boardList', {  userId : userId })

      .then((res) => { setBlogs(res.data);}) // post보내고 받은 데이터 출력 시키기 ( json화 필요 ) ( 받아올 데이터 name, title, text)

      .catch((err) => { if (err) { console.log(err.res.data); } });

  }, [])

  };  */
 
 

  return (
    <div className={styles.myBlogscontainer}>
      <div className={styles.myBlogs}>myBlogs</div>

      <div className={styles.imgcontainer}>
        
      <img className={styles.profileimg} src='/r.jpg'></img>
      
      </div>

      <div className={styles.name }> name : Ryan Reynolds </div>
      <div className={styles.description}> description : Blockchain Developer </div>

        <div className={styles.myToken}>myToken : </div>
      
        <div className>
          <button className={styles.button_Explore_NFT}>Explore NFT </button>
          <button className={styles.button_see_my_NFT}>See my NFT</button>
        </div>

          <div className={styles.blogs}>
          {blogsContent.map((data, i) => {            
            return (
              <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.writer} create_date={data.create_date}/>
            );
          })}
          </div>
        </div>
   
  )
}