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
	fontWeight: '700',
	fontSize: '12pt',
  },
  alttext: {
	color: '#AAA',
	fontWeight: '700',
	fontSize: '12pt',
  },
});


function step1(){
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
			{/*
			
				<div className="f-label"><label>Cliente (opcional)</label></div>
				<div className="f-row">
					<input type="text" placeholder="Nombre"/>
					<input type="text" placeholder="Apellido"/>
				</div>
				<div className="f-cols">
					<div className="f-col">
						<div className="f-label"><label >Documento de identidad</label></div>
						<div className="f-row">
							<select className="w30" name="dnityp">
								<option value="0">Tipo</option>
								<option value="1">DNI</option>
							</select>
							<input type="text" placeholder="Numero" />
						</div>
						<p>+ Agregar otro documento</p>
					</div>
					<div className="f-col">
						<div className="f-label"><label>Codigo de identificacion</label></div>
						<div className="f-row">
							<select className="w30">
								<option value="0">Tipo</option>
								<option value="1">BRC</option>
							</select>
							<input type="text" placeholder="Numero" />
						</div>
					</div>
				</div>
				<div className="f-cols">
					<div className="f-col">
						<div className="f-label"><label>Correo electronico</label></div>
						<div className="f-row">
							<input type="email" name="" id="" />
						</div>

						<div className="f-label"><label>Provincia</label></div>
						<div className="f-row">
							<select name="" id="">
								<option value="">Seleccionar</option>
								<option value="">BsAs</option>
							</select>
						</div>
					</div>
					<div className="f-col">
						<div className="f-label"><label>Telefono (opcional)</label></div>
						<div className="f-row">
							<input type="text" name="" placeholder="Cod. area" className="w30" />
							<input type="text" name="" placeholder="Numero" />
						</div>

						<div className="f-label"><label>Tipo de cotizacion</label></div>
						<div className="f-row">
							<select name="" id="">
								<option value="">Suma asegurada</option>
								<option value="">Suma no asegurada</option>
							</select>
							<input type="number" className="money-input" name="money" placeholder="$ 0" />
						</div>
					</div>
				</div>

				<div className="controls fx-end">
					<Button className="secondary-button" href="/cotizar/resultados" >Cancelar</Button>
					<Button className="primary-button" >Continuar</Button>
				</div>

			*/}

		</form></div>
	)
}

function step2(){
	return (
		<div>
			2nd
		</div>
	)
}

function step3(){
	return (
		<div>
			3rd
		</div>
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

