"use client";

import { UserButton, useOrganization } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";

import { SearchInput } from "../search-input";
import { InviteOrganization } from "../invite-organization";

const Navbar = () => {
  //destructure organizations from list of organization
  const organization = useOrganization();

  return (
    <>
      <div className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex lg:flex-1">
          <SearchInput />
        </div>
        <div className="block lg:hidden flex-1">
          {/*change to another organization from list of organizations*/}
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "376px",
                },
                organizationSwitcherTrigger: {
                  padding: "6px",
                  width: "100%",
                  borderRadius: "99999px",
                  border: "1px solid #E57EEE",
                  justifyContent: "space-between",
                  background: "#E57EEE",
                },
              },
            }}
          />
        </div>

        {/* invite organization */}
        {organization && <InviteOrganization />}

        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default Navbar;
