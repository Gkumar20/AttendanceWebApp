import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <header className="bg-blue-700 text-white py-6 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">Try Your-Self with AI</h1>
                    <p className="mt-2">Prepare the Attendance</p>
                </div>
            </header>

            <section className="py-16">
                <div className="container mx-auto text-center max-w-screen-xl">
                    <h2 className="text-2xl font-bold mb-6">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow">
                            <div class="book mx-auto flex flex-col">
                                <p className="text-md font-bold mb-2">Upload Image</p>
                                <Link to="/upload-image" className="bg-gray-900 btn text-blue-300 px-4 py-2 rounded-full font-semibold hover:bg-green-100 hover:text-black">Go to Register</Link>
                                <div class="cover flex flex-col">
                                    <img src="register.png" alt="register" className="w-28 h-28 mb-10 rounded-md mx-auto" />

                                    <p className="text-l font-bold mb-2" >Register Attendance</p>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <div class="book mx-auto flex flex-col">
                                <p className="text-md font-bold mb-2">Administrator</p>
                                <Link to="/admin" className="bg-gray-900 btn text-blue-300 px-4 py-2 rounded-full font-semibold hover:bg-green-100 hover:text-black">refer to page</Link>
                                <div class="cover flex flex-col">
                                    <img src="admin.png" alt="admin" className="w-28 h-28 mb-10 rounded-full mx-auto" />

                                    <p className="text-l font-bold mb-2" >Admin panel</p>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <div class="book mx-auto flex flex-col">
                                <p className="text-md font-bold mb-2">Download the sheet</p>
                                <Link to="/student-list" className="bg-gray-900 btn text-blue-300 px-4 py-2 rounded-full font-semibold hover:bg-green-100 hover:text-black">Go to Download</Link>
                                <div class="cover flex flex-col">
                                    <img src="dwonload.png" alt="download" className="w-28 h-28 mb-10 rounded-md mx-auto" />

                                    <p className="text-l font-bold mb-2" >Download the Data</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">Student Data</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow">
                            <p>Recents</p>
                            <p className="font-bold">view Recent Marked Attendance</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <p>Last week </p>
                            <p className="font-bold">view last week Attendance</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <p>Total Attendance of a month</p>
                            <p className="font-bold">View Total attendance</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Home;
