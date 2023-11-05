import React from 'react';

import ImageUploader from './ImageUploader';

const MarkAttendance = () => {
  return (
    <div className="p-6 border border-gray-300 rounded shadow-md">
     
      <section className="mb-8 text-center flex items-center justify-center">
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-4">Select image to mark the Attendance</h2>
          <ImageUploader />
        </div>
      </section>
    </div>
  );
};

export default MarkAttendance;
