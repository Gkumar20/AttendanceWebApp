


// import React, { useState } from 'react';

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         sr_no: '',
//         student_name: '',
//         prn: '',
//         roll_no: '',
//         total_attendance: '',
//     });
//     const [isRegistered, setIsRegistered] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleRegister = () => {
//         fetch('http://127.0.0.1:5000/students', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Student registered:', data);
//                 setFormData({
//                     sr_no: '',
//                     student_name: '',
//                     prn: '', 
//                     roll_no: '',
//                     total_attendance: '',
//                 });
//                 setIsRegistered(true);
//             })
//             .catch(error => console.error('Error:', error));
//     };

//     return (
//         <div className="p-6 border border-gray-300 rounded shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Register Student</h2>
//             {isRegistered && <div className="mb-4 text-green-700">Student registered successfully!</div>}
//             <div className="flex items-center mb-4">
//                 <input
//                     type="text"
//                     name="sr_no"
//                     value={formData.sr_no}
//                     onChange={handleChange}
//                     placeholder="Sr. No."
//                     className="w-full p-2 border border-gray-400"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block font-bold text-gray-700 mb-2" htmlFor="student_name">
//                     Student Name
//                 </label>
//                 <input
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="student_name"
//                     type="text"
//                     name="student_name"
//                     value={formData.student_name}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block font-bold text-gray-700 mb-2" htmlFor="prn">
//                     PRN
//                 </label>
//                 <input
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="prn"
//                     type="text"
//                     name="prn"
//                     value={formData.prn}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block font-bold text-gray-700 mb-2" htmlFor="roll_no">
//                     Roll No.
//                 </label>
//                 <input
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="roll_no"
//                     type="text"
//                     name="roll_no"
//                     value={formData.roll_no}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block font-bold text-gray-700 mb-2" htmlFor="total_attendance">
//                     Total Attendance
//                 </label>
//                 <input
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="total_attendance"
//                     type="number"
//                     name="total_attendance"
//                     value={formData.total_attendance}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 onClick={handleRegister}
//             >
//                 Register Student
//             </button>
//         </div>
//     );
// };

// export default Registration;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        sr_no: '',
        student_name: '',
        prn: '',
        roll_no: '',
        total_attendance: '',
    });
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = () => {
        if (!formData.student_name || !formData.prn || !formData.roll_no) {
            alert("Please fill in all required fields.");
            return;
        }

        fetch('http://127.0.0.1:5000/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);  // Display error message from server
                } else {
                    console.log('Student registered:', data);
                    setFormData({
                        sr_no: '',
                        student_name: '',
                        prn: '',
                        roll_no: '',
                        total_attendance: '',
                    });
                    setIsRegistered(true);
                    navigate(`/done/${formData.student_name}`);
                }
            })
            .catch(error => console.error('Error:', error));
    };


    return (
        <div className="p-6 border border-gray-300 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Register Student</h2>
            {isRegistered && <div className="mb-4 text-green-700">Student registered successfully!</div>}

            <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="student_name">
                    Sr. No.(*)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sr_no"
                    type="text"
                    name="sr_no"
                    value={formData.sr_no}
                    onChange={handleChange}
                    placeholder="Sr. No."
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="student_name">
                    Student Name(*)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="student_name"
                    type="text"
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="prn">
                    PRN(*)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="prn"
                    type="text"
                    name="prn"
                    value={formData.prn}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="roll_no">
                    Roll No.(*)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="roll_no"
                    type="text"
                    name="roll_no"
                    value={formData.roll_no}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="total_attendance">
                    Total Attendance
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="total_attendance"
                    type="number"
                    name="total_attendance"
                    value={formData.total_attendance}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleRegister}
            >
                Register Student
            </button>
        </div>
    );
};

export default Registration;
