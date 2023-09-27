import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import '../App.css';


function Signup() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('TOKEN')

        if (token) {
            navigate('/')
        }
    })


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = () => {
        axios.post('https://testlog-api.onrender.com/signup',
            {
                email: email,
                password: password
            })
            .then((res) => {
                if (res.data.code === 200) {
                    navigate('/signin')
                }
                if (res.data.code === 404) {
                    alert('User already exist')
                }
            }).catch((err) => {

            })
    }

    return (
        <>
            <h1 className="center">SIGNUP</h1>
            <div className="outcard">
                Email<input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    className="inputs" type="email" /><br /><br />
                password<input
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                    className="inputs" type="password" /><br /><br />
                <button
                    onClick={handleSignup}
                    className="btns">SIGNUP</button>
                <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }} to={'/signin'}>SIGN IN</Link>


            </div>
        </>
    )
}

export default Signup