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
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Team Members
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 w-48 flex flex-col items-center text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full text-xl">
                  {member.role.charAt(0)}
                </div>
                <div className="mt-3 font-semibold text-gray-800">
                  {member.role}
                </div>
                <div className="mt-1 text-gray-500 text-sm">Members</div>
                <div className="mt-2 bg-gray-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {member.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment & Machinery Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Equipment & Machinery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-lg p-4 flex items-center justify-between border border-gray-200 hover:shadow-lg transition-all"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.name}
                </span>
                <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
