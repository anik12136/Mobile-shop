import Swal from "sweetalert2";
// import AddTOCart from "../AddTOCart/AddTOCart";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useBookmark from "../../Hooks/useBookmark";
import { TiDelete } from "react-icons/ti";
import useAxiosSecure from "../../Hooks/useAxiousSecure";
import useBookmark from "../../Hooks/useBookmarks";
import AddToCart from "../AddToCart/AddToCart";

const ProductCard = ({ product }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useBookmark();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookmarks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Removed!",
              text: "Your product has been removed.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="grid justify-center items-center my-5">
      <div className="text-left border p-4 rounded-md shadow-lg w-72 flex flex-col justify-between bg-white">
        {/* Delete Button */}
        <div className="flex justify-end">
          <button
            onClick={() => handleDelete(product._id)}
            className="text-red-700 text-3xl hover:text-red-500"
          >
            <TiDelete />
          </button>
        </div>

        {/* Product Image */}
        <img
          className="h-48 w-full object-cover rounded-md"
          src={product.image}
          alt={product.product_name}
        />

        {/* Product Details */}
        <h3 className="font-bold text-lg mt-3">{product.product_name}</h3>
        <p className="text-gray-500 text-sm mt-1">Brand: {product.brand}</p>
        <p className="text-gray-500 text-sm">Model: {product.model}</p>
        <p className="text-gray-500 text-sm">
          Quantity Available: {product.quantity}
        </p>

        {/* Specifications */}
        <div className="mt-2 text-gray-600 text-sm">
          <strong>Specifications:</strong>
          <p className="line-clamp-2">{product.specifications}</p>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-lg">${product.price}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
