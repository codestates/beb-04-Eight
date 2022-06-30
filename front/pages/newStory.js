import styles from '../styles/NewStory.module.css'
import { useState } from "react";
import Router from 'next/router'
import axios from "axios"; // 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 axios 사용
import {useSelector } from 'react-redux';

export default function newStory() {
 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {accessToken} = useSelector(state => state.loginReducer)
  const server_URL = 'https://localhost:4001/api/board/insertBoard'


 // 로그인시 jwt 토큰 받아옴. 받은 jwt 토큰 가져오기 위해 useSelector 사용
 
// 토큰은 param에 담겨 있음

// 페이지 호출시 jwt 토큰 담아서 get 요청
 
  // 글 작성 완료하고 publish 버튼 누르면 서버단으로 post 전송
  // 서버에서 DB에 데이터를 저장 
  // ( 메인 페이지에서 서버단이 저장한 저장소에서 글 목록들 가져옴 )
  // 글 작성 post 받으면 서버는 토큰 발급 필요
  
  
  const publish = async () => {
    const param = { accessToken: accessToken.accessToken, title: title, content : content }
    const opriont = { withCredentials: true }
    try{
      await axios.post( 
        server_URL,       // 전송 주소
        param,            // 서버로 id와 글 제목, 내용을 같이 전달
        opriont)
      .then((res) => {  
        const result = res.data;
        if(result.message === 'Create board!'){
          alert(result.message)
        }else{
          alert("fail...")
        }
        Router.push("/") // publish 이후 홈으로 라우팅
      })
    }catch(err){          // 에러 발생시 에러 내용 로그에 띄움
      if (err) {
        console.log(err);
      }
    };
  }; 
 

  return (
    <div className={styles.writeForm}>
      <div className={styles.writeFormGroup}>
      <input
        className={styles.writeInput}
        placeholder="Title"
        type="text"
        autoFocus={true}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div className={styles.writeFormGroup}>
      <textarea
        className={`${styles.writeInput} ${styles.writeText}`}
        placeholder="Tell your story..."
        autoFocus={true}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      </div>
      <button className={styles.writeSubmit} onClick={publish}>Publish</button>  
    </div>
  );
}