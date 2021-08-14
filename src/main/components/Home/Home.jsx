import React from 'react';
import {connect} from 'react-redux';
import './Home.scss';

type HomeProps = PropsFromRedux & {
    
}

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {
    const {

    } = props;

    return (
        <div>
            <p>{'This is Home'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Home.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

