import React from 'react'
import styled from 'styled-components';
import { Modal, ModalContent, ModalHeader, ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem
} from "@nextui-org/react";

const ModalUsuario = ({isOpen , onClose}) => {

  if(!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">REGISTRO DE USUARIOS</ModalHeader>
          <ModalBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Nombres" type="text" />
            <Input label="Apellidos" type="text" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="DNI" type="number" />
            <Input label="Correo" type="email" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Usuario" type="text" />
            <Input label="Contraseña" type="password" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select className="max-w-xs" label="Nivel de acceso">
            {acceso.map((access) => (
              <SelectItem key={access.key}>{access.label}</SelectItem>
            ))}
          </Select>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select className="max-w-xs" label="Rol">
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
            <Button color="primary" onPress={onClose}>
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