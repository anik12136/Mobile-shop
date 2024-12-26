

import { FaShoppingCart, FaRegBookmark, FaUserAlt } from 'react-icons/fa';
import Wishlist from '../Wishlist/Wishlist';
import Bookmark from '../Bookmark/Bookmark';

const AllProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg w-80 overflow-hidden bg-white">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.product_name}
                className="h-48 w-full object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
                {/* Product Name */}
                <h2 className="text-lg font-bold mb-1">{product.product_name}</h2>

                {/* Seller Info */}
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaUserAlt className="mr-2" />
                    <span>{product.seller_name}</span>
                </div>

                {/* Specifications */}
                <div className="text-sm text-gray-600 mb-2">
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Model:</strong> {product.model}</p>
                    <p><strong>Sub-category:</strong> {product.subCategory}</p>
                </div>

                {/* Price & Quantity */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-lg font-bold text-blue-600">${product.price}</p>
                    <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Actions */}
                <div className="flex justify-between items-center">
                    {/* Add to Cart */}
                    <button className="flex items-center gap-2 px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm">
                        <FaShoppingCart /> Add to Cart
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm">
                        View Details
                    </button>
                    {/* Bookmark */}
                    <button >
                        <Bookmark className="  "
                            key={product._id}
                            product={product}>
                        </Bookmark>
                    </button>


                </div>
            </div>
        </div>
    );
};



export default AllProductCard;
