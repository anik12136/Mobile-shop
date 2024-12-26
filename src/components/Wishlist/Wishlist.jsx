// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useBookmark from "../../Hooks/useBookmarks";
import Loading from "../../Pages/Shared/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";


const Wishlist = () => {

    const [Wishlists] = useBookmark();
    return (
        <div>
            {
                Wishlists ?
                    <div className='mx-40 h-full'>
                        <>
                            <h2 className="text-center text-3xl my-6 rounded-b-lg w-90  mx-auto  "> Your Wishlist</h2>
                            <h2 className="md:lg:ms-12 mt-10 text-2xl">You have <span className="text-orange-500 font-bold">{Wishlists.length}</span> Wishlist Product</h2>
                            <div className=' grid grid-cols-3 gap-y-5'>
                                {Wishlists?.map(item => (

                                    // <CourseCardDesign key={item._id} course={item}>

                                    // </CourseCardDesign>

                                    <ProductCard key={item._id} course={item}>

                                    </ProductCard>


                                ))}
                            </div>
                        </>
                    </div>
                    :
                    <div>
                        <Loading></Loading>
                    </div>
            }
        </div>
    );
};

export default Wishlist;