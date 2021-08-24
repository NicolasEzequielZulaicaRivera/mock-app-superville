import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CotizacionList.scss';

const CotizacionList = () => {
const cotizaciones = useSelector((state) => state.cotizaciones);

  return (
    <div className="c-container">
      <div className="header-cotizaciones">
        <div className="title"><h3>Cotizaciones</h3></div>
        <Link to="/cotizar/datos" className="controls fx-end link">
          <Button className="secondary-button">Nueva Cotizacion</Button>
        </Link>
      </div>
      <div className="body-cotizaciones">
        <table>
          <thead>
            <tr>
              <div className="f-label"><label>Buscar por</label></div>
              <select className="w30" name="">
                <option value="0">Seleccionar opcion</option>
              </select>
            </tr>
            <tr>
              <th>Nro.</th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Documento</th>
              <th>Vigencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              cotizaciones.map(cotizacion => (
                <tr>
                  <td>{cotizacion.id}</td>
                  <td>{cotizacion.product}</td>
                  <td>{cotizacion.date}</td>
                  <td>{cotizacion.document}</td>
                  <td>{cotizacion.expiration}</td>
                  <td>
                    {/* Si la emision esta realizada mostrar boton ver poliza, sino boton emitir. */}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default CotizacionList;