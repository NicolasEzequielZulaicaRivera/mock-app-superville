import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Navbar.scss';
import Avatar from '@material-ui/core/Avatar';

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

    return (
        <nav className="nav-wrapper">
			<div className="nav-container">
				<Link to="/" className="logo">
                    <img src="logo.png" alt="Superville"  />
                </Link>
				

                {
                    isLogged?(
                        <div className="right userIcon">
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


export default connect(mapStateToProps)(Navbar);

