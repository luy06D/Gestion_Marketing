import React from 'react'
import styled from 'styled-components'
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Table,TableHeader,TableColumn, TableBody, TableRow,
  TableCell,Chip,Tooltip} from "@nextui-org/react";

const Proyectos = () => {
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
            <Table aria-label="Example static collection table">
              <TableHeader columns={columns}>
                      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
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
    key: "idusuario",
    label: "ITEM",
  },
  {
    key: "usuario",
    label: "NOMBRE",
  },
  {
    key: "user_name",
    label: "USUARIO",
  },
];

const Container = styled.div`
  padding: 30px;

  .title-pro{
    margin-top: 20px;
    margin-bottom: 30px;
   // font-weight: bold; 
  }
`;

export default Proyectos