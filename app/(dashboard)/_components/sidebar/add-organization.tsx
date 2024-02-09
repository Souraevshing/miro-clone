"use client";

import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";

//add organization
export const AddOrganization = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square hover:animate-in">
          <button className=" bg-gray-900 hover:bg-black hover:text-orange-400 hover:shadow-2xl w-[34px] h-[34px] rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:font-extrabold transition-all">
            <PlusIcon className="text-white transition-all hover:font-extrabold  hover:text-9xl hover:text-orange-700" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-8 bg-transparent border-none max-w-[488px]">
        {/* create organization */}
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
