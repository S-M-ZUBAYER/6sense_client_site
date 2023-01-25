import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import api from '../api/Info'
import AllUser from './AllUser';
const EmployeeInfo = () => {

    const [info, setInfo] = useState([])
    const [reload, setReload] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const name = firstName + " " + lastName;
        console.log(name, email, phone);
        const request = {
            firstName,
            lastName,
            email,
            phone
        }
        const response = await api.post('/users', request);
        setReload(!reload)
        toast.success('Create user successfully')
        // console.log(response)
        // setInfo(...info, response?.data)
    }
    return (
        <div className="bg-gradient-to-l pb-96 from-blue-900 via-slate-900 to-black dark:bg-gray-900 pt-24">


            <div className='flex justify-center items-center pt-8 drop-shadow-2xl '>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gradient-to-l from-blue-900 via-slate-900 to-black dark:bg-gray-900 text-gray-100'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Create User Form</h1>
                        {/* <p className='text-sm text-gray-400'>
                            Sign in to access your account
                        </p> */}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm text-left'>
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    name='firstName'
                                    id='name'
                                    required
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm text-left'>
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    name='lastName'
                                    id='name'
                                    required
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm text-left'>
                                    Email address
                                </label>
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label htmlFor='password' className='text-sm text-left' >
                                        Phone Number
                                    </label>
                                </div>
                                <input
                                    type='number'
                                    name='phone'
                                    id='phone'
                                    required
                                    placeholder='Phone Number'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 bg-gradient-to-r from-purple-400 to-pink-600'
                                >
                                    Create User
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Press to create your profile
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>

                    {/* <div className='space-y-2'>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 bg-gradient-to-r from-purple-400 to-pink-600'
                            >
                                Create User
                            </button>
                        </div>
                    </div> */}
                </div>
                <Toaster></Toaster>
            </div >
            <AllUser
                setInfo={setInfo}
                info={info}
                reload={reload}
                setReload={setReload}
            ></AllUser>
        </div>

    );
}

export default EmployeeInfo;