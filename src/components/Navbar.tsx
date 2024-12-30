import React from 'react';
import { useAuth } from "react-oidc-context";
import DarkModeToggle from "./DarkModeToggle";
import { Log } from 'oidc-client-ts';

const Navbar = () => {
  const auth = useAuth();
console.log(auth)

  const signOutRedirect = async () => {
    const clientId = "5dnet169d3bu5n2kn9t9nkvi64";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://us-east-1hy9gdo4mq.auth.us-east-1.amazoncognito.com";
    
    await auth.removeUser();
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        Bibliofy
      </div>
      
      <div className="flex gap-4 items-center">
        {!auth.isAuthenticated ? (
          <>
            <button
              onClick={() => auth.signinRedirect()}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors"
            >
              Get Started
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={signOutRedirect}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors"
            >
              Sign out
            </button>
            <button 
              onClick={() => window.location.href = '/dashboard'} 
              className="px-4 py-2 bg-purple-700 hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              Dashboard
            </button>
            <button 
          onClick={() => window.location.href = '/profile'}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-md transition-colors"
        >
          <img 
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" 
            alt="Profile" 
            className="w-8 h-8 rounded-full"
          />
        </button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;