import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ErrorComponent from './ErrorComponent';

type FormData = {
    username: string;
    email: string;
    password: string;
};

const schema = yup
    .object({
        username: yup.string().required('Valid username is required'),
        email: yup.string().email().required('Valid email is required'),
        password: yup.string().required('Valid password is required')
    })
    .required()

export function SignUpComponent() {

    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm<FormData>(
        {
            resolver: yupResolver(schema),
        }
    );



    const onSubmit: SubmitHandler<FormData> = (data) => {

    };
    console.log(errors)
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-black">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <FaUser className="text-gray-400 text-xl mr-2" />
                            <input className="mt-1 p-2 w-full border rounded-md" placeholder="Username" type="text" id="username" {...register('username')} />
                        </div>
                        <div className="mt-1"><ErrorComponent message={errors.username?.message} /></div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <FaEnvelope className="text-gray-400 text-xl mr-2" /> {/* Change to FaEnvelope */}
                            <input className="mt-1 p-2 w-full border rounded-md" placeholder="Email Address" type="text" id="email" {...register('email')} /> {/* Change id and register */}
                        </div>
                        <div className="mt-1"><ErrorComponent message={errors.email?.message} /></div>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center">
                            <FaLock className="text-gray-400 text-xl mr-2" /> {/* Change to FaLock */}
                            <input className="mt-1 p-2 w-full border rounded-md" placeholder="Password" type="password" id="password" {...register('password')} /> {/* Change type and id */}
                        </div>
                        <div className="mt-1"><ErrorComponent message={errors.password?.message} /></div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-yellow-500 text-white p-2 rounded-md hover:from-pink-500 hover:to-indigo-500 transition duration-300 ease-in-out" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
