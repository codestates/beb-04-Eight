import axios from "axios";

export default async function contentDetail (){
  try{
    const result = await axios.get(`https://localhost:4001/api/board/boardList`, { withCredentials: true })    
    .then((res)=>{
      return res.data
    })
    return result;
  }catch(e){
    console.log(e);
  }
}