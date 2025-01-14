import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Button, user} from "@nextui-org/react";
import Modal from '../components/ModalUsuario'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const Usuarios = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]); // Almacenamos los usuarios

  useEffect(() =>{
    fetch('http://localhost:3000/api/v1/usuario')
    .then(response => response.json())
    .then(data => {
      const arrayData = Array.isArray(data) ? data : [data];
      setUsers(arrayData);
    })
    .catch(err => console.error('Error fetching data:', err))
  }, []);


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Container>
      <div className='title-usu'>
        <h1>USUARIOS</h1>
      </div>
      <Button onClick={openModal} color='primary' variant='shadow' className='mb-2'>Nuevo usuario</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}/>
      <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody>
        {users.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.usuario}</TableCell>
            <TableCell>{item.user_name}</TableCell>
            <TableCell>{item.nivel_acceso}</TableCell>
            <TableCell>{item.rol}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    </Container>
    
  )
}



const columns = [
  {
    key: "usuario",
    label: "NOMBRE",
  },
  {
    key: "user_name",
    label: "USUARIO",
  },
  {
    key: "nivel_acceso",
    label: "NIVEL ACCESO",
  },
  {
    key: "rol",
    label: "ROL"
  }
];

const Container = styled.div`
  padding: 30px;

  .title-usu{
    margin-top: 20px;
    margin-bottom: 30px;
  }

`;

export default Usuarios