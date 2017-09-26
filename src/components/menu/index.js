import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class Menu extends Component{
    render(){
        const stilo = {
            container : {
                backgroundColor: 'yellow',
                height: height,
                width: width,
                top: this.props.position.y,
                left: this.props.position.x,
                position: 'absolute',
                elevation: 3
            }
        }

        return(
            <Animated.View style={stilo.container} >

            </Animated.View>
        );
    }
}

Menu.PropTypes = {
    position : PropTypes.object.isRequired
}

export default Menu;