import React from 'react';
import { StyleSheet, Text, View,Image,KeyboardAvoidingView } from 'react-native';
import require from 'react-native'
import {ImageBackground} from "react-native";

export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source= {require('./../assets/logo.png')}/>
                </View>
                <Text>Simple Login App</Text>
                <View style={styles.myForm}>
                    <Text>
                        Hi
                    </Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        height:100,
        width:100,
    },
    myForm:{
        flex:4,
    }
});
