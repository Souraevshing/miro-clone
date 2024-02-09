import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface OrganizationItemProps {
  id: string;
  name: string;
  image: string;
}

export const OrganizationItem = ({
  id,
  name,
  image,
}: OrganizationItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  //if current organization id matches with the current id, set isActive to true, false otherwise
  const isActive = organization?.id === id;

  const handleClick = () => {
    //if organization id is not equal to current id, then return
    if (!setActive) {
      return;
    }

    //set organization to active with current id
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          fill
          src={image}
          alt={name}
          onClick={handleClick}
          className={cn(
            "rounded-sm cursor-pointer opacity-65 hover:opacity-100 transition-all text-center justify-center",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
