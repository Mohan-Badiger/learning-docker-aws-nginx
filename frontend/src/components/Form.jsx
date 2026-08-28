import React from 'react'

const Form = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='flex w-190 h-130'>
                <div className='w-1/2 border rounded-l border-r-0 border-indigo-500 p-4'>
                    <div>
                        <h1 className='font-medium text-2xl'>Welcome User</h1>
                    </div>
                </div>
                <div className=' w-1/2 bg-linear-to-bl from-purple-500 via-indigo-500 to-blue-500'>
                    Right</div>
            </div>
        </div>
    )
}

export default Form