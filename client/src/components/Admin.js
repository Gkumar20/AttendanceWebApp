import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Admin = () => {
    return (
        <div className='overflow-hidden'>

            <header className="bg-gray-400 text-white py-6 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold textshadowblack">Make Your Own Data</h1>
                    <p className="mt-2 textshadowgreen">Train the Model</p>
                </div>
            </header>
            <div className='p-8 border max-w-screen-xl border-gray-300 rounded shadow-md my-10 mx-auto'>

                <h1 className='text-3xl  text-blue-400 font-bold mb-2 textshadowblack'>Actions</h1>
                <div className="grid grid-cols-2 gap-4">
                    {/* Section 1: Registration */}
                    <div className="bg-blue-400 border border-gray-900 p-6 h-40 rounded-lg shadow-md">
                        <h2 className="text-white text-2xl font-bold textshadowblack mb-4">Registration</h2>
                        <p className="text-black text-opacity-75 mb-4">"Registering students is the first step towards building a strong foundation."</p>
                        <Link to="/registration" className="bg-white btn text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-100">Go to Registration</Link>
                    </div>

                    {/* Section 2: List of Registered Students */}
                    <div className="bg-green-400 border border-gray-900 p-6 h-40 rounded-lg shadow-md">
                        <h2 className="text-white text-2xl font-bold textshadowblack mb-4">List of Registered Students</h2>
                        <p className="text-black text-opacity-75 mb-4">"View the list of students who have been successfully registered."</p>
                        <Link to="/registerd-student" className="bg-white btn text-green-800 px-4 py-2 rounded-full font-semibold hover:bg-green-100">View Registered Students</Link>
                    </div>

                    {/* Section 3: Train the Model */}
                    <div className="bg-red-400 border border-gray-900 p-6 h-40 rounded-lg shadow-md">
                        <h2 className="text-white text-2xl font-bold textshadowblack mb-4">Train the Model</h2>
                        <p className="text-black text-opacity-75 mb-4">"Training the model ensures accurate and reliable results."</p>
                        <Link to="/train-model" className="bg-white text-red-800 px-4 btn py-2 rounded-full font-semibold hover:bg-red-100">Train Model</Link>
                    </div>

                    {/* Section 4: List of Trained Students */}
                    <div className="bg-purple-400 border border-gray-900 p-6 h-40 rounded-lg shadow-md">
                        <h2 className="text-white  text-2xl font-bold textshadowblack mb-4">List of Trained Students</h2>
                        <p className="text-black text-opacity-75 mb-4">"Explore the students who have completed their training."</p>
                        <Link to="/trained-students" className="bg-white text-purple-800 btn px-4 py-2 rounded-full font-semibold hover:bg-purple-100">View Trained Students</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Admin;
