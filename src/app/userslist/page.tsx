import React from "react";
const users = [
  {
    id: '1',
    name: "John Doe",
  },
  {
    id: '2',
    name: "Jane Smith",
  },
]

const UserDetails = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Users List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-800 p-4 rounded">
            <a
              className="text-blue-400 hover:text-blue-600"
              href={`/userslist/${user.id}`}
            >
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
