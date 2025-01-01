export default function InputText({
  id,
  type,
  name,
  required = false,
  defaultValue = "",
  className = "",
}: Readonly<{
  id: string;
  type: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
}>) {
  return (
    <input
      id={id}
      type={`${type}`}
      name={`${name}`}
      required={required}
      defaultValue={defaultValue}
      className={`rounded-lg border bg-neutral-10 px-2 py-2 focus:outline-none focus:ring focus:ring-primary-300 ${className}`}
    />
  );
}
