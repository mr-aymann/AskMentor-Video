import React ,{useState,useEffect}from 'react'
import styled from 'styled-components';
import { Button ,TextField,TextareaAutosize } from '@mui/material';
import "./create.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Create() {
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [Categories, setCategories] = useState("Film & Animation")
    const navigate = useNavigate();

    

    const handleupload = () => {

    }
    const handleChangeTitle = ( event ) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeDecsription = (event) => {
        console.log(event.currentTarget.value)

        setDescription(event.currentTarget.value)
    }

    var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dosjyjjtx',
        uploadPreset: 'hvwril9f'
        }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            setUrl(result.info.url)
            setThumbnail(result.info.thumbnail_url)

        }
        }
    )

        useEffect(() => {
            console.log(url);
            console.log(thumbnail);
        }, [url,thumbnail])


    const onSubmit = async () => {
        if(title === "" || Description === "" || url === "" || thumbnail === "" ){
            alert("Please fill all the fields")
        }else{
            const config ={
                headers:{
                  'Content-Type':'application/json'
              }
            }
            const data = {
                title,
                Description,
                url,
                thumbnail,
            }
            
             await axios.post("http://localhost:8000/upload",data,config).then((res)=>{
              
                alert("Video Uploaded Successfully");
                 setTimeout(() => {
                    navigate("/");
                }, 3000);
                }).catch((err)=>{
                    console.log(err);
                    alert("Video Upload Failed");
             })
             
        }
        
        
    }

  return (
    <div className="container">
    <div className="card">
      <h3>Upload Video</h3>
      <div className="drop_box ">
        <header>
          <h4>Select File here</h4>
        </header>
        <p>Files Supported: MP4, MP3, MKV</p>
        <TextField type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{display:"none"}}/>
        <button className="btn" onClick={() => myWidget.open()}>Choose File</button>
        <img className='unactive' src={thumbnail} alt="" style={{height :"70%",width:"70%"}} />
      </div>
        <div className="form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={handleChangeTitle} />
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <br/> <br/>
                <TextareaAutosize name="desc" id="desc" minRows={3}  value={Description} onChange={handleChangeDecsription}  style={{ width: 400 }} />
            </div>
           
            <div className="form-group">
                <br></br>
                <button className="btn" onClick={onSubmit}>Submit</button>
            </div>

        </div>
      </div>
</div>
  )
}

export default Create 