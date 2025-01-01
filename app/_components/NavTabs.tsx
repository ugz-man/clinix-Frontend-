import NavTab from "./NavTab";

export type tabsType = {
  name: string;
  link: string;
};

export default function NavTabs({ tabs }: { tabs: tabsType[] }) {
  return (
    <ul className="my-4 inline-flex flex-shrink flex-wrap gap-3 rounded bg-blue-gray-50 px-2 py-1 text-gray-700">
      {tabs.map((tab) => (
        <NavTab key={tab.link} tab={tab} />
      ))}
    </ul>
  );
}
