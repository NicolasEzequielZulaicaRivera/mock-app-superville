import React from 'react';
import {connect} from 'react-redux';
import './Resultado.scss';

type ResultadoProps = PropsFromRedux & {
    
}

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Resultado = (props) => {
    const {

    } = props;

    return (
        <div>
            <p>{'This is Resultado'}</p>
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

