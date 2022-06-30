import axios from "axios";

export default async function contentDetail() {
  try {
    const result = await axios.post(`https://localhost:4001/api/board/findAll`, {}, { withCredentials: true, rejectUnauthorized: false, strictSSL: false }).then((res) => {
      console.log("==========");
      return res;
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}
