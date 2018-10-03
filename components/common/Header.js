import React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';


const Header=(props)=>{
    const {textStyle,ViewStyle,shadow}=styles;
    return (<View style={ViewStyle}>
    <TouchableOpacity style={shadow}>
  <Text style={textStyle}>{props.headerText}</Text>
  </TouchableOpacity>
    </View>
    );
};

const styles={
    ViewStyle:{
    backgroundColor:'#42f4e8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,


    },
    textStyle:{
    fontSize:20
    },
    shadow : {
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {width: 0,height: 4}
      }
}

export {Header};