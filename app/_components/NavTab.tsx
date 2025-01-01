"use client";

import Link from "next/link";
import { tabsType } from "./NavTabs";
import { usePathname } from "next/navigation";

export default function NavTab({ tab }: { tab: tabsType }) {
  const pathArray = usePathname().split("/");
  const pathName = `${pathArray[pathArray.length - 1]}`;

  return (
    <li
      key={tab.link}
      className={`rounded px-2 ${pathName === tab.link && "bg-white"}`}
    >
      <Link href={`${tab.link}`}>{tab.name}</Link>
    </li>
  );
}
