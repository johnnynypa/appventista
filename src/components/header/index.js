import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Toggle from './toggle';

class Header extends Component{
    render(){
        return(
            <View style={stilos.container} >
                <Toggle touch={this.props.touchToggle} />
            </View>
        );
    }
}

const stilos = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        height: 55,
        width: '100%',
        elevation: 2,
        shadowColor:'#000',
        shadowOffset: {width: 3, height: 4},
        shadowRadius: 2
    }
})

Header.PropTypes = {
    touchToggle: PropTypes.func.isRequired
}

export default Header;