import { error } from 'daisyui/src/colors';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import api from "../api/Info"
import EachUser from './EachUser';

const AllUser = ({ info, setInfo, reload, setReload }) => {

    const [updateUser, setUpdateUser] = useState({})
    const handleToDelete = async (id) => {
        await api.delete(`/users/${id}`);
        const newUser = info.filter(element => {
            return element._id !== id
        })
        setInfo(newUser);
        toast.error('Delete User Successfully')
    }





    // get use info

    useEffect(() => {
        const getUserInfo = async () => {
            const response = await api.get("/users")
            return response.data;
        };
        const users = async () => {
            const allInfo = await getUserInfo();
            if (allInfo) {
                setInfo(allInfo)
            }
        }
        // fetch('http://localhost:5000/users')
        //     .then(res => res.json())
        //     .then(data => setInfo(data))
        //     .catch(error => console.log(error.message))

        users();
    }, [reload])


    return (
        <div className="py-40 bg-gradient-to-l pb-96 from-blue-900 via-slate-900 to-black dark:bg-gray-900 pt-24">
            <h2 className="text-3xl text-lime-500 font-bold mb-5">
                Available user In your site .......
            </h2>
            <div className="w-1/3 mx-auto flex justify-between bg-slate-300 px-5 py-2 border-rounded">
                <div>
                    Full Name
                </div>

                <div>
                    Details
                </div>

                <div>
                    Block/Unblock
                </div>
                <div>
                    Delete
                </div>
                <Toaster></Toaster>
            </div>

            <div className="overflow-x-auto w-full ">
                <table className="table w-1/3 mx-auto">

                    {/* <thead> */}
                    {/* <tr > */}
                    <div className='flex justify-between'>

                        {/* <th>Full Name</th> */}

                        {/* <div>
                                    <th>Details</th>
                                    <th>Block/Unblock</th>
                                    <th>Delete</th>
                                </div> */}
                    </div>


                    {/* </tr> */}
                    {/* </thead> */}
                    {info && info?.map(user =>
                        <EachUser
                            user={user}
                            info={info}
                            setInfo={setInfo}
                            key={user._id}
                            handleToDelete={handleToDelete}
                            reload={reload}
                            setReload={setReload}
                        ></EachUser>
                    )}

                </table>
            </div>

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gradient-to-l from-blue-900 via-slate-900 to-black dark:bg-gray-900 text-gray-100'>
                        <div className='mb-8 text-center'>
                            <h1 className='my-3 text-4xl font-bold'>Update Information</h1>
                            {/* <p className='text-sm text-gray-400'>
                            Sign in to access your account
                        </p> */}
                        </div>
                        <form
                            // onSubmit={handleSubmit}
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
                                        disabled
                                        placeholder={updateUser?.email}
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


                        </form>

                        {/* <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Press to create your profile
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div> */}

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
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Update!</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AllUser;