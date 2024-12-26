import { BookmarkIcon } from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Bookmark = ({ product }) => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm();

    const [formData, setFormData] = useState({});

    const onSubmit = (data) => {
        setFormData(data);
        
        if (user && user.email) {
            fetch("http://localhost:7000/bookmarks", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Product bookmarked successfully.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    if (!user) {
        return (
            <Link to={'/login'}>
                <BookmarkIcon className="w-6 h-6 cursor-pointer " />
            </Link>
        );
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button type="submit">
                        <BookmarkIcon className="w-6 h-6 cursor-pointer " />
                    </button>

                    {/* Hidden inputs for product details */}
                    <div className="hidden">
                        <input
                            {...register("date")}
                            value={new Date().toLocaleString()}
                        />
                        <input
                            {...register("idEmail")}
                            value={product._id + user.email}
                        />
                        <input
                            {...register("email")}
                            value={user?.email}
                        />
                        <input
                            {...register("productId")}
                            value={product._id}
                        />
                        <input
                            {...register("productImage")}
                            value={product.image}
                        />
                        <input
                            {...register("productCategory")}
                            value={product.category}
                        />
                        <input
                            {...register("productPrice")}
                            value={product.price}
                        />
                        <input
                            {...register("productTitle")}
                            value={product.title}
                        />
                        <input
                            {...register("productDescription")}
                            value={product.description}
                        />
                        <input
                            {...register("productStock")}
                            value={product.stock}
                        />
                        <input
                            {...register("sellerName")}
                            value={product.sellerName}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default Bookmark;
