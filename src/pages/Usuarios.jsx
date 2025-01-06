import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from "@nextui-org/react";
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
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

    </Container>
    
  )
}

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

const Container = styled.div`
  padding: 30px;

  .title-usu{
    margin-top: 20px;
    margin-bottom: 30px;
  }

`;

export default Usuarios