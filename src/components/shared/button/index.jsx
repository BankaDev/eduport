import React from "react";

/*
variant = solid, light, outline, text
size = sm, md, lg
color = primary, secondary, success, warning, danger, light, dark, info, black, rose
rounded = none, sm, md, lg, full
*/

const models = {
  variant: {
    solid: "hover:opacity-90",
    light: "bg-opacity-20 hover:bg-opacity-30",
    outline: "border bg-transparent hover:bg-opacity-10",
    text: "bg-transparent hover:underline"
  },
  size: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  },
  color: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
    danger: "bg-red-600 text-white",
    light: "bg-gray-100 text-gray-800",
    dark: "bg-gray-800 text-white",
    info: "bg-teal-600 text-white",
    black: "bg-black text-white",
    rose: "bg-rose-200 text-rose-500 hover:bg-rose-700 hover:text-white"
  },
  rounded: {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full"
  }
};

const Button = ({
  children,
  color = "primary",
  variant = "solid",
  size = "md",
  rounded = "md",
  shadow=false,
  ...rest
}) => {

    delete rest.style; // Prevent inline styles from interfering with class-based styles
    delete rest.className; // Prevent external classNames from interfering with component styles

  return (
    <button
      className={`
        ${models.color[color]} 
        ${models.variant[variant]} 
        ${models.size[size]} 
        ${models.rounded[rounded]} 
        ${shadow ? 'shadow-lg' : ''}
        {...rest}
        font-semibold transition duration-300
      `}
    >
      {children}
    </button>
  );
};

export default Button;
