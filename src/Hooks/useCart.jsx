import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiousSecure';
const useCart = () => {
    const user = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const axiosSecure = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            // const res = await axiosSecure.get('/carts')
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;