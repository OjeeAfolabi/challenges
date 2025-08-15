import React from "react";

const Project = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  return (
    <div>
    <ul className="ml-8">
      {all.map((p) => (
        <li  key={p}>{p}</li>
      ))}
    </ul>
    </div>
  );
};

export default Project;
