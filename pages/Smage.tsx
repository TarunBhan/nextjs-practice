import react, { useState } from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

const Image = () => {
    const [preview, setPreiview] = useState<any | undefined>();
    const [selectImage,setSelectImage]=useState([]);
    const handleChange = (e: any) => {
        const files = e.target.files[0];
    
       const formData=new FormData();
       formData.append("file",preview);
        formData.append('upload_preset',"Helper");
        previewFile(files);
        const postImage=async ()=>{
            try{
            const response= await axios.post('https://api.cloudinary.com/v1_1/tarun12/upload',formData)
            console.log(response);
            }
            catch(error){
                console.error(error);
                
            }
        }
        postImage();
    }
    

    const previewFile = (file: any) => {
        const reader = new FileReader();//Returns a newly constructed FileReader
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreiview(reader.result); //after the read operation
        }
    }
    const OnSubmit = (e: any) => {

        e.preventDefault();

        if (!preview) return;
        uploadImage(preview);
    }
    
    const uploadImage = (base64encode) => {
        console.log(base64encode);

    }
    return <>
        <form onSubmit={OnSubmit}>
            <input type="file" className='form-input' onChange={handleChange} />
            <button type="submit" >SUBMIT</button>

        </form>
        <div></div>
        {preview && <img src={preview} alt="photo" style={{ height: "200px" }} />}
    </>
}
export default Image;

//upload cloudinary 