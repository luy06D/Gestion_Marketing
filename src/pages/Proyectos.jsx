import React, { useState } from 'react'
import styled from 'styled-components'
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Table,TableHeader,TableColumn, TableBody, TableRow,
  TableCell, Button, Tooltip, Chip} from "@nextui-org/react";
import ModalP from '../components/ModalProjec_add';
import ModalDetalleP from '../components/ModalDetalleProject'
import useFetchProject from '../hooks/useFetchProject';
import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon';
import EyeIcon from '../icons/EyeIcon';
import { BsFileEarmarkPdf } from "react-icons/bs";
import { RiFileExcel2Line } from "react-icons/ri";
import { showError, showWarning } from '../utils/toastUtils';


const Proyectos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalDetOpen , setModalDetOpen] = useState(false);
  const [isIdProject, setIdProject] = useState(null)
  const {project, fetchProjects} = useFetchProject();

  // CAMBIO DE ESTADOS PARA MODAL REGISTRO
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // CAMBIO DE ESTADOS PARA MODAL DETALLE DE PROYECTOS
  const handleOpenModal = (idproyecto) =>{
    setModalDetOpen(true);
    setIdProject(idproyecto)
  }
  const closeModalP = () => setModalDetOpen(false);

  const handlePrueba = () =>{
    showError("PROYECTOS")
  }

  const handlePrueba2 = () =>{
    showWarning("PROYECTOS")
  }



  return (

    
    <Container>
      
       <ModalP isOpen={isModalOpen} onClose={closeModal} fetchProjects={fetchProjects} />
       <ModalDetalleP isOpen={isModalDetOpen} onClose={closeModalP} isIdProject={isIdProject}/>

      <div className='title-pro'>
        <h1>GESTION DE PROYECTO</h1>
      </div>

      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="secondary" variant="light" >
        <Tab key="photos" title="PROYECTOS">
          <Card>
            <CardBody>
            <div className='btn-new mb-5 mt-2'>
               <Button onPress={openModal} color='primary' variant='shadow'>Nuevo proyecto</Button>
               <Button onPress={handlePrueba} color='danger' variant='shadow'><BsFileEarmarkPdf/></Button>
               <Button onPress={handlePrueba2} color='success' variant='shadow'><RiFileExcel2Line/></Button>
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
                    <TableCell>
                      <Chip color='danger' variant='shadow'>{item.estado_project}</Chip>
                    </TableCell>
                    <TableCell className='relative flex items-center gap-2'>
                      <Tooltip content="Detalles" color='success'>
                        <span className="text-lg text-default-400 text-success cursor-pointer active:opacity-50">
                          <EyeIcon onClick={() => handleOpenModal(item.idproyecto)}/>
                        </span>
                      </Tooltip>
                      <Tooltip content="Editar" color='warning'>
                        <span className="text-lg text-default-400 text-warning cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip content="Deshabilitar" color='danger'>
                        <span className="text-lg text-default-400 text-red-500 cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip> 
                    </TableCell>
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
  {
    key: "acciones",
    label: "ACCIONES",
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
    display: flex;
    justify-content: flex-start;
    gap: 5px;
  }
`;

export default Proyectos