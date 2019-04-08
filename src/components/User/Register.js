import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailregchanged, passwordregchanged, nameregchanged, usernameregchanged, UserReg, Login } 
from '../../actions/index';
import { Button, Card, CardSection } from '../../common/index';

class Register extends Component {

    UserRegister() {
        const { Name, Mail, Hash, Username } = this.props;
        this.props.UserReg({ Name, Mail, Hash, Username });
    }
    LogContent() {
        Actions.login({ type: 'reset' });
    }

    render() {
        const 
        { 
            inputStyle,
            SpecialButton, 
            logoStyle,
            logoContainer,
            succesContainer,
            successMessage,
            failcontainer
        } = styles;
        return (
           
            <Card>
            <View style={logoContainer}>
            <Image source={require('../../img/applogo.png')} style={logoStyle} />
            </View>
            <View style={this.props.RegisterOk ? succesContainer : failcontainer}>  
                <Text style={successMessage}>
                {this.props.RegisterOk ? 
                    'Kullanıcı kaydınız başarıyla oluşturulmuştur lütfen giriş yapınız' : ''}
                </Text>
            </View>
            <CardSection>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} />
            <TextInput
            placeholder="Adınız"
            style={inputStyle}
            keyboardType='email-address'
            value={this.props.Name}
            onChangeText={Name => this.props.nameregchanged(Name)}
            />
            </CardSection>
            <CardSection>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} />
            <TextInput
            placeholder="Kullanıcı Adınız"
            style={inputStyle}
            value={this.props.Username}
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            onChangeText={Username => this.props.usernameregchanged(Username)}
            />
            </CardSection>
            <CardSection>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
            <TextInput
            placeholder="Mailiniz"
            style={inputStyle}
            value={this.props.Mail}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={Mail => this.props.emailregchanged(Mail)}
            />
            </CardSection>
            <CardSection>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
            <TextInput
            placeholder="Şifreniz"
            style={inputStyle}
            value={this.props.Hash}
            secureTextEntry
            underlineColorAndroid='transparent'
            onChangeText={Hash => this.props.passwordregchanged(Hash)}
            />
            </CardSection>
            <View style={SpecialButton}>
            <View style={{ marginLeft: 80, marginRight: 5 }}>
            <Button onPress={this.UserRegister.bind(this)}>Üye Ol</Button>
            </View>
            <Button onPress={this.LogContent.bind(this)}>Giriş Yap</Button>
            </View>
            </Card>
          
           
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5       
      },
    subContainerStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 250,
        height: 45,
        marginBottom: 15,
        marginLeft: 70,
        flexDirection: 'row',
        alignItems: 'center'
    },
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
    headerText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 140,
        marginBottom: 5
    },
    SpecialButton: {
        flexDirection: 'row'
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
    failcontainer: {
        height: 0
    },
    successMessage: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        paddingBottom: 10
        
    }

});
const mapStatetoProps = ({ registerresponse }) => {
    const { Name, Username, Mail, Hash, RegisterOk } = registerresponse;
    return {
        Name,
        Username,
        Mail,
        Hash,
        RegisterOk
    };
};

export default connect(mapStatetoProps, 
{ emailregchanged, passwordregchanged, nameregchanged, usernameregchanged, UserReg, Login }
)(Register);

