"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

import Loading from "@/components/auth/loading";

// import {useAuth,currentUser} from '@clerk/nextjs'

//convex props children
interface ConvexClientProviderProps {
  children: React.ReactNode;
}

//convex url
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;

//creating convex client provider cor deployment
const convex = new ConvexReactClient(CONVEX_URL as string);

//Configure ConvexProviderWithClerk

//exporting convex provider with meta-data to authenticate and register user inside convex db
export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}

        {/* if user authenticated, then show Loading */}
        <Authenticated>
          <Loading />
        </Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
