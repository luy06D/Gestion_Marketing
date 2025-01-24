import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,Button,Input,
 Divider, Textarea, DatePicker
  } from "@nextui-org/react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import styled from 'styled-components';


const ModalProyecto = ({isOpen, onClose}) => {

  const [search , setSearch] = useState("");
  const [dataClient , setDataClient]  = useState({});

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = async () =>{
    try {
      const response = await fetch(`http://localhost:3000/api/v1/cliente?search=${search}`);
      const data = await response.json();
      setDataClient(data[0])
      
    } catch (error) {
      console.log(error)
      
    }
  }
  

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">REGISTRO DE PROYECTOS</ModalHeader>
          <ModalBody>
            <TextS>Datos del cliente</TextS>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Cliente" type="text" name='cliente' onChange={handleInputChange} />
             <Button color='secondary' onClick={handleSearch}><HiMiniMagnifyingGlass size={18}/></Button>
           </div>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Nombre completo" type="text" name='cliente' value={dataClient?.cliente} disabled />
             <Input label="Industria" type="text" name='industria' value={dataClient?.industria} disabled />
             <Input label="Contacto Principal" type="text" name='contacto' value={dataClient?.contacto_principal} disabled/>
      
           </div>
            <Divider/>
            <TextS>Datos del proyectos</TextS>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Nombre del Proyecto" type="text" name='nombreP' />
           </div>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Textarea className="max-w-xs" label="Descripción"  />
           </div>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <DatePicker className="max-w-[284px]" label="Fecha Inicio" />
            <DatePicker className="max-w-[284px]" label="Fecha Fin" />
           </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="shadow" onPress={onClose}>
              Cerrar
            </Button>
            <Button color="primary" variant='shadow' onPress={onClose}>
              Registrar
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

const TextS = styled.p`
  color: #535353;
  font-size: 14px;
`;


export default ModalProyecto