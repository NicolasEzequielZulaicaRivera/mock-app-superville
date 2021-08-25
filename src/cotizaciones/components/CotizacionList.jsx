import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import './CotizacionList.scss';
import mainActions from 'main/main.actions';

const headerList = [ 'Nro.', 'Producto', 'Fecha', 'Documento', 'Vigencia', 'Acciones'];

const CotizacionList = (props) => {
  const cotizaciones = useSelector((state) => state.cotizaciones);

  return (
    <div className="c-container">
      <div className="header-cotizaciones">
        <div className="title"><h3>Cotizaciones</h3></div>
        <Link 
          to="/cotizar" 
          className="controls fx-end link" 
          onClick={ ()=>{ props.goto( { name:"Cotizar", url:"/cotizar" } ) } }>
          <Button className="secondary-button">Nueva Cotizacion</Button>
        </Link>
      </div>
      <div className="body-cotizaciones">
        <div className="f-row controles">
          <div className="f-label"><label>Buscar por</label></div>
          <select className="w30" name="">
            <option value="0">Seleccionar opcion</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              { headerList.map((header, i) => (<th key={i}>{header}</th>)) }
            </tr>
          </thead>
          <tbody>
            {
              cotizaciones.map((cotizacion, i) => (
                <tr key={i}>
                  <td>{cotizacion.id}</td>
                  <td>{cotizacion.product}</td>
                  <td>{cotizacion.date}</td>
                  <td>{cotizacion.tipoDocumento} {cotizacion.document}</td>
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

const mapDispatchToProps= (dispatch)=>{
  return{
    goto: (e)=>{dispatch(mainActions.goto(e))},
    backto: (e)=>{dispatch(mainActions.backto(e))},
  }
};

export default connect(null, mapDispatchToProps)(CotizacionList);