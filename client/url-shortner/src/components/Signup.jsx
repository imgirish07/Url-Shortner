import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function Signup() {
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUserName = (e) => {
        const value = e.target.value
        setuserName(value)
    }
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
            const res = await fetch('http://localhost:8001/user/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: userName,
                    email: email,
                    password: password
                }),
                mode: 'cors',
                credentials: 'include',
            });
            const data = await res.json();
            console.log("Sign Up Data", data);
            const boolValue = data.boolValue;
            if (boolValue) {
                // window.location.href = `http://localhost:3000/user/login`;
                navigate("/user/login");
            }

        } catch (error) {
            console.log("Error : ", error);
        }
    }

    return (
        <div>
            <div className="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh', width: '100vw', }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255 240 255)', borderRadius: '20px', height: '75%', width: '75%' }}>

                    <div style={{ margin: '10px' }} >
                        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: 'blueviolet' }}>Sign Up</h2>

                        <input type="text" onChange={handleUserName} value={userName} name="userName" placeholder="User Name" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                        <input type="email" onChange={handleEmail} value={email} name="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                        <input type="password" onChange={handlePassword} value={password} name="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                        <button type="submit" onClick={handleSubmit} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer', }}>Sign Up</button>

                        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333', marginBottom: '10px', textAlign: 'center', color: 'blueviolet' }}>
                            Already a Member?
                            {/* <a href="http://localhost:3000/user/login" style={{ color: '#E91E63', textDecoration: 'none', fontWeight: 'bold' }}>Login Here</a> */}
                            <Link to={"/user/login"} style={{ color: '#E91E63', textDecoration: 'none', fontWeight: 'bold' }}>Login Here</Link>
                        </p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup