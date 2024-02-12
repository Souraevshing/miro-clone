import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { PlusCircleIcon } from "lucide-react";

//invite organization
export const InviteOrganization = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 shadow-2xl  hover:border-b-gray-700 hover:text-zinc-400 transition animate-in">
          <PlusCircleIcon className="h-4 w-4 mr-2" /> Invite Organization
        </Button>
      </DialogTrigger>
      <DialogContent className="p-8 bg-transparent border-none max-w-[800px]">
        {/* display profile for the current organization having number of members and invitation details */}

        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
