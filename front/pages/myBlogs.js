import styles from "../styles/MyBlogs.module.css";
import React, { useEffect, useState } from "react";
import Content from "../components/Home/Content";
import {useSelector } from 'react-redux';
import axios from "axios"; // 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 axios 사용

export default function myBlogs() {

  const [blogs, setBlogs] = useState([]);
  const [receiver, setReceiver] = useState("");     // target 주소 ( 토큰)
  const [amount, setAmount] = useState("");         // 목표 전송 갯수 ( 토큰 )
  const {accessToken} = useSelector(state => state.loginReducer) // jwt 토큰 쿠키

  const API_URL = "https://localhost:4001/api/users/mypage";

  // 나의 데이터 불러오기
  useEffect(() => { 
    const alldata = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data.data);
        setBlogs(response.data.data); // 데이터는 response.data.data 안에 들어있습니다.
      } catch (e) {
        console.error(e);
      }
    };
    alldata();
  }, []);

  
    // 토큰 전송시 발생하는 함수 --- send Token 버튼 클릭시 발생
    const send_Token = async () => {
      const param = { accessToken: accessToken.accessToken, targetAddress: receiver, serveAmount : amount } // header에는 jwt, body에는 타겟 주소, 타겟 토큰양
      const opriont = { withCredentials: true }
      try{
        await axios.post( 
          "https://localhost:4001/api/web3/tokenExchange",  //  전송 주소로 1.타겟 유저 토큰 주소  2.전송할 토큰의 양 POST      
          param,       
          opriont)                                    
        .then((res) => {  
          const result = res.data;
          if(result.message === "Serving Successed"){
            alert(result.message)
          }})}

        catch(err){          // 에러 발생시 에러 내용 로그에 띄움
        if (err) {
          console.log(err);
        }}}


 /*   // 구매 가능한 NFT 목록들 가져온 페이지로 이동 --- Explore NFT 버튼 클릭시 발생하는 함수
  function ExploreNFT() {
    window.open("ExploreNFT");
  }

  // 내가 보유하고 있는 NFT 목록 페이지로 이동 --- see My NFT 버튼 클릭시 발생하는 함수
  function seeMyNFT() {
    window.open("seeMyNFT");
  } */

  return (

    <div className={styles.myBlogscontainer}>{/*상단 헤더부*/}
      <div className={styles.myBlogs}>myBlogs</div>

      <div className={styles.imgcontainer}>{/*중간 이미지*/}
        <img className={styles.profileimg} src="/r.jpg"></img>  
      </div>
      
      {/*이름, 폰번호, 토큰 잔액 정보*/}
      <div className={styles.name}> name : {blogs.userName} </div>
      <div className={styles.description}> PhoneNum : {blogs.phone} </div>
      <div className={styles.myToken}>myToken : {blogs.tokenBalance} </div>

    {/*receiver 주소 입력칸*/ }
    <div className={styles.token_wrap}> 
      <input className={styles.receiver_addr}  
        placeholder="type receiver address..."
        type="text"
        autoFocus={true}
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />

      {/*송금 금액 입력칸*/ }
      <input className={styles.target_balance} 
        placeholder="type Token amount..."
        type="text"
        autoFocus={true}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>

        <div> {/*토큰 전송 버튼*/ }
        <button className={styles.button_send} onClick={send_Token}>Send Token</button> 
        </div>
      
    {/* <div>
        <button className={styles.button_Explore_NFT} onClick={ExploreNFT}>
          Explore NFT
        </button>
        <button className={styles.button_see_my_NFT} onClick={seeMyNFT}>
          See my NFT
        </button>
      </div>
 */}    

      {/*블로그 콘텐츠*/ }
      <div className={styles.blogs}>
        {blogs.map((data) => {
          return <Content key={data.id} id={data.id} title={data.title} content={data.content} writer={data.writer} create_date={data.create_date} />;
        })}
      </div>
    </div>
  );
}