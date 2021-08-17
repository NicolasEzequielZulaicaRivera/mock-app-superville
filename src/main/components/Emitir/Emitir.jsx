import { Button } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Emitir.scss';

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Emitir = (props) => {
    const {

    } = props;

    return (
        <div className="c-container">
            <div className="title"><h3>Cotizacion creada</h3></div>

            <div className="main-container">
            
                <div className="data-card w-container">
                    HOLA
                </div>
                <div className="main-card w-container">
                    HOLA
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

