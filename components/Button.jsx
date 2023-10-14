import Image from "next/image";
import React from 'react';

const Button = ({ type, title, icon, variant, full }) => {
  return (
    React.createElement('button', {
      className: `flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`,
      type: type
    },
    icon && React.createElement(Image, { src: icon, alt: title, width: 24, height: 24 }),
    React.createElement('label', { className: "bold-16 whitespace-nowrap cursor-pointer" }, title)
    )
  );
};

export default Button;
