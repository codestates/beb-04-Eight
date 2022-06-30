import axios from 'axios'

export default async function register(param){
  try{
    const result = await axios.post(`https://localhost:4001/api/users/join`, param, { withCredentials: true })
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}