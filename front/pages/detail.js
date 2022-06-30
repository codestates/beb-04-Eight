import DetailUser from "../components/Detail/DetailUser";
import styles from "../styles/ContentDetail.module.css";
import contentDetailAPI from "./api/contentDetail";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'

/*
==================================================
===================디테일 페이지=====================
==================================================
수정일자 : 2022. 06. 21
완 : 더미 데이터 구현
미완: 실제 데이터 구현, 디자인
*/



export default function detail() {

  const router = useRouter()
  const [data, setData] = useState({title:'', writer:'', content:''})
  const id = router.asPath.split("=")[1];

  useEffect(()=>{
    async function listingNew(){      
      const param = { id: id}
      console.log(param)
      const result = await contentDetailAPI(param);
      console.log(result.data.data)
      setData(result.data.data[0]);        
    }
    listingNew()
  },[])

  return (
    <div className={styles.detail_container}>
      <DetailUser writer={data.writer} />
      <div className={styles.detail_title}>{data.title}</div>
      <div className={styles.detail_content}>{data.content}</div>
    </div>
  );
}
