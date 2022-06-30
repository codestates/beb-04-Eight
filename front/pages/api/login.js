import axios from "axios";

export default async function login(param) {
  try {
    const result = axios.post(`https://localhost:4001/api/users/login`, param, { withCredentials: true }).then((res) => {
      const { accessToken } = res.data.data;
      // API 요청 마다 request header에 accesstoken 을 함께 전송
      axios.defaults.headers.common["authorization"] = `Bearer ${accessToken}`;
      axios.defaults.withCredentials = true;
      return res.data;
    });

    return result;
  } catch (e) {
    console.error(e);
  }
}
