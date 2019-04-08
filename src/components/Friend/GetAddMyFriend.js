import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { adduserchanged, GetMyNewFriend } from '../../actions/index';

class GetNewFriend extends Component {
    Add() {
       const { user } = this.props;
       this.props.GetMyNewFriend({ user });
    }
    render() {
        const { inputStyle, inputIcon, main, save } = styles;
        return (
                <View style={main}>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                    <TextInput
                    placeholder="Kullanıcı Adı"
                    style={inputStyle}
                    value={this.props.user}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={username => this.props.adduserchanged(username)}
                    />
                    </CardSection>
                    <View style={save}>
                    <Button block info onPress={this.Add.bind(this)}>
                    <Text>Bul</Text>
                    </Button>
                    </View>
                    <View style={save}>
                    <Button block danger onPress={() => Actions.myfriend()}>
                    <Text>Geri Dön</Text>
                    </Button>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        marginTop: 40,
        flex: 1,
        width: 320        
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
      picker: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 250,
        height: 45,
        marginBottom: 15,
        marginLeft: 70
      },
      note: {
        marginLeft: 70,  
      },
      save: {
          marginTop: 10,
          marginLeft: 70
      }
});
const mapStateToProps = ({ getfriend }) => {
       const { user } = getfriend;
       return {
           user
       };
};
export default connect(mapStateToProps, { adduserchanged, GetMyNewFriend })(GetNewFriend);

