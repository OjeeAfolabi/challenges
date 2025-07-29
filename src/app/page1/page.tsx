"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PageOne = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(`/${page}`);
  };
  return (
    <div>
      <h1>Page One</h1>
      <p>This is the content of Page One.</p>
      <button onClick={() => navigate("page2")}>Go To Page Two</button>
    </div>
  );
};

export default PageOne;
