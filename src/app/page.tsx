"use client";

import { useUsers, useCreateUser } from "@/queries/userQueries";

export default function HomePage() {
  const { data: users, isLoading } = useUsers();
  console.log(users);
  const createUserMutation = useCreateUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => createUserMutation.mutate({ name: "John Doe" })}>
        Add User
      </button>
    </div>
  );
}
