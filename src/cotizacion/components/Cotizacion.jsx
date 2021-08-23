import React from 'react';
import { Button, Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Cotizacion.scss';

const Cotizacion = () => {
const cotizacion = useSelector((state) => state.cotizacion)

  return (
    <div className="cotizaciones">
      <div className="header-cotizaciones">
        <div className="title"><h3>Cotizaciones</h3></div>
        <Link to="/cotizar/datos" className="controls fx-end link">
          <Button className="secondary-button">Nueva Cotizacion</Button>
        </Link>
      </div>
      <div className="body-cotizaciones">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="f-label"><label>Buscar por </label></div>
                <select className="w30">
                  <option>Seleccionar opcion</option>
                </select>
                <input type="text" />
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell>Nro.</TableCell>
              <TableCell align="right">Producto</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Documento</TableCell>
              <TableCell align="right">Vigencia</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </div>
    </div>
  )
};

export default Cotizacion;