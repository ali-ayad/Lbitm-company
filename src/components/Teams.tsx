import React from "react";
import config from "../config/index.json";
import Divider from "./Divider";

const Team = () => {
  const { team } = config;
  const { title, members, equipment } = team;

  return (
    <section className="bg-background py-12" id="team">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          {title}
        </h1>
        <Divider />

        {/* Team Members Table */}
        <div className="overflow-x-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Team Members
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-max border-collapse border border-gray-300 shadow-lg">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm md:text-base">
                    #
                  </th>
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm md:text-base">
                    Job Title
                  </th>
                  <th className="p-2 sm:p-4 text-left text-xs sm:text-sm md:text-base">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                  >
                    <td className="p-2 sm:p-4 border border-gray-300 text-xs sm:text-sm md:text-base">
                      {index + 1}
                    </td>
                    <td className="p-2 sm:p-4 border border-gray-300 text-xs sm:text-sm md:text-base">
                      {member.role}
                    </td>
                    <td className="p-2 sm:p-4 border border-gray-300 text-xs sm:text-sm md:text-base">
                      {member.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Equipment & Machinery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Equipment & Machinery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <div key={item.name} className="text-center">
                <img
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                  src={item.img}
                  alt={item.name}
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
