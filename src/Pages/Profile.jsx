import { logout } from '@/redux/Loginslice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import Footer from '@/components/Footer';
import Navvbar from '@/components/Navvbar';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <Navvbar />

      {/* Profile Center Container */}
      <div className="flex-1 flex justify-center items-center py-20 mt-12">

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-10 w-full max-w-md text-center"
        >
          <FaUserCircle size={110} className="text-blue-400 mx-auto" />

          <h3 className="text-3xl font-bold mt-4">
            {user?.name}
          </h3>

          <div className="h-px bg-white/30 my-6" />

          <div className="space-y-4 text-left text-lg">
            <p className="flex items-center gap-3"><FaEnvelope /> {user?.email}</p>
            <p className="flex items-center gap-3"><FaPhone /> {user?.phonenumber}</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> {user?.location}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full mt-8 py-3 rounded-xl bg-red-600 font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Logout
          </motion.button>
        </motion.div>

      </div>

      {/* Footer Full Width */}
      <Footer />

    </div>
  );
}

export default Profile;


