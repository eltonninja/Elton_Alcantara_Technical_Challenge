import React from "react";

type IProps = {
  title?: string;
  description: string;
};

const InfoNotification = ({ title = "Alert", description }: IProps) => {
  return (
    <div
      role='alert'
      className='rounded border-s-4 border-red-500 bg-red-50 p-4 my-2'
    >
      <strong className='block font-medium text-red-800'> {title}</strong>

      <p className='mt-2 text-sm text-red-700'>{description}</p>
    </div>
  );
};

export default InfoNotification;
