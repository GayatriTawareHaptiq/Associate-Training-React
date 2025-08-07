import React from 'react';
import Navbar from '../components/Navbar';
import '../index.css'; // Global styles

const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="container mt-4" role="main">
        {children}
      </main>
      <footer className="footer text-center mt-5">
        <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
