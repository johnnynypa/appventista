import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StyleSheet } from 'react-native';

class Toggle extends Component{
    render(){
        return(
            <TouchableOpacity style={stilos.superContainer} >
                <View style={stilos.container} >
                    <View style={stilos.line} />
                    <View style={stilos.line} />
                    <View style={stilos.line} />
                </View>
            </TouchableOpacity>
        );
    }
}

const tamano = 47;

const stilos = StyleSheet.create({
    superContainer:{
        elevation: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: tamano,
        width: tamano,
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: tamano/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    line:{
        height: tamano/7,
        width: tamano*0.7,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 5
    }
})

export default Toggle;