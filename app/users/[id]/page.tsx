import axios from "axios";

interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
}

interface Params {
  params: { id: string };
}

export default async function UserPage({ params }: Params) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user: User = response.data;

  return (
    <section className="user">
      <div className="user__card">
        <h1>{user.id} — {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </section>
  );
}