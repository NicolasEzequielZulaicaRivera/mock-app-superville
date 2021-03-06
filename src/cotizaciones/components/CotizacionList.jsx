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
  const {cotizaciones} = useSelector( ({cotizaciones}) => cotizaciones);

  const handleClick = ( cotizacion ) => {
    props.setCotizacionActual( cotizacion  );
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
        <div className="f-row controles search-input-wrapper">
          <div className="f-label no-mar"><label>Buscar por</label></div>
          <select className="search-input" name="">
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
                  <td>{cotizacion.quoteDate}</td>
                  <td>{cotizacion.documents[0].type} {cotizacion.documents[0].number}</td>
                  <td>{cotizacion.expiration}</td>
                  <td>
                    {
                      cotizacion.issueDate
                        ?
                        <Link 
                          to="/cotizar/resultados"
                          className="controls no-mar link fx-start"
                          onClick={ ()=>handleClick(cotizacion) }
                        >
                          <Button className="secondary-button">Ver Poliza</Button>
                        </Link>
                        :
                        <Link 
                        to="/cotizar/resultados"
                        className="controls no-mar link fx-start"
                        onClick={ ()=>handleClick(cotizacion) }
                        >
                          <Button className="primary-button">Emitir</Button>
                        </Link>
                    }
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
    setCotizacionActual: (cotizacion)=>{dispatch(cotizacionesActions.setCotizacionActual(cotizacion))}
  }
};

export default connect(null, mapDispatchToProps)(CotizacionList);