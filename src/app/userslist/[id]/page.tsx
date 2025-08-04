import React from "react";

const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
];
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: userId } = await params;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <div className="text-red-500">User not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{user?.name}</h1>
      <p className="text-gray-500">{user?.id}</p>
    </div>
  );
};

export default UserDetails;
