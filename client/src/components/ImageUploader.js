import React, { useState } from 'react';
import CaptureComponent from './CaptureLiveVideo';

const ImageUploader = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setSelectedImages([...selectedImages, ...newImages]);
    };

    const handleClearImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);
    };

    const handleClearAllImages = () => {
        setSelectedImages([]);
    };

    return (
        <div>
            <header className="bg-blue-700 text-white mb-6 py-6 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold"> Upload Multiple Image</h1>
                    <p className="mt-2">Prepare the Table of Attendance</p>
                </div>
            </header>
            <div className='max-w-screen-xl mx-auto p-6  rounded shadow-md'>
                <h1 className='text-3xl  text-blue-400 font-bold mb-2 textshadowblack'>Mark attendance using group image</h1>
                <label className="block mb-4">

                    <div className="container">
                        <div className="headerUI">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">
                                <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg> <p>Browse File to upload!</p>
                        </div>
                        <label htmlFor="file" className="footerUI mx-auto">
                            <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

                            </svg>
                            <p>{selectedImages.length > 0 ? `${selectedImages.length}  Image(s) selected` : 'Not selected Image'}</p>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            </svg>
                        </label>

                        <input type="file" accept="image/*" className="hidden mx-auto" multiple onChange={handleImageUpload} />
                    </div>


                </label>

                <div className="flex flex-wrap mb-4">
                    {selectedImages.map((image, index) => (
                        <div key={index} className="relative m-2">
                            <img src={image} alt={`Preview ${index + 1}`} className="w-40 h-40 object-cover" />
                            <button
                                onClick={() => handleClearImage(index)}
                                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full cursor-pointer hover:bg-red-700"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
                {selectedImages.length > 0 && (
                    <button
                        onClick={handleClearAllImages}
                        className="bg-red-500 text-white px-4 btn py-2 rounded-full font-bold hover:bg-red-700"
                    >
                        Clear All Images
                    </button>
                )}
                <button
                    className="bg-green-500 text-white px-4  btn py-2 rounded-full font-bold mx-3 hover:bg-green-700"
                >
                    Proceed to Mark Attendance
                </button>
            </div>



            <div className='max-w-screen-xl mx-auto p-6 my-6 rounded shadow-md'>
                <h1 className='text-3xl  text-blue-400 font-bold mb-2 textshadowblack'>Mark attendance using Live Camera Detection</h1>
                <CaptureComponent/>
                
            </div>
        </div>
    );
};

export default ImageUploader;
