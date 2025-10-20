'use client'
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from 'next/navigation'

export default function UserPage() {
  const [user, setUser] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(response)
        setUser(response.data)
      } catch (Error) {
        console.error('Error')
      }
    }
    getUser()
  }, [id])
  return (
    <>
      <section className="user">
        {!user ? <h1>Загрузка...</h1> :
          <div className="user__card">
            <h1>{id} - {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        }
      </section>
    </>
  );
};