"use client";

import IconInputText from "@/app/_components/IconInputText";
import { HiMagnifyingGlass } from "@/app/_components/icons";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const specializations = [
  "Cardiologist",
  "Pediatrician",
  "Neurologist",
  "Ophthalmologist",
  "Urologist",
  "Psychiatrist",
];

export default function DoctorFilter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [seearchName, setSearchName] = useState(searchParams.get("name") ?? "");
  const inputEl = useRef(null);

  const defaultSearch = searchParams?.get("specialization") ?? "";

  useEffect(
    function () {
      function callback(ev: KeyboardEvent) {
        if (ev.code === "Enter" && document.activeElement === inputEl.current) {
          const params = new URLSearchParams(searchParams);
          params.set("name", seearchName);

          router.replace(`${pathName}?${params.toString()}`);
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [seearchName, pathName, router, searchParams],
  );

  function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.set("specialization", e.target.value);

    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-4 py-6 lg:flex-row">
      <IconInputText
        icon={<HiMagnifyingGlass />}
        id="doctorName"
        type="text"
        placeholder="Search by name"
        name="doctorName"
        reff={inputEl}
        className="w-full"
        value={seearchName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchName(e.target.value)
        }
      />
      <select
        className="h-12 w-full rounded border px-2 lg:h-auto lg:w-1/4"
        onChange={handleOnChange}
        defaultValue={defaultSearch}
      >
        <option value="">All Specialist</option>
        {specializations.map((specialization) => (
          <option key={specialization} value={specialization}>
            {specialization}
          </option>
        ))}
      </select>
    </div>
  );
}
