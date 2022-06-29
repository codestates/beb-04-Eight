
import styles from '../styles/MyBlogs.module.css'
import React, { useEffect, useState } from "react";
import Content from '../components/Home/Content'

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
    

    const API_URL = "https://12062188-9e72-4a09-853a-00c16cf50029.mock.pstmn.io/board/boardList/"

    useEffect(() => {
      const alldata = async () => {
        try {
          const response = await axios.get(
           API_URL
          );
          console.log(response.data)
          setBlogs(response.data)
          ; // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          console.error(e)
        }
      };
  
      alldata();
    }, []);


  function ExploreNFT()  {              // 구매 가능한 NFT 목록들 가져온 페이지로 
    window.open("ExploreNFT");
  }
 
  function seeMyNFT()  {                // 내가 보유하고 있는 NFT 목록 페이지
    window.open('seeMyNFT');
  }
 
  function hisBlogs()  {                // 내가 보유하고 있는 NFT 목록 페이지
    window.open('hisBlogs');
  }


  return (
    <div className={styles.myBlogscontainer}>
      <div className={styles.myBlogs}>myBlogs</div>

      <div className={styles.imgcontainer}>   
      <img className={styles.profileimg} src='/r.jpg'></img>
      </div>
      <div className={styles.follower}>follower : 6.7k</div>
      <div className={styles.name }> name : {blogs.userName} </div>
      <div className={styles.description}> PhoneNum : {blogs.phone} </div>

        <div className={styles.myToken}>myToken : {blogs.tokenBalance} </div>
      
        <div>
          <button className={styles.button_Explore_NFT}onClick={ExploreNFT}>Explore NFT</button>
          <button className={styles.button_see_my_NFT} onClick={seeMyNFT}>See my NFT</button>
          <button className={styles.button_see_my_NFT} onClick={hisBlogs}>hisBlogs</button>
        </div>

          <div className={styles.blogs}>
          {blogs.map((data) => {
   return (
    <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.writer} create_date={data.create_date}/>
   )
  })}
          </div>
        </div>
   
  )
}