import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
const Upload = () => {
    // const cloudinary = require('cloudinary').v2;
    const [update, setUpdate] = useState();
    const [count, setCount] = useState(0);
     const calls=()=> {
        const myWidget =  cloudinary.createUploadWidget(
            {
                cloudName: "tarun12",
                uploadPreset: "bhqyjlk7",
                cropping: true,
                maxImageWidth: 200,
                theme: "purple"
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done with this is the good work", result.info);
                    setUpdate(result.info.secure_url);
                }
            }
        );
        myWidget.open();
    }; 


    return <>
        <Head>
        <script src="https://upload-widget.cloudinary.com/global/all.js"></script>
        </Head>
        
        <h1>



        </h1>
        <button onClick={calls}>
            Upload
        </button>
        <img src={update} id="uploadedimage" />
    </>
}
export default Upload;