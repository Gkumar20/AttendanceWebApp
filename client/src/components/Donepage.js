import React from 'react';
import { Link } from 'react-router-dom';

const DonePage = ({ workType }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-100">
            <div className="bg-white p-8 rounded shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Work Done!</h2>
                <p className="text-gray-700 mb-4">
                    You have successfully completed {workType} task.
                </p>
                <Link to='/'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DonePage;
