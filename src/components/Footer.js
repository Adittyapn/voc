import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © 2024 Voice Of Courage. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              Beranda
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              Artikel
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
