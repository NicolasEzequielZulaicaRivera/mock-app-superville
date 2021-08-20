import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Emitir.scss';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';

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


function step1(){
	return (
		<div className="form"><form>

			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Nombre</label></div>
					<div className="f-row">
						<div className="f-row">
							<input type="text" placeholder="" />
						</div>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Apellido</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Documento de identidad</label></div>
					<div className="f-row">
						<select name="prov">
							<option value="0">Tipo</option>
							<option value="1">DNI</option>
						</select>
						<input type="text" placeholder="Numero" />
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Codigo de identificacion</label></div>
					<div className="f-row">
						<select name="prov">
							<option value="0">Tipo</option>
							<option value="1">COD</option>
						</select>
						<input type="text" placeholder="Numero" />
					</div>
				</div>
			</div>
			<div className="f-label"><label >Correo electronico</label></div>
			<div className="f-row">
				<input type="text" placeholder=""/>
			</div>
			<div className="f-label"><label >Telefono</label></div>
			<div className="f-cols">
				<div className="f-col w30">
					<div className="f-row"><input type="text" placeholder="Cod. area" /></div>
				</div>
				<div className="f-col">
					<div className="f-row"><input type="number" placeholder="Numero" /></div>
				</div>
			</div>
			
		</form></div>
	)
}

function step2(){
	return (
		<div className="form"><form>


			<h5>Direccion del riesgo</h5>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Provincia</label></div>
					<div className="f-row">
						<select name="prov">
							<option value="0">Buenos Aires</option>
							<option value="1">Mendoza</option>
						</select>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Ciudad</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Calle</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
				<div className="f-col w40">
					<div className="f-label"><label >Numero</label></div>
					<div className="f-row">
						<input type="number" placeholder="Numero" />
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col f-cols">
					<div className="f-col">
						<div className="f-label"><label >Piso</label></div>
						<div className="f-row">
							<input type="text" placeholder="" />
						</div>
						<span className="anotation"> Solo si corresponde </span>
					</div>
					<div className="f-col">
						<div className="f-label"><label >Depto</label></div>
						<div className="f-row">
							<input type="text" placeholder="" />
						</div>
					</div>
				</div>		
				<div className="f-col">
					<div className="f-label"><label >Codigo postal(opcional)</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
			</div>

			<div className="f-check-row">
				<input type="checkbox" className="checkbox" />
				Utiliza la misma direccion para el cliente
			</div>

		</form></div>
	)
}

function step3(){
	return (
		<div className="form"><form>

			<div className="f-label"><label> Tipo </label></div>

			<div className="f-row w50">
				<select>
					<option>Debito</option>
					<option>Credito</option>
				</select>
			</div>

			<div className="f-label"><label> Banco </label></div>

			<div className="f-row">
				<select>
					<option>Seleccionar banco</option>
					<option>BBVA</option>
				</select>
			</div>

			<div className="f-label"><label> CBU </label></div>
			<div className="f-row">
				<input type="text" placeholder="" />
			</div>

		</form></div>
	)
}

function getStep( i ) {

	switch( i ){
		case 0 : return step1()
		case 1 : return step2()
		case 2 : return step3()
	}

	return ( "Empty" )
}

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
						{ getStep( activeStep ) }
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

