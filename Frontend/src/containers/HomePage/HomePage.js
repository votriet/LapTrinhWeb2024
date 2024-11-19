import React, { Component } from 'react';

import { connect } from 'react-redux';
import Specialty from './Section/Specialty';
import HomeHeader from './HomeHeader';
class HomePage extends Component {

    render() {
        
        return (
            <div> 
                <HomeHeader/>
                <Specialty/>
                <div style={{height:'300px'}}></div>
                </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
