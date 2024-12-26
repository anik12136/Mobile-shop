
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
const useBookmark = () => {
    const user = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const axiosSecure = useAxiosSecure();
    const { refetch, data: bookmark = [] } = useQuery({
        queryKey: ['bookmark', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookmarks?email=${user?.email}`)
            // const res = await axiosSecure.get('/carts')
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [bookmark, refetch]

}
export default useBookmark;

