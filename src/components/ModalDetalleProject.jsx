// ESTO ES UN SNIPPETS 
import React, { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,
    Button, Divider, Input, Textarea, User, Card, CardHeader, CardBody, CardFooter,
   Link, Image} from "@nextui-org/react";
import styled from 'styled-components';
import useProjectsDetails from '../hooks/useFetchProjectDetails';

const ModalDetalleP = ({isOpen , onClose, isIdProject}) => {

  const projectData = useProjectsDetails(isIdProject);
  

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg' scrollBehavior='inside'
    backdrop="opaque"
    classNames={{
      backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
    }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center mb-4">NOMBRE DEL PROYECTO</ModalHeader>
              <ModalBody>
              <TextS>Detalles del cliente</TextS>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">       
                <Input  label="Fecha Ini. : " labelPlacement='outside-left' value={projectData.fecha_inicio} disabled type="text"/>
                <Input label="Fecha Fin :" labelPlacement='outside-left' value={projectData.fecha_fin} disabled type="text"/>
              </div>
              <Input label="Cliente :" labelPlacement='outside-left' value={projectData.cliente} disabled type="text"/>
              <Textarea label="Descrip : " labelPlacement= 'outside-left' value={projectData.descripcion} disabled  type="text" />
              <Divider className='mt-3'/>
              <TextS>Equipo acargo</TextS>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">       
              <User
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                description="Product Designer"
                name="Jane Doe"
                />
                <User
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                description="Product Designer"
                name="Jane Doe"
                />
                <User
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                description="Product Designer"
                name="Jane Doe"
                />
              </div>
              <Divider className='mt-3'/>
              <TextS>Tareas Asignadas</TextS>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
                <Card className="max-w-[200px]">
                  <CardHeader className="flex gap-3">
                    <Image alt="heroui logo" height={40} radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">HeroUI</p>
                      <p className="text-small text-default-500">heroui.com</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className='text-small'>Make beautiful websites regardless of your design experience.</p>
                  </CardBody>    
                </Card>
                 <Card className="max-w-[200px]">
                  <CardHeader className="flex gap-3">
                    <Image alt="heroui logo" height={40} radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">HeroUI</p>
                      <p className="text-small text-default-500">heroui.com</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className='text-small'>Make beautiful websites regardless of your design experience.</p>
                  </CardBody>    
                </Card>

              </div>


            
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="shadow" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="success" variant='shadow'>
                  Iniciar
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



export default ModalDetalleP