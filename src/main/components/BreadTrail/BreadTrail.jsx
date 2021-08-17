import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BreadTrail.scss';


/**
 * @description
 */
class BreadTrail extends Component {
    /**
     * @param { Object } props
     */
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    /**
     * @return { * }
     */
    render() {
        return (
            <div>
                {'Inicio > Cotizar > Datos'}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

BreadTrail.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BreadTrail);

