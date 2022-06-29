import axios from 'axios'

export default async function logout(){
  try{
    const result = axios.post(`https://localhost:4000/api/users/logout`, { withCredentials: true })
    .then((res)=>{
      return res.data.message;
    })
    return result;
  }catch(e){
    console.error(e);
  }
}