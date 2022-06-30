import DetailUser from "../../../components/Detail/DetailUser";
import styles from "../../../styles/ContentDetail.module.css";
import contentDetailAPI from "../../api/contentDetail";

/*
==================================================
===================디테일 페이지=====================
==================================================
수정일자 : 2022. 06. 21
완 : 더미 데이터 구현
미완: 실제 데이터 구현, 디자인
*/

export default function index({ result }) {
  const { id, title, writer, content, create_date } = result;
  return (
    <div className={styles.detail_container}>
      <DetailUser writer={writer} />
      <div className={styles.detail_title}>{title}</div>
      <div className={styles.detail_content}>{content}</div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const result = await contentDetailAPI().then((res) => {
    const data = res.filter((ele) => ele.id === id);
    return data[0];
  });
  return {
    props: {
      result,
    },
  };
};

export const getStaticPaths = async () => {
  const contents = await contentDetailAPI();
  const ids = contents.map((ele) => ele.id);
  const path = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths: path,
    fallback: true,
  };
};
