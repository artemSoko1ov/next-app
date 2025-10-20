import axios from "axios";
import User from "@/components/User";

export default async function Users() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const users = response.data
  return (
    <>
      <section className="users">
        <div className="users__list">
          {users.map(({id, name, phone}) => (
              <User
                id={id}
                name={name}
                phone={phone}
                key={id}
              />
            ))}
        </div>
      </section>
    </>
  );
};