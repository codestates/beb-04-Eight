import contents from '../../../dumi/contentData.json'
import styles from '../../../styles/ContentDetail.module.css'

/*
==================================================
===================디테일 페이지=====================
==================================================
수정일자 : 2022. 06. 21
완 : 더미 데이터 구현
미완: 실제 데이터 구현, 디자인
*/

export default function index({result}) {
  const {id, title, writer, content, create_date} = result[0];
  return (
    <div className={styles.detail_container}>
      <div className={styles.detail_title}>{title}</div>
      <div className={styles.detail_writer}>{writer}</div>
      <div className={styles.create_date}>{create_date}</div>
      <div className={styles.detail_content}>{content}</div>
    </div>
  )
}

export const getStaticProps = async(context)=>{
  const {id} = context.params;
  // const res = await fetch(``);
  const result = contents.filter(ele => ele.id === id)
  return {
    props: {
      result
    }
  }
}

export const getStaticPaths = async() =>{
  // const res = await fetch(``);
  const ids = contents.map(ele => ele.id);
  const path = ids.map(id => {
    return {
      params: {id: id.toString()}
    }
  })
  return {
    paths: path,
    fallback: false,
  }
}