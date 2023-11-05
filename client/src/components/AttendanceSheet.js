import React, { useState, useEffect } from 'react';

const AttendanceTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/students_get')
      .then(response => response.json())
      .then(data => {
        const parsedData = JSON.parse(data);
        setStudents(parsedData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-6 border border-gray-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Attendance Table</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="p-2 border border-gray-400">Sr. No.</th>
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Roll No.</th>
            <th className="p-2 border border-gray-400">PRN</th>
            <th className="p-2 border border-gray-400">Total Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="p-2 border border-gray-400">{student.sr_no}</td>
              <td className="p-2 border border-gray-400">{student.student_name}</td>
              <td className="p-2 border border-gray-400">{student.roll_no}</td>
              <td className="p-2 border border-gray-400">{student.prn}</td>
              <td className="p-2 border border-gray-400">{student.total_attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
