import React from 'react'

const UsersPage = async () => {
  interface User {
    id: number,
    name: string
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 60 } }
  );
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage
