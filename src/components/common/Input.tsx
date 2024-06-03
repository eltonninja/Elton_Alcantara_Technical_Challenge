import React, { ChangeEventHandler } from "react";

type IProps = {
  label: string;
  placeholder?: string;
  type?: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  label,
  placeholder,
  type = "text",
  id,
  value,
  onChange,
}: IProps) => {
  return (
    <label
      htmlFor={id}
      className='block bg-white overflow-hidden text-start rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
    >
      <span className='text-xs font-medium text-gray-700'> {label} </span>

      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
      />
    </label>
  );
};

export default Input;
