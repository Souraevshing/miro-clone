"use client";

import { UserButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <>
      <div className="flex items-center gap-x-4 p-5 bg-green-400">
        <div className="hidden lg:flex lg:flex-1 bg-yellow-400">Search</div>
        <UserButton afterSignOutUrl="/" defaultOpen={isSignedIn} />
      </div>
    </>
  );
};

export default Navbar;
