import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../Hooks/useCart";

const AddToCart = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log(product);
    if (user && user.email) {
      const cartItem = {
        idEmail: product._id + user?.email,
        productId: product._id,
        productName: product.product_name,
        productImage: product.image,
        price: product.price,
        brand: product.brand,
        model: product.model,
        quantity: product.quantity,
        email: user.email,
        specifications: product.specifications,
      };

      fetch('http://localhost:7000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Product added to the cart.',
              showConfirmButton: false,
              timer: 1500
            });
            refetch(); // Update the cart count or details
          }
        })
        .catch(error => {
          console.error('Error adding product to cart:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add product to the cart!',
          });
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

  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="border my-3 w-full p-2 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center"
    >
      <ShoppingCartIcon className="h-6 w-6 mr-2" />
      Add to Cart
    </button>
  );
};

export default AddToCart;
