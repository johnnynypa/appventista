import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(){
        Alert.alert("Hola")
    }

    render(){
        return(
            <TouchableOpacity style={stilos.superContainer} onPress={this.showMenu} >
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: tamano,
        width: tamano,
        top: 4,
        left: 7,
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