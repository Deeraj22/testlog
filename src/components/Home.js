import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('TOKEN')

        if (!token) {
            navigate('/signin')
        }
    })
    return (
        <>
            <div>Hello</div>
            <button className="bt" onClick={() => {
                localStorage.clear()
                navigate('/signin')
            }}>LOGOUT</button>
        </>
    )
}

export default Home