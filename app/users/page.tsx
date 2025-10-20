'use client'
import axios from "axios";
import {useEffect, useState} from "react";
import Link from "next/link";
import User from "@/components/User";

export default function Users() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
      setLoading(false)
    } catch (Error) {
      setUsers([])
      console.error('Error')
    }
  }
  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>
      <section className="users">
        <div className="users__list">
          {loading ? <h1>Загрузка...</h1> :
            users.map(({id, name, phone}) => (
              <User id={id} name={name} phone={phone} key={id} />
            ))
          }
        </div>
      </section>
    </>
  );
};