// ESTO ES UN SNIPPETS 
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,
    Button, Divider, Input} from "@nextui-org/react";

const ModalDetalleP = ({isOpen , onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center mb-4">NOMBRE DEL PROYECTO</ModalHeader>
              <ModalBody>
                <div className="flex h-5 items-center justify-center gap-x-40 text-small">
                    <div className="flex flex-col items-center">
                        <div className='mb-4 mt-3'>DETALLES DEL PROYECTO</div>
                        <Input label="Fecha Inicio" type="text" name='cliente' />
                    </div>
                    <Divider orientation="vertical" />
                    <div className="flex flex-col items-center">
                        <div className='mb-4 mt-3'>TAREAS ASIGNADAS</div>
                        <p className="text-gray-600 text-xs">Texto debajo de tareas</p>
                    </div>
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

export default ModalDetalleP