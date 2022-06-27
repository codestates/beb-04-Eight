import axios from "axios";

export default async function contentList (){
  try{
    const result = await axios.get(`https://12062188-9e72-4a09-853a-00c16cf50029.mock.pstmn.io/board/boardList`)    
    .then((res)=>{
      return res.data
    })
    return result;
  }catch(e){
    console.log(e);
  }
}