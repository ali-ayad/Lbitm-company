import React from "react";
import config from "../config/index.json";

const Contact = () => {
  const { contect } = config;
  const { logo, name: companyName, contact } = contect;

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Company Logo */}
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {contact.sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>

        {/* Company Contact Details */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mt-2">
            📍 <strong>Location:</strong> {contact.address}
          </p>
          <p className="text-gray-600 mt-1">
            ✉️ <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-primary hover:underline"
            >
              {contact.email}
            </a>
          </p>
          <p className="text-gray-600 mt-1">
            📞 <strong>Phone:</strong> {contact.phone[0]} / {contact.phone[1]}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} Lbitm Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
