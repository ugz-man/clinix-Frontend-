import { getDoctor } from "@/app/_lib/data";

import Header from "./Header";
import { tabsType } from "@/app/_components/NavTabs";
import NavTabs from "@/app/_components/NavTabs";
import About from "./About";

const tabs: tabsType[] = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Reviews",
    link: "reviews",
  },
  {
    name: "Book Appointment",
    link: "book-appointment",
  },
];

export default async function Page({
  params,
}: {
  params: { doctorId: string };
}) {
  const { doctorId } = params;
  const response = await getDoctor(doctorId);
  const {
    data: { doctor },
  } = response;

  if (response.status !== "success") throw new Error("An Error occured");

  return (
    <>
      <Header doctor={doctor} />

      <NavTabs tabs={tabs} />

      <About doctor={doctor} />
    </>
  );
}
