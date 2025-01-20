import {React, useState} from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,Button,Input,
  Select,
  SelectItem
} from "@nextui-org/react";7


const ModalUsuario = ({isOpen , onClose, fetchUsers}) => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    doc_identidad: '',
    email: '',
    user_name: '',
    password_usu: '',
    nivel_acceso: '',
    rol: '',
    img_perfil: null,
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
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al registrar el usuario.');
      }

      const result = await res.json();
      console.log('Usuario registrado:', result);
      fetchUsers();   
      onClose(); // Cerrar modal si el registro fue exitoso


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
            <Input label="Nombres" type="text" name='nombre' value={formData.nombre} onChange={handleChange} />
            <Input label="Apellidos" type="text" name='apellido' value={formData.apellido} onChange={handleChange} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="DNI" type="number" name='doc_identidad' value={formData.doc_identidad} onChange={handleChange}/>
            <Input label="Correo" type="email" name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Usuario" type="text" name='user_name' value={formData.user_name} onChange={handleChange}/>
            <Input label="Contraseña" type="password" name='password_usu' value={formData.password_usu} onChange={handleChange} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select className="max-w-xs" label="Nivel de acceso" name='nivel_acceso'
          onChange={(e) => setFormData({...formData, nivel_acceso: e.target.value})}>
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