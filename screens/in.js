
import React from 'react';
import { Text, View } from 'react-native';
  
export default class Insta extends React.Component{
    render(){
        return(
            <View style={{flex:1, 
                           justifyContent:'center',
                           alignItem:'center',
                           textAlign:'center',
                           fontSize:25
                           }}>
                <Text>INSTAGRAM</Text>
            </View>
        )
    }
}