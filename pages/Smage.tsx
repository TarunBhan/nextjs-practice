import react, { useState } from 'react';


const Image=()=>{
    const[preview,setPreiview]=useState<any|undefined>();
    const  handleChange=(e:any)=>
    {
        const files=e.target.files[0];
        previewFile(files);
    }
    const previewFile=(file:any)=>{
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
           setPreiview(reader.result);
        }
    }
   const OnSubmit=(e:any)=>{
   e.preventDefault();
    if(!preview) return;
    uploadImage(preview);
   }
   const uploadImage=(base64encode)=>{
console.log(base64encode);

   }
    return<>
    <form onSubmit={OnSubmit}>
        <input type="file"  className='form-input' onChange={handleChange}/>
        <button type="submit" >SUBMIT</button>

    </form>
    {preview && <img src={preview} alt="photo" style={{height:"200px"}}/>}
    </>
}
export default Image;
