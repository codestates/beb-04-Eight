import { AiOutlineSearch } from 'react-icons/ai'
import styles from '../../styles/Search.module.css'
import { useDispatch } from 'react-redux'
import { searchBlog } from '../../redux/actions';
import { useState } from 'react';
/*
==================================================
=================Search Box 컴포넌트================
==================================================
수정일자 : 2022. 06. 24
사용 페이지 : Rightbar.js
완 : UI 구현, keyword 관리
미완: keyword에 따른 검색
*/

export default function Search() {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState('');
  
  const search = (e) =>{
    if(e.keyCode === 13){
      dispatch(searchBlog(keyWord))
    }
  }

  const getKeyWord = (e)=>{
    setKeyWord(e.target.value);
  }

  return (
    <div className={styles.searchBox}>
      <AiOutlineSearch/>
      <input className={styles.search} type='text' placeholder='Search' onChange={getKeyWord} onKeyDown={search}></input>
    </div>
  )
}

