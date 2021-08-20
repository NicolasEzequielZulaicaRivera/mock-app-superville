import { Button } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Resultado.scss';


/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Resultado = (props) => {

    return (
        <div className="c-container">
            <div className="title"><h3>Cotizacion creada</h3></div>
            
            <div className="main-container">
                <div className="w-container main-card">
                    <div className="card-header">
                        <h3>Nro. 123456</h3>
                        <h5>Vigencia 24/5/2021</h5>
                        <div className="controls no-mar"><Button className="secondary-button">Descargar PDF</Button></div>
                    </div>
                    <div className="c-row"><h4>Suma Asegurada</h4></div>
                    <div className="c-row"><h4>Cobertura por año de vigencia</h4></div>
                    <div className="c-row"><h4>Antiguedad del equipo</h4></div>
                    <div className="c-row"><h4>Ambito de cobertura</h4></div>
                    <div className="c-row"><h6>Asistencias:</h6></div>
                    <div className="c-row"><h4>Emergencias medicas</h4></div>
                    <div className="c-row"><h4>Cerrageria</h4></div>
                    <div className="c-row"><h4>Taxi o remis</h4></div>
                </div>

                <div className="w-container sub-card">
                    <div className="card-header">
                        <h3>Plan E</h3>
                        <h5>cuota mensual</h5>
                        <h2>$1.153</h2>
                        <div className="controls"><Button className="primary-button" href="/cotizar/emitir" >Emitir</Button></div>
                    </div>
                    <div className="c-row"><h3>$54.300</h3></div>
                    <div className="c-row"><h4>2 eventos al 100%</h4></div>
                    <div className="c-row"><h4>sin limite</h4></div>
                    <div className="c-row"><h4>Argentina</h4></div>
                    <div className="c-row"> </div>
                    <div className="c-row"><h4>-</h4></div>
                    <div className="c-row"><h4>✅</h4></div>
                    <div className="c-row"><h4>✅</h4></div>
                </div>
                <div className="w-container sub-card">
                    <div className="anotation" >Recomendado</div>
                    <div className="card-header">
                        <h3>Plan F</h3>
                        <h5>cuota mensual</h5>
                        <h2>$1.726</h2>
                        <div className="controls"><Button className="primary-button" href="/cotizar/emitir" >Emitir</Button></div>
                    </div>
                    <div className="c-row"><h3>$81.300</h3></div>
                    <div className="c-row"><h4>2 eventos al 100%</h4></div>
                    <div className="c-row"><h4>sin limite</h4></div>
                    <div className="c-row"><h4>Argentina</h4></div>
                    <div className="c-row"> </div>
                    <div className="c-row"><h4>-</h4></div>
                    <div className="c-row"><h4>✅</h4></div>
                    <div className="c-row"><h4>✅</h4></div>
                </div>
                <div className="w-container sub-card">
                    <div className="card-header">
                        <h3>Plan G</h3>
                        <h5>cuota mensual</h5>
                        <h2>$2.304</h2>
                        <div className="controls"><Button className="primary-button" href="/cotizar/emitir" >Emitir</Button></div>
                    </div>
                    <div className="c-row"><h3>$108.300</h3></div>
                    <div className="c-row"><h4>2 eventos al 100%</h4></div>
                    <div className="c-row"><h4>sin limite</h4></div>
                    <div className="c-row"><h4>Argentina y paises limitrofes</h4></div>
                    <div className="c-row"> </div>
                    <div className="c-row"><h4>✅</h4></div>
                    <div className="c-row"><h4>✅</h4></div>
                    <div className="c-row"><h4>✅</h4></div>
                </div>
            </div>

            <div className="controls fx-end">
                <Button className="secondary-button" href="/cotizar/datos" >Volver a Cotizar</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Resultado.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Resultado);

