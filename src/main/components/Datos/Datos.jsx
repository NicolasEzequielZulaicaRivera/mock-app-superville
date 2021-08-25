import React from 'react';
import { Button } from '@material-ui/core';
import mainActions from 'main/main.actions';
import cotizacionActions from '../../../cotizaciones/cotizaciones.actions';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Datos.scss';

const Datos = (props) => {
  const { 
    sumaAsegurar,
    ...resto
  } = props.datosEmision

  const inputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    props.editarEmision({
        [name]:value,
    })
  };

  const getActualDate = () => {
    const date = new Date();
  
    let day = date.getDate();
    if (day < 10) day = `0${day}`;
  
    let month = date.getMonth() + 1;
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
      expiration: '20/12/2021',
      product: 'Tecnologia Protegida'
    };
    Array.from(formData.entries()).forEach(([key, value]) => {
      cotizacion[key] = value; 
    });
    props.addCotizacion(cotizacion);
    props.clearSumaAsegurar();
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
            <input type="text" placeholder="Nombre" name="nombre" />
            <input type="text" placeholder="Apellido"name="apellido" />
          </div>
          <div className="f-cols">
            <div className="f-col">
                <div className="f-label"><label>Documento de identidad</label></div>
                <div className="f-row">
                  <select className="w30" name="tipoDocumento">
                    <option value="DNI">DNI</option>
                  </select>
                  <input type="text" placeholder="Numero" name="document" required/>
                </div>
                <p>+ Agregar otro documento</p>
            </div>
            <div className="f-col">
              <div className="f-label"><label>Codigo de identificacion</label></div>
              <div className="f-row">
                <select className="w30" name="tipoCodigo">
                  <option value="BRC">BRC</option>
                </select>
                <input type="text" placeholder="Numero" name="codigo" required />
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
                <input type="text" name="codigoArea" placeholder="Cod. area" className="w30" />
                <input type="text" name="telefono" placeholder="Numero" />
              </div>
              <div className="f-label"><label>Tipo de cotizacion</label></div>
              <div className="f-row">
                <select name="tipoCotizacion">
                  <option value="SA">Suma asegurada</option>
                </select>
                <input 
                  type="number" 
                  className="money-input"
                  value={sumaAsegurar}
                  name="sumaAsegurar"
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

const mapStateToProps = (state) => {
  return {
    datosEmision: state.main.datosEmision,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goto: (e)=>{dispatch(mainActions.goto(e))},
    backto: (e)=>{dispatch(mainActions.backto(e))},
    editarEmision: (e)=>{dispatch(mainActions.editarEmision(e))},
    addCotizacion: (cotizacion)=>{dispatch(cotizacionActions.addCotizacion(cotizacion))},
    clearSumaAsegurar: ()=>{dispatch(mainActions.clearSumaAsegurar())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Datos);