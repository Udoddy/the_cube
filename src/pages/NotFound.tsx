import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | The Cube Restaurant & Café';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        <h2 className="text-3xl font-playfair font-bold mt-4 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;