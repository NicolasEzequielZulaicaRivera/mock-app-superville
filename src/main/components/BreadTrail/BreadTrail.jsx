import { Link } from '@material-ui/core';
import mainActions from 'main/main.actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BreadTrail.scss';


/*
 * @description
 */
const BreadTrail = (props) => {

    const history = props.pageHistory;

    return (
        <div className="BreadTrail">
            {
                history.map( (link,i) => (
                    <div key={i} >
                    {
                    i<history.length-1?(
                        <div>
                            <Link href={link.url} onClick={ ()=>{props.backto(i+1)} } >{link.name}</Link>
                            {" > "}
                        </div>
                    ):(
                        <div>
                            <b>{link.name}</b>
                        </div>
                    )
                    }
                    </div>
                    )
                )
            }
        </div>
    );

};

const mapStateToProps = (state)=>{
    return {
      pageHistory: state.main.pageHistory,
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
      goto: (e)=>{dispatch(mainActions.goto(e))},
      backto: (e)=>{dispatch(mainActions.backto(e))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BreadTrail);

