import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { ShareUserMyNote } from '../../actions/index';

class NShare extends Component {
    state = { Id: 0, name: ' ' }
    componentWillMount() {
        const { Id, name } = this.props.sdata;
        this.setState({ Id, name });
    }
    Share() {
       const { name, Id } = this.state;
       this.props.ShareUserMyNote({ name, Id });
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
                    value={this.state.name}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={name => this.setState({ name })}
                    />
                    </CardSection>
                    <View style={save}>
                    <Button block info onPress={this.Share.bind(this)}>
                    <Text>Paylaş</Text>
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

export default connect(null, { ShareUserMyNote })(NShare);
