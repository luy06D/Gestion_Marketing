import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,Button,Input,
 Divider, Textarea, DatePicker
  } from "@nextui-org/react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


const ModalProyecto = ({isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">REGISTRO DE PROYECTOS</ModalHeader>
          <ModalBody>
           <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
             <Input label="Cliente" type="text" name='cliente' />
             <Button color='secondary'><HiMiniMagnifyingGlass/></Button>
           </div>
            <Divider/>
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
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default ModalProyecto