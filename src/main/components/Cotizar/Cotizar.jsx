import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Cotizar.scss';
import { Link } from 'react-router-dom';
import mainActions from 'main/main.actions';


/*
 * @description
 */
class Cotizar extends Component {

    render() {
        return (
            <div className='Cotizar'>
                <h4>Nueva cotizacion</h4>
                <h5>Tenemos estos productos disponibles</h5>
                <div className="tarjetas">
                    <Link to='/cotizar/datos' className="tarjeta link"
                    onClick={ ()=>{ this.props.goto( { name:"Datos", url:"/cotizar/datos" } ) } } >
                        <img src="/res/tp.svg" alt="" />
                        <h5>Tecnologia Protegida</h5>
                    </Link>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps= (dispatch)=>{
    
    return{
      goto: (e)=>{dispatch(mainActions.goto(e))}
    }
  }

Cotizar.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Cotizar);

