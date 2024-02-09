import { AddOrganization } from "./add-organization";
import { OrganizationList } from "./organization-list";

//sidebar, fixed and always on the screen
const Sidebar = () => {
  return (
    <>
      <aside className="fixed z-[1] left-0 bg-blue-900 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
        {/* list of organizations */}
        <OrganizationList />

        {/* add organization */}
        <AddOrganization />
      </aside>
    </>
  );
};

export default Sidebar;
