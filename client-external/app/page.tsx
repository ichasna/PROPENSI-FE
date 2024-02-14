"use client";
import React, { useEffect, useState } from 'react';

function page() {

    const [message, setMessage] = useState("Loading")
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/ext/home").then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
                setMessage(data.message)
                setMembers(data.members)
            }
        )
    }, [])

    return (
        <div>
            <div>{message}</div>
            {
                members.map((member, index) => (
                    <div key={index}>
                        {member}
                    </div>
                ))
            }
        </div>

    )
}

export default page