"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Ubuntu_Mono } from "next/font/google";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { HeartIcon, LayoutDashboardIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Ubuntu_Mono({
  style: ["italic"],
  subsets: ["latin"],
  weight: ["400"],
});

const OrgSidebar = () => {
  const params = useSearchParams();
  const favourites = params.get("favourites");

  return (
    <>
      <div className="hidden lg:flex flex-col space-y-6 w-[286px] pl-5 pt-5">
        <Link href="/">
          <div className="flex items-center gap-x-2">
            <Image src="/logo.svg" alt="logo" height={69} width={60} />
            <span className={cn("font-extrabold text-xl", font.className)}>
              Board
            </span>
          </div>
        </Link>
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
        <div className="space-y-1 w-full">
          {/* all my teams */}
          <Button
            asChild
            size="lg"
            className="font-medium justify-start px-2 w-full bg-blue-500 text-black hover:text-white transition animate-in"
          >
            <Link href="/">
              <LayoutDashboardIcon className="h-4 w-4 mr-3" /> Teams
            </Link>
          </Button>

          {/* favourite teams */}
          <Button
            asChild
            variant={"success"}
            size="lg"
            className="font-medium justify-start px-2 w-full hover:bg-green-500 hover:text-white transition animate-in"
          >
            <Link href={{ pathname: "/", query: { favourite: true } }}>
              <HeartIcon className="h-4 w-4 mr-3" /> Favourite
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrgSidebar;
