import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableHighlight,
    Text,
    Image,
    Animated,
    StyleSheet,
    Dimensions
} from 'react-native';

import Rectangle from '../../images/Rectangle.png';
import IconBiblia from '../../images/iconBiblia.png';
import IconHimnario from '../../images/iconHimnario.png';

const { width, height} = Dimensions.get('window');

class Home extends Component{
    render(){

        const stilos = StyleSheet.create({
            containerHome:{
                elevation:1,
                height: height-55,
                width: width,
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute'
            },
            btn:{
                width: width*0.5,
                height: height,
                alignItems: 'center'
            },
            txtBtn:{
                color: 'white',
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20
            },
            btnBiblia:{
                backgroundColor: '#1d96f3',
            },
            btnHimnario:{
                backgroundColor: '#000000',
                justifyContent: 'center'
            },
            icon:{
                height: 80,
                width: 80
            },
            IconBiblia:{
                marginTop: height*0.08
            },
            touchable:{
                alignItems: 'center'
            },
            rectangle:{
                marginTop: -55
            }
        })

        return(
            <Animated.View style={stilos.containerHome} >
                {/* BtnBiblia */}
                <Animated.View style={[stilos.btn, stilos.btnBiblia]} >
                    <Image source={Rectangle} style={stilos.rectangle} />
                    <TouchableHighlight onPress={this.props.TouchBiblia} >
                        <View style={stilos.touchable} >
                            <Image source={IconBiblia} style={[stilos.IconBiblia, stilos.icon]}/>
                            <Text style={stilos.txtBtn} > Santa Biblia </Text>
                        </View>
                    </TouchableHighlight>
                </Animated.View>

                {/* BtnHImnario */}
                <Animated.View style={[stilos.btn, stilos.btnHimnario]} >
                    <TouchableHighlight onPress={this.props.TouchHimnario} >
                        <View style={stilos.touchable}>
                            <Image source={IconHimnario} style={stilos.icon} />
                            <Text style={stilos.txtBtn} > Himnario </Text>
                        </View>
                    </TouchableHighlight>
                </Animated.View>

            </Animated.View>
        );
    }
}

export default Home;