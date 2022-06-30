import axios from "axios";

export default async function contentDetail(param) {
  try {
    const result = axios.post(`https://localhost:4001/api/board/boardDetail`,param)
    .then((res) => {
      console.log("==========", res);
      return res;
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}
