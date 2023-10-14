import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

const FeatureItem = function({ title, icon, description }) {
  return (
    React.createElement('li', { className: "flex w-full flex-1 flex-col items-start" },
      React.createElement('div', { className: "rounded-full p-4 lg:p-7 bg-green-50" },
        React.createElement(Image, { src: icon, alt: "map", width: 28, height: 28 })
      ),
      React.createElement('h2', { className: "bold-20 lg:bold-32 mt-5 capitalize" },
        title
      ),
      React.createElement('p', { className: "regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none" },
        description
      )
    )
  );
};

const Features = function() {
  return (
    React.createElement('section', { className: "flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24" },
      React.createElement('div', { className: "max-container padding-container relative w-full flex justify-end" },
        React.createElement('div', { className: "flex flex-1 lg:min-h-[900px]" },
          React.createElement(Image, {
            src: "/phone.png",
            alt: "phone",
            width: 440,
            height: 1000,
            className: "feature-phone"
          })
        ),
        React.createElement('div', { className: "z-20 flex w-full flex-col lg:w-[60%]" },
          React.createElement('div', { className: 'relative' },
            React.createElement(Image, {
              src: "/camp.svg",
              alt: "camp",
              width: 50,
              height: 50,
              className: "absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            }),
            React.createElement('h2', { className: "bold-40 lg:bold-64" }, "Our Features")
          ),
          React.createElement('ul', { className: "mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20" },
            FEATURES.map((feature) =>
              React.createElement(FeatureItem, {
                key: feature.title,
                title: feature.title,
                icon: feature.icon,
                description: feature.description
              })
            )
          )
        )
      )
    )
  );
};

module.exports = Features;
