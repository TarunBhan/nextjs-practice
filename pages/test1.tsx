import react from 'react';
import  Jwt from 'jsonwebtoken';
import { useState, useEffect } from 'react';

const Test = () => {

    const [username, setUsername] = useState<string>('sd');
const [password, setPassword] = useState<string>('');
const [message, setMessage] = useState<string>('You are not login this system');
const [secret, setSecret] = useState<string>('');
async function  onSubmit(e) {
    e.preventDefault();
    const res = await fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
        }).then((t) => t.json())
        const token = res.token
        

        
        if (token) {
            const ans=Jwt.decode(token) as { [key:string]:string}
            setMessage(`Welcome ${ans.username} and you are ${ans.admin? 'admin ' :' not an admin'}`)


            const res=await fetch('/api/secret',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({token}),
            }).then((t)=>t.json())
            if(res.secretAdminCode){
                setSecret(res.secretAdminCode);
            }
            else{
                setSecret('nohing availabel here');
            }
        }
        else{
            setMessage('something went wrong');
        }
}

    return <>
<h1>{message}</h1>
<p> secret{secret}</p>
        <form >
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br>
            </br>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br>
            </br>
            <input type="submit" value="login" onClick={onSubmit} />



        </form>
    </>
}
export default Test;
