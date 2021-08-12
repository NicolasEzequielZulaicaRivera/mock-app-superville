import React from 'react';
import {connect} from 'react-redux';
import './Navbar.scss';

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
        <div className="navbar">
            <p>{'This is Navbar'}</p>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;

