import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import config from "../config/index.json";
import "leaflet/dist/leaflet.css";

// ✅ Dynamically import react-leaflet components to prevent SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const Contact = () => {
  const { contect } = config;
  const { logo, name: companyName, contact } = contect;

  // State to hold Leaflet
  const [LInstance, setLInstance] = useState<any>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setLInstance(leaflet);
    });
  }, []);

  if (!LInstance) return null; // Prevents rendering before Leaflet loads

  // ✅ Define the custom icon **after** Leaflet loads
  const customIcon = new LInstance.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  // Baghdad Coordinates
  const position: [number, number] = [33.3152, 44.3661];

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
        
          <p className="text-gray-600 mt-2">
            📍 <strong>Location:</strong> {contact.address}
          </p>
        </div>

        {/* Leaflet Map */}
        <div className="mt-6 w-full flex justify-center">
          <MapContainer
            center={position}
            zoom={12}
            className="w-80 sm:w-[30rem] h-64 rounded-lg shadow-lg" 
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Lbitm Company - Baghdad <br /> {contact.address}
              </Popup>
            </Marker>
          </MapContainer>
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
