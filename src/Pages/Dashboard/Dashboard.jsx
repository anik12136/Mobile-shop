import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from 'framer-motion';
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import SellerDashboard from "../../components/SellerDashboard/SellerDashboard";
import BuyerDashboard from "../../components/BuyerDashboard/BuyerDashboard";
// import data from "../../../public/user.json"

const Dashboard = () => {

    const [checkUser, setCheckUser] = useState([])
    // const [isUser, setIsUser] = useState('isStudent')

    const { user } = useContext(AuthContext);

    // to do load users data

    useEffect(() => {
            fetch(`https://mobile-shop-server-3ph55haiy-anik12136s-projects.vercel.app/users/check/${user?.email}`)
            .then(res => res.json())
            .then(data => setCheckUser(data))
        // .catch(error => console.error(error))
    }, [user]);

    console.log(user, checkUser);
    if (checkUser.role === 'admin') {

        return (
            <div><AdminDashboard></AdminDashboard></div>
           
        );
    }
    else if (checkUser.role === 'seller') {
        return (
            <div><SellerDashboard></SellerDashboard></div>
        );
    }

    else {
        return (
           <BuyerDashboard></BuyerDashboard>
        );

    }

};

export default Dashboard;