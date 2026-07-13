export default async function UsersRoute() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Users</h1>
      <p className="text-gray-600">This is the Users page.</p>
      <ul className="list-disc pl-6">
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
