import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Search() {
    const [userId, setUserId] = useState('');
    const [Data, setData] = useState([]);

    const onChangeId = (event) => {
        setUserId(event.target.value);
    }

    const handleConsult = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`/userConsult/${userId}`);
            setData(response.data);
            console.log(Data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            
        </div>
    );
}