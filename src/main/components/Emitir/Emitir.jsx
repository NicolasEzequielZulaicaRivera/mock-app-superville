import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Emitir.scss';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import { GetStep } from './Steps';

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

	const handleSiguiente = (e)=>{
		setActiveStep( activeStep + 1 )
	}
	const handleStep = (i)=>{
		setActiveStep(i)
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
						<h4>Plan F</h4>
						<h5>cuota mensual</h5>
						<h2>$1.726</h2>
						<br />
						<h5>mosto asegurado</h5>
						<h3>$81.300</h3>
						<div className="controls" ><Button className="secondary-button" href="/cotizar/resultados">Cambiar</Button></div>
				</div>
				<div className="main-card w-container">
					
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
						<GetStep i={activeStep} />
					</div>

					<div className="controls fx-end">
						<Button className="secondary-button" href="/cotizar/resultados" >Cancelar</Button>
						<Button className="primary-button" onClick={handleSiguiente} >Continuar</Button>
					</div>

				</div>

			</div>

		</div>
	);
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Emitir);

