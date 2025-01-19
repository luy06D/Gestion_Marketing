import { useEffect, useState } from "react";

const useFetchUsers = () => {
    const [users, setUsers] = useState([]); // Almacenamos los usuarios
  
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/v1/usuario');
        const data = await res.json();
        const arrayData = Array.isArray(data) ? data : [data];
        setUsers(arrayData);
      } catch (err) {
        console.error('Error fetching users: ', err);
      }
    };
  
    useEffect(() => {
      fetchUsers();

    }, []);
  
    return { users, fetchUsers };
  };
  
  export default useFetchUsers;