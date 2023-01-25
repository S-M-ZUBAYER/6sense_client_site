import React from 'react';
import api from '../api/Info'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const Details = () => {
    const user = useLoaderData();
    const navigator = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const newUser = { firstName, lastName, email, phone }
        console.log(newUser)
        // const handleToUserUpdate = async () => {
        //     const response = await api.put(`/updateUser/${user._id}`, {
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(newUser)
        //     });
        //     // console.log(id)
        //     // setReload(!reload)
        // }
        // handleToUserUpdate();

        fetch(`http://localhost:5000/updateUser/${user._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // toast.success('Your Review successfully Updated');
                    // setCurrentReview(newUser)
                    // form.reset();
                }
            })
            .catch(err => console.error(err))
        toast.success('User update successfully')


    }

    return (
        <div className="w-1/2 mx-auto my-10">

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
                            defaultValue={user.firstName}
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
                            defaultValue={user.lastName}
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
                            readOnly
                            defaultValue={user.email}
                            // placeholder={updateUser?.email}
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
                            defaultValue={user.phone}
                            required
                            placeholder='Phone Number'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
                        />
                    </div>
                </div>

                <button type='submit' className='btn text-green-300 mb-10'>
                    Update
                </button>
                <Link to='/'><button type='submit' className='btn text-green-300 py-5 mt-10 block mx-auto text-black bg-lime-800'>
                    Back To The HomePage
                </button></Link>
                <Toaster></Toaster>
            </form>
        </div>
    );
};

export default Details;