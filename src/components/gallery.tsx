import React, { useState } from "react";
import config from "../config/index.json";

// ✅ Define Section Type
interface SectionProps {
  title: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const Gallery = () => {
  const { gallery } = config;
  const { title, sections } = gallery;

  return (
    <section className="bg-background py-12" id="gallery">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-bold text-center text-primary mb-8">
          {title}
        </h1>

        {/* Loop Through Each Section */}
        {sections.map((section, index) => (
          <ImageSlider key={index} section={section} />
        ))}
      </div>
    </section>
  );
};

// ✅ Image Slider Component with Click-to-Enlarge
const ImageSlider: React.FC<{ section: SectionProps }> = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Check if images exist before rendering
  if (!section.images || section.images.length === 0) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? section.images!.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === section.images!.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Open modal to enlarge the image
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const leftIndex =
    (currentIndex - 1 + (section.images?.length || 1)) % (section.images?.length || 1);
  const rightIndex = (currentIndex + 1) % (section.images?.length || 1);

  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        {section.title}
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-12 md:left-20 bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 z-50"
        >
          ❮
        </button>

        {/* Image Display */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          {/* Left Image (Smaller & Faded) */}
          <div className="w-36 sm:w-48 h-48 sm:h-48 opacity-50 transform scale-90 transition-all duration-300">
            <img
              src={section.images[leftIndex]?.src}
              alt={section.images[leftIndex]?.alt || "No image"}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Center Image (Big & Clickable) */}
          <div
            className="w-60 sm:w-80 h-80 sm:h-80 transform scale-105 transition-all duration-300 cursor-pointer"
            onClick={openModal} // Open modal when clicked
          >
            <img
              src={section.images[currentIndex]?.src}
              alt={section.images[currentIndex]?.alt || "No image"}
              className="w-full h-full object-fill rounded-lg shadow-xl"
            />
            <p className="text-gray-700 mt-2">
              {section.images[currentIndex]?.caption || ""}
            </p>
          </div>

          {/* Right Image (Smaller & Faded) */}
          <div className="w-36 sm:w-48 h-44 sm:h-44 opacity-50 transform scale-90 transition-all duration-300">
            <img
              src={section.images[rightIndex]?.src}
              alt={section.images[rightIndex]?.alt || "No image"}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-12 md:right-20 bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 z-50"
        >
          ❯
        </button>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal} // Close when clicking outside
        >
          <div className="relative p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-xl shadow-lg hover:bg-gray-200 transition"
            >
              ✖
            </button>
            <img
              src={section.images[currentIndex]?.src}
              alt={section.images[currentIndex]?.alt || "No image"}
              className="max-w-full max-h-screen rounded-lg shadow-2xl"
            />
            <p className="text-white text-lg text-center mt-4">
              {section.images[currentIndex]?.caption || ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
