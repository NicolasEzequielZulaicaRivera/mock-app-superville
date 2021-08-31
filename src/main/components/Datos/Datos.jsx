import React, { useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import mainActions from 'main/main.actions';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Datos.scss';
import cotizacionesActions from '../../../cotizaciones/cotizaciones.actions';
import { getActualDate } from 'utils/utils';
import _ from 'lodash';


const Documents = ({ index, quantity, deleteFunc }) => (
  <div className="f-row">
    <select className="w30" name={`documents[${index}].type`}>
      <option value="DNI">DNI</option>
    </select>
    <input type="text" placeholder="Numero" name={`documents[${index}].number`} required/>
    {
      quantity > 1 
      && 
      <div className="controls deleteButton">
        <IconButton aria-label="delete" className="secondary-button"
          onClick={ deleteFunc }
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    }
  </div>
);

const Datos = (props) => {
  const [documentKeys, setdocumentKeys] = useState([0]);
  const [nextDocKey, setnextDocKey] = useState(1);

  const history = useHistory();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cotizacion = {
      quoteDate: getActualDate(),
      expiration: '20/12/2021',// FIXME
      product: 'Tecnologia Protegida' // FIXME
    };
    // @ts-ignore
    Array.from(formData.entries()).forEach(([key, value]) => {
      _.set( cotizacion, key, value )
    });
    props.addCotizacion(cotizacion);
    props.goto({ name:"Resultado", url:"/cotizar/resultados" });
    history.push("/cotizar/resultados");
  };

  const handleDocuments = () => {
    setdocumentKeys( [...documentKeys, nextDocKey] )
    setnextDocKey( nextDocKey +1  )
  };

  const deleteDocument = (key) => {
    setdocumentKeys( documentKeys.filter( k => k !== key ) )
  };


  return (
    <div className="Datos">
      <div className="title"><h3>Cotizar</h3><h5>Tecnologia Protegida</h5></div>
      <div className="form w-shadow">
        <form onSubmit={handleSubmit}>
          <div className="f-label"><label>Cliente (opcional)</label></div>
          <div className="f-row">
            <input type="text" placeholder="Nombre" name="name" />
            <input type="text" placeholder="Apellido"name="surname" />
          </div>
          <div className="f-cols">
            <div className="f-col">
                <div className="f-label"><label>Documento de identidad</label></div>
                  {
                    documentKeys.map((k, i) =>
                      <Documents key={k} index={i} quantity={documentKeys.length} deleteFunc={()=>deleteDocument(k)} />
                    )
                  }
                <p onClick={handleDocuments}>+ Agregar otro documento</p>
            </div>
            <div className="f-col">
              <div className="f-label"><label>Codigo de identificacion</label></div>
              <div className="f-row">
                <select className="w30" name="idType">
                  <option value="BRC">BRC</option>
                </select>
                <input type="text" placeholder="Numero" name="idNumber" required />
              </div>
            </div>
          </div>
          <div className="f-cols">
            <div className="f-col">
              <div className="f-label"><label>Correo electronico</label></div>
              <div className="f-row">
                <input type="email" name="email" required />
              </div>
              <div className="f-label"><label>Provincia</label></div>
              <div className="f-row">
                <select name="province">
                  <option value="BSAS">Buenos Aires</option>
                </select>
              </div>
            </div>
            <div className="f-col">
              <div className="f-label"><label>Telefono (opcional)</label></div>
              <div className="f-row">
                <input type="text" name="areaCode" placeholder="Cod. area" className="w30" />
                <input type="text" name="phone" placeholder="Numero" />
              </div>
              <div className="f-label"><label>Tipo de cotizacion</label></div>
              <div className="f-row">
                <select name="quotationType">
                  <option value="SA">Suma asegurada</option>
                </select>
                <input 
                  type="number" 
                  className="money-input"
                  name="sumToAssure"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>
          <div className="controls fx-end">
            <Button type="submit" className="primary-button">Cotizar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    goto: (e)=>{dispatch(mainActions.goto(e))},
    backto: (e)=>{dispatch(mainActions.backto(e))},
    addCotizacion: (cotizacion)=>{dispatch(cotizacionesActions.addCotizacion(cotizacion))},
    setCotizacionActual: (cotizacion)=>{dispatch(cotizacionesActions.setCotizacionActual(cotizacion))},
  }
};

export default connect(null, mapDispatchToProps)(Datos);