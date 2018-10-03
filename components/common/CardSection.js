import React,{Component} from 'react';
import { View } from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={[styles.containerStyle,props.styles]}>
        {props.children}</View>
    );
};

const styles={
    containerStyle:{
        
        borderBottomWidth:0,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
        
    }
};

export  {CardSection};