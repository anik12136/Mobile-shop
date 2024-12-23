
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import MyProductsRow from './MyProductsRow';

const MyProducts = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [myProducts, setMyProducts] = useState([])
    // const [searchQuery, setSearchQuery] = useState("All");

    useEffect(() => {
        fetch(`https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/myProducts/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
            .catch(error => console.error(error))
    }, [user]);

    console.log(myProducts);



    const deleteHandeler = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // alert('deleted successful');
                        }
                        const remainingData = myProducts.filter(product => product._id !== id);
                        setMyProducts(remainingData);
                    })

            }
        })
        console.log(id);
    }

    return (
        <div>
            <div className="overflow-x-auto mx-20 my-10 ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>seller</th>
                            <th>Sub-category</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts?.map(product => <MyProductsRow

                                key={product._id}
                                product={product}
                                deleteHandeler={deleteHandeler}
                            // handleDeletConfirm={handleDeletConfirm}
                            ></MyProductsRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;