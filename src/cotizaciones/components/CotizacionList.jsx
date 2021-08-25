import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import './CotizacionList.scss';
import mainActions from 'main/main.actions';
import cotizacionesActions from 'cotizaciones/cotizaciones.actions';

const headerList = [ 'Nro.', 'Producto', 'Fecha', 'Documento', 'Vigencia', 'Acciones'];

const CotizacionList = (props) => {
  // @ts-ignore
  const cotizaciones = useSelector((state) => state.cotizaciones.cotizaciones);
  console.log( cotizaciones );

  const handleClick = (i) => {
    props.setCotizacionActual(i);
    props.goto( { name:"Resultados", url:"/cotizar/resultados" } )
  };

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
                  <td>{cotizacion.tipoDocumento} {cotizacion.numeroDocumento}</td>
                  <td>{cotizacion.expiration}</td>
                  <td>
                    <Link 
                      to="/cotizar/resultados"
                      className="controls link"
                      onClick={ ()=>handleClick(i) }
                    >
                      <Button className="primary-button">Emitir</Button>
                    </Link>
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
    setCotizacionActual: (payload)=>{dispatch(cotizacionesActions.setCotizacionActual(payload))}
  }
};

export default connect(null, mapDispatchToProps)(CotizacionList);