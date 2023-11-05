import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center backgoundcss justify-center  h-screen text-white text-center bg-cover bg-center bg-fixed bg-opacity-20"

        >

            <div>


                <img src="logo.jpg" alt="Logo" className="w-20 h-20 mb-10 rounded-md mx-auto" />

                <h1 className="text-6xl font-bold mb-8 textshadowgreen">AI/ML Attendance System</h1>
                <div className="text-center text-white mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-3xl font-bold mb-4 textshadowred"
                    >
                        "Your Success Begins Here"
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg textshadowgreen"
                    >
                        Embrace the power of AI/ML in attendance tracking.
                    </motion.p>
                </div>
                <Link to='/home'>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="bg-white boxshadowwhite btn text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-100"
                    >
                        Get Started
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default Welcome;
