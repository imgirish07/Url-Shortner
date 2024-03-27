import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Form() {
    const [result, setResult] = useState('');
    const [url, setUrl] = useState('');
    const [shortID, setShortID] = useState('');
    const [shorturl, setShorturl] = useState('');
    const navigate = useNavigate();

    const handleChangeUrl = (e) => {
        setUrl(e.target.value);
    };

    const handleChangeShortID = (e) => {
        setShortID(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // const res = await fetch("http://localhost:8000/url", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         url: url
            //     }),
            //     mode: "cors",
            //     credentials: "include"
            // });

            const res = await axios.post("stbe.vercel.app/url",{
                url: url
            },{
                withCredentials:true,
            })

            const data = res.data;
            const id = data.id;
            setResult(id);
            setShortID(id);
            setShorturl(`stbe.vercel.app/url/${id}`);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    // const handleRedirect = async () => {
    //     window.location.href = `stbe.vercel.app/url/${shortID}`
    // };


    const handleredirectTOSignup = async () => {
        navigate("/user/signup")
    };

    function handleCopy() {
        navigator.clipboard.writeText(shorturl);
    }


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '20px',
                    fontSize: '1.2rem',
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontFamily: 'sans-serif', fontSize: '2.5rem', marginBottom: '20px', color: '#f35e84' }}> URL SHORTNER </h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '10px', textAlign: 'center', color: 'rgb(60 130 255)', fontFamily: 'sans-serif', }}> The easiest way to shrink long URLs into neat, manageable links. Simplify your online sharing with our service.</p>

                        <h2 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Sign up for a free account and put URL SHORTENER to work</h2>

                        <button onClick={handleredirectTOSignup} style={{ width: '300px', padding: '10px', background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up for free</button>
                    </div>


                </div>

                <div style={{ marginBottom: '20px' }}>

                    <div>

                        <label style={{ marginBottom: '10px' }}> <h2>Enter original URL</h2> </label>

                        <input type="text" onChange={handleChangeUrl} name="url" value={url} placeholder="https://www.example.com" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                        <button onClick={handleSubmit} type="button" style={{ width: '100%', padding: '10px', marginBottom: '10px', background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Generate</button>
                    </div>

                </div>

                <div>
                    <p style={{ marginTop: '10px', fontFamily: 'Arial, sans-serif' }}> <h2> Short ID </h2> </p>

                    <input type="text" onChange={handleChangeShortID} name='shortID' value={result} placeholder='Short id' style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                </div>

                <div>
                    <h2 style={{ fontFamily: 'Arial, sans-serif' }}>Short URL</h2>

                    <input type="text" onChange={handleChangeShortID} name='shortID' value={shorturl} placeholder='Short url' id='copyShortID' style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />

                    <div style={{ width: '255px', display: 'flex', gap: '50px', margin: '10px' }} >

                        <button onClick={handleCopy} type='button' style={{ width: '100%', padding: '10px', marginBottom: '10px', background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Copy Short URL</button>

                        {/* <button onClick={ handleCopy} type='button' style={{ width: '100%', padding: '10px', marginBottom: '10px', background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', color: '#fff', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Redirect</button> */}

                    </div>

                </div>

            </div>

        </>
    );
}

export default Form;
