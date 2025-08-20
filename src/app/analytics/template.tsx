"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

const AnalyticsLayout = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        className="border border-gray-300 p-2 rounded mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Link href="/analytics/revenue" className="bg-teal-600 mr-4">
        Revenue
      </Link>
      <Link href="/analytics/stats" className="bg-teal-600">
        Stats
      </Link>
      {children}
    </div>
  );
};

export default AnalyticsLayout;
