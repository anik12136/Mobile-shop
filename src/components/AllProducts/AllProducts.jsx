
import { useEffect, useState } from 'react';
import AllProductCard from '../AllProductCard/AllProductCard';
import Loading from '../../Pages/Shared/Loading/Loading';

const AllProducts = () => {

    // data fetch..............
    const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:7000/demoCourses'); // Specify the path to your JSON file in the public folder
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFetchData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log(fetchData);

    return (

        fetchData ?
            <div className='mx-40 h-full'>
                <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-60  mx-auto  ">All Products</h2>

                <>
                    <div className='mt-10 grid grid-cols-3 gap-y-10'>
                        {/* mapping---------- */}
                        {fetchData?.map(item => (

                            // <PopularCourseComponent key={item._id} course={item}>
                            // </PopularCourseComponent>
                            <AllProductCard key={item._id} course={item}>
                            </AllProductCard>
                        ))}

                    </div>
                </>
            </div>
            :
            <div>
                <Loading></Loading>
            </div>

    );
};

export default AllProducts;