import axios from 'axios'

export default async function register(param){
  try{
    const result = axios.post(`https://c10caa90-7778-490a-8fd7-e421c6734ea1.mock.pstmn.io/users/join`, param)
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}