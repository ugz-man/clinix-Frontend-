import NavTabs, { tabsType } from "@/app/_components/NavTabs";

const tabs: tabsType[] = [
  {
    name: "Doctors",
    link: "doctors",
  },
  {
    name: "My Profile",
    link: "my-profile",
  },
  {
    name: "Health Records",
    link: "health-records",
  },
  {
    name: "Appointment",
    link: "appointment",
  },
  // {
  //   name: "Insurance",
  //   link: "/insurance",
  // },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="px-5 py-4 text-4xl font-bold">Welcome, Back</h1>

      <div className="px-4">
        <NavTabs tabs={tabs} />
      </div>

      <main className="px-5 py-4 lg:py-10">{children}</main>
    </div>
  );
}
