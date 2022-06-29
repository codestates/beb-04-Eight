import axios from "axios";

export default async function contentDetail (){
  try{
    const result = await axios.get(`https://12062188-9e72-4a09-853a-00c16cf50029.mock.pstmn.io/board/boardList`, { withCredentials: true })    
    .then((res)=>{
      return res.data
    })
    return result;
  }catch(e){
    console.log(e);
  }
}