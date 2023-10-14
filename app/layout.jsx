import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
};

function RootLayout({ children }) {
  return (
    React.createElement('html', { lang: 'en' },
      React.createElement('body', null,
        React.createElement(Navbar, null),
        React.createElement('main', { className: "relative overflow-hidden" },
          children
        ),
        React.createElement(Footer, null)
      )
    )
  );
}

module.exports = RootLayout;
