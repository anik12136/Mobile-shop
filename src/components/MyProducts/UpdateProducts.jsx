import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateProducts = () => {

    const ProductsDetails = useLoaderData();
    console.log(ProductsDetails)

    // const  [updateData,setUpdateData]= useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

    const handleUpdateProduct = (data) => {
        console.log(data)
        fetch(`https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/updateProduct/${data?._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Updated',
                        showConfirmButton: false,
                        timer: 1500
                      })

                }
            }
            )
    };

// console.log(addedToy)

return (
    <form className='mx-40' onSubmit={handleSubmit(handleUpdateProduct)}>

        <div className=" mt-10 mb-10 w-50%">

            {/* hidden id */}
            <div className="form-control invisible">
                <label className="label">
                </label>
                <input type="text" defaultValue={ProductsDetails?._id} {...register("_id",)} className="input input-bordered" />
            </div>
            {/* ......... */}

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>

                <input {...register("price", )} defaultValue={ProductsDetails?.price} type="number" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input defaultValue={ProductsDetails?.quantity} type="number" {...register("quantity", { required: true })}  className="input input-bordered" />

            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" {...register("product_name", { required: true })} className="input input-bordered" />
                {errors.toy_name && <span className='text-rose-400'>This field is required</span>}
            </div>

        </div>
        <input className="btn btn-primary btn-block mb-10" type="submit" />
    </form>
);

};

export default UpdateProducts;