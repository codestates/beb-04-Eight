import axios from 'axios'

export default async function login(param){
  try{
    const result = axios.post(`https://localhost:4000/api/users/login`, param, { withCredentials: true })
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}