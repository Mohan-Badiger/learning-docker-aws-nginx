import React, { useState } from 'react'

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })

            })
            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Submission error:', error);
        }
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='flex w-190 h-130'>
                <div className='w-1/2 border rounded-l border-r-0 border-indigo-500 p-4'>
                    <div>
                        <h1 className='font-medium text-2xl mb-6'>Welcome User</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <input
                            type="email"
                            name="email"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none transition-colors"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-500 text-white rounded font-medium hover:bg-indigo-600 transition-colors cursor-pointer"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className=' w-1/2 bg-linear-to-bl from-purple-500 via-indigo-500 to-blue-500'>
                </div>
            </div>
        </div>
    )
}

export default Form