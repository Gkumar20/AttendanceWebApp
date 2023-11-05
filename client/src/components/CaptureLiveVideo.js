import React, { useState } from 'react';
import axios from 'axios';

const CaptureComponent = () => {
    const [message, setMessage] = useState('');
    const [markedStudents, setMarkedStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const markAttendance = () => {
        setLoading(true);

        axios.get('http://127.0.0.1:5000/mark_attendance_live')
            .then(response => {
                console.log('Response:', response.data); // Log the response data
                setMarkedStudents(response.data.students);
                setMessage('Attendance marked successfully!');
            })

            .catch(error => {
                console.error('Error marking attendance:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return (
        <div className='flex flex-col'>
            <div className="flex items-center justify-center h-32">
                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={markAttendance}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Mark Attendance
                    </button>
                    {loading && <p className="mt-4 text-blue-500">Processing...</p>}
                    <p className="mt-4 text-green-500">{message}</p>
                </div>
            </div>

            <div>
                <h2>Marked Students:</h2>
                <ul>
                    {markedStudents && markedStudents.map((student, index) => (
                        <li key={index}>{student}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CaptureComponent;
