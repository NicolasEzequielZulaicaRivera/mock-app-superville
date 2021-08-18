import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Emitir.scss';

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Emitir = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Confirmar Datos','Direccion','Medio de Pago'];

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
                            <StepLabel >{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>

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

