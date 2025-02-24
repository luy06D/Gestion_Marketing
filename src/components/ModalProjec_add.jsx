import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,Button,Input,
 Divider, Textarea, DatePicker
  } from "@nextui-org/react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import styled from 'styled-components';
import {format} from 'date-fns'
import { showSuccess, showWarning } from '../utils/toastUtils';


const ModalProyecto = ({isOpen, onClose, fetchProjects, editMode, isIdProject}) => {
    // EditMode prop para editar en el mismo modal 

  const [search , setSearch] = useState("");
  const [dataClient , setDataClient]  = useState({});

  // BUSCAR CLIENTE
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = async () =>{
    try {
      const response = await fetch(`http://localhost:3000/api/v1/cliente?search=${search}`);
      const data = await response.json();
      console.log(data)
      setDataClient(data[0])
      
    } catch (error) {
      console.log(error)
      
    }
  }

  //FIN BUSCAR_CLIENTE

  
  //REGISTRO PROYECTO
  const [formData, setFormData] = useState({
    idcliente: '',
    nombreP: '',
    descripcion: '',
    fecha_inicio: null,
    fecha_fin: null,
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,  
      idcliente: dataClient?.idcliente || ''
    })
  };

  //MANEJO DE DATOS DATE 
  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };
  
  

  const handleSumit = async () => {

    const { idcliente, nombreP, descripcion, fecha_inicio, fecha_fin } = formData;
  
    if (!idcliente || !nombreP || !descripcion || !fecha_inicio || !fecha_fin) {
      showWarning("PROYECTOS ")
      return;
    }
  
    const formattedData = {
      idcliente,
      nombreP,
      descripcion,
      fecha_inicio: format(fecha_inicio, "yyyy-MM-dd"),
      fecha_fin: format(fecha_fin, "yyyy-MM-dd"),
    };
  


    try {
      const res = await fetch('http://localhost:3000/api/v1/proyecto',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al registrar el proyecto.');
      }

      const result = await res.json();
      //Renderiza la lista de proyectos
      fetchProjects();
      //Cierra el modal
      onClose();
      showSuccess("PROYECTOS |");
      

      
    } catch (error) {
      console.log('Error de registro: ', error.message);
      
    }
  }


  const handleEditProject = () =>{
    console.log(isIdProject)
  }



  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'
    backdrop="opaque"
    classNames={{
      backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
    }}>
    <ModalContent>

      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
          {editMode ? "EDITAR PROYECTO": "REGISTRAR PROYECTO "}</ModalHeader>
          <ModalBody>
            <TextS>Datos del cliente</TextS>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Ingrese el nombre del cliente" type="text" name='cliente' onChange={handleInputChange} />
             <Button color='secondary' onPress={handleSearch}><HiMiniMagnifyingGlass size={18}/></Button>
           </div>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Nombre completo" type="text" name='cliente' value={dataClient?.cliente} disabled />
             <Input label="Industria" type="text" name='industria' value={dataClient?.industria} disabled />
             <Input label="Contacto Principal" type="text" name='contacto' value={dataClient?.contacto_principal} disabled/>
             <input type='hidden'name='idcliente' value={dataClient?.idcliente} />
           </div>
            <Divider/>
            <TextS>Datos del proyectos</TextS>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Nombre del Proyecto" type="text" name='nombreP' value={formData.nombreP} onChange={handleChange} />
           </div>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Textarea className="max-w-xs" label="Descripción" name='descripcion' value={formData.descripcion} onChange={handleChange}  />
           </div>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <DatePicker 
            className="max-w-[284px]" 
            label="Fecha Inicio" 
            name='fecha_inicio' 
            dateFormat='dd/MM/yyyy'
            value={formData.fecha_inicio} 
            onChange={(date) => handleDateChange('fecha_inicio', date)} />

            <DatePicker 
            className="max-w-[284px]" 
            label="Fecha Fin" 
            name='fecha_fin' 
            dateFormat='dd/MM/yyyy'
            value={formData.fecha_fin}
            onChange={(date) => handleDateChange('fecha_fin', date)} />
           </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="shadow" onPress={onClose}>
              Cerrar
            </Button>
            <Button color={editMode ? "warning": "primary"} 
                    variant='shadow' 
                    onPress={editMode ? handleEditProject: handleSumit } >
              {editMode ? "Guardar cambios" : "Registrar"}
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