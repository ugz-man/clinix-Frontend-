import Link from "next/link";

function ButtonLink({
  type,
  size = "sm",
  href,
  className,
  children,
}: Readonly<{
  type: string;
  size?: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}>) {
  if (type === "primary")
    return (
      <Link
        href={`${href}`}
        className={`cursor-pointer rounded border-none bg-primary-300 text-center text-xs uppercase text-white lg:text-base ${size === "sm" && "px-4 py-2"} ${size === "md" && "px-6 py-4"} ${className}`}
      >
        {children}
      </Link>
    );

  if (type === "secondary")
    return (
      <Link
        href={`${href}`}
        className={`cursor-pointer rounded border-none text-center text-xs uppercase outline outline-1 lg:text-base ${size === "sm" && "px-4 py-2"} ${size === "md" && "px-6 py-4"} ${className}`}
      >
        {children}
      </Link>
    );
}

export default ButtonLink;
