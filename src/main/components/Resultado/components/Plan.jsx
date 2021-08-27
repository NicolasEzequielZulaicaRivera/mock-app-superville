import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import mainActions from 'main/main.actions';
import { connect, useSelector } from 'react-redux';
import cotizacionesActions from 'cotizaciones/cotizaciones.actions';

const plans = [
  {
    name: 'Plan E',
    monthlyFee: 1153,
    assuredSum: 54300,
    coverage: '2 eventos al 100%',
    antiquity: 'sin límite',
    ambit: 'Argentina',
    assistance: {
      medicalEmergencies: '-',
      lockSmith: '✅',
      taxi: '✅'
    }
  },
  {
    name: 'Plan F',
    monthlyFee: 1726,
    assuredSum: 81300,
    coverage: '2 eventos al 100%',
    antiquity: 'sin límite',
    ambit: 'Argentina',
    assistance: {
      medicalEmergencies: '-',
      lockSmith: '✅',
      taxi: '✅'
    }
  },
  {
    name: 'Plan G',
    monthlyFee: 2304,
    assuredSum: 108500,
    coverage: '2 eventos al 100%',
    antiquity: 'sin límite',
    ambit: 'Argentina y países limítrofes',
    assistance: {
      medicalEmergencies: '✅',
      lockSmith: '✅',
      taxi: '✅'
    }
  }
];



function calcularSugerido( sumaAsegurar, planes ){

  const sumas = planes.map( plan => plan.assuredSum )

  const absdifs = sumas.map( sum => Math.abs(sum-sumaAsegurar) )

  const absmin = Math.min( ...absdifs )

  const planMasCercano = absdifs.indexOf( absmin )

  return planMasCercano;
}

const Plan = (props) => {

  const planHandler = (indexPlan) => {
    props.goto( { name:"Emitir", url:"/cotizar/emitir" } );
    props.setPlan( plans[indexPlan] );
  }

  const {cotizacionActual} = useSelector( ({cotizaciones}) => cotizaciones);
  const sugerido = calcularSugerido(cotizacionActual.sumToAssure, plans);

  return (
    <>
    {
      plans.map( (plan,i) => (
        <div key={i} className="w-container sub-card">
          { sugerido==i?(<div className="annotation">SUGERIDO</div>):("") }
          <div className="card-header">
            <h3>{plan.name}</h3>
            <h5>cuota mensual</h5>
            <h2>${plan.monthlyFee}</h2>
            <Link 
              to='/cotizar/emitir' 
              className="controls link"
              onClick={ ()=>planHandler(i) }
            >
              <Button className="primary-button">Emitir</Button>
            </Link>
          </div>
          <div className="c-row"><h3>${plan.assuredSum}</h3></div>
          <div className="c-row"><h4>{plan.coverage}</h4></div>
          <div className="c-row"><h4>{plan.antiquity}</h4></div>
          <div className="c-row"><h4>{plan.ambit}</h4></div>
          <div className="c-row"></div>
          <div className="c-row"><h4>{plan.assistance.medicalEmergencies}</h4></div>
          <div className="c-row"><h4>{plan.assistance.lockSmith}</h4></div>
          <div className="c-row"><h4>{plan.assistance.taxi}</h4></div>
        </div>
      ))
    }
    </>
  )
};

const mapStateToProps = (state)=>{
  return {
      datosEmision: state.main.datosEmision,
  }
}

const mapDispatchToProps= (dispatch)=>{
    return{
      goto: (e)=>{dispatch(mainActions.goto(e))},
      backto: (e)=>{dispatch(mainActions.backto(e))},
      setPlan: (e)=>{dispatch(cotizacionesActions.setPlan(e))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);