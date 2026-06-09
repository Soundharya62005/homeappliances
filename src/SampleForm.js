import react from "react";

import React, { useState } from "react";
import axios from "axios";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age:""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/users", formData);
            alert("Data Stored Successfully")
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="age"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;