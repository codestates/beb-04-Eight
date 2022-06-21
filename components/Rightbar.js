import styles from '../styles/Rightbar.module.css'
import trends from '../dumi/trends.json'
import ModalWrap from './Login/Wrap'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react';

/*
==================================================
===============우측 사이드바 컴포넌트==================
==================================================
수정일자 : 2022. 06. 21
사용 페이지 : Layout.js
완 : UI 구현
미완: 검색 창 이벤트, 로그인 버튼 이벤트, 추천 블로그 링크
*/

export default function Rightbar() {

  const [modalState, setModalState] = useState(false);

  const modalOnOff = () =>{
    setModalState(!modalState);
    console.log(modalState);
  }

  return (
    <div className={styles.rightbarContent}>
      <button className={styles.login} onClick={modalOnOff}>Sign In</button>
      <div className={styles.searchBox}>
        <AiOutlineSearch/>
        <input className={styles.search} type='text' placeholder='Search'></input>
      </div>
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
      {modalState ? <ModalWrap/> : null}
    </div>
  );
}
