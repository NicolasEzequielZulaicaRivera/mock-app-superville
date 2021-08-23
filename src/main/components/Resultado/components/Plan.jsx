import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import mainActions from 'main/main.actions';
import { connect } from 'react-redux';

const plans = [
  {
    name: 'Plan E',
    cuotaMensual: 1153,
    sumaAsegurada: 54300,
    coberturaAnioVigencia: '2 eventos al 100%',
    antiguedadEquipo: 'sin límite',
    ambitoCobertura: 'Argentina',
    asistencias: {
      emergenciasMedicas: '-',
      cerrajeria: '✅',
      taxiRemis: '✅'
    }
  },
  {
    name: 'Plan F',
    cuotaMensual: 1726,
    sumaAsegurada: 81300,
    coberturaAnioVigencia: '2 eventos al 100%',
    antiguedadEquipo: 'sin límite',
    ambitoCobertura: 'Argentina',
    asistencias: {
      emergenciasMedicas: '-',
      cerrajeria: '✅',
      taxiRemis: '✅'
    }
  },
  {
    name: 'Plan G',
    cuotaMensual: 2304,
    sumaAsegurada: 108500,
    coberturaAnioVigencia: '2 eventos al 100%',
    antiguedadEquipo: 'sin límite',
    ambitoCobertura: 'Argentina y países limítrofes',
    asistencias: {
      emergenciasMedicas: '✅',
      cerrajeria: '✅',
      taxiRemis: '✅'
    }
  }
];

const Plan = (props) => {
  return (
    <>
    {
      plans.map(plan => (
        <div className="w-container sub-card">
          <div className="card-header">
            <h3>{plan.name}</h3>
            <h5>cuota mensual</h5>
            <h2>${plan.cuotaMensual}</h2>
            <Link to='/cotizar/emitir' className="controls link"
            onClick={ ()=>{ props.goto( { name:"Emitir", url:"/cotizar/emitir" } ) } }
            >
              <Button className="primary-button">Emitir</Button>
            </Link>
          </div>
          <div className="c-row"><h3>${plan.sumaAsegurada}</h3></div>
          <div className="c-row"><h4>{plan.coberturaAnioVigencia}</h4></div>
          <div className="c-row"><h4>{plan.antiguedadEquipo}</h4></div>
          <div className="c-row"><h4>{plan.ambitoCobertura}</h4></div>
          <div className="c-row"></div>
          <div className="c-row"><h4>{plan.asistencias.emergenciasMedicas}</h4></div>
          <div className="c-row"><h4>{plan.asistencias.cerrajeria}</h4></div>
          <div className="c-row"><h4>{plan.asistencias.taxiRemis}</h4></div>
        </div>
      ))
    }
    </>
  )
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps= (dispatch)=>{
    
    return{
      goto: (e)=>{dispatch(mainActions.goto(e))},
      backto: (e)=>{dispatch(mainActions.backto(e))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);