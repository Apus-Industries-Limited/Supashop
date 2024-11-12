// pages/account/index.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the AccountMenu component
const AccountMenu = dynamic(
  () => import("../components/Accounts/AccountMenu"),
  {
    ssr: false,
    loading: () => (
      <div className="max-w-md mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Profile = () => {
  return (
    <Suspense>
      <AccountMenu />
    </Suspense>
  );
};

export default Profile;