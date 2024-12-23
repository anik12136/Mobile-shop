import React, { useContext } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);

    // const  [addedToy,setAddedToy]= useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product added successful',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };
    // console.log(addedToy)

    return (
        <div>
            <form className='mx-40 mb-20' onSubmit={handleSubmit(onSubmit)}>

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 mb-10 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>

                        <input {...register("seller_name", { required: true })} value={user?.displayName} type="text" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input value={user?.email} type="email" {...register("seller_email", { required: true })} placeholder="email" className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input type="text" {...register("toy_name", { required: true })} className="input input-bordered" />
                        {errors.toy_name && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" {...register("image", { required: true })} className="input input-bordered" />
                        {errors.image && <span className='text-rose-400'>This field is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub category name</span>
                        </label>
                        <input type="text" {...register("subCategory", { required: true })} className="input input-bordered" />
                        {errors.subCategory && <span className='text-rose-400'>This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} className="input input-bordered" />
                        {errors.price && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" {...register("rating", { required: true })} className="input input-bordered" />
                        {errors.rating && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="number" {...register("quantity", { required: true })} className="input input-bordered" />
                        {errors.quantity && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" {...register("description", { required: true })} className="input input-bordered" />
                        {errors.description && <span className='text-rose-400'>This field is required</span>}
                    </div>

                </div> */}


                <div className="bg-white p-8 rounded-lg shadow-md mt-5 mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Add a New Product</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Seller Name */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Seller Name</label>
                            <input
                                {...register("seller_name", { required: true })}
                                value={user?.displayName}
                                type="text"
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Seller Email */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Seller Email</label>
                            <input
                                value={user?.email}
                                type="email"
                                {...register("seller_email", { required: true })}
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Product Name</label>
                            <input
                                type="text"
                                {...register("product_name", { required: true })}
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.product_name && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Brand */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Brand</label>
                            <input
                                type="text"
                                {...register("brand", { required: true })}
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.brand && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Model */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Model</label>
                            <input
                                type="text"
                                {...register("model", { required: true })}
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.model && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Image Upload */}
                        {/* <div className="form-control">
                            <label className="label font-medium text-gray-600">Product Image</label>
                            <input
                                type="file"
                                {...register("image", { required: true })}
                                className="file-input file-input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.image && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div> */}

                        {/* image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" {...register("image", { required: true })} className="input input-bordered" />
                            {errors.image && <span className='text-rose-400'>This field is required</span>}
                        </div>

                        {/* Sub-category */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Sub-category</label>
                            <select
                                {...register("subCategory", { required: true })}
                                className="select select-bordered focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Sub-category</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Wearables">Wearables</option>
                            </select>
                            {errors.subCategory && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Price */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Price ($)</label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.price && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Stock Quantity */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Stock Quantity</label>
                            <input
                                type="number"
                                {...register("quantity", { required: true })}
                                className="input input-bordered focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.quantity && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Rating */}
                        {/* <div className="form-control">
            <label className="label font-medium text-gray-600">Rating (1-5)</label>
            <input 
                type="number" 
                min="1" 
                max="5"
                {...register("rating", { required: true })} 
                className="input input-bordered focus:ring-2 focus:ring-blue-500" 
            />
            {errors.rating && <span className="text-rose-500 text-sm">This field is required</span>}
        </div> */}

                        {/* Specifications */}
                        <div className="form-control col-span-2">
                            <label className="label font-medium text-gray-600">Specifications</label>
                            <textarea
                                {...register("specifications", { required: true })}
                                className="textarea textarea-bordered focus:ring-2 focus:ring-blue-500"
                                rows="3"
                            ></textarea>
                            {errors.specifications && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>

                        {/* Description */}
                        <div className="form-control col-span-2">
                            <label className="label font-medium text-gray-600">Description</label>
                            <textarea
                                {...register("description", { required: true })}
                                className="textarea textarea-bordered focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                            {errors.description && <span className="text-rose-500 text-sm">This field is required</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    {/* <div className="mt-6 text-center">
                        <button type="submit" className="btn btn-primary w-full md:w-auto px-8 py-2">
                            Add Product
                        </button>
                    </div> */}
                </div>



                <input className="btn btn-primary btn-block " type="submit" />
            </form>


        </div>
    );
};

export default AddProduct;