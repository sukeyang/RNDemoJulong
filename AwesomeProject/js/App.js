/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import Util from './util/util'

const instructions = Platform.select({
  ios: 'ios Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'android Double tap R on your keyboard to reload,\nShake or' +
      ' press menu button for dev menu'
});

export default class App extends Component < {} > {

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      pass: ""
    };
  }

  handlePress(event) {
    var content = this.state.account + '   ' + this.state.pass;
    alert(content);
  }

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground
            source={require('./img/loginBack.png')}
            imageStyle={styles.backImageUI}
            style={styles.backImage}
          >
            <Image
              source={require('./img/login_logo.png')}
              style={styles.logoImage}></Image>
            <View style={[styles.buttonUI, styles.buttonUIUser,]}>
              <Image
                style={styles.style_image}
                resizeMode={Image.resizeMode.contain}
                source={require('./img/login_account.png')}/>
              <View style={styles.styleLine}></View>
              <TextInput
                style={styles.style_user_input}
                placeholder='请输入您的帐号'
                autoFocus={true}
                defaultValue='13699125353'
                placeholderTextColor='#cccccc'
                numberOfLines={1}
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({account: text})}
              textAlign='left'/>
            </View>
            <View style={[styles.buttonUI, styles.buttonUIPass,]}>
              <Image
                style={styles.style_image}
                resizeMode={Image.resizeMode.contain}
                source={require('./img/login_password.png')}/>
              <View style={styles.styleLine}></View>
              <TextInput
                style={styles.style_user_input}
                placeholder='请输入您的密码'
                autoFocus={true}
                defaultValue='13699125353'
                placeholderTextColor='#cccccc'
                numberOfLines={1}
                secureTextEntry={true}
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.setState({pass: text})}
              textAlign='left'/>
            </View>
            <TouchableHighlight
              style={styles.styleLogin}
              underlayColor="#F4B803"
              activeOpacity={0.5}
              onPress={this.handlePress.bind(this)}>

              <Text style={styles.styleLoginText}>登录</Text>

            </TouchableHighlight>
          </ImageBackground>

        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  backImageUI: {
    resizeMode: 'cover',
  },
  backImage: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width:Util.width,
    height:Util.height,
  },
  logoImage: {
                marginTop: 114,
                resizeMode: 'contain',
                width: 433/2 *Util.scale,
                height: 168/2 *Util.scale
              },
  userAccountUI: {
    marginLeft: 5,
    height: 45,
    fontSize: 16,
    marginRight: 5,
    color: '#ffffff',
  },
  buttonUI: {
    height: 45,
    width: Util.width - 2 * 15,
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: Util.pixel,
    borderColor: '#E2E2E2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleLogin: {
    marginTop:20,
    height: 45,
    width: Util.width - 2 *15,
    backgroundColor: '#F4B803',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonUIUser: {
    marginTop: 80
  },
  style_image: {
    width: 27,
    height: 17,
  },
  styleLine: {
    marginLeft: 2,
    width: Util.pixel,
    backgroundColor: '#E2E2E2',
    height: 17,
  },
  buttonUIPass: {
    marginTop: 16
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  style_user_input: {
                  marginLeft: 5,
                  width: Util.width - 2 *15 - 60,
                  height: 45,
                  fontSize: 16,
                  marginRight: 5,
                  color: '#333333'
                }
});
