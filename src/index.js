import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from './components/home/';

const { width, height} = Dimensions.get('window');

class Appventista extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Home />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default Appventista;