import {useState} from 'react';
import axios from 'axios';

const App  =()=>{
  const [pdf,setPdf]   = useState("");
  const [audioVal,setVal] =  useState("");
  async function submitPdf(e){
    e.preventDefault();
    const formData  = new FormData();
    formData.append("pdf",pdf);
    formData.append("pageNum",1);
    try{
      const res   = await axios.post("http://localhost:3000/upload-pdf",formData);
      if(res.status==200){
        setVal(res.data?.audio?.englishSound);
      }
    }catch(error){

    }
  }
  const audioData =  `data:audio/mpeg;base64, ${audioVal?.blob}`;

  console.log(audioData);

  return (
    <>
      <form onSubmit={submitPdf}>
        <label>Choose pdf file</label>
        <input type='file' onChange={(e)=>setPdf(e.target.files[0])}/>
        <button>Upload</button>
      </form>
      <audio autoPlay src={audioData} controls id="beep" >
              
           
</audio>
    </>
  )
}

export default App;