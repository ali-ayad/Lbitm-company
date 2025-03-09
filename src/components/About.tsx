import React, { useState } from "react";
import config from "../config/index.json";

interface CEO {
  name: string;
  image: string;
  education: string;
  experience: string;
  memberships: string[];
}

const About = () => {
  const { about, ceo }: { about: any; ceo: CEO } = config;
  const { title, subtitle, img } = about;

  // State for toggling visibility
  const [showMore, setShowMore] = useState(false);

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
            <h2 className="text-4xl font-extrabold text-gray-900">
              {subtitle}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Lbitm was established in 1997 in Baghdad under Company Law No. 21
              to support Iraq’s urban development. With a capital of 5 billion
              IQD, the company is classified as First-Class in Construction and
              Fifth-Class in Electrical Engineering.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Over the past 15+ years, we have built a strong reputation for
              delivering infrastructure and construction projects across Iraq,
              serving both public and private sectors. Our company combines
              technical expertise, financial capability, and engineering
              excellence to ensure high-quality execution in roads,
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

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 ${
              showMore
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-primary hover:bg-opacity-90"
            }`}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Company & CEO Information - Conditional Rendering */}
        {showMore && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ease-in-out opacity-100">
            {/* Company Information */}
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center relative overflow-hidden border border-gray-200">
              <h3 className="text-3xl font-bold mb-4 text-primary">
                Company Information
              </h3>

              <div className="w-16 mx-auto border-b-4 border-primary my-4"></div>

              <div className="text-lg text-gray-800 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">
                    Company Name:
                  </span>{" "}
                  Lbitm General Trading & Contracting Co. Ltd.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Founded:</span>{" "}
                  April 19, 2009
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Capital:</span>{" "}
                  5 Billion Iraqi Dinars
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Business Type:
                  </span>{" "}
                  Construction & Electrical Contracting
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Classification:
                  </span>{" "}
                  First-Class Construction, Fifth-Class Electrical
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Headquarters:
                  </span>{" "}
                  Baghdad, Iraq – Al-Jamia District, 633-21-6
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent opacity-10"></div>
            </div>

            {/* CEO Information */}
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center relative overflow-hidden border border-gray-200">
              <h3 className="text-3xl font-bold mb-4 text-primary">
                CEO Information
              </h3>

              <div className="w-16 mx-auto border-b-4 border-primary my-4"></div>

              {/* CEO Image with Hover Effect */}
              <div className="flex justify-center mb-6">
                <img
                  src={ceo.image}
                  alt={`${ceo.name}'s photo`}
                  className="rounded-full w-52 h-52 object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* CEO Details */}
              <div className="text-lg text-gray-800 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">Name:</span>{" "}
                  {ceo.name}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Education:
                  </span>{" "}
                  {ceo.education}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Experience:
                  </span>{" "}
                  {ceo.experience}
                </p>
                <div>
                  <span className="font-semibold text-gray-900">
                    Memberships:
                  </span>
                  <ul className="mt-2 space-y-1">
                    {ceo.memberships.map(
                      (membership: string, index: number) => (
                        <li key={index} className="text-gray-700">
                          🔹 {membership}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent opacity-10"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
