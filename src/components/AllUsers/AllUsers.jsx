import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const AllUsers = () => {

    // const { data: users = [], refetch } = useQuery([''], async () => {
    //     const res = await fetch('https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/users')
    //     return res.json();
    // });

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/users');
            return res.json();
        }
    });

    //make admin function
    const handleMakeAdmin = user => {
        fetch(`https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    //make seller function
    const handleMakeSeller = user => {
        fetch(`https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/users/seller/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an seller Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div>
            <div className="">
                <table className=" bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-2 bg-slate-500 text-white">Serial Number</th>
                            <th className="py-2 px-4 border-2 bg-slate-500 text-white">Name</th>
                            <th className="py-2 px-4 border-2 bg-slate-500 text-white">Email</th>
                            <th className="py-2 px-4 border-2 bg-slate-500 text-white">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>

                                <td className="py-3 px-4 border-b-2 border-black">{index + 1}</td>
                                <td className="py-3 px-4 border-b-2 border-black">{user.name}</td>
                                <td className="py-3 px-4 border-b-2 border-black">{user.email}</td>
                                <td className='border-b-2 border-black text-center '>
                                    {user.role === 'admin' && 'admin' ||
                                    user.role === 'seller' && 'seller' ||
                                    <div>
                                        <button onClick={() => handleMakeAdmin(user)} className="border-black border-2 rounded-full p-2 me-1 hover:bg-sky-600 hover:text-white ">Make Admin </button>
                                        <button onClick={() => handleMakeSeller(user)} className=" border-black border-2 rounded-full p-2  hover:bg-sky-600 hover:text-white">Make seller </button>
                                    </div>
                                }

                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
};
export default AllUsers;