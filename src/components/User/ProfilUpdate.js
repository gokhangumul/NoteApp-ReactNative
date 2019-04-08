import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { UpdatePro } from '../../actions/index';

class UpdateMyProfil extends Component {
    state = { Name: '', UserName: '', Mail: '', Pass: '' };
    componentWillMount() {
        const { Name, UserName, Mail, Pass } = this.props.datap;
        this.setState({ Name, UserName, Mail, Pass });
    }
    Update() {
        const { Name, UserName, Mail, Pass } = this.state;
        this.props.UpdatePro({ Name, UserName, Mail, Pass });
    }
    render() {
        const { inputStyle, inputIcon, main, save, logoContainer, logoStyle } = styles;
        return (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={main}>
                    <View style={logoContainer}>
                    <Image source={require('../../img/profil.png')} style={logoStyle} />
                    </View>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.state.Name}
                    underlineColorAndroid='transparent'
                    onChangeText={Name => this.setState({ Name })}
                    />
                    </CardSection>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.state.UserName}
                    underlineColorAndroid='transparent'
                    onChangeText={UserName => this.setState({ UserName })}
                    />
                    </CardSection>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.state.Mail}
                    underlineColorAndroid='transparent'
                    onChangeText={Mail => this.setState({ Mail })}
                    />
                    </CardSection>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput
                    placeholder="Şifreniz"
                    style={inputStyle}
                    value={this.state.Pass}
                    secureTextEntry
                    underlineColorAndroid='transparent'
                    onChangeText={Pass => this.setState({ Pass })}
                    />
                    </CardSection>
                    <View style={save}>
                    <Button block info onPress={this.Update.bind(this)}>
                    <Text>Güncelle</Text>
                    </Button>
                    </View>
                </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        marginTop: 50,
        flex: 1,
        width: 320,
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
      logoContainer: {
        marginLeft: 160,
        marginBottom: 10
     },
    logoStyle: {
        width: 50,
        height: 50
    },
      save: {
          marginTop: 10,
          marginLeft: 70
      }
});
export default connect(null, { UpdatePro })(UpdateMyProfil);

