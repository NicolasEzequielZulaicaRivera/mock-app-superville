import { Button } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';
import './Home.scss';

/*type HomeProps = PropsFromRedux & {
    
}*/

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {
    const {

    } = props;

    return (
        <div className='Home empty-home' >
            <h2>¡Hola!</h2>
            <h4>Aca veras el listado de tus cotizaciones</h4>
            <h5>Podes Empezar por:</h5>
            <div className="controls">
            <Button  className="button" href="/cotizar" >Cotizar</Button>
            <Button  className="button"  >Emitir</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Home.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

