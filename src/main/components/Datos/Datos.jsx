import { Button } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Datos.scss';

/*type DatosProps = PropsFromRedux & {
    
}*/

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Datos = (props) => {
    const {

    } = props;

    return (
        <div className="Datos">
            <div className="title"><h3>Cotizar</h3><h5>Tecnologia Protegida</h5></div>
            
            <div className="form w-shadow"><form>
            
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
                <Button className="primary-button" href="/cotizar/resultados" >Cotizar</Button>
            </div>

            </form></div>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Datos.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Datos);

