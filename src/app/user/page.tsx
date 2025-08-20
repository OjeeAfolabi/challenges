import React from "react";
const User = async() => {
 await new Promise (resolve => setTimeout(resolve, 4000))

  return <div>User</div>;
};

export default User;
