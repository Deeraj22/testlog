import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function ForgotPassword() {
    useEffect(() => {
        const token = localStorage.getItem('TOKEN')

        if (token) {
            navigate('/')
        }
    })

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleotp = () => {
        axios.post('https://testlog-api.onrender.com/sendotp',
            {
                email: email
            })
            .then((res) => {
                if (res.data.code === 200) {
                    alert("A OTP as been sent to your email ")
                    navigate('/otp')
                }

                if (res.data.code === 500) {
                    alert("Invalid Email Address")
                }
            }).catch((err) => {
            })
    }

    return (
        <>
            <h1 className="center">Forgot Password</h1>
            <div className="outcard">
                Email<input onChange={(e) => {
                    setEmail(e.target.value)
                }}
                    value={email} className="inputs" type="text" />
                <button onClick={handleotp} className="btns">SEND OTP</button>

            </div>

        </>
    )
}
export default ForgotPassword

