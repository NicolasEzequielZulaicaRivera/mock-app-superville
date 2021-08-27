import React from 'react';
import { Button } from '@material-ui/core';
import mainActions from 'main/main.actions';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Datos.scss';
import cotizacionesActions from '../../../cotizaciones/cotizaciones.actions';

const Datos = (props) => {

  const inputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  };

  const getActualDate = () => {
    const date = new Date();
  
    let day = date.getDate();
    // @ts-ignore
    if (day < 10) day = `0${day}`;
  
    let month = date.getMonth() + 1;
    // @ts-ignore
    if (month < 10) month = `0${month}`;
  
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
  
  const history = useHistory();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cotizacion = {
      date: getActualDate(),
      expiration: '20/12/2021',// FIXME
      product: 'Tecnologia Protegida' // FIXME
    };
    // @ts-ignore
    Array.from(formData.entries()).forEach(([key, value]) => {
      cotizacion[key] = value; 
    });
    props.addCotizacion(cotizacion);
    props.goto({ name:"Resultado", url:"/cotizar/resultados" });
    history.push("/cotizar/resultados");
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
                <div className="f-row">
                  <select className="w30" name="documentType">
                    <option value="DNI">DNI</option>
                  </select>
                  <input type="text" placeholder="Numero" name="documentNumber" required/>
                </div>
                <p>+ Agregar otro documento</p>
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
                <select name="tipoCotizacion">
                  <option value="SA">Suma asegurada</option>
                </select>
                <input 
                  type="number" 
                  className="money-input"
                  name="sumToAssure"
                  onChange={inputChange}
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