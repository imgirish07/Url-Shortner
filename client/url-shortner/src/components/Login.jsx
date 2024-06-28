import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleSubmit = async () => {
        try {
            // const res = await fetch('https://url-shortner-2ozn.onrender.com/user/login', {
            //     withCredentials: true,
            //     method: 'POST',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         email: email,
            //         password: password
            //     }),
            //     mode: 'cors',
            //     credentials: 'include',
            // });
            const res = await axios.post("https://url-shortner-2ozn.onrender.com/user/login",{
                email: email,
                password: password
            },{
                withCredentials: true
            })
            const data = res.data;
            const boolValue = data.boolValue;
            if (boolValue) {
                navigate("/")
            }

        } catch (error) {
            console.log("Error : ", error);
        }
    }


    return (
        <div>
            <div className="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '75vh', width: '100vw', }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgb(255 240 255)', borderRadius: '20px', height: '75%', width: '75%' }}>
                    
                    <div style={{margin:'10px'}} >

                        <h2 style={{ marginBottom: '20px', textAlign: 'center',color:'blueviolet' }}>Login to Your Account</h2>

                        <input type="email" onChange={handleEmail} value={email} name="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                        <input type="password" onChange={handlePassword} value={password} name="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                        <button type="submit" onClick={handleSubmit} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login