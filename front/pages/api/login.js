import axios from 'axios'

export default async function login(param){
  try{
    const result = axios.post(`https://fb32-59-15-196-112.ngrok.io/api/users/login`, param, { withCredentials: true })
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}