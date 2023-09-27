import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../App.css';


function Signin() {

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')

        if (token) {
            navigate('/')
        }
    })

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = () => {
        axios.post('https://testlog-api.onrender.com/signin',
            {
                email: email,
                password: password
            })
            .then((res) => {

                if (res.data.code === 500) {
                    alert('User not found')
                }
                if (res.data.code === 404) {
                    alert('Password wrong')

                }
                if (res.data.code === 200) {
                    navigate('/')
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }


            }).catch((err) => {
            })
    }



    return (

        <>
            <h1 className="center">SIGNIN</h1>
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
                    className="btns">SIGNIN</button>
                <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }} to={'/signup'}>SIGN UP</Link>
                <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }} to={'/forgotPassord'}>Forgot password</Link>


            </div>
        </>
    )
}

export default Signin