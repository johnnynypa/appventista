import { View,
    Text,
    StyleSheet,
    Dimensions,
    Alert,
    Animated
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import Biblia from './components/biblia';
import Himnario from './components/himnario';

const { width, height } = Dimensions.get('window');

class Appventista extends Component{
    constructor(props){
        super(props);
        this.showBiblia = this.showBiblia.bind(this);
        this.showHImnario = this.showHImnario.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            positionLeftBiblia: new Animated.Value(-width),
            positionLeftHimnario: new Animated.Value(width*2),
            positionMenu: new Animated.ValueXY({x: -width, y:-height})
        }
    }

    showMenu(){
        Animated.timing(
            this.state.positionMenu,{
                toValue:{x:0, y:0}
            }
        ).start();
    }

    showBiblia(){
        Animated.timing(
            this.state.positionLeftBiblia,
            {
                toValue: 0
            }
        ).start();
    }

    showHImnario(){
        Animated.timing(
            this.state.positionLeftHimnario,
            {
                toValue: 0
            }
        ).start();
    }

    render(){
        return(
            <View style={styles.container} >
                <Menu position={this.state.positionMenu}/>
                <Header touchToggle={this.showMenu} />
                <View>
                    <Home
                        TouchBiblia={this.showBiblia}
                        TouchHimnario={this.showHImnario}
                        />
                    <Biblia
                        positionLeft={this.state.positionLeftBiblia}
                        />
                    <Himnario
                        positionLeft={this.state.positionLeftHimnario}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default Appventista;