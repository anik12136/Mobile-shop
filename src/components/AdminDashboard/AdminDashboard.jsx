import { Link, Outlet } from "react-router-dom";
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    return (
        <div className="">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-5">See Dashboard</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content">
                            {/* Sidebar content here */}


                            <div className="mx-16">
                                <h2 className="text-3xl ms-3">Admin</h2>

                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="box"
                                    >
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="box"
                                    >
                                        <li><Link to="/dashboard/allUsers">Manage Users</Link></li>

                                    </motion.div>
                                </div>
                                <div className="divider"></div>
                            </div>

                        </ul>

                    </div>
                </div>
            </div>
    );
};

export default AdminDashboard;