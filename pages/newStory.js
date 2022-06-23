import styles from '../styles/NewStory.module.css'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios"; // 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 axios 사용

export default function newStory() {
 
 const [title, setTitle] = useState("");
 const [text, setText] = useState("");
 
 const server_URL = "http://localhost:8080"


 /* // 받아놓은 세션 값이 있으면 받아놓은 세션값을 서버에 전송해서 로그인 상태 확인 후 글쓰기 허용
 // 없으면 로그인 창으로 루팅

	  // 1. 로그인 상태인지 체크
   useEffect(() => { // 로컬 함수 이외의 외부 함수 ( 서버 ) 로부터 데이터 받아와서 동기화 시키는 것이므로 side effect 발생하기에 useEffect 사용
    axios.post('http://localhost:8080/users/login').then((res) => {
      if(res.status === 201 && res.data) { // 로그인 상태라면 터미널에 출력하고 페이지 접근 허용
        console.log(" 유저 정보  ex -- userInfo._id "); 
      }
      else {
       useRouter.push("/login"); // 비로그인 상태라면 로그인 페이지로 이동시킴
      }
    })
  }, []); */ 
  
 
  /*  // 2. 글 작성 완료하고 publish 버튼 누르면 서버단으로 post 전송. 
  //서버에서 DB에 데이터를 저장 
  // ( 메인 페이지에서 서버단이 저장한 저장소에서 글 목록들 가져옴 )
  // 글 작성 post 받으면 서버는 토큰 발급 필요
  
  const publish = async () => {
   
   await axios
     .post('http://localhost:8080/board/insertBoard', { // 서버로 id와 글 제목, 내용을 같이 전달
       userId: userId,
       title: title,
       text : text
     })
     .then((res) => {   // publish 이후 홈으로 라우팅
       useRouter.push("/");
     })
     .catch((err) => { // 에러 발생시 에러 내용 로그에 띄움
       if (err) {
         console.log(err.respnese.data);
       }
     });
 }; */
 

  return (
    <>
        <div>
          <form onSubmit={''} className={styles.writeForm}>
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
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button 
            className={styles.writeSubmit} 
            type="submit"
            >
              Publish
            </button>
          </form>
        </div>
    </>
  );
}