import axios from "axios";
import { Image } from "cloudinary-react";
import { useState } from "react";
export default function (){
    const [images,setImages]=useState([]);
    const [data,setData]=useState(null);
    const PreviewImage =()=>{
            const formData= new FormData();
            formData.append('file',images);
            formData.append('upload_preset',"bhqyjlk7");
            const preview = async ()=>{
               try{
                    const response= await axios.post("https://api.cloudinary.com/v1_1/tarun12/image/upload",formData);
                   setData(response.data);
                    console.log(response.data);
                }
                catch(error){ 
                console.error(error);
                }
            }
            preview();
    }
    return <>
    <h1>
        cloudinary Image Upload By Post 
    </h1>
    <input type="file" onChange={(e)=>setImages(e.target.files[0])} />
    <button onClick={PreviewImage}>
        Upload
    </button>
    <div>
      {data &&  <Image cloudName="tarun12" publicId={`https://res.cloudinary.com/tarun12/image/upload/v1652988395/${data.public_id}`}/>}
    </div>
    </>
}