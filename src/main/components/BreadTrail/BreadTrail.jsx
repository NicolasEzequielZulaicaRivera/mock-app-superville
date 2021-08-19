import React, {Component} from 'react';
import {connect} from 'react-redux';
import './BreadTrail.scss';


/*
 * @description
 */
class BreadTrail extends Component {
    /*
     * @param { Object } props
     */
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    /*
     * @return { * }
     */

    render() {

        let txt = ""

        /*for( let page of this.props.pageHistory ){
            txt += page.name + " > "
        }*/

        console.log("--------------------")
        console.log(this.props.pageHistory)

        return (
            <div>
                {txt}
            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    return {
      pageHistory: state.main.pageHistory,
    }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
    /*login: (e)=>{dispatch(mainActions.login(e))},
    unlog: (e)=>{dispatch(mainActions.unlog(e))},*/
  }
}

BreadTrail.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BreadTrail);

