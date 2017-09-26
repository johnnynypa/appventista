import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toggle from './components/toggle';
import Home from './components/home/';

const { width, height} = Dimensions.get('window');

class Appventista extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Toggle />
                <Home />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default Appventista;