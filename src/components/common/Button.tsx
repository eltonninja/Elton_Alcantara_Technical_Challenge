import React, { MouseEventHandler, ReactNode } from "react";

type IProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "outlined" | "filled";
};

const Button = ({
  onClick,
  children,
  type = "button",
  variant = "outlined",
}: IProps) => {
  const extraClass = variant === "filled" ? "!bg-green-600 text-white" : "";
  return (
    <button
      className={`group relative w-full inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-green-500`}
      onClick={onClick}
      type={type}
    >
      <span className='absolute inset-0 border border-current'></span>
      <span
        className={`block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 ${extraClass}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
