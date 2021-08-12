import React from 'react';
import {connect} from 'react-redux';
import './Login.scss';

/*type LoginProps = PropsFromRedux & {
    
}*/

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Login = (props) => {
    const {

    } = props;

    return (
        <div>
            <p>{'This is Login'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Login.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

