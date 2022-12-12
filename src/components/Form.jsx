import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();



    function onSubmit(data) {
        // var data = JSON.stringify(data);

        var config = {
            method: 'post',
            url: 'http://localhost:3002/contacts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("name", { required: true, maxLength: 80 })} />
            <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="number" placeholder="Mobile number" {...register("mobile", { required: true, minLength: 10, maxLength: 10 })} />
            <select placeholder="Program" {...register("program", { required: true })}>
                <option >---Select Program---</option>
                <option value="Data Science">Data Science</option>
                <option value="Project Management">Project Management</option>
            </select>

            <p className='error'>{Object.keys(errors).length > 0 ? ('invalid fiends: ' + Object.keys(errors)) : ""}</p>

            <input type="submit" />
        </form>
    );
}