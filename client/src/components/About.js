import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-gray-100 text-black overflow-hidden"> 
      <div className="about-section py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Projects On Application</h1>
        <p className='max-w-screen-xl mx-auto'>We are a dedicated team working on the development of an innovative AI/ML Attendance Marking System. Under the esteemed guidance of Professor Deepika Ray, we aim to revolutionize attendance tracking for enhanced efficiency.</p>
      </div>

      <div className="relative mb-12">
        <img src="deepaksir.jpg" alt="Professor" className="mx-auto mb-5 w-36" />
        <div className="flex items-center justify-center bg-gray-300 ">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Prof. Deepak Ray</h2>
            <p className="text-gray-500 mb-4">Under the guidance</p>
            <p>"We are actively refining the AI/ML Attendance Marking System under the expert guidance of Professor Deepika Ray, ensuring seamless functionality and precision in tracking attendance."</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-center font-bold mb-8">Our Team</h2>
      <div className="flex flex-wrap justify-center">
        <div className=" sm:w-1/2 md:w-1/3 mb-8">
          <div className="card mx-2 flex items-center justify-center flex-col">
            <img src="ganesh.jpg" alt="Jane" className="w-28 mx-auto" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold mb-2">Ganesh Kumar</h2>
              <p className="text-gray-500 mb-2">AI/Ml & Server</p>
              <em>Server experts keep the digital heartbeat strong, ensuring AIML systems pulse with precision, delivering intelligence to the world</em>
              <hr/>
              <strong>gkumar20-etc@bvucoep.edu.in</strong>
            </div>
          </div>
        </div>

        <div className=" sm:w-1/2 md:w-1/3 mb-8">
          <div className="card mx-2 flex items-center justify-center flex-col">
            <img src="mukesh.jpg" alt="Jane" className="w-28 h-36 mx-auto" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold mb-2">Mukesh Kumar Mukhiya</h2>
              <p className="text-gray-500 mb-2">Full Stack Developer</p>
              <em>Full stack developers are the maestros of the digital symphony, harmonizing front-end elegance with back-end robustness</em>
              <hr/>
              <strong>mkmukhiya20-etc@bvucoep.edu.in</strong>
              
            </div>
          </div>
        </div>

        <div className=" sm:w-1/2 md:w-1/3 mb-8">
          <div className="card mx-2 flex items-center justify-center flex-col">
            <img src="shubham.jpg" alt="Jane" className="w-28 h-36 mx-auto" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold mb-2">Shubham kumar Verma</h2>
              <p className="text-gray-500 mb-2">IOT Expert</p>
              <em>IoT experts are the architects of a connected world, weaving together devices and data to create a smarter, more efficient future</em>
              <hr/>
              <strong>skverna20-etc@bvucoep.edu.in</strong>
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
