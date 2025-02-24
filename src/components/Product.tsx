import React, { useState } from "react";
import config from "../config/index.json";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;
  const { items } = product;

  // State to control number of projects displayed
  const [visibleProjects, setVisibleProjects] = useState(3);
  const showAll = visibleProjects >= items.length;

  const handleShowMore = () => {
    setVisibleProjects(items.length); // Show all projects
  };

  const handleShowLess = () => {
    setVisibleProjects(3); // Show only the first 3 again
  };

  return (
    <section className="bg-background py-12" id="product">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          {product.title}
        </h1>
        <Divider />

        {/* Project List */}
        {items.slice(0, visibleProjects).map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-wrap items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } my-12`}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                <span className="text-primary">Client:</span> {item.client}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-primary">Budget:</span> {item.budget}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 p-6">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src={item.img}
                alt={item.title}
              />
            </div>
          </div>
        ))}

        {/* Show More / Show Less Buttons */}
        <div className="text-center mt-8">
          {!showAll ? (
            <button
              onClick={handleShowMore}
              className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition duration-300"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
