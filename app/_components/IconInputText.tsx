"use client";

import React from "react";

export default function IconInputText({
  icon,
  id,
  type,
  placeholder = "",
  name,
  reff = null,
  required = false,
  value,
  onChange,
  className,
  onClickFunction,
}: {
  icon: React.ReactNode;
  id: string;
  type: string;
  placeholder?: string;
  name: string;
  reff?: React.MutableRefObject<null> | null;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onClickFunction?: () => void;
}) {
  return (
    <div className="relative flex flex-grow items-center">
      <span className="absolute left-2 top-1/2 -translate-y-1/2">{icon}</span>
      {/* <input
        type="text"
        className="h-9 w-full border border-r-4 border-solid border-blue-gray-400 pl-8"
      /> */}
      <input
        id={id}
        type={`${type}`}
        name={`${name}`}
        ref={reff}
        required={required}
        placeholder={placeholder}
        onClick={() => onClickFunction?.()}
        value={value}
        onChange={onChange}
        className={`rounded-lg border bg-neutral-10 px-9 py-2 focus:outline-none focus:ring focus:ring-primary-300 ${className}`}
      />
    </div>
  );
}
