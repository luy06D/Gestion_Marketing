import {React, useState} from 'react'
import styled from 'styled-components';
import { Modal, ModalContent, ModalHeader, ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem
} from "@nextui-org/react";

const ModalUsuario = ({isOpen , onClose}) => {

  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    correo: '',
    usuario: '',
    password: '',
    nivelAcceso: '',
    rol: '',
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () =>{
    try {
      const res = await fetch('http://localhost:3000/api/v1/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el usuario.');
      }

      const result = await response.json();
      console.log('Usuario registrado:', result);
      onClose(); // Cerrar modal si el registro fue exitoso

      onClose();

    } catch (error) {
      console.error('Error de registro: ', error.message);
      
    }
  }


  if(!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">REGISTRO DE USUARIOS</ModalHeader>
          <ModalBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Nombres" type="text" name='nombres' value={formData.nombres} onChange={handleChange} />
            <Input label="Apellidos" type="text" name='apellidos' value={formData.apellidos} onChange={handleChange} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="DNI" type="number" name='dni' value={formData.dni} onChange={handleChange}/>
            <Input label="Correo" type="email" name='correo' value={formData.correo} onChange={handleChange} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Usuario" type="text" name='usuario' value={formData.usuario} onChange={handleChange}/>
            <Input label="Contraseña" type="password" name='password' value={formData.password} onChange={handleChange} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select className="max-w-xs" label="Nivel de acceso" name='nivelAcceso'
          onChange={(e) => setFormData({...formData, nivelAcceso: e.target.value})}>
            {acceso.map((access) => (
              <SelectItem key={access.key}>{access.label}</SelectItem>
            ))}
          </Select>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select className="max-w-xs" label="Rol" name='rol'
          onChange={(e) => setFormData({...formData, rol: e.target.value})}>
            {roles.map((rol) => (
              <SelectItem key={rol.key}>{rol.label}</SelectItem>
            ))}
          </Select>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              CERRAR
            </Button>
            <Button color="primary" onPress={handleSubmit}>
              REGISTRAR
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
    </Modal>
  )
}

export const acceso = [
  {key: "administrador", label: "Administrador"},
  {key: "invitado", label: "Invitado"},
  
];


export const roles = [
  {key: "gestor_proyectos", label: "Gestor de proyectos"},
  {key: "editor_conten", label: "Editor de contenido"},
  {key: "Diseñador", label: "Diseñador"},
  {key: "Analista", label: "Analista"},
  {key: "Supervisor", label: "Supervisor"},
  {key: "Financiero", label: "Financiero"},
  
];

export default ModalUsuario