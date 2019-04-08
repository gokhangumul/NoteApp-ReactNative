import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { MyProfilRes } from '../../actions/index';

class MyProfil extends Component {
    state = { data: [] };
    componentWillMount() {
        this.props.MyProfilRes();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.prof });
    }
    Update() {
        Actions.profupdate({ datap: this.state.data });
    }
    render() {
        const { 
            main, 
            logoContainer, 
            logoStyle, 
            textContainer, 
            textStyle,
            hrStyle, 
            buttonBox,
            ButtonStyle,
            ButtonText } = styles;
        return (
          <View style={main}>
                <View style={logoContainer}>
                <Image source={require('../../img/profil.png')} style={logoStyle} />
                </View>
                <View style={hrStyle} />
                <View style={textContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/wired/64/000000/circled-user.png' }} />
                <Text style={textStyle}>
                    {this.state.data.Name}
                 </Text>
                </View>
                <View style={hrStyle} />
                <View style={textContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ios/50/000000/username.png' }} />
                <Text style={textStyle}>
                    { this.state.data.UserName}
                </Text>
                </View>
                <View style={hrStyle} />
                <View style={textContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/wired/64/000000/new-post.png' }} />
                <Text style={textStyle}>
                  {this.state.data.Mail}
                </Text>
                </View>
                <View style={hrStyle} />
                <View style={buttonBox}>
                <TouchableOpacity style={ButtonStyle} onPress={() => this.Update()}>
                    <Text style={ButtonText}>Güncelle</Text>
                </TouchableOpacity>
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    logoStyle: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 110
    },
    inputIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center'
    },
    textStyle: {
        marginLeft: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },
    hrStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.4,
        marginTop: 10,
        marginLeft: 100,
        marginRight: 100
    },
    buttonBox: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonStyle: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#78aac3',
        backgroundColor: '#78aac3'
    },
    ButtonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});
const mapStatetoProps = ({ prof }) => {
  return { prof };
};

export default connect(mapStatetoProps, { MyProfilRes })(MyProfil);

