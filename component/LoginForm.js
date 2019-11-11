import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from "react-native-web/src/exports/TextInput";

export default class LoginForm extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={'user name'} style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },
    input:{
        height:15,
        backgroundColor:'blue',
        paddingLeft:15,
        marginBottom:20,
    },
    buttonContainer:{
        paddingVertical:10,
        backgroundColor: 'orange',
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'bold',
    },
});
