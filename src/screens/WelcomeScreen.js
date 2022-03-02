import React from 'react';
import { SafeAreaView, Text, Button, Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';


function WelcomeScreen(navigation) {
    return (
        <SafeAreaView style={stylesBackground.background}>
            <Image
                style={stylesMiddle.middle}
                source={require('../assets/logoSeeThrough.png')}
            ></Image>

            <TouchableOpacity  style={styleLoginButton.loginButton}
               onPress={() =>
                navigation.navigate({LoginScreen})
              }
            >
                <View style={styleLoginButton.loginButton}>
                    <Text style={styleBtn.textButton}>
                        Connexion
                    </Text>
                </View> 
            </TouchableOpacity>
            
            <TouchableOpacity  style={styleLoginButton.registerButton}>
                <View style={styleLoginButton.registerButton}>
                    <Text style={styleBtn.textButton}>
                        Inscription
                    </Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen
    },
   /* Inscription: {
      screen: InscriptionScreen
    }*/
  });
  
  const AppContainer = createAppContainer(AppNavigator);


const stylesBackground = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#87CEEB',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})

const stylesMiddle = StyleSheet.create({
    middle:{
        width: 300,
        height: 300,
        position: 'absolute',
        top: 50
    }
})

const styleLoginButton = StyleSheet.create({
    loginButton:{
        width:'100%',
        height: 100,
        backgroundColor: '#fc5c65',
        justifyContent: 'center'
    },
    registerButton:{
        width: '100%',
        height: 100,
        backgroundColor: "#4ecdc4",
        justifyContent: 'center'
    }
})

const styleBtn = StyleSheet.create({
    textButton:{
        fontSize: 30,
        textAlign: 'center',

    }
})


export default WelcomeScreen;