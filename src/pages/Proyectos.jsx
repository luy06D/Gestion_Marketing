import React, { useState } from 'react'
import styled from 'styled-components'
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Table,TableHeader,TableColumn, TableBody, TableRow,
  TableCell, Button} from "@nextui-org/react";
import ModalP from '../components/ModalProjec_add';
import useFetchProject from '../hooks/useFetchProject';


const Proyectos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const {project, fetchProjects} = useFetchProject();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);



  return (
    <Container>
      <div className='title-pro'>
        <h1>GESTION DE PROYECTO</h1>
      </div>

      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="secondary" variant="light" >
        <Tab key="photos" title="Lista de proyectos">
          <Card>
            <CardBody>
            <div className='btn-new mb-5 mt-2'>
               <Button onClick={openModal} color='primary' variant='shadow'>Nuevo proyecto</Button>
               <ModalP isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <Table removeWrapper aria-label="Example static collection table">
              <TableHeader columns={columns}>
                      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody>
                {project.map((item, index) => (

                  <TableRow key={index}>
                    <TableCell>{item.idproyecto}</TableCell>
                    <TableCell>{item.cliente}</TableCell>
                    <TableCell>{item.nombreP}</TableCell>
                    <TableCell>{item.fecha_inicio}</TableCell>
                    <TableCell>{item.fecha_fin}</TableCell>
                    <TableCell>{item.estado_project}</TableCell>
                  </TableRow>
                ))}    
              </TableBody>
            </Table>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="POR VER">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
      
    </Container>
  )
}

const columns = [
  {
    key: "idproyecto",
    label: "ITEM",
  },
  {
    key: "cliente",
    label: "CLIENTE",
  },
  {
    key: "nombreP",
    label: "NOMBRE PROYECTO",
  },
  {
    key: "fecha_inicio",
    label: "FECHA INICIO",
  },
  {
    key: "fecha_fin",
    label: "FECHA FIN",
  },
  {
    key: "estado_project",
    label: "ESTADO  ",
  },
];

const Container = styled.div`
  padding: 30px;

  .title-pro{
    margin-top: 20px;
    margin-bottom: 30px;
   // font-weight: bold; 
  };

  .btn-new{
    display: 'flex';
    justify-content: 'flex-start'
  }
`;

export default Proyectos