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
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          {product.title}
        </h1>
        <Divider />

        {/* Project List */}
        <div className="space-y-6">
          {items.slice(0, visibleProjects).map((item) => (
            <div
              key={item.title}
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-primary"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-700">
                  <span className="text-primary">Client:</span> {item.client}
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  <span className="text-primary">Budget:</span> {item.budget}
                </p>
              </div>
            </div>
          ))}
        </div>

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
