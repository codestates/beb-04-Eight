import axios from 'axios'

export default async function login(param){
  try{
    const result = axios.post(`https://66eba2d2-04f9-4500-abe9-08d66364a2c0.mock.pstmn.io/users/login`, param)
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}