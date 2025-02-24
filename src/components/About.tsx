import React from "react";
import config from "../config/index.json";

const About = () => {
  const { about } = config;
  const { title, subtitle, img } = about;

  return (
    <section className="py-16 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <h1 className="text-5xl font-bold text-center text-primary mb-8">
          {title}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side - Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray-900">{subtitle}</h2>
            <p className="mt-6 text-lg text-gray-600">
              Lbitm was established in 1997 in Baghdad under Company Law No. 21 to support Iraq’s urban development. 
              With a capital of 5 billion IQD, the company is classified as First-Class in Construction and 
              Fifth-Class in Electrical Engineering.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Over the past 15+ years, we have built a strong reputation for delivering infrastructure and construction 
              projects across Iraq, serving both public and private sectors. Our company combines technical expertise, 
              financial capability, and engineering excellence to ensure high-quality execution in roads, 
              infrastructure, and large-scale civil projects.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Company Building"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

        </div>
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold  mb-4 text-primary">Company Information</h3>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Company Name:</span> Lbitm General Trading & Contracting Co. Ltd.
          </p>
          <p className="text-lg text-gray-800 mt-2">
            <span className="font-semibold">Founded:</span> April 19, 2009
          </p>
          <p className="text-lg text-gray-800 mt-2">
            <span className="font-semibold">Capital:</span> 5 Billion Iraqi Dinars
          </p>
          <p className="text-lg text-gray-800 mt-2">
            <span className="font-semibold">Business Type:</span> Construction & Electrical Contracting
          </p>
          <p className="text-lg text-gray-800 mt-2">
            <span className="font-semibold">Classification:</span> First-Class Construction, Fifth-Class Electrical
          </p>
          <p className="text-lg text-gray-800 mt-2">
            <span className="font-semibold">Managing Director:</span> Omar Issa Hanfoush Al-Jadhba
          </p>
          <p className="text-lg text-gray-800 mt-2">
            <span className="font-semibold">Headquarters:</span> Baghdad, Iraq – Al-Jamia District, 633-21-6
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
