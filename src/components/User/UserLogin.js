import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from '../../common/index';
import { emailchanged, passwordchanged, LoginUser } from '../../actions/index';

class UserLogin extends Component {
    state={ email: '', password: '' };
    LogRegister() {
        Actions.register({ type: 'reset' });
    }
    LogIn() {
        const { email, password } = this.props;
        this.props.LoginUser({ email, password });
    }
    render() { 
        const 
			{ 
				inputStyle,
				SpecialButton, 
				logoStyle,
				logoContainer,
				RegisterButton,
				registerText,
				registerTextContainer
            } = styles;
        if (this.props.loading) {
            return (
           
                <Card>
                <View style={logoContainer}>
                <Image source={require('../../img/applogo.png')} style={logoStyle} />
                </View>
                <CardSection>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                <TextInput
                placeholder="Mailiniz"
                style={inputStyle}
                value={this.props.email}
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={email => this.props.emailchanged(email)}
                />
                </CardSection>
                <CardSection>
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                <TextInput
                placeholder="Şifreniz"
                style={inputStyle}
                value={this.props.password}
                secureTextEntry
                underlineColorAndroid='transparent'
                onChangeText={password => this.props.passwordchanged(password)}
                />
                </CardSection>
                <View style={SpecialButton}>
                <ActivityIndicator size="large" color="#00ff00" />
                </View>
                <View style={registerTextContainer}>
                <Text style={registerText}>
                Üye değilseniz aşağıdaki buton ile kolayca üye olabilirisiniz.</Text>
                </View> 
                <View style={RegisterButton}>
                <Button onPress={this.LogRegister.bind(this)}>Üye Ol</Button>
                </View> 
                </Card>
               
            );
        }
        return (
           
            <Card>
            <View style={logoContainer}>
            <Image source={require('../../img/applogo.png')} style={logoStyle} />
            </View>
            <CardSection>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
            <TextInput
            placeholder="Mailiniz"
            style={inputStyle}
            value={this.props.email}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={email => this.props.emailchanged(email)}
            />
            </CardSection>
            <CardSection>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
            <TextInput
            placeholder="Şifreniz"
            style={inputStyle}
            value={this.props.password}
            secureTextEntry
            underlineColorAndroid='transparent'
            onChangeText={password => this.props.passwordchanged(password)}
            />
            </CardSection>
            <View style={SpecialButton}>
            <Button onPress={this.LogIn.bind(this)}>Giriş</Button>
            </View>
            <View style={registerTextContainer}>
            <Text style={registerText}>
            Üye değilseniz aşağıdaki buton ile kolayca üye olabilirisiniz.</Text>
            </View> 
            <View style={RegisterButton}>
            <Button onPress={this.LogRegister.bind(this)}>Üye Ol</Button>
            </View> 
            </Card>
           
        );
    }
}
const styles = StyleSheet.create({
    inputStyle: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    SpecialButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    logoStyle: {
      width: 110,
      height: 110,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    succesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    successMessage: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        paddingBottom: 10   
    },
    RegisterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7
    },
    registerTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        paddingBottom: 10,
        marginLeft: 28,
        fontFamily: 'Gravity'

    }

});

const mapStatetoProps = ({ kimlikresponse }) => {
    const { email, password, loading, loadingfail } = kimlikresponse;
    return {
        email,
        password,
        loading,
        loadingfail

    };
};

export default connect(mapStatetoProps, { emailchanged, passwordchanged, LoginUser })(UserLogin);
