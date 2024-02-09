"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { OrganizationItem } from "./organization-item";

//list of organizations
export const OrganizationList = () => {
  /**
   * custom hook `useOrganizationsList`
   * fetch user memberships from an
   * organization list
   *
   * @returns object, and the code is destructuring that object to obtain the userMemberships property
   */
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  /**
   * @returns null if no organizations present
   */
  if (!userMemberships.data?.length) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {userMemberships.data.map((org) => {
        return (
          <OrganizationItem
            id={org.organization.id}
            image={org.organization.imageUrl}
            name={org.organization.name}
          />
        );
      })}
    </ul>
  );
};
