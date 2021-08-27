import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import {connect, useSelector } from 'react-redux';
import './Emitir.scss';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import { GetStep } from './Steps';
import mainActions from 'main/main.actions';
import cotizacionesActions from 'cotizaciones/cotizaciones.actions';
import _ from 'lodash';

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */

const useStepIconStyles = makeStyles({
  root: {
	color: '#eaeaf0',
	display: 'flex',
	height: 22,
	alignItems: 'center',
  },
  active: {
	color: 'var(--main-color)',
  },
  circle: {
	width:30,
	height: 30,
	borderRadius: '50%',
	backgroundColor: 'currentColor',
	display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  completed: {
	width:30,
	height: 30,
	borderRadius: '50%',
	backgroundColor: '#AAA',
	border: '7px solid #dadae0',
	color: '#FFF',
	zIndex: 1,
	fontSize: 18,
	fontWeight: 700,
  },
  text: {
	color: '#FFF',
	// @ts-ignore
	fontWeight: '700',
	fontSize: '12pt',
  },
  alttext: {
	color: '#AAA',
	// @ts-ignore
	fontWeight: '700',
	fontSize: '12pt',
  },
});

const Emitir = (props) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = ['Confirmar Datos','Direccion','Medio de Pago'];
	const {cotizacionActual} = useSelector( ({cotizaciones}) => cotizaciones);
	const plan = cotizacionActual.plan;

	const handleStep = (i)=>{
		setActiveStep(i)
	}

	const submitHandler = (event)=>{
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const cotizacion = {...cotizacionActual};
		// @ts-ignore
		Array.from(formData.entries()).forEach(([key, value]) => {

			_.set( cotizacion, key, value )
		});
		props.modificarCotizacionActual(cotizacion);
		
		setActiveStep( activeStep + 1 )
	}

	const StepIcon = (props)=> {
	  const classes = useStepIconStyles();
	  const { active, completed, icon } = props;

	  return (
		<div
		  className={clsx(classes.root, {
			[classes.active]: active,
		  })}
		>
			{
		  	completed ? 
		  	<Check className={classes.completed} onClick={ ()=>handleStep(icon-1)} /> : 
		  	<div className={classes.circle}>
		  		<div className={active?classes.text:classes.alttext} >{icon}</div>
		  	</div>
			}
		</div>
	  );
	}

	return (
		<div className="c-container">
			<div className="title"><h3>Emitir</h3></div>

			<div className="main-container">
			
				<div className="data-card w-container">
						<h4>{plan.name}</h4>
						<h5>cuota mensual</h5>
						<h2>${plan.monthlyFee}</h2>
						<br />
						<h5>mosto asegurado</h5>
						<h3>${plan.assuredSum}</h3>
						<div className="controls" ><Button className="secondary-button" href="/cotizar/resultados">Cambiar</Button></div>
				</div>
				<div className="main-card w-container">
				<form onSubmit={submitHandler} >
					
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label, index) => {
						return (
							<Step key={label} >
								<StepLabel StepIconComponent={StepIcon} >{label}</StepLabel>
							</Step>
						);
						})}
					</Stepper>

					<div>
						<GetStep i={activeStep} {...cotizacionActual} />
					</div>

					<div className="controls fx-end">
						<Button className="secondary-button" href="/cotizar/resultados" onClick={ ()=>{ props.backto(-1) } } >Cancelar</Button>
						{
							activeStep < 2
							? <Button type="submit" className="primary-button" >Continuar</Button>
							: <Button type="submit" name="issueDate" value='27/08/2021' className="primary-button" >Emitir</Button>
						}
					</div>
					
				</form>
				</div>

			</div>

		</div>
	);
};

const mapDispatchToProps= (dispatch)=>{
    
    return{
      goto: (e)=>{dispatch(mainActions.goto(e))},
      backto: (e)=>{dispatch(mainActions.backto(e))},
      modificarCotizacionActual: (e)=>{dispatch(cotizacionesActions.modificarCotizacionActual(e))},
    }
}

export default connect(null, mapDispatchToProps)(Emitir);

