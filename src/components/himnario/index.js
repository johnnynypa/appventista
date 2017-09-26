import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Text, StyleSheet, Dimensions, Alert } from 'react-native';

const { width, height} = Dimensions.get('window');

class Himnario extends Component{
    render(){
        const stilos = {
            superContainer:{
                height: height-55,
                width: width,
                elevation: 1,
                position: 'absolute',
                backgroundColor: 'green',
                left: this.props.positionLeft
            }
        }

        return(
            <Animated.View style={stilos.superContainer} >
            </Animated.View>
        );
    }
}

Himnario.PropsType = {
    positionLeft: PropTypes.number.isRequired
}

export default Himnario;