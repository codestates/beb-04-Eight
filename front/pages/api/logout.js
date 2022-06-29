import axios from 'axios'

export default async function logout(){
  try{
    const result = axios.post(`https://fb32-59-15-196-112.ngrok.io/api/users/logout`, { withCredentials: true })
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}