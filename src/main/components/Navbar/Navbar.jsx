import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import './Navbar.scss';
import Avatar from '@material-ui/core/Avatar';

/*type NavbarProps = PropsFromRedux & {
    
}*/

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Navbar = (props) => {
    const {

    } = props;

    return (
        <nav className="nav-wrapper">
			<div className="container">
				<Link to="/" className="logo">
                    <img src="logo.png" alt="Superville"  />
                </Link>
				
				<div className="right userIcon">
                    <div className="userName" ><p>user name</p></div>
                    <div><p><Avatar /></p></div>
				</div>
			</div>
		</nav> 
    );
};

Navbar.propTypes = {

};

export default Navbar;

