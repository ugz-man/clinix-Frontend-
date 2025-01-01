function Button({
  type,
  size = "sm",
  disabled = false,
  className,
  onClick,
  children,
}: Readonly<{
  type: string;
  size?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}>) {
  // let textSize;
  // if (size === "sm") textSize = "text-xs";
  // if (size === "md") textSize = "text";

  if (type === "primary")
    return (
      <button
        disabled={disabled}
        onClick={() => onClick?.()}
        className={`cursor-pointer rounded border-none bg-primary-300 text-xs uppercase text-white hover:inset-10 hover:shadow-lg hover:shadow-blue-gray-100 disabled:flex disabled:cursor-default disabled:justify-center disabled:bg-primary-200 lg:text-base ${size === "sm" && "px-4 py-2"} ${size === "md" && "px-6 py-4"} ${className}`}
      >
        {children}
      </button>
    );

  if (type === "secondary")
    return (
      <button
        disabled={disabled}
        onClick={() => onClick?.()}
        className={`cursor-pointer rounded border-none px-4 py-2 text-xs uppercase outline outline-1 hover:inset-10 hover:shadow-lg hover:shadow-blue-gray-100 disabled:cursor-default lg:text-base ${size === "sm" && "px-4 py-2"} ${size === "md" && "px-6 py-4"} ${className}`}
      >
        {children}
      </button>
    );
}

export { Button };
