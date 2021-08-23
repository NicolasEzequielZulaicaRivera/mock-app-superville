import React from 'react';
import { Button } from '@material-ui/core';
import Plan from './components/Plan';
import './Resultado.scss';
import { Link } from 'react-router-dom';
import mainActions from 'main/main.actions';
import { connect } from 'react-redux';

const featuresPlan = [
  <h4>Suma Asegurada</h4>,
  <h4>Cobertura por año de vigencia</h4>,
  <h4>Antiguedad del equipo</h4>,
  <h4>Ambito de cobertura</h4>,
  <h6>Asistencias:</h6>,
  <h4>Emergencias medicas</h4>,
  <h4>Cerrajeria</h4>,
  <h4>Taxi o remis</h4>
];

const Resultado = (props) => {
  return (
    <div className="c-container">
      <div className="title"><h3>Cotizacion creada</h3></div>
      <div className="main-container">
        <div className="w-container main-card">
          <div className="card-header">
            <h3>Nro. 123456</h3>
            <h5>Vigencia 24/5/2021</h5>
            <div className="controls no-mar">
              <Button className="secondary-button">Descargar PDF</Button>
            </div>
          </div>
          {
            featuresPlan.map(feature => (
              <div className="c-row">{feature}</div>
            ))
          }
        </div>
        <Plan />
      </div>
      <Link to="/cotizar/datos" className="controls fx-end link">
        <Button className="secondary-button"
        onClick={ ()=>{ props.backto(-1) } }
        >Volver a Cotizar</Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps= (dispatch)=>{
    
    return{
      goto: (e)=>{dispatch(mainActions.goto(e))},
      backto: (e)=>{dispatch(mainActions.backto(e))},
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Resultado);