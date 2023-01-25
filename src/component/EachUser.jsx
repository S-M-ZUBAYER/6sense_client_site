import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import api from "../api/Info"

const EachUser = ({ info, setInfo, user, handleToDelete, reload, setReload }) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const name = firstName + " " + lastName;
        const request = {
            name,
            email,
            phone
        }

        // const response = await api.post('/users', request);
        // setInfo(...info, response.data)
    }
    const handleToBlock = async (id) => {
        const response = await api.put(`/users/${id}`);
        console.log(id)
        setReload(!reload)
        toast.error('Block this user successfully')
    }

    const handleToDetails = () => {

    }



    return (
        <div>
            <div className="w-full mx-auto flex justify-between items-center bg-slate-300 px-5 py-2 border-rounded">
                <div>
                    {user.firstName + ' ' + user.lastName}
                </div>
                <div>
                    <Link to={`/details/${user._id}`}><label onClick={() => handleToDetails(user?._id)} className="px-2 py-1 bg-green-300 rounded-lg" >Details</label></Link>
                </div>
                <div>
                    <button onClick={() => handleToBlock(user?._id)} className="px-2 py-1 bg-red-600 rounded-lg">{user?.block ? "Unblock" : "Block"}</button>
                </div>

                <div>
                    <td><button onClick={() => handleToDelete(user?._id)} className="px-2 py-1 bg-red-300 rounded-lg">Delete</button> </td>
                </div>
                <Toaster></Toaster>
            </div>
            {/* 
            <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

        </div>

    );
};

export default EachUser;