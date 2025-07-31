import React from 'react'

const Users = async ({params}: {params:{user :string}}) => {
  const  {user} = await params;
  console.log(user);
  return (
    <div>Hi {user}</div>
  )
}

export default Users;



