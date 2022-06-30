import axios from "axios";

export default async function contentList (param){
  try{
    const result = await axios.post(`https://localhost:4001/api/board/boardList`, param, { withCredentials: true })    
    .then((res)=>{
      console.log("res", res);
      return res
    })
    return result;
  }catch(e){
    console.log(e);
  }
}
