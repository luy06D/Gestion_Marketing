import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from "@nextui-org/react";
import Modal from '../components/ModalUser_add'
import {Table,TableHeader,TableColumn, TableBody, TableRow,
  TableCell,Chip,Tooltip} from "@nextui-org/react";
import useFetchUsers from '../hooks/useFetchUsers';
import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon';
import EyeIcon from '../icons/EyeIcon';

const Usuarios = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const {users, fetchUsers} = useFetchUsers();


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);



  return (
    <Container>
      <div className='title-usu'>
        <h1>USUARIOS</h1>
      </div>
      <Button onClick={openModal} color='primary' variant='shadow' className='mb-2'>Nuevo usuario</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} fetchUsers={fetchUsers} />
      <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody>
        {users.map((item, index) => (
          
          <TableRow key={index}>
            <TableCell>{item.idusuario}</TableCell>
            <TableCell>{item.usuario}</TableCell>
            <TableCell>{item.user_name}</TableCell>
            <TableCell>{item.nivel_acceso}</TableCell>
            <TableCell>
              <Chip color='success' variant='shadow'>{item.estado?.data[0] === 1 ? "Activo" : "Inactivo"}</Chip>
            </TableCell>
            <TableCell>{item.rol}</TableCell>
            <TableCell className='relative flex items-center gap-2'>
            <Tooltip content="Detalles">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar" color='warning'>
              <span className="text-lg text-default-400 text-warning cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip content="Deshabilitar" color='danger'>
              <span className="text-lg text-default-400  cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>  
            </TableCell>
          </TableRow>

        ))}
      </TableBody>
    </Table>

    </Container>
    
  )
}



const columns = [
  {
    key: "idusuario",
    label: "ITEM",
  },
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
    key: "estado",
    label: "ESTADO",
  },
  {
    key: "rol",
    label: "ROL"
  },
  {
    key: "accion",
    label: "ACCIÓN"
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