import React from 'react';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import './Login.scss';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import mainActions,{LOGIN} from 'main/main.actions';


/*type LoginProps = PropsFromRedux & {
    
}*/

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */

const Login = (props) => {

    const handleLogin = (e) => {
      props.login(e)
    }

    const handleRegister = (e) => { // TODO - Should only be a link, i add this to test
      props.unlog(e)
    }

    return (
      <div className="container login-container">
        <div className="login">
        <form onSubmit={ handleLogin }>
          <div className="textInput">
            <label>Usuario{props.isLogged}</label>
            <input type="text" />
          </div>

          <div className="textInput">
            <label>Contraseña</label>
            <input type="text" />
          </div>

          <Link to="/recuperar-contrasena" >Olvide mi contraseña</Link>

          <Button type="submit" fullWidth className="loginButton"  >
            Iniciar Sesion {props.isLogged}
          </Button>
        </form>
        </div>
        <Button type="submit" variant="contained" className="registerButton" onClick={handleRegister}  > Registrarme </Button>
      </div>
      /*
      
      */
    );
};

const mapStateToProps = (state)=>{
	return {
	  isLogged: state.main.isLogged
	}
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
  	login: (e)=>{dispatch(mainActions.login(e))},
    unlog: (e)=>{dispatch(mainActions.unlog(e))},
  }
}

Login.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

