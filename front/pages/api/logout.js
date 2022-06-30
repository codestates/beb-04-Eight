import axios from 'axios'

export default async function logout(param){
  try{    
    const result = axios.post(`https://localhost:4001/api/users/logout`,param, { withCredentials: true })
    .then((res)=>{
      console.log("1",res)
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}