import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import './Navbar.scss';
import Avatar from '@material-ui/core/Avatar';
import mainActions from 'main/main.actions';

/*type NavbarProps = PropsFromRedux & {
    
}*/

/*
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Navbar = (props) => {
    
    const isLogged = props.isLogged
    const userName = "John Doe"//useSelector( state => state.userName )

    const avatarHandler = (e) => {
        props.unlog(e)
    }

    return (
        <nav className="nav-wrapper">
			<div className="nav-container">
				<Link to="/" className="logo">
                    <img src="logo.png" alt="Superville"  />
                </Link>
				

                {
                    isLogged?(
                        <div className="right userIcon" title="click to unlog" onClick={avatarHandler}>
                            {userName} <Avatar className="userAvatar" />
				        </div>
                    ):(null)
                }
				
			</div>
		</nav> 
    );
};

Navbar.propTypes = {

};

const mapStateToProps = (state)=>{
	return {
	  isLogged: state.main.isLogged
	}
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        unlog: (e)=>{dispatch(mainActions.unlog(e))},
    }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

