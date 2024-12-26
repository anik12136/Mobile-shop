import { useContext, useEffect, useState } from 'react';
import AllProductCard from '../../components/AllProductCard/AllProductCard';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const Products = () => {

    const user = useContext(AuthContext);
    // data fetch..............
    const [allProducts, setAllProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:7000/allProducts'); // Specify the path to your JSON file in the public folder
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);
    console.log(allProducts);
    return (
        allProducts ?
            <div className='grid grid-cols-3 my-4 container mx-auto gap-y-4 '>

                {/* mapping---------- */}
                {allProducts?.map(product => (

                    <AllProductCard key={product._id} product={product}></AllProductCard>

                ))}
            </div>
            :
            <div className='mt-20'>
                <Loading></Loading>
            </div>

    );
};

export default Products;