import axios from "axios";

export default async function contentList (){
  try{
    const result = await axios.get(`https://ce3e6975-1df4-4129-b028-11419fcf2929.mock.pstmn.io/api/board/boardList`)    
    .then((res)=>{
      return res.data
    })
    return result;
  }catch(e){
    console.log(e);
  }
}
