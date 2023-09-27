import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


function NewSubmit() {

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')

        if (token) {
            navigate('/')
        }
    })

    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const handelNewPassword = () => {
        axios.post('https://testlog-api.onrender.com/submitotp',
            {
                otp: otp,
                password: password,

            })
            .then((res) => {
                if (res.data.code === 200) {
                    alert('Password Updated Successfully')
                    navigate('/signin')
                }

                if (res.data.code === 404) {
                    alert('Invalid OTP')
                }

            }).catch((err) => {
            })
    }
    return (
        <>
            <h1 className="center">New Password</h1>

            <div className="outcard">
                Otp<input
                    onChange={(e) => {
                        setOtp(e.target.value)
                    }}

                    value={otp}
                    className="inputs" type="text" />


                New Password<input
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                    className="inputs" type="text" />
                <button
                    onClick={handelNewPassword}
                    className="btns">CHANGE PASSWORD</button>

            </div>
        </>
    )

}

export default NewSubmit