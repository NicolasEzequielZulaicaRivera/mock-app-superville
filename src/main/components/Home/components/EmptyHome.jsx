import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import mainActions from 'main/main.actions';
import { connect } from 'react-redux';

const EmptyHome = (props) => {
  useEffect(() => {
    props.backto(1);
  }, [])
  
  return (
    <div className='Home empty-home' >
      <h2>¡Hola!</h2>
      <h4>Aca veras el listado de tus cotizaciones</h4>
      <h5>Podes Empezar por:</h5>
      <div className="controls">
        <Button 
          className="button"
          href="/cotizar" 
          onClick={()=>{ props.goto( { name:"Cotizar", url:"/cotizar" } ) }} 
        >
          Cotizar
        </Button>
        <Button className="button">Emitir</Button>
      </div>
    </div>
  )
}

const mapDispatchToProps= (dispatch)=>{
  return{
    goto: (e)=>{dispatch(mainActions.goto(e))},
    backto: (e)=>{dispatch(mainActions.backto(e))},
  }
}

export default connect(null, mapDispatchToProps)(EmptyHome);