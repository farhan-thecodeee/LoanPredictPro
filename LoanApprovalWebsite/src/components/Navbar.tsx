import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileSpreadsheet } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center">
              <FileSpreadsheet className="mr-2" />
              LoanPredict Pro
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150"
            >
              <Home className="mr-1 h-4 w-4" /> Home
            </Link>
            <Link 
              to="/predict" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-blue-100 transition duration-150"
            >
              Predict
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;